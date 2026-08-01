import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";
import { loadWritingArticles } from "../lib/writing";
import {
  createArticleFile,
  createArticleTemplate,
  slugifyArticleTitle,
} from "../scripts/article-utils.mjs";

let root: string;
let contentDir: string;
let publicDir: string;

function articleSource({
  title = "A valid article",
  description = "A clear article description that is long enough for search and social previews.",
  publishedAt = "2026-07-01",
  updatedAt = "2026-07-01",
  draft = false,
  featured = false,
  relatedSlugs = "[]",
  body = "A direct introduction with enough useful words.\n\n## The problem\n\nA practical explanation.",
} = {}) {
  return `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
series: "portfolio-foundations"
publishedAt: "${publishedAt}"
updatedAt: "${updatedAt}"
draft: ${draft}
featured: ${featured}
keywords:
  - portfolio
relatedSlugs: ${relatedSlugs}
---

${body}
`;
}

function writeArticle(slug: string, source = articleSource()) {
  fs.writeFileSync(path.join(contentDir, `${slug}.mdx`), source, "utf8");
}

beforeEach(() => {
  root = fs.mkdtempSync(path.join(os.tmpdir(), "allen-writing-"));
  contentDir = path.join(root, "content");
  publicDir = path.join(root, "public");
  fs.mkdirSync(contentDir, { recursive: true });
  fs.mkdirSync(publicDir, { recursive: true });
});

afterEach(() => {
  fs.rmSync(root, { recursive: true, force: true });
});

describe("writing content loader", () => {
  test("loads, sorts, extracts headings, and excludes drafts", () => {
    writeArticle("older", articleSource({ publishedAt: "2026-06-01", updatedAt: "2026-06-01" }));
    writeArticle("newer", articleSource({ title: "Newer", publishedAt: "2026-07-01" }));
    writeArticle("draft", articleSource({ title: "Draft", draft: true }));

    const published = loadWritingArticles({ contentDir, publicDir });
    const withDrafts = loadWritingArticles({ contentDir, publicDir, includeDrafts: true });

    assert.deepEqual(
      published.map((article) => article.slug),
      ["newer", "older"],
    );
    assert.equal(withDrafts.length, 3);
    assert.equal(published[0].readingMinutes, 1);
    assert.deepEqual(published[0].headings, [
      { depth: 2, text: "The problem", id: "the-problem" },
    ]);
  });

  test("rejects invalid frontmatter and broken related articles", () => {
    writeArticle("invalid", articleSource({ description: "Too short" }));
    assert.throws(
      () => loadWritingArticles({ contentDir, publicDir }),
      /description must be at least 50 characters/,
    );

    fs.rmSync(path.join(contentDir, "invalid.mdx"));
    writeArticle("broken", articleSource({ relatedSlugs: '["missing"]' }));
    assert.throws(
      () => loadWritingArticles({ contentDir, publicDir }),
      /relatedSlugs references missing article "missing"/,
    );
  });

  test("rejects the generated description placeholder", () => {
    writeArticle(
      "placeholder",
      articleSource({
        description:
          "Replace this with a clear 50 to 165 character search and social description.",
      }),
    );

    assert.throws(
      () => loadWritingArticles({ contentDir, publicDir }),
      /description must replace the generated placeholder/,
    );
  });

  test("allows only one published featured article", () => {
    writeArticle("first", articleSource({ featured: true }));
    writeArticle("second", articleSource({ title: "Second", featured: true }));

    assert.throws(
      () => loadWritingArticles({ contentDir, publicDir }),
      /only one published article can be featured/,
    );
  });

  test("validates local images and alternative text", () => {
    writeArticle(
      "missing-image",
      articleSource({
        body: "Introduction.\n\n## Visual\n\n![Useful description](/writing/missing.webp)",
      }),
    );
    assert.throws(
      () => loadWritingArticles({ contentDir, publicDir }),
      /does not exist in public/,
    );

    fs.rmSync(path.join(contentDir, "missing-image.mdx"));
    fs.writeFileSync(path.join(publicDir, "existing.webp"), "fixture");
    writeArticle(
      "no-alt",
      articleSource({
        title: "No alt",
        body: "Introduction.\n\n## Visual\n\n![](/existing.webp)",
      }),
    );
    assert.throws(
      () => loadWritingArticles({ contentDir, publicDir }),
      /must include alternative text/,
    );
  });
});

describe("article generator", () => {
  test("creates a safe slug and draft template without overwriting", () => {
    assert.equal(
      slugifyArticleTitle("What Every Portfolio Should Communicate"),
      "what-every-portfolio-should-communicate",
    );
    assert.match(createArticleTemplate("Test article", "2026-07-31"), /draft: true/);

    const filePath = createArticleFile({
      title: "What Every Portfolio Should Communicate",
      contentDir,
      date: "2026-07-31",
    });

    assert.equal(
      path.basename(filePath),
      "what-every-portfolio-should-communicate.mdx",
    );
    assert.match(fs.readFileSync(filePath, "utf8"), /publishedAt: "2026-07-31"/);
    assert.throws(
      () =>
        createArticleFile({
          title: "What Every Portfolio Should Communicate",
          contentDir,
          date: "2026-07-31",
        }),
      /already exists/,
    );
  });
});
