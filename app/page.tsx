import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import ContactSection from "@/components/contact-section";
import ProjectVisual from "@/components/project-visual";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import ServiceRow from "@/components/service-row";
import { ButtonLink, panelClassName } from "@/components/ui-primitives";
import { featuredProjects, services, type Project } from "@/data/site";
import {
  getFeaturedArticle,
  getPublishedArticles,
} from "@/lib/writing";

export const metadata: Metadata = {
  title: {
    absolute: "Allen Manoj — Data & AI Systems Builder in Sydney",
  },
  description:
    "Allen Manoj builds pipelines, dashboards, and AI workflows that replace manual reporting, surface account risk, and give teams a clearer next move.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Allen Manoj — Data & AI Systems Builder",
    description:
      "Pipelines, dashboards, and AI workflows built to replace manual work and clarify the next decision.",
    url: "https://allenmanoj.com",
    siteName: "Allen Manoj",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Allen Manoj — Data & AI Systems Builder",
      },
    ],
  },
};

const helpItems = services.map((service) => ({
  ...service,
  description:
    {
      "01": "Bring reporting out of exports and into one dependable place.",
      "02": "Stop rebuilding the same weekly report from scratch.",
      "03": "Spot accounts losing momentum before the signal gets buried.",
      "04": "Put checks, context, and a human handoff around an AI task.",
      "05": "Give a useful interface to data work that currently lives in scripts.",
    }[service.number] ?? service.description,
  usefulWhen:
    {
      "01": "Useful when someone still starts Monday by downloading CSVs.",
      "02": "Useful when the weekly report takes longer to explain than to read.",
      "03": "Useful when product, CRM, and billing signals disagree about who needs attention.",
      "04": "Useful when an AI demo needs a dependable workflow before it can be trusted.",
      "05": "Useful when the underlying data is useful but nobody else can use it without help.",
  }[service.number] ?? "",
}));

function HomeProjectCard({
  project,
  index,
  wide = false,
}: {
  project: Project;
  index: number;
  wide?: boolean;
}) {
  return (
    <article
      className={panelClassName(
        "dark",
        `motion-project-card grid h-full overflow-hidden shadow-[0_18px_46px_rgba(0,0,0,0.16)] ${
          wide
            ? "grid-cols-[minmax(0,0.9fr)_minmax(300px,1.1fr)] max-[780px]:grid-cols-1"
            : "grid-rows-[auto_1fr]"
        }`,
      )}
    >
      {!wide ? (
        <div className="px-5 pt-5">
          <ProjectVisual project={project} tone="dark" compact />
        </div>
      ) : null}
      <div className="flex min-w-0 flex-col justify-between p-7 max-[640px]:p-5">
        <div>
        <div className="mb-5 flex items-center justify-between gap-4 font-mono text-[11px] text-[var(--dark-text-2)]">
          <span>{String(index).padStart(2, "0")}</span>
          <span className="text-right">
            {project.classification}
            {project.publicStatus ? ` · ${project.publicStatus}` : ""}
          </span>
        </div>
        <h3 className="text-[clamp(22px,2.4vw,32px)] font-light leading-[1.15] text-[var(--dark-text)]">
          {project.name}
        </h3>
        <p className="mt-4 text-[15px] font-medium leading-[1.6] text-[var(--dark-text)]">
          {project.outcome}
        </p>

        <p
          className="mt-6 border-t border-[rgba(255,247,238,0.14)] pt-5 font-mono text-[11px] leading-[1.65] text-[var(--dark-text-2)]"
          aria-label={`${project.name} system flow`}
        >
          Starts with {project.flow[0]}. Works through {project.flow.slice(1, -1).join(", ")}. Leaves the team with {project.flow.at(-1)}.
        </p>
      </div>
        <Link
          href={project.href}
          data-analytics-event="project_link_clicked"
          data-analytics-location="home_selected_systems"
          data-analytics-project={project.slug}
          data-analytics-link-type="case_study"
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
        >
          View case study <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </div>
      {wide ? (
        <div className="self-stretch p-5 pl-0 max-[780px]:p-5 max-[780px]:pt-0">
          <ProjectVisual project={project} tone="dark" compact />
        </div>
      ) : null}
    </article>
  );
}

export default function Home() {
  const [lens, ...supportingProjects] = featuredProjects;
  const writing = getPublishedArticles();
  const featuredNote = getFeaturedArticle(writing)!;
  const otherNotes = writing.filter((article) => article.slug !== featuredNote.slug).slice(0, 2);

  return (
    <>
      <section className="flex min-h-svh items-center bg-[var(--bg)] px-11 pb-16 pt-32 max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-28 max-[640px]:min-h-[92svh] max-[420px]:px-4">
        <div className="mx-auto w-full max-w-[1140px]">
          <div className="min-w-0 max-w-[940px]">
            <Reveal className="mb-7 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)]">
              Independent data and AI systems builder
            </Reveal>
            <Reveal delay={90}>
              <h1 className="hero-statement mb-6 max-w-[940px]">
                I turn fragmented data into decision systems people trust.
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="body-copy mb-8 max-w-[780px] text-[18px] max-[640px]:text-[16px]">
                I design and build analytics infrastructure, revenue intelligence and applied AI
                workflows, from source systems and data contracts to monitoring and operational
                interfaces.
              </p>
            </Reveal>
            <Reveal delay={250} className="mb-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href="/contact"
                data-analytics-event="primary_cta_clicked"
                data-analytics-location="home_hero"
                data-analytics-destination="contact"
              >
                Start a conversation <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="#systems"
                tone="light"
                data-analytics-event="primary_cta_clicked"
                data-analytics-location="home_hero"
                data-analytics-destination="selected_systems"
              >
                View selected work
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="systems"
        data-analytics-section="selected_systems"
        className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4"
      >
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEye label="Selected systems" dark />
              <h2 className="section-title section-title-dark max-w-[760px]">
                Proof, not a pile of projects.
              </h2>
              <p className="body-copy body-copy-dark mt-3 max-w-[620px]">
                Each build starts with an awkward question: what changed, what is being missed,
                and what should happen next?
              </p>
            </div>
            <ButtonLink href="/work">View all work →</ButtonLink>
          </Reveal>

          <Reveal>
            <article
              className={panelClassName(
                "dark",
                "mb-5 grid grid-cols-[minmax(0,1fr)_minmax(260px,390px)] gap-8 p-8 shadow-[0_18px_46px_rgba(0,0,0,0.16)] max-[900px]:grid-cols-1 max-[640px]:p-5",
              )}
            >
              <div className="flex min-w-0 flex-col justify-between">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] text-[var(--dark-text-2)]">
                    <span>{lens.classification}</span>
                    <span aria-hidden="true">·</span>
                    <span>{lens.publicStatus}</span>
                  </div>
                  <h3 className="text-[clamp(42px,7vw,82px)] font-light leading-[0.95] tracking-normal text-[var(--dark-text)]">
                    {lens.name}
                  </h3>
                  <p className="mt-6 max-w-[680px] text-[20px] leading-[1.55] text-[var(--dark-text)] max-[640px]:text-[16px]">
                    {lens.outcome}
                  </p>
                  <p
                    className="mt-7 border-t border-[rgba(255,247,238,0.14)] pt-5 font-mono text-[11px] leading-[1.65] text-[var(--dark-text-2)]"
                    aria-label={`${lens.name} system flow`}
                  >
                    Starts with {lens.flow[0]}. Checks it against captured evidence. Leaves you with {lens.flow.at(-1)}.
                  </p>
                </div>
                <div className="mt-8">
                  <ButtonLink
                    href="/work/lens"
                    data-analytics-event="project_link_clicked"
                    data-analytics-location="home_selected_systems"
                    data-analytics-project="lens"
                    data-analytics-link-type="case_study"
                  >
                    View Lens case study →
                  </ButtonLink>
                </div>
              </div>
              <ProjectVisual project={lens} tone="dark" />
            </article>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 max-[780px]:grid-cols-1">
            {supportingProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={(index + 1) * 80}
                className={`h-full ${index === 2 ? "col-span-2 max-[780px]:col-span-1" : ""}`}
              >
                <HomeProjectCard project={project} index={index + 2} wide={index === 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-analytics-section="where_i_can_help"
        className="bg-[var(--bg)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4"
      >
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-10 grid grid-cols-[minmax(0,620px)_minmax(260px,1fr)] items-end gap-12 max-[860px]:grid-cols-1">
            <div>
              <SectionEye label="Where I can help" />
              <h2 className="section-title max-w-[720px]">
                Where I can be useful when the work is stuck.
              </h2>
            </div>
            <p className="body-copy">
              I help when the raw pieces exist but people are still rebuilding reports, missing
              warning signs, or working around tools that should be doing more.
            </p>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
            {helpItems.map((service, index) => (
              <Reveal
                key={service.number}
                delay={index * 60}
                className={`h-full ${
                  index === helpItems.length - 1
                    ? "col-span-2 max-[640px]:col-span-1"
                    : ""
                }`}
              >
                <ServiceRow
                  {...service}
                  variant={index === 0 ? "accent" : index === 2 || index === 4 ? "dark" : "light"}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-analytics-section="writing"
        className="bg-[var(--dark)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4"
      >
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <SectionEye label="Writing" dark />
              <h2 className="section-title section-title-dark max-w-[720px]">
                Notes that make the judgement behind the systems visible.
              </h2>
            </div>
            <ButtonLink href="/writing">Read all writing →</ButtonLink>
          </Reveal>
          <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] gap-4 max-[820px]:grid-cols-1">
            <Reveal>
              <Link
                href={`/writing/${featuredNote.slug}`}
                data-analytics-event="article_link_clicked"
                data-analytics-location="home_writing_featured"
                data-analytics-article={featuredNote.slug}
                className="group flex h-full min-h-[280px] flex-col justify-between rounded bg-[var(--dark-2)] p-7 max-[640px]:min-h-[240px] max-[640px]:p-5"
              >
                <div>
                  <div className="mb-5 flex items-center gap-2 font-mono text-[11px] text-[var(--dark-text-2)]">
                    <BookOpen size={15} strokeWidth={1.8} aria-hidden="true" />
                    Featured article · {featuredNote.readingMinutes} min read
                  </div>
                  <h3 className="max-w-[720px] text-[clamp(24px,3.5vw,38px)] font-light leading-[1.18] text-[var(--dark-text)]">
                    {featuredNote.title}
                  </h3>
                  <p className="mt-4 max-w-[680px] text-[14px] leading-[1.7] text-[var(--dark-text-2)]">
                    {featuredNote.description}
                  </p>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 font-mono text-[12px] text-[var(--dark-text)]">
                  Read note <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
            <div className="grid gap-3">
              {otherNotes.map((note, index) => (
                <Reveal key={note.slug} delay={(index + 1) * 70}>
                <Link
                  href={`/writing/${note.slug}`}
                  data-analytics-event="article_link_clicked"
                  data-analytics-location="home_writing_list"
                  data-analytics-article={note.slug}
                  className="group flex h-full min-h-[134px] flex-col justify-between rounded border border-[rgba(255,247,238,0.12)] p-5"
                >
                  <div className="font-mono text-[10px] text-[var(--dark-text-2)]">
                    {note.seriesLabel} · {note.readingMinutes} min
                  </div>
                  <h3 className="mt-3 text-[16px] font-medium leading-[1.45] text-[var(--dark-text)]">
                    {note.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] text-[var(--dark-text-2)]">
                    Read <ArrowRight size={13} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-analytics-section="about"
        className="bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4"
      >
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="grid grid-cols-[220px_minmax(0,1fr)] items-center gap-12 rounded bg-[var(--panel)] p-8 shadow-[0_12px_36px_rgba(26,23,20,0.04)] max-[760px]:grid-cols-1 max-[640px]:p-5">
            <div className="relative aspect-square w-full overflow-hidden rounded bg-[var(--surface)] max-[760px]:max-w-[220px]">
              <Image
                src="/allenmanoj.png"
                alt="Portrait of Allen Manoj"
                fill
                sizes="(max-width: 760px) 220px, 220px"
                className="object-cover object-center"
              />
            </div>
            <div className="min-w-0">
              <SectionEye label="About" />
              <h2 className="section-title mb-4 max-w-[760px]">
                I work across the complete path from source data to operational software.
              </h2>
              <p className="body-copy max-w-[760px]">
                My background spans data systems, research, product analytics, and technical
                leadership. The common thread is making inputs, assumptions, failure modes, and
                outputs clear enough to trust.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/about">Read the background →</ButtonLink>
                <span className="inline-flex items-center gap-2 px-1 py-2 font-mono text-[12px] text-[var(--text-3)]">
                  <CheckCircle2 size={14} strokeWidth={1.8} aria-hidden="true" />
                  Open to selected systems projects and relevant data or AI roles
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
