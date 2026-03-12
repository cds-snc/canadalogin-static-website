if (!process.env.GITHUB_ACTIONS) {
  // Load environment variables from .env file in local development
  require('dotenv').config();
}

const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const sitemap = require('@quasibit/eleventy-plugin-sitemap');
const moment = require('moment');
const chroma = require('chroma-js');
const markdownIt = require('markdown-it');
const svgContents = require('eleventy-plugin-svg-contents');
const codeClipboard = require('eleventy-plugin-code-clipboard');
const { getLatestCdnVersion } = require('./utils/cdn-info');
const { DateTime } = require('luxon');
const cheerio = require('cheerio');

const contextMenu = require('./utils/context-menu');
const markdownAnchor = require('./utils/anchor');
const slugify = require('./utils/slugify');
const { encode } = require('html-entities');

module.exports = function (eleventyConfig) {
  // Pass through copies

  eleventyConfig.addPassthroughCopy('_redirects');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/styles/style.css');
  eleventyConfig.addPassthroughCopy('./src/styles/prism.css');
  eleventyConfig.addPassthroughCopy({ './src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy('./src/scripts/search.js');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy({ './src/variables/': 'variables' });
  eleventyConfig.addPassthroughCopy({
    './node_modules/@cdssnc/gcds-components/': 'components',
  });
  eleventyConfig.addPassthroughCopy({
    './node_modules/@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css':
      'gcds-css-shortcuts.min.css',
  });
  // Add copy fo a11y testing
  eleventyConfig.addPassthroughCopy('./.pa11yci.json');

  // Plugins

  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(codeClipboard);
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env.GITHUB_ORG
        ? `https://${process.env.GITHUB_ORG}.github.io/${process.env.PATH_PREFIX}`
        : 'http://localhost:8080',
    },
  });

  // Filters

  eleventyConfig.addFilter('sortCollection', arr => {
    // get unsorted items
    return arr.sort(function (a, b) {
      return a.data.eleventyNavigation.order - b.data.eleventyNavigation.order;
    });
  });

  eleventyConfig.addFilter('tabs', (arr, tag) => {
    let pages = {};

    arr.map(page => {
      if (page.data.tags) {
        page.data.tags.map(v => {
          if (v == tag) {
            pages[page.data.tags[1]] = page;
          }
        });
      }
    });

    return pages;
  });

  eleventyConfig.addFilter('getBreadcrumbs', contextMenu.findBreadcrumbEntries);
  eleventyConfig.addFilter('onThisPage', function (nodes) {
    let urls = {};
    for (let key in nodes) {
      urls[nodes[key]] = slugify(nodes[key]);
    }
    return urls;
  });

  /*
   * Filter to sort component navigation items
   */
  eleventyConfig.addFilter('sortAlpha', function (collection) {
    return collection.sort(function (a, b) {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  });

  /* Format last modified date */
  eleventyConfig.addFilter('dateLastModified', function (date) {
    return moment(date).format('YYYY-MM-DD');
  });

  // Token filters
  eleventyConfig.addFilter('contrast', function (value, b = '#FFF') {
    let contrast = chroma.contrast(value, b);
    return Math.floor(contrast * 100) / 100;
  });

  eleventyConfig.addFilter('border', function (value, b = '#FFF') {
    let contrast = chroma.contrast(value, b);
    return contrast > 3 ? b : 'black';
  });

  eleventyConfig.addFilter('hexTo', function (value, mode = 'hsl') {
    return chroma(value).css(mode);
  });

  eleventyConfig.addFilter('fixTokenName', function (value) {
    let fixName = '';
    function onlyCapitalLetters(str) {
      return str.replace(/[^A-Z]+/g, '');
    }

    if (onlyCapitalLetters(value)) {
      fixName = value.replace(
        onlyCapitalLetters(value),
        `-${onlyCapitalLetters(value).toLowerCase()}`,
      );
    } else {
      fixName = value;
    }
    return fixName;
  });

  eleventyConfig.addFilter('dig', function (value, object) {
    let bottom = object;
    value.forEach(element => {
      bottom = bottom[element];
    });
    return bottom;
  });

  eleventyConfig.addFilter('colourFromValue', function (value, tokens) {
    let colourName = '';
    Object.keys(tokens).forEach(colour => {
      Object.keys(tokens[colour]).forEach(weightValue => {
        if (tokens[colour][weightValue]['value'] === value) {
          colourName = `${colour}-${weightValue}`;
        }
      });
    });
    return colourName;
  });

  eleventyConfig.addFilter('encode-html', data => {
    return encode(data);
  });

  eleventyConfig.addFilter('stringify', data => {
    return JSON.stringify(data, null, '\t');
  });

  eleventyConfig.addFilter('startsWith', function (str, prefix) {
    if (typeof str !== 'string') return false;
    return str.startsWith(prefix);
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: false,
  })
    .use(markdownAnchor)
    .use(codeClipboard.markdownItCopyButton);
  markdownLibrary.disable('blockquote');
  markdownLibrary.disable('code');

  // Short codes

  eleventyConfig.addPairedShortcode('viewCode', (content, lang, id, name) => {
    const langStrings = {
      en: {
        code: 'Code display',
        view: 'View code',
        copy: 'Copy code',
      },
      fr: {
        code: 'Affichage du code',
        view: 'Voir le code',
        copy: 'Copier le code',
      },
    };
    if (lang != 'en ' && lang != 'fr') {
      lang = 'en';
    }

    return `
        <div class="code-showcase mb-300">
          <textarea class="showcase text-light mb-300 p-300" id="${id}" rows="8" aria-label="${langStrings[lang].code} - ${name}" tabindex="-1" aria-hidden="true" readonly>${content}</textarea>
          <div>
            <gcds-button
              class="showcase-view-button"
              button-type="button"
              button-role="secondary"
              aria-label="${langStrings[lang].view} - ${name}"
              aria-controls="${id}"
              aria-expanded="false"
            >
              ${langStrings[lang].view}
            </gcds-button>
            <gcds-button
              class="showcase-copy-button"
              button-type="button"
              button-role="secondary"
              lang="${lang}"
            >
              ${langStrings[lang].copy}
            </gcds-button>
          </div>
        </div>
    `;
  });

  // Add shortcode for CDN info
  eleventyConfig.addGlobalData('latestCdnVersion', async () => {
    return await getLatestCdnVersion();
  });

  const website_environment = process.env.WEBSITE_ENVIRONMENT || 'local';
  eleventyConfig.addGlobalData('WEBSITE_ENVIRONMENT', website_environment);

  const google_analytics_id = process.env.GOOGLE_ANALYTICS_ID || '';
  eleventyConfig.addGlobalData('GOOGLE_ANALYTICS_ID', google_analytics_id);

  eleventyConfig.addShortcode('link', function (url, text) {
    return '<gcds-link href="' + url + '">' + text + '</gcds-link>';
  });

  eleventyConfig.addShortcode('linkRef', function (url, ref, text) {
    return '<gcds-link href="' + url + '#' + ref + '">' + text + '</gcds-link>';
  });

  eleventyConfig.addPairedShortcode(
    'componentPreview',
    (children, title, padding = 'px-225 py-300', margin = 'my-600') => {
      const content = children;

      return `
      <div class="${margin} b-sm b-default component-preview">
        <p class="container-full font-semibold px-225 py-150 bb-sm b-default bg-light">
          ${title}
        </p>
        <div class="${padding}">
          ${content}
        </div>
      </div>
    `;
    },
  );

  eleventyConfig.addPairedShortcode(
    'baseComponentPreview',
    (children, title, url) => {
      return `
      <div class="my-600 b-sm b-default component-preview">
        <h2 class="container-full font-text font-semibold px-225 py-150 bb-sm b-default bg-light">
          ${title}
        </h2>
        <div>
          <iframe
            title="${title}"
            src="${url.replace('/base', '/preview')}"
            style="display: block; margin: 0 auto;"
            frameBorder="0"
            width="100%"
            id="component-preview"
          ></iframe>
        </div>
      </div>
    `;
    },
  );

  /*
   * Convert 24 hour time to 12 hour time
   */
  const convertTime = time => {
    return new Date('1970-01-01T' + time + 'Z').toLocaleTimeString('en-US', {
      timeZone: 'UTC',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  /*
   * Convert string from camelCase to kebab-case
   */
  eleventyConfig.addFilter('camelToKebab', function (str) {
    return str
      .replace(/[a-z][A-Z]/g, function (match) {
        return match[0] + '-' + match[1].toLowerCase();
      })
      .toLowerCase();
  });

  // Misc

  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addCollection('sitemap', function (collectionApi) {
    return collectionApi.getAll().map((item, index, all) => {
      return {
        url: process.env.PATH_PREFIX
          ? `${process.env.PATH_PREFIX}${item.url}`
          : item.url,
        date: item.date,
      };
    });
  });

  eleventyConfig.addTransform("gcdsTransform", function (content) {
    if (!this.outputPath || !this.outputPath.endsWith(".html")) {
      return content;
    }

    const articlesApiUrl = process.env.ARTICLES_API;
    const dom = cheerio.load(content);

    function normalizeHref(href) {
      if (articlesApiUrl && href?.startsWith(articlesApiUrl)) {
        return href.replace(articlesApiUrl, "");
      }
      return href;
    }

    function isExternalElement(element) {
      return dom(element).hasClass("external");
    }

    // Convert details.alert blocks to gcds-notice
    dom("details.alert").each(function () {
      const details = dom(this);

      const classes = details.attr("class") || "";
      const typeMatch = classes.match(/alert-([^\s]+)/);
      const type = encode(typeMatch ? typeMatch[1] : "info");
      const title = encode(details.find("summary h3").text().trim());

      const bodyContent = details
        .clone()
        .children("summary")
        .remove()
        .end()
        .html()
        .trim();

      const notice = dom(`
      <section class="mt-300 mb-300">
        <gcds-notice type="${type}" notice-title-tag="h2" notice-title="${title}">
          <gcds-text>${bodyContent}</gcds-text>
        </gcds-notice>
      </section>
    `);

      details.replaceWith(notice);
    });

    // Convert Gutenberg button blocks to gcds-button (must run before anchor transform)
    dom(".wp-block-button").each(function () {
      const anchor = dom(this).find("a.wp-block-button__link");

      if (!anchor.length) return;

      const href = anchor.attr("href");
      const target = anchor.attr("target") || "_self";
      const label = anchor.html();
      const displayHref = normalizeHref(href);

      const gcdsButton = dom("<gcds-button></gcds-button>")
        .attr("type", "link")
        .attr("value", label)
        .attr("href", displayHref)
        .attr("target", target)
        .html(label);

      dom(this).replaceWith(gcdsButton);
    });

    // Convert remaining anchor links to gcds-link
    dom("a").each(function () {
      const anchor = dom(this);

      // Skip anchors already inside gcds components
      if (anchor.closest("gcds-button").length) return;

      const href = anchor.attr("href");
      const displayHref = normalizeHref(href);
      const label = anchor.html();

      const gcdsLink = dom("<gcds-link></gcds-link>")
        .attr("href", displayHref)
        .html(label);

      if (isExternalElement(anchor)) {
        gcdsLink.attr("external", "");
      }

      anchor.replaceWith(gcdsLink);
    });

    // Convert wp-block-list classes to utility classes
    dom("ul.wp-block-list").each(function () {
      dom(this).removeClass("wp-block-list").addClass("list-disc");
    });

    dom("ol.wp-block-list").each(function () {
      dom(this).removeClass("wp-block-list").addClass("list-decimal");
    });

    // Convert wp-block-columns to gcds-grid
    dom(".wp-block-columns").each((_, columnsBlock) => {
      const columns = dom(columnsBlock).find(".wp-block-column");
      const columnCount = columns.length;

      const desktopColumns = Array(columnCount).fill("1fr").join(" ");
      const tabletColumns = columnCount > 2 ? "1fr 1fr" : desktopColumns;

      const grid = dom("<gcds-grid></gcds-grid>")
        .attr("columns-desktop", desktopColumns)
        .attr("columns-tablet", tabletColumns)
        .attr("columns", "1fr");

      columns.each((_, column) => {
        const columnContent = dom(column).html();
        const gridColumn = dom("<div></div>").html(columnContent);
        grid.append(gridColumn);
      });

      dom(columnsBlock).replaceWith(grid);
    });

    return dom.html();
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || '/',
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
