import type { Metadata } from "next";
import SectionEye from "@/components/section-eye";
import { articles } from "@/data/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing by Allen Manoj on data systems, AI workflows, dashboard design, analytics engineering, reporting automation, and practical product building.",
  alternates: {
    canonical: "/writing",
  },
};

export default function WritingPage() {
  return (
    <section className="bg-[var(--bg)] px-11 pb-24 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px] min-w-0">
        <div className="mb-16 grid grid-cols-[minmax(0,1fr)_340px] gap-12 max-[820px]:grid-cols-1">
          <div>
            <SectionEye label="Writing" />
            <h1 className="page-title mb-5">
              Writing
            </h1>
            <p className="lede max-w-[700px]">
              Notes on building clearer systems: data pipelines, reporting products, AI workflows,
              and the decisions behind them.
            </p>
            <p className="body-copy mt-5 max-w-[620px]">
              Older long-form posts are below. Newer notes will be shorter, more practical, and
              closer to shipped work.
            </p>
          </div>
          <aside className="self-end rounded bg-[var(--dark)] p-6 shadow-[0_18px_46px_rgba(0,0,0,0.14)]">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
              Current direction
            </div>
            <p className="mt-3 text-[14px] leading-[1.75] text-[var(--dark-text-2)]">
              Practical notes on what shipped, what broke, and how the system changed after real
              constraints showed up.
            </p>
          </aside>
        </div>

        <SectionEye label="Long form" />
        <div className="mb-16 grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex min-h-[210px] flex-col justify-between rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]"
            >
              <div>
                <div className="mb-4 font-mono text-[12px] text-[var(--accent)]">
                  {article.platform}
                </div>
                <h2 className="card-title">
                  {article.title}
                </h2>
              </div>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-all duration-150 ease-in-out hover:opacity-90"
              >
                Read on Medium →
              </a>
            </article>
          ))}
        </div>

        <SectionEye label="Notes" />
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-8 rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)] max-[720px]:grid-cols-1">
          <div>
            <h2 className="section-title">
              Shorter build notes are next.
            </h2>
            <p className="body-copy mt-3 max-w-[680px]">
              Architecture decisions, reporting patterns, AI workflow trade-offs, and lessons from
              independent builds.
            </p>
          </div>
          <a
            href="mailto:allen@allenmanoj.com"
            className="inline-flex w-fit rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
          >
            Start a conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
