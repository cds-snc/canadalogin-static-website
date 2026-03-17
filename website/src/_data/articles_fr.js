module.exports = async function () {
    try {
        const ARTICLES_API_URL = process.env.ARTICLES_API_URL;
        console.log("ARTICLES_API_URL", ARTICLES_API_URL);
        console.log("Fetching FR articles from Articles API");

        const res = await fetch(
            `${ARTICLES_API_URL}/wp-json/wp/v2/pages?per_page=100&lang=fr`
        );

        if (!res.ok) {
            throw new Error(`Articles FR API error: ${res.status}`);
        }
        const pages = await res.json();

        const bySlug = {};

        pages.forEach(page => {
            bySlug[page.slug] = page;
        });
        console.log("French Articles by slug:", Object.keys(bySlug));
        return bySlug;

    } catch (error) {
        console.error("Error fetching French articles:", error);
        throw error;
    }

};