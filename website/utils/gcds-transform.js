const cheerio = require('cheerio');
const { encode } = require('html-entities');

const BUTTON_ROLES = ['secondary', 'start', 'danger'];

function normalizeHref(href, articlesApiUrl) {
    // Links in markdown content may be absolute URLs pointing to the Articles API.
    // Remove the base URL to make them work in the static site context.
    // e.g. https://articles.alpha.canada.ca/canadalogin-connexioncanada/en/users -> /en/users
    if (articlesApiUrl && href?.startsWith(articlesApiUrl)) {
        return href.replace(articlesApiUrl, '');
    }
    return href;
}

function isExternalElement(dom, element) {
    // Consider a link external if it has rel="noopener" or rel="noreferrer".
    // Articles automatically adds rel="noopener noreferrer" to links set to open in a new tab.
    const el = dom(element);
    const rel = (el.attr('rel') || '').split(/\s+/);
    return rel.includes('noreferrer') || rel.includes('noopener');
}

function transformAlerts(dom) {
    dom('details.alert').each(function () {
        const details = dom(this);

        const classes = details.attr('class') || '';
        const typeMatch = classes.match(/alert-([^\s]+)/);
        const type = encode(typeMatch ? typeMatch[1] : 'info');
        const title = encode(details.find('summary h3').text().trim());

        const bodyContent = details
            .clone()
            .children('summary')
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
}

function transformDetails(dom) {
    dom('details.wp-block-details').each(function () {
        const details = dom(this);

        const title = encode(details.find('summary').first().text().trim());

        const bodyContent = details
            .clone()
            .children('summary')
            .remove()
            .end()
            .html()
            .trim();

        const gcdsDetails = dom(
            `<gcds-details details-title="${title}">${bodyContent}</gcds-details>`,
        );

        details.replaceWith(gcdsDetails);
    });
}

function transformButtons(dom, articlesApiUrl) {
    // Must run before anchor transform so button links aren't converted to gcds-link first
    dom('.wp-block-button').each(function () {
        const wrapper = dom(this);
        const anchor = wrapper.find('a.wp-block-button__link');

        if (!anchor.length) return;

        const href = anchor.attr('href');
        const target = anchor.attr('target') || '_self';
        const label = anchor.html();
        const displayHref = normalizeHref(href, articlesApiUrl);

        const wrapperClasses = (wrapper.attr('class') || '').split(/\s+/);
        const anchorClasses = (anchor.attr('class') || '').split(/\s+/);
        const allClasses = [...wrapperClasses, ...anchorClasses];
        const buttonRole = allClasses.find((cls) => BUTTON_ROLES.includes(cls));
        const hasChevron = allClasses.includes('chevron-right');

        const buttonLabel = hasChevron
            ? `${label}&nbsp;<gcds-icon name="chevron-right"></gcds-icon>`
            : label;

        const gcdsButton = dom('<gcds-button></gcds-button>')
            .attr('type', 'link')
            .attr('value', label)
            .attr('href', displayHref)
            .attr('target', target)
            .html(buttonLabel);

        if (buttonRole) {
            gcdsButton.attr('button-role', buttonRole);
        }

        wrapper.replaceWith(gcdsButton);
    });
}

function transformLinks(dom, articlesApiUrl) {
    dom('a').each(function () {
        const anchor = dom(this);

        // Skip anchors already inside gcds components
        if (anchor.closest('gcds-button').length) return;

        const href = anchor.attr('href');
        const displayHref = normalizeHref(href, articlesApiUrl);
        const label = anchor.html();

        const gcdsLink = dom('<gcds-link></gcds-link>')
            .attr('href', displayHref)
            .html(label);

        if (isExternalElement(dom, anchor)) {
            gcdsLink.attr('external', '');
            gcdsLink.attr('target', '_blank');
        }

        anchor.replaceWith(gcdsLink);
    });
}

function transformLists(dom) {
    dom('ul.wp-block-list').each(function () {
        dom(this).removeClass('wp-block-list').addClass('list-disc');
    });

    dom('ol.wp-block-list').each(function () {
        dom(this).removeClass('wp-block-list').addClass('list-decimal');
    });
}

function transformColumns(dom) {
    dom('.wp-block-columns').each((_, columnsBlock) => {
        const columns = dom(columnsBlock).find('.wp-block-column');
        const columnCount = columns.length;

        const desktopColumns = Array(columnCount).fill('1fr').join(' ');
        const tabletColumns = columnCount > 2 ? '1fr 1fr' : desktopColumns;

        const grid = dom('<gcds-grid></gcds-grid>')
            .attr('columns-desktop', desktopColumns)
            .attr('columns-tablet', tabletColumns)
            .attr('columns', '1fr');

        columns.each((_, column) => {
            const columnContent = dom(column).html();
            const gridColumn = dom('<div></div>').html(columnContent);
            grid.append(gridColumn);
        });

        dom(columnsBlock).replaceWith(grid);
    });
}

function gcdsTransform(content, outputPath) {
    if (!outputPath || !outputPath.endsWith('.html')) {
        return content;
    }

    const articlesApiUrl = process.env.ARTICLES_API_URL;
    const dom = cheerio.load(content);

    transformAlerts(dom);
    transformDetails(dom);
    transformButtons(dom, articlesApiUrl);
    transformLinks(dom, articlesApiUrl);
    transformLists(dom);
    transformColumns(dom);

    return dom.html();
}

module.exports = { gcdsTransform };