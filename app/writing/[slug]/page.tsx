import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import {
  formatArticleDate,
  getPublishedArticles,
  getRelatedArticles,
  getVisibleArticles,
  getWritingArticle,
} from "@/lib/writing";

const siteUrl = "https://allenmanoj.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisibleArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getWritingArticle(slug);
  if (!article) return {};

  const canonical = `/writing/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: "Allen Manoj", url: siteUrl }],
    alternates: { canonical },
    robots: article.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: `${article.title} — Allen Manoj`,
      description: article.description,
      url: `${siteUrl}${canonical}`,
      siteName: "Allen Manoj",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [siteUrl],
      tags: article.keywords,
      images: [
        {
          url: `${canonical}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${article.title} by Allen Manoj`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [`${canonical}/opengraph-image`],
    },
  };
}

export default async function WritingArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getWritingArticle(slug);
  if (!article) notFound();

  const publishedArticles = getPublishedArticles();
  const related = getRelatedArticles(article, publishedArticles);
  const articleUrl = `${siteUrl}/writing/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        keywords: article.keywords.join(", "),
        author: { "@type": "Person", name: "Allen Manoj", url: siteUrl },
        publisher: { "@type": "Person", name: "Allen Manoj", url: siteUrl },
        mainEntityOfPage: articleUrl,
        image: `${articleUrl}/opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Writing", item: `${siteUrl}/writing` },
          { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-[var(--bg)] px-11 pb-24 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mx-auto max-w-[860px]">
            <Link
              href="/writing"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[12px] text-[var(--accent)] transition-opacity hover:opacity-75"
            >
              <ArrowLeft size={14} strokeWidth={1.8} aria-hidden="true" />
              All writing
            </Link>
            <SectionEye label={article.seriesLabel} />
            <h1 className="page-title mb-6">{article.title}</h1>
            <p className="lede max-w-[800px]">{article.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[11px] text-[var(--text-3)]">
              <span>Allen Manoj</span>
              <span aria-hidden="true">·</span>
              <span>{formatArticleDate(article.publishedAt)}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={13} strokeWidth={1.8} aria-hidden="true" />
                {article.readingMinutes} min read
              </span>
              {article.updatedAt !== article.publishedAt ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>Updated {formatArticleDate(article.updatedAt)}</span>
                </>
              ) : null}
              {article.draft ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-[var(--accent)]">Local draft</span>
                </>
              ) : null}
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-[190px_minmax(0,760px)] justify-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-8">
            {article.headings.length ? (
              <Reveal>
                <nav
                  aria-label="Article contents"
                  className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-auto max-[900px]:static max-[900px]:max-h-none"
                >
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-3)]">
                    In this article
                  </div>
                  <ol className="space-y-2 border-l border-[var(--surface-2)] pl-4">
                    {article.headings
                      .filter((heading) => heading.depth === 2)
                      .map((heading) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className="text-[12px] leading-[1.5] text-[var(--text-3)] transition-colors hover:text-[var(--accent)]"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                  </ol>
                </nav>
              </Reveal>
            ) : null}

            <Reveal className="min-w-0">
              <div
                data-analytics-article-body={article.slug}
                className="[&>p:first-child]:mt-0 [&>p:first-child]:text-[19px] [&>p:first-child]:font-light [&>p:first-child]:leading-[1.75] [&>p:first-child]:text-[var(--text)] max-[640px]:[&>p:first-child]:text-[17px]"
              >
                <MDXRemote
                  source={article.body}
                  components={mdxComponents}
                  options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                />
              </div>
            </Reveal>
          </div>

          {related.length ? (
            <Reveal className="mx-auto mt-20 max-w-[960px] border-t border-[var(--surface-2)] pt-10">
              <SectionEye label="Continue reading" />
              <div className="grid grid-cols-3 gap-3 max-[760px]:grid-cols-1">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/writing/${item.slug}`}
                    data-analytics-event="article_link_clicked"
                    data-analytics-location="article_related"
                    data-analytics-article={item.slug}
                    className="group flex min-h-[180px] flex-col justify-between rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]"
                  >
                    <div>
                      <div className="font-mono text-[10px] text-[var(--accent)]">
                        {item.seriesLabel}
                      </div>
                      <h2 className="mt-3 text-[17px] font-medium leading-[1.4] text-[var(--text)]">
                        {item.title}
                      </h2>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] text-[var(--accent)]">
                      Read next <ArrowRight size={13} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          ) : null}

          <Reveal className="mx-auto mt-14 flex max-w-[960px] flex-wrap items-center justify-between gap-4 rounded bg-[var(--dark)] p-6 text-[var(--dark-text)]">
            <p className="m-0 max-w-[620px] text-[14px] leading-[1.7] text-[var(--dark-text-2)]">
              Have a system, reporting workflow, or product idea that needs clearer structure?
            </p>
            <Link
              href="/contact"
              data-analytics-event="primary_cta_clicked"
              data-analytics-location="article_end"
              data-analytics-destination="contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-4 py-2 text-[13px] font-medium"
            >
              Start a conversation <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </article>
    </>
  );
}
