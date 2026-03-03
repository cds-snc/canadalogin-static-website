module.exports = async function () {
    const res = await fetch(
        "https://articles.alpha.canada.ca/canadalogin-connexioncanada/wp-json/wp/v2/pages?per_page=100&lang=en"
    );
    console.log("Fetching articles from Articles API...");
    const pages = await res.json();

    const bySlug = {};

    pages.forEach(page => {
        bySlug[page.slug] = page;
    });
    console.log(`Fetched ${pages.length} articles from Articles API.`);
    console.log("Articles by slug:", Object.keys(bySlug));
    console.log("Articles by slug:", bySlug);
    return bySlug;
};