"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { ArrowRight, CalendarDays, FileText, Search, X } from "lucide-react";
import {
  formatArticleDate,
  type WritingArticleSummary,
} from "@/lib/writing-shared";
import { trackAnalyticsEvent } from "@/lib/analytics";

export default function WritingLibrary({ articles }: { articles: WritingArticleSummary[] }) {
  const [query, setQuery] = useState("");
  const normalisedQuery = query.trim();
  const featuredArticle = articles.find((article) => article.featured);
  const searchIndex = useMemo(
    () =>
      new Fuse(articles, {
        threshold: 0.38,
        ignoreLocation: true,
        minMatchCharLength: 2,
        keys: [
          { name: "title", weight: 0.5 },
          { name: "keywords", weight: 0.3 },
          { name: "description", weight: 0.15 },
          { name: "seriesLabel", weight: 0.05 },
        ],
      }),
    [articles],
  );
  const visibleArticles = useMemo(() => {
    if (!normalisedQuery) {
      return articles.filter((article) => !article.featured);
    }

    return searchIndex.search(normalisedQuery).map(({ item }) => item);
  }, [articles, normalisedQuery, searchIndex]);
  const lastTrackedSearch = useRef("");

  useEffect(() => {
    if (normalisedQuery.length < 2) {
      lastTrackedSearch.current = "";
      return;
    }

    const signature = `${normalisedQuery.length}:${visibleArticles.length}`;
    const timeout = window.setTimeout(() => {
      if (lastTrackedSearch.current === signature) {
        return;
      }

      lastTrackedSearch.current = signature;
      void trackAnalyticsEvent("writing_search_used", {
        query_length: normalisedQuery.length,
        result_count: visibleArticles.length,
      });
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [normalisedQuery, visibleArticles.length]);

  return (
    <>
      <div className="relative mb-8 max-w-[620px]">
        <Search
          size={18}
          strokeWidth={1.8}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
          aria-hidden="true"
        />
        <label htmlFor="writing-search" className="sr-only">
          Search writing
        </label>
        <input
          id="writing-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles"
          aria-describedby="writing-search-status"
          className="h-12 w-full rounded-sm border border-[var(--surface-2)] bg-[var(--surface)] pl-11 pr-12 text-[15px] text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-3)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-1 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center text-[var(--text-3)] transition-colors hover:text-[var(--accent)]"
            aria-label="Clear search"
            title="Clear search"
          >
            <X size={17} strokeWidth={1.8} aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <p
        id="writing-search-status"
        className="mb-5 font-mono text-[11px] text-[var(--text-3)]"
        aria-live="polite"
      >
        {normalisedQuery
          ? `${visibleArticles.length} ${
              visibleArticles.length === 1 ? "article" : "articles"
            } found`
          : `${articles.length} published ${articles.length === 1 ? "article" : "articles"}`}
      </p>

      {!normalisedQuery && featuredArticle ? (
        <Link
          href={`/writing/${featuredArticle.slug}`}
          data-analytics-event="article_link_clicked"
          data-analytics-location="writing_featured"
          data-analytics-article={featuredArticle.slug}
          className="group mb-14 grid grid-cols-[minmax(0,1fr)_auto] gap-10 rounded bg-[var(--dark)] p-8 text-[var(--dark-text)] shadow-[0_18px_46px_rgba(0,0,0,0.14)] max-[720px]:grid-cols-1 max-[640px]:p-5"
        >
          <article>
            <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] text-[var(--dark-text-2)]">
              <span>{featuredArticle.seriesLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{featuredArticle.readingMinutes} min read</span>
              {featuredArticle.draft ? <span>· Local draft</span> : null}
            </div>
            <h2 className="max-w-[760px] text-[clamp(28px,4vw,48px)] font-light leading-[1.12]">
              {featuredArticle.title}
            </h2>
            <p className="mt-5 max-w-[700px] text-[15px] leading-[1.75] text-[var(--dark-text-2)]">
              {featuredArticle.description}
            </p>
          </article>
          <div className="flex min-w-[150px] flex-col items-end justify-between text-right max-[720px]:min-w-0 max-[720px]:flex-row max-[720px]:items-center max-[720px]:text-left">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] text-[var(--dark-text-2)]">
              <CalendarDays size={14} strokeWidth={1.8} aria-hidden="true" />
              {formatArticleDate(featuredArticle.updatedAt)}
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-[12px]">
              Read featured article
              <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
            </span>
          </div>
        </Link>
      ) : null}

      <div className="eyebrow mb-5">
        {normalisedQuery ? "Search results" : "Latest notes"}
      </div>
      <div className="divide-y divide-[var(--surface-2)] border-y border-[var(--surface-2)]">
        {visibleArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            data-analytics-event="article_link_clicked"
            data-analytics-location="writing_results"
            data-analytics-article={article.slug}
            className="group grid grid-cols-[minmax(0,1fr)_auto] gap-8 py-7 transition-colors hover:text-[var(--accent)] max-[640px]:grid-cols-1 max-[640px]:gap-4 max-[640px]:py-6"
          >
            <article>
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-[var(--text-3)]">
                <span className="inline-flex items-center gap-2 text-[var(--accent)]">
                  <FileText size={14} strokeWidth={1.8} aria-hidden="true" />
                  {article.seriesLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{article.readingMinutes} min read</span>
                {normalisedQuery && article.featured ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Featured</span>
                  </>
                ) : null}
                {article.draft ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Local draft</span>
                  </>
                ) : null}
              </div>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-light leading-[1.25] text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {article.title}
              </h2>
              <p className="body-copy mt-3 max-w-[760px]">{article.description}</p>
            </article>
            <div className="flex min-w-[116px] flex-col items-end justify-between text-right max-[640px]:min-w-0 max-[640px]:flex-row max-[640px]:items-center max-[640px]:text-left">
              <span className="font-mono text-[11px] text-[var(--text-3)]">
                {formatArticleDate(article.updatedAt)}
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[12px] text-[var(--accent)]">
                Read article
                <ArrowRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        ))}
        {visibleArticles.length === 0 ? (
          <div className="py-10">
            <p className="text-[18px] text-[var(--text)]">No articles found.</p>
            <p className="body-copy mt-2">Try a different topic or keyword.</p>
          </div>
        ) : null}
      </div>
    </>
  );
}
