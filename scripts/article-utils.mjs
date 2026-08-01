import fs from "node:fs";
import path from "node:path";

export function slugifyArticleTitle(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sydneyDate() {
  const parts = new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Australia/Sydney",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function createArticleTemplate(title, date = sydneyDate()) {
  return `---
title: ${JSON.stringify(title)}
description: "Replace this with a clear 50 to 165 character search and social description."
series: "portfolio-foundations"
publishedAt: "${date}"
updatedAt: "${date}"
draft: true
featured: false
keywords:
  - portfolio
  - personal website
relatedSlugs: []
---

Write a short introduction that answers the article's main question.

## The problem

Write the article using normal Markdown.

## Practical examples

Add examples, screenshots, or diagrams.

## What this changes in practice

Finish with a clear action the reader can take.
`;
}

export function createArticleFile({ title, contentDir, date }) {
  const cleanedTitle = title.trim();
  if (!cleanedTitle) {
    throw new Error("Article title is required.");
  }

  const slug = slugifyArticleTitle(cleanedTitle);
  if (!slug) {
    throw new Error("The title must contain letters or numbers.");
  }

  fs.mkdirSync(contentDir, { recursive: true });
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    throw new Error(`Article already exists: ${filePath}`);
  }

  fs.writeFileSync(filePath, createArticleTemplate(cleanedTitle, date), "utf8");
  return filePath;
}
