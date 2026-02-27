module.exports = async function () {
    const res = await fetch(
        "https://articles.alpha.canada.ca/canadalogin-connexioncanada/wp-json/wp/v2/pages/2"
    );
    const data = await res.json();
    console.log("data", data);
    return data;
};