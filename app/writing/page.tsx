import type { Metadata } from "next";
import { BookOpen, ExternalLink } from "lucide-react";
import PageCta from "@/components/page-cta";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import WritingLibrary from "@/components/writing-library";
import { articles as externalArticles } from "@/data/writing";
import {
  getVisibleArticles,
  toArticleSummary,
} from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Practical writing by Allen Manoj on data systems, AI workflows, portfolio evidence, privacy, analytics, and building useful products.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing — Allen Manoj",
    description:
      "Practical notes on data systems, AI workflows, portfolio evidence, privacy, and building useful products.",
    url: "https://allenmanoj.com/writing",
    siteName: "Allen Manoj",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Writing by Allen Manoj" }],
  },
};

export default function WritingPage() {
  const articles = getVisibleArticles();

  return (
    <>
      <section className="bg-[var(--bg)] px-11 pb-24 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-14 max-w-[780px]">
            <SectionEye label="Writing" />
            <h1 className="page-title mb-5">Writing</h1>
            <p className="lede">
              Practical notes on building systems people can understand, trust, and use.
            </p>
            <p className="body-copy mt-4 max-w-[660px]">
              Data and AI workflows, project evidence, responsible measurement, and lessons from
              turning incomplete ideas into working products.
            </p>
          </Reveal>

          <Reveal className="mb-20">
            <WritingLibrary articles={articles.map(toArticleSummary)} />
          </Reveal>

          <Reveal>
            <SectionEye label="Earlier writing" />
            <div className="divide-y divide-[var(--surface-2)] border-y border-[var(--surface-2)]">
              {externalArticles.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="article_link_clicked"
                  data-analytics-location="writing_external"
                  data-analytics-article={article.title}
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-5 max-[580px]:grid-cols-1 max-[580px]:gap-2"
                >
                  <div>
                    <div className="mb-2 flex items-center gap-2 font-mono text-[11px] text-[var(--text-3)]">
                      <BookOpen size={14} strokeWidth={1.8} aria-hidden="true" />
                      {article.platform} · {article.date}
                    </div>
                    <h2 className="text-[17px] font-medium leading-[1.4] text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                      {article.title}
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] text-[var(--accent)]">
                    Read externally <ExternalLink size={13} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <PageCta
        eyebrow="Have a system in mind?"
        title="Bring the workflow, report, or product idea before it is polished."
        description="Share the context you have now. The rough version is enough to identify a useful next step."
        subject="System conversation from writing"
      />
    </>
  );
}
