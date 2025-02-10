import { DateTime } from "luxon";

export default function (eleventyConfig) {
    console.log("new Date().toISOString() ", new Date().toISOString())
    const dateObj = new Date();
    const displayDate = DateTime.fromJSDate(dateObj).toLocaleString();
    console.log("new Date().toLocaleString() ", displayDate)

    return new Date().toISOString()  // ISO format timestamp
};
