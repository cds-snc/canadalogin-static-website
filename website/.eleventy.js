import { HtmlBasePlugin } from "@11ty/eleventy";

import pluginFilters from "./src/_config/filters.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {

    // Copy the contents of the `public` folder to the output folder
    // For example, `./public/css/` ends up in `_site/css/`
    eleventyConfig
        .addPassthroughCopy("./src/style.css")
        .addPassthroughCopy("./src/assets")

    // Watch images for the image pipeline.
    eleventyConfig.addWatchTarget("./src/**/*.{svg,webp,png,jpg,jpeg,gif}");

    eleventyConfig.addPlugin(HtmlBasePlugin);

    // Filters
    eleventyConfig.addPlugin(pluginFilters);

    eleventyConfig.addShortcode("currentBuildDate", () => {
        return (new Date()).toISOString();
    });
};

export const config = {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
        "md",
        "njk",
        "html",
        "liquid",
        "11ty.js",
    ],

    dir: {
        input: "./src",
        // includes: "../_includes",  // default: "_includes" (`input` relative)
        // data: "../_data",          // default: "_data" (`input` relative)
        output: "./public"
    },
};