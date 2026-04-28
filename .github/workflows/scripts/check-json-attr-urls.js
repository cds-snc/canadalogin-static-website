#!/usr/bin/env node
/**
 * Extract and validate URLs embedded in JSON attributes on web components
 * (e.g. <gcds-footer sub-links="{ &quot;label&quot;: &quot;/url&quot; }">).
 *
 * These URLs are invisible to standard link checkers like lychee.
 *
 * Usage: node check-json-attr-urls.js <site-dir>
 */

const fs = require('fs');
const path = require('path');

const JSON_ATTRS = ['sub-links', 'contextual-links'];
const args = process.argv.slice(2);
const LOCAL_ONLY = args.includes('--local-only');
const SITE_DIR = args.find((a) => !a.startsWith('--')) || 'website/_site';

const ATTR_REGEX = new RegExp(
    `(?:${JSON_ATTRS.join('|')})="([^"]*)"`,
    'g',
);

function findHtmlFiles(dir) {
    const results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findHtmlFiles(fullPath));
        } else if (entry.name.endsWith('.html')) {
            results.push(fullPath);
        }
    }
    return results;
}

function decodeEntities(str) {
    return str
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#39;/g, "'");
}

function extractUrls(html, filePath) {
    const urls = [];
    let match;
    while ((match = ATTR_REGEX.exec(html)) !== null) {
        const decoded = decodeEntities(match[1]);
        let obj;
        try {
            obj = JSON.parse(decoded);
        } catch {
            try {
                obj = JSON.parse(decoded.replace(/(\w[\w-]*)\s*:/g, '"$1":'));
            } catch {
                continue;
            }
        }
        for (const [label, url] of Object.entries(obj)) {
            if (typeof url === 'string') {
                urls.push({ url: url.trim(), label, file: filePath });
            }
        }
    }
    return urls;
}

function checkLocalUrl(url, siteDir) {
    const urlPath = url.split('#')[0];
    const fsPath = path.join(siteDir, urlPath);

    if (
        fs.existsSync(fsPath) &&
        fs.statSync(fsPath).isDirectory() &&
        fs.existsSync(path.join(fsPath, 'index.html'))
    ) {
        return { ok: true };
    }
    if (fs.existsSync(fsPath) && fs.statSync(fsPath).isFile()) {
        return { ok: true };
    }
    return { ok: false, error: 'File not found' };
}

async function checkExternalUrl(url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
        const res = await fetch(url, {
            method: 'HEAD',
            signal: controller.signal,
            redirect: 'follow',
        });
        clearTimeout(timeout);
        if (res.ok || res.status === 405) {
            return { ok: true };
        }
        // Retry with GET if HEAD was rejected
        if (res.status >= 400) {
            const controller2 = new AbortController();
            const timeout2 = setTimeout(() => controller2.abort(), 15000);
            try {
                const res2 = await fetch(url, {
                    method: 'GET',
                    signal: controller2.signal,
                    redirect: 'follow',
                });
                clearTimeout(timeout2);
                return res2.ok
                    ? { ok: true }
                    : { ok: false, error: `HTTP ${res2.status}` };
            } catch {
                clearTimeout(timeout2);
                return { ok: false, error: `HTTP ${res.status}` };
            }
        }
        return { ok: false, error: `HTTP ${res.status}` };
    } catch (err) {
        clearTimeout(timeout);
        if (err.name === 'AbortError') {
            return { ok: false, error: 'Timeout' };
        }
        return { ok: false, error: err.message };
    }
}

async function main() {
    if (!fs.existsSync(SITE_DIR)) {
        console.error(`Error: '${SITE_DIR}' does not exist`);
        process.exit(1);
    }

    const htmlFiles = findHtmlFiles(SITE_DIR);
    const allUrls = [];

    for (const file of htmlFiles) {
        const html = fs.readFileSync(file, 'utf-8');
        allUrls.push(...extractUrls(html, file));
    }

    // Deduplicate by URL, keep first occurrence for reporting
    const seen = new Map();
    for (const entry of allUrls) {
        if (!seen.has(entry.url)) {
            seen.set(entry.url, entry);
        }
    }
    const uniqueUrls = Array.from(seen.values());

    console.log(`Found ${uniqueUrls.length} unique URLs in JSON attributes`);

    const errors = [];

    for (const { url, label, file } of uniqueUrls) {
        const relFile = path.relative(process.cwd(), file);
        if (url.startsWith('http://') || url.startsWith('https://')) {
            if (LOCAL_ONLY) continue;
            const result = await checkExternalUrl(url);
            if (!result.ok) {
                errors.push({ url, label, file: relFile, error: result.error });
            }
        } else if (url.startsWith('/')) {
            const result = checkLocalUrl(url, SITE_DIR);
            if (!result.ok) {
                errors.push({ url, label, file: relFile, error: result.error });
            }
        }
    }

    if (errors.length === 0) {
        console.log('All URLs in JSON attributes are valid.');
        process.exit(0);
    }

    console.error(`\n${errors.length} broken URL(s) found in JSON attributes:\n`);
    console.error('| URL | Label | File | Error |');
    console.error('|-----|-------|------|-------|');
    for (const { url, label, file, error } of errors) {
        console.error(`| ${url} | ${label} | ${file} | ${error} |`);
    }
    process.exit(1);
}

main();
