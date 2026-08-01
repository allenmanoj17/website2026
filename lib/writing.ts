import { cache } from "react";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { toString } from "mdast-util-to-string";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { z } from "zod";
import {
  slugifyHeading,
  writingSeries,
  writingSeriesLabels,
  type WritingArticleSummary,
} from "./writing-shared";

export {
  formatArticleDate,
  writingSeries,
  writingSeriesLabels,
  type WritingArticleSummary,
  type WritingSeries,
} from "./writing-shared";

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "must use YYYY-MM-DD")
  .refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)), "must be a valid date");

const frontmatterSchema = z.object({
  title: z.string().trim().min(1, "is required"),
  description: z
    .string()
    .trim()
    .min(50, "must be at least 50 characters")
    .max(165, "must be 165 characters or fewer")
    .refine(
      (value) =>
        value !==
        "Replace this with a clear 50 to 165 character search and social description.",
      "must replace the generated placeholder",
    ),
  series: z.enum(writingSeries),
  publishedAt: isoDate,
  updatedAt: isoDate,
  draft: z.boolean(),
  featured: z.boolean(),
  keywords: z.array(z.string().trim().min(1)).default([]),
  relatedSlugs: z.array(z.string().trim().min(1)).default([]),
});

export type WritingHeading = {
  depth: 2 | 3;
  text: string;
  id: string;
};

export type WritingArticle = z.infer<typeof frontmatterSchema> & {
  slug: string;
  seriesLabel: string;
  readingMinutes: number;
  headings: WritingHeading[];
  body: string;
  filePath: string;
};

type LoaderOptions = {
  contentDir?: string;
  publicDir?: string;
  includeDrafts?: boolean;
};

const defaultContentDir = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "content",
  "writing",
);
const defaultPublicDir = path.join(/* turbopackIgnore: true */ process.cwd(), "public");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(filePath: string, message: string): never {
  throw new Error(`Writing content error in ${path.relative(process.cwd(), filePath)}: ${message}`);
}

function getStringAttribute(
  node: { attributes?: Array<{ type?: string; name?: string; value?: unknown }> },
  name: string,
) {
  const attribute = node.attributes?.find(
    (item) => item.type === "mdxJsxAttribute" && item.name === name,
  );

  return typeof attribute?.value === "string" ? attribute.value : undefined;
}

function validateLocalImage(filePath: string, publicDir: string, source: string) {
  if (/^(https?:)?\/\//.test(source)) {
    return;
  }

  if (!source.startsWith("/")) {
    fail(filePath, `image "${source}" must use an absolute /public path or an https URL`);
  }

  const resolvedPublicDir = path.resolve(publicDir);
  const resolvedImage = path.resolve(
    /* turbopackIgnore: true */ publicDir,
    source.slice(1),
  );

  if (
    resolvedImage !== resolvedPublicDir &&
    !resolvedImage.startsWith(`${resolvedPublicDir}${path.sep}`)
  ) {
    fail(filePath, `image "${source}" resolves outside the public directory`);
  }

  if (!fs.existsSync(/* turbopackIgnore: true */ resolvedImage)) {
    fail(filePath, `image "${source}" does not exist in public`);
  }
}

function inspectBody(filePath: string, publicDir: string, body: string) {
  const tree = unified().use(remarkParse).use(remarkMdx).use(remarkGfm).parse(body);
  const headings: WritingHeading[] = [];
  const headingIds = new Set<string>();

  visit(tree, (node) => {
    if (node.type === "heading" && (node.depth === 2 || node.depth === 3)) {
      const text = toString(node).trim();
      const id = slugifyHeading(text);

      if (!text || !id) {
        fail(filePath, "level-two and level-three headings must contain readable text");
      }

      if (headingIds.has(id)) {
        fail(filePath, `heading "${text}" creates the duplicate anchor "${id}"`);
      }

      headingIds.add(id);
      headings.push({ depth: node.depth, text, id });
    }

    if (node.type === "image") {
      if (!node.alt?.trim()) {
        fail(filePath, `image "${node.url}" must include alternative text`);
      }
      validateLocalImage(filePath, publicDir, node.url);
    }

    if (
      (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
      (node.name === "Figure" || node.name === "img")
    ) {
      const source = getStringAttribute(node, "src");
      const alt = getStringAttribute(node, "alt");

      if (!source) {
        fail(filePath, `<${node.name}> must include a string src attribute`);
      }
      if (!alt?.trim()) {
        fail(filePath, `<${node.name}> must include meaningful alternative text`);
      }

      validateLocalImage(filePath, publicDir, source);
    }
  });

  const words = toString(tree)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return {
    headings,
    readingMinutes: Math.max(1, Math.ceil(words / 220)),
  };
}

function parseArticle(filePath: string, publicDir: string): WritingArticle {
  const source = fs.readFileSync(/* turbopackIgnore: true */ filePath, "utf8");
  const parsed = matter(source);
  const result = frontmatterSchema.safeParse(parsed.data);

  if (!result.success) {
    const messages = result.error.issues.map((issue) => {
      const field = issue.path.length ? `${issue.path.join(".")} ` : "";
      return `${field}${issue.message}`;
    });
    fail(filePath, messages.join("; "));
  }

  const slug = path.basename(filePath, ".mdx");
  if (!slugPattern.test(slug)) {
    fail(filePath, `filename "${slug}" must be a lowercase kebab-case slug`);
  }

  if (result.data.updatedAt < result.data.publishedAt) {
    fail(filePath, "updatedAt cannot be earlier than publishedAt");
  }

  const body = parsed.content.trim();
  if (!body) {
    fail(filePath, "article body cannot be empty");
  }

  const bodyDetails = inspectBody(filePath, publicDir, body);

  return {
    ...result.data,
    slug,
    seriesLabel: writingSeriesLabels[result.data.series],
    body,
    filePath,
    ...bodyDetails,
  };
}

export function loadWritingArticles(options: LoaderOptions = {}) {
  const contentDir = options.contentDir ?? defaultContentDir;
  const publicDir = options.publicDir ?? defaultPublicDir;
  const includeDrafts = options.includeDrafts ?? false;

  if (!fs.existsSync(/* turbopackIgnore: true */ contentDir)) {
    return [];
  }

  const files = fs
    .readdirSync(/* turbopackIgnore: true */ contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .sort();

  const articles = files.map((file) =>
    parseArticle(path.join(/* turbopackIgnore: true */ contentDir, file), publicDir),
  );
  const seenSlugs = new Map<string, string>();

  for (const article of articles) {
    const normalisedSlug = article.slug.toLowerCase();
    const existing = seenSlugs.get(normalisedSlug);
    if (existing) {
      fail(article.filePath, `slug duplicates ${path.relative(process.cwd(), existing)}`);
    }
    seenSlugs.set(normalisedSlug, article.filePath);
  }

  const articleBySlug = new Map(articles.map((article) => [article.slug, article]));
  for (const article of articles) {
    for (const relatedSlug of article.relatedSlugs) {
      const related = articleBySlug.get(relatedSlug);
      if (!related) {
        fail(article.filePath, `relatedSlugs references missing article "${relatedSlug}"`);
      }
      if (!article.draft && related.draft) {
        fail(article.filePath, `published article cannot link to draft "${relatedSlug}"`);
      }
      if (relatedSlug === article.slug) {
        fail(article.filePath, "an article cannot relate to itself");
      }
    }
  }

  const featured = articles.filter((article) => article.featured && !article.draft);
  if (featured.length > 1) {
    fail(
      featured[1].filePath,
      `only one published article can be featured; also featured: ${featured[0].slug}`,
    );
  }

  return articles
    .filter((article) => includeDrafts || !article.draft)
    .sort(
      (left, right) =>
        right.publishedAt.localeCompare(left.publishedAt) || left.title.localeCompare(right.title),
    );
}

const getCachedArticles = cache((includeDrafts: boolean) =>
  loadWritingArticles({ includeDrafts }),
);

export function getPublishedArticles() {
  return getCachedArticles(false);
}

export function getVisibleArticles() {
  return getCachedArticles(process.env.NODE_ENV !== "production");
}

export function getWritingArticle(slug: string) {
  return getVisibleArticles().find((article) => article.slug === slug);
}

export function getFeaturedArticle(articles: WritingArticle[]) {
  return articles.find((article) => article.featured) ?? articles[0];
}

export function getRelatedArticles(article: WritingArticle, allArticles: WritingArticle[]) {
  const explicit = article.relatedSlugs
    .map((slug) => allArticles.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is WritingArticle => Boolean(candidate));

  const automatic = allArticles.filter(
    (candidate) =>
      candidate.slug !== article.slug &&
      !candidate.draft &&
      !explicit.some((item) => item.slug === candidate.slug),
  );

  return [
    ...explicit,
    ...automatic.filter((candidate) => candidate.series === article.series),
    ...automatic.filter((candidate) => candidate.series !== article.series),
  ].slice(0, 3);
}

export function toArticleSummary(article: WritingArticle): WritingArticleSummary {
  return {
    slug: article.slug,
    title: article.title,
    description: article.description,
    series: article.series,
    seriesLabel: article.seriesLabel,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    draft: article.draft,
    featured: article.featured,
    keywords: article.keywords,
    relatedSlugs: article.relatedSlugs,
    readingMinutes: article.readingMinutes,
  };
}
