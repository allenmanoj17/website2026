import { getPublishedArticles } from "../lib/writing";

const articles = getPublishedArticles();
console.log(`Validated ${articles.length} published writing article${articles.length === 1 ? "" : "s"}.`);
