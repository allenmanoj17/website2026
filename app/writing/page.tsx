import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Mail, PenLine } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import { articles, writingNotes } from "@/data/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing by Allen Manoj on data systems, AI workflows, dashboard design, analytics engineering, reporting automation, and practical product building.",
  alternates: {
    canonical: "/writing",
  },
  openGraph: {
    title: "Writing — Allen Manoj",
    description:
      "Writing by Allen Manoj on data systems, AI workflows, dashboard design, analytics engineering, reporting automation, and practical product building.",
    url: "https://allenmanoj.com/writing",
    siteName: "Allen Manoj",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Writing by Allen Manoj",
      },
    ],
  },
};

export default function WritingPage() {
  return (
    <section className="bg-[var(--bg)] px-11 pb-24 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px] min-w-0">
        <div className="mb-16 grid grid-cols-[minmax(0,1fr)_minmax(260px,340px)] gap-12 max-[860px]:grid-cols-1 max-[640px]:mb-12">
          <Reveal>
            <SectionEye label="Writing" />
            <h1 className="page-title mb-5">
              Writing
            </h1>
            <p className="lede max-w-[700px]">
              Notes on building clearer systems: data pipelines, reporting products, AI workflows,
              and the decisions behind them.
            </p>
            <p className="body-copy mt-5 max-w-[620px]">
              Current notes expand the judgement behind the homepage point of view: visibility,
              dashboard design, and operational AI workflows.
            </p>
          </Reveal>
          <Reveal delay={120} className="self-end rounded bg-[var(--dark)] p-6 shadow-[0_18px_46px_rgba(0,0,0,0.14)]">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
              <PenLine size={15} strokeWidth={1.8} aria-hidden="true" />
              <span>Current direction</span>
            </div>
            <p className="mt-3 text-[14px] leading-[1.75] text-[var(--dark-text-2)]">
              Practical notes on what shipped, what broke, and how the system changed after real
              constraints showed up.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <SectionEye label="Current notes" />
        </Reveal>
        <div className="mb-16 grid grid-cols-3 gap-5 max-[1040px]:grid-cols-2 max-[680px]:grid-cols-1">
          {writingNotes.map((note, index) => (
            <Reveal key={note.slug} delay={index * 80}>
              <article className="flex min-h-[260px] flex-col justify-between rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                <div>
                  <div className="mb-4 flex items-center gap-2 font-mono text-[12px] text-[var(--accent)]">
                    <FileText size={15} strokeWidth={1.8} aria-hidden="true" />
                    Note · {note.date}
                  </div>
                  <h2 className="card-title">{note.title}</h2>
                  <p className="body-copy mt-4">{note.description}</p>
                </div>
                <Link
                  href={`/writing/${note.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-all duration-150 ease-in-out hover:opacity-90"
                >
                  Read note <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <SectionEye label="Older long form" />
        </Reveal>
        <div className="mb-16 grid grid-cols-3 gap-5 max-[1040px]:grid-cols-2 max-[680px]:grid-cols-1">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 80}>
              <article className="flex min-h-[210px] flex-col justify-between rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                <div>
                  <div className="mb-4 flex items-center gap-2 font-mono text-[12px] text-[var(--accent)]">
                    <BookOpen size={15} strokeWidth={1.8} aria-hidden="true" />
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
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-all duration-150 ease-in-out hover:opacity-90"
                >
                  Read on Medium <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-8 rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)] max-[720px]:grid-cols-1 max-[520px]:p-5">
          <div>
            <h2 className="section-title">
              More notes will follow shipped work.
            </h2>
            <p className="body-copy mt-3 max-w-[680px]">
              Architecture decisions, reporting patterns, AI workflow trade-offs, and lessons from
              independent builds.
            </p>
          </div>
          <a
            href="mailto:allen@allenmanoj.com"
            className="inline-flex w-fit items-center gap-2 rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
          >
            <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
            Start a conversation <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
