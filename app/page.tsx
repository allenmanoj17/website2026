import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Mail,
} from "lucide-react";
import ContactSection from "@/components/contact-section";
import ProjectVisual from "@/components/project-visual";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import ServiceRow from "@/components/service-row";
import { ButtonLink, panelClassName } from "@/components/ui-primitives";
import { featuredProjects, services, writingNotes, type Project } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Allen Manoj — Data & AI Systems Builder in Sydney",
  },
  description:
    "Allen Manoj designs data infrastructure, revenue intelligence, reporting systems, and applied AI workflows from source systems to operational interfaces.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Allen Manoj — Data & AI Systems Builder",
    description:
      "Decision systems spanning data infrastructure, analytics, applied AI, monitoring, and operational software.",
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
      "01": "Clean pipelines, warehouse models, scheduled jobs, and quality checks.",
      "02": "Automated dashboards, summaries, alerts, and reporting delivery workflows.",
      "03": "Funnels, cohorts, lead scoring, conversion reporting, and revenue signals.",
      "04": "Classification, retrieval, monitoring, scoring, and human review paths.",
      "05": "Diagnostic portals, admin tools, monitoring screens, and data-backed products.",
    }[service.number] ?? service.description,
  usefulWhen:
    {
      "01": "Useful when reporting still depends on exports, spreadsheet logic, or disconnected tools.",
      "02": "Useful when the same report is rebuilt every week and still needs a meeting to explain it.",
      "03": "Useful when product or revenue teams need to know where attention should go next.",
      "04": "Useful when an AI idea needs clear inputs, checks, logs, fallbacks, and handoff.",
      "05": "Useful when the underlying data work needs an interface people can use directly.",
    }[service.number] ?? "",
}));

function HomeProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={panelClassName(
        "dark",
        "motion-project-card flex h-full flex-col justify-between p-6 shadow-[0_18px_46px_rgba(0,0,0,0.16)]",
      )}
    >
      <div>
        <div className="mb-5 flex items-center justify-between gap-4 font-mono text-[11px] text-[var(--dark-text-2)]">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.classification}</span>
        </div>
        <h3 className="card-title card-title-dark">{project.name}</h3>
        <p className="mt-3 text-[14px] font-medium leading-[1.6] text-[var(--dark-text)]">
          {project.outcome}
        </p>
        <p className="mt-4 text-[14px] leading-[1.7] text-[var(--dark-text-2)]">
          {project.description}
        </p>
        <div className="mt-5">
          <ProjectVisual project={project} tone="dark" compact />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.architecture.slice(0, 4).map((step, stepIndex) => (
            <span
              key={step}
              className="font-mono text-[11px] leading-[1.5] text-[var(--dark-text-2)]"
            >
              {step}
              {stepIndex < Math.min(project.architecture.length, 4) - 1 ? " →" : ""}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={project.href}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
      >
        View system notes <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function Home() {
  const [lens, ...supportingProjects] = featuredProjects;

  return (
    <>
      <section className="flex min-h-svh items-center bg-[var(--bg)] px-11 pb-16 pt-32 max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-28 max-[640px]:min-h-[92svh] max-[420px]:px-4">
        <div className="mx-auto w-full max-w-[1140px]">
          <div className="min-w-0 max-w-[940px]">
            <Reveal className="mb-7 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)]">
              Sydney · Independent data and AI systems builder
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
              <ButtonLink href="/contact">
                Start a conversation <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="#systems" tone="light">
                View selected work
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="systems"
        className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4"
      >
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEye label="Selected systems" dark />
              <h2 className="section-title section-title-dark max-w-[760px]">
                Complete systems, from source evidence to operational action.
              </h2>
              <p className="body-copy body-copy-dark mt-3 max-w-[620px]">
                Four systems spanning website intelligence, revenue decisions, grounded content,
                and evidence-backed monitoring.
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
                  <p className="mt-5 max-w-[680px] text-[20px] leading-[1.55] text-[var(--dark-text)] max-[640px]:text-[16px]">
                    {lens.outcome}
                  </p>
                  <p className="mt-4 max-w-[680px] text-[15px] leading-[1.75] text-[var(--dark-text-2)]">
                    {lens.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-2 gap-y-2 font-mono text-[11px] text-[var(--dark-text-2)]">
                    {lens.architecture.map((step, index) => (
                      <span key={step}>
                        {step}
                        {index < lens.architecture.length - 1 ? " →" : ""}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ButtonLink href="/work/lens">View Lens architecture →</ButtonLink>
                  {lens.liveHref ? (
                    <a
                      href={lens.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-1 py-2 text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-75"
                    >
                      Open current build →
                    </a>
                  ) : null}
                </div>
              </div>
              <ProjectVisual project={lens} tone="dark" />
            </article>
          </Reveal>

          <div className="grid grid-cols-3 gap-5 max-[980px]:grid-cols-1">
            {supportingProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index + 1) * 80} className="h-full">
                <HomeProjectCard project={project} index={index + 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-10 grid grid-cols-[minmax(0,620px)_minmax(260px,1fr)] items-end gap-12 max-[860px]:grid-cols-1">
            <div>
              <SectionEye label="Where I can help" />
              <h2 className="section-title max-w-[720px]">
                Useful systems for data-heavy work.
              </h2>
            </div>
            <p className="body-copy">
              I help when the raw pieces exist, but the reporting, automation, intelligence, or
              interface around them is still too manual to trust.
            </p>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
            {helpItems.map((service, index) => (
              <Reveal key={service.number} delay={index * 60} className="h-full">
                <ServiceRow
                  {...service}
                  variant={index === 0 ? "accent" : index === 2 || index === 4 ? "dark" : "light"}
                  className="h-full"
                />
              </Reveal>
            ))}
            <Reveal delay={320} className="h-full">
              <div className="flex min-h-[300px] flex-col justify-between rounded border border-[var(--surface-2)] bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)] max-[640px]:min-h-[230px] max-[640px]:p-5">
                <div>
                  <div className="mb-6 grid size-12 place-items-center rounded-sm bg-[var(--surface)] text-[var(--accent)]">
                    <Mail size={23} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <p className="text-[clamp(24px,3vw,34px)] font-light leading-[1.15] text-[var(--text)]">
                    Bring the workflow before it has a polished brief.
                  </p>
                </div>
                <ButtonLink href="/contact" className="mt-8 w-fit">
                  Start a conversation <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--dark)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
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
          <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
            {writingNotes.map((note, index) => (
              <Reveal key={note.slug} delay={index * 70}>
                <Link
                  href={`/writing/${note.slug}`}
                  className="group flex h-full min-h-[230px] flex-col justify-between rounded bg-[var(--dark-2)] p-6"
                >
                  <div>
                    <div className="mb-5 flex items-center gap-2 font-mono text-[11px] text-[var(--dark-text-2)]">
                      <BookOpen size={15} strokeWidth={1.8} aria-hidden="true" />
                      Note · {note.date}
                    </div>
                    <h3 className="card-title card-title-dark">{note.title}</h3>
                    <p className="mt-4 text-[14px] leading-[1.65] text-[var(--dark-text-2)]">
                      {note.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] text-[var(--dark-text)]">
                    Read note <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
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
