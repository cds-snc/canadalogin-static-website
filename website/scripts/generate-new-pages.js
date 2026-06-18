#!/usr/bin/env node
/**
 * Generate a pair of EN/FR markdown pages.
 *
 * Usage:
 *   node scripts/generate-new-pages.js \
 *     --en-title "Forgot your email" \\
 *     --fr-title "Adresse courriel oubliée" \
 *     --en-parent "troubleSigningInEn" \
 *     --fr-parent "troubleSigningInFR" \
 *     --en-slug "forgot-your-email" \
 *     --fr-slug "adresse-courriel-oubliee" \
 *     --en-dir "src/en/users/trouble-signing-in" \
 *     --fr-dir "src/fr/utilisateurs/problemes-connexion"
 */

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert a kebab-case slug to camelCase, e.g. "forgot-your-email" → "forgotYourEmail" */
function toCamelCase(slug) {
  return slug
    .toLowerCase()
    .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/** Strip all non-alphanumeric characters to produce a translationKey */
function toTranslationKey(slug) {
  return slug.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const value = argv[i + 1];
      if (!value || value.startsWith('--')) {
        args[key] = '';
      } else {
        args[key] = value;
        i++;
      }
    }
  }
  return args;
}

function required(args, key) {
  if (!args[key]) {
    console.error(`Missing required argument: --${key}`);
    process.exit(1);
  }
  return args[key];
}

// ---------------------------------------------------------------------------
// Template builders
// ---------------------------------------------------------------------------

function buildEnFrontmatter({ title, translationKey, navKey, parent, slug }) {
  return `---
title: ${title}
translationKey: ${translationKey}
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: ${navKey}
  title: ${title}
  locale: en
  parent: ${parent}
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['${slug}'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
`;
}

function buildFrFrontmatter({ title, translationKey, navKey, parent, slug }) {
  return `---
title: ${title}
translationKey: ${translationKey}
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: ${navKey}
  title: ${title}
  locale: fr
  parent: ${parent}
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['${slug}'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const args = parseArgs(process.argv.slice(2));

const enTitle  = required(args, 'en-title');
const frTitle  = required(args, 'fr-title');
const enParent = required(args, 'en-parent');
const frParent = required(args, 'fr-parent');
const enSlug   = required(args, 'en-slug');
const frSlug   = required(args, 'fr-slug');

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
if (!slugPattern.test(enSlug) || !slugPattern.test(frSlug)) {
  console.error('Slugs must be kebab-case (lowercase a-z, 0-9, and hyphens only).');
  process.exit(1);
}

const enDir    = required(args, 'en-dir');
const frDir    = required(args, 'fr-dir');

// Derived values
const translationKey = toTranslationKey(enSlug);           // e.g. forgotyouremail
const enNavKey       = toCamelCase(enSlug) + 'En';         // e.g. forgotYourEmailEn
const frNavKey       = toCamelCase(enSlug) + 'FR';         // e.g. forgotYourEmailFR

// File paths
const enFile = path.join(enDir, `${enSlug}.md`);
const frFile = path.join(frDir, `${frSlug}.md`);

// Create directories if needed
fs.mkdirSync(enDir, { recursive: true });
fs.mkdirSync(frDir, { recursive: true });

// Guard against accidental overwrite
if (fs.existsSync(enFile)) {
  console.error(`File already exists: ${enFile}`);
  process.exit(1);
}
if (fs.existsSync(frFile)) {
  console.error(`File already exists: ${frFile}`);
  process.exit(1);
}

fs.writeFileSync(enFile, buildEnFrontmatter({ title: enTitle, translationKey, navKey: enNavKey, parent: enParent, slug: enSlug }));
fs.writeFileSync(frFile, buildFrFrontmatter({ title: frTitle, translationKey, navKey: frNavKey, parent: frParent, slug: frSlug }));

console.log(`Created EN: ${enFile}`);
console.log(`Created FR: ${frFile}`);
console.log();
console.log(`translationKey : ${translationKey}`);
console.log(`EN nav key     : ${enNavKey}`);
console.log(`FR nav key     : ${frNavKey}`);
