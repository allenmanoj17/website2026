import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, ExternalLink, Layers3 } from "lucide-react";
import ArchiveItem from "@/components/archive-item";
import ProjectVisual from "@/components/project-visual";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import { ButtonLink, panelClassName } from "@/components/ui-primitives";
import {
  archive,
  featuredProjects,
  secondaryProjects,
  type Project,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Selected Data & AI Systems",
  description:
    "Selected systems by Allen Manoj across website intelligence, explainable revenue analytics, grounded content workflows, and evidence-backed monitoring.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected Data & AI Systems — Allen Manoj",
    description:
      "Current data and AI system builds, including their architecture, evidence, limitations, and next validation.",
    url: "https://allenmanoj.com/work",
    siteName: "Allen Manoj",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Selected systems by Allen Manoj",
      },
    ],
  },
};

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={project.href}
        className="inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
      >
        View system notes <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
      </Link>
      {project.liveHref ? (
        <a
          href={project.liveHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-1 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-75"
        >
          Open current build <ExternalLink size={13} strokeWidth={1.8} aria-hidden="true" />
        </a>
      ) : null}
      {project.sourceHref ? (
        <a
          href={project.sourceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-1 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-75"
        >
          View source <ExternalLink size={13} strokeWidth={1.8} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

function SystemCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={panelClassName(
        "dark",
        "motion-project-card flex h-full min-w-0 flex-col p-6 max-[640px]:p-5",
      )}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[var(--dark-text-2)]">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>
          {project.classification}
          {project.publicStatus ? ` · ${project.publicStatus}` : ""}
        </span>
      </div>
      <h2 className="text-[clamp(28px,4vw,44px)] font-light leading-[1.08] tracking-normal text-[var(--dark-text)]">
        {project.name}
      </h2>
      <p className="mt-4 text-[15px] font-medium leading-[1.6] text-[var(--dark-text)]">
        {project.outcome}
      </p>
      <p className="mt-3 text-[14px] leading-[1.7] text-[var(--dark-text-2)]">
        {project.description}
      </p>
      <div className="mt-6">
        <ProjectVisual project={project} tone="dark" compact />
      </div>
      <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 font-mono text-[11px] text-[var(--dark-text-2)]">
        {project.architecture.slice(0, 5).map((step, stepIndex) => (
          <span key={step}>
            {step}
            {stepIndex < Math.min(project.architecture.length, 5) - 1 ? " →" : ""}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-7">
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function WorkPage() {
  const [lens, airs, distributionOS, sentinel] = featuredProjects;
  const brandScan = secondaryProjects[0];
  const orderedArchive = [...archive].sort((a, b) => {
    if (a.category === "Personal systems") return -1;
    if (b.category === "Personal systems") return 1;
    return 0;
  });

  return (
    <>
      <section className="bg-[var(--bg)] px-11 pb-16 pt-32 max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-28 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="max-w-[920px]">
            <SectionEye label="Work" />
            <h1 className="page-title mb-6">
              Selected systems, with the decisions and boundaries visible.
            </h1>
            <p className="lede max-w-[780px]">
              Each project shows what the system replaces, how information moves through it, what
              exists now, and what still needs validation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#selected-systems">
                View selected systems <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" tone="light">
                Start a conversation
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="selected-systems"
        className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4"
      >
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-10 max-w-[760px]">
            <SectionEye label="Current systems" dark />
            <h2 className="section-title section-title-dark">
              Four different problems, treated as complete systems.
            </h2>
          </Reveal>

          <Reveal>
            <article
              className={panelClassName(
                "dark",
                "mb-5 grid grid-cols-[minmax(0,1fr)_minmax(280px,430px)] gap-9 p-8 max-[900px]:grid-cols-1 max-[640px]:p-5",
              )}
            >
              <div className="flex min-w-0 flex-col justify-between">
                <div>
                  <div className="mb-5 font-mono text-[11px] text-[var(--dark-text-2)]">
                    01 · {lens.classification} · {lens.publicStatus}
                  </div>
                  <h2 className="text-[clamp(46px,8vw,92px)] font-light leading-[0.92] tracking-normal text-[var(--dark-text)]">
                    {lens.name}
                  </h2>
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
                <div className="mt-8">
                  <ProjectLinks project={lens} />
                </div>
              </div>
              <ProjectVisual project={lens} tone="dark" />
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article
              className={panelClassName(
                "dark",
                "mb-5 grid grid-cols-[minmax(0,1fr)_minmax(280px,400px)] gap-8 p-7 max-[900px]:grid-cols-1 max-[640px]:p-5",
              )}
            >
              <div className="flex min-w-0 flex-col justify-between">
                <div>
                  <div className="mb-5 font-mono text-[11px] text-[var(--dark-text-2)]">
                    02 · {airs.classification}
                  </div>
                  <h2 className="max-w-[760px] text-[clamp(34px,5vw,62px)] font-light leading-[1.02] tracking-normal text-[var(--dark-text)]">
                    {airs.name}
                  </h2>
                  <p className="mt-5 max-w-[700px] text-[17px] font-medium leading-[1.6] text-[var(--dark-text)]">
                    {airs.outcome}
                  </p>
                  <p className="mt-3 max-w-[700px] text-[14px] leading-[1.7] text-[var(--dark-text-2)]">
                    {airs.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-2 gap-y-2 font-mono text-[11px] text-[var(--dark-text-2)]">
                    {airs.architecture.map((step, index) => (
                      <span key={step}>
                        {step}
                        {index < airs.architecture.length - 1 ? " →" : ""}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <ProjectLinks project={airs} />
                </div>
              </div>
              <ProjectVisual project={airs} tone="dark" />
            </article>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
            {[distributionOS, sentinel].map((project, index) => (
              <Reveal key={project.slug} delay={(index + 2) * 70} className="h-full">
                <SystemCard project={project} index={index + 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="grid grid-cols-[minmax(0,1fr)_minmax(280px,390px)] items-center gap-10 max-[860px]:grid-cols-1">
            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-3">
                <Layers3 size={18} strokeWidth={1.8} className="text-[var(--accent)]" aria-hidden="true" />
                <SectionEye label="New internal build" />
              </div>
              <h2 className="section-title">{brandScan.name}</h2>
              <p className="mt-4 max-w-[680px] text-[17px] font-medium leading-[1.55] text-[var(--accent)]">
                {brandScan.outcome}
              </p>
              <p className="body-copy mt-4 max-w-[700px]">{brandScan.description}</p>
              <div className="mt-7">
                <ButtonLink href={brandScan.href}>
                  View BrandScan notes <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
            <ProjectVisual project={brandScan} />
          </Reveal>
        </div>
      </section>

      <section
        id="earlier-work"
        className="bg-[var(--surface)] px-11 py-16 max-[900px]:px-6 max-[900px]:py-12 max-[420px]:px-4"
      >
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-9 max-w-[760px]">
            <SectionEye label="Earlier technical work" />
            <h2 className="section-title">Personal systems first, followed by earlier analytics and research.</h2>
            <p className="body-copy mt-3">
              Kept compact for context. Open a group only when you want the detail.
            </p>
          </Reveal>

          <div className="grid gap-3">
            {orderedArchive.map((category, categoryIndex) => (
              <Reveal key={category.category} delay={categoryIndex * 50}>
                <details
                  open={categoryIndex === 0}
                  className="group rounded bg-[var(--panel)] shadow-[0_10px_30px_rgba(26,23,20,0.04)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                    <span>
                      <span className="text-[15px] font-medium text-[var(--text)]">
                        {category.category}
                      </span>
                      {category.note ? (
                        <span className="mt-1 block text-[12px] text-[var(--text-3)]">
                          {category.note}
                        </span>
                      ) : null}
                    </span>
                    <span className="flex shrink-0 items-center gap-3 font-mono text-[11px] text-[var(--text-3)]">
                      {category.items.length} items
                      <ChevronDown
                        size={16}
                        strokeWidth={1.8}
                        className="transition-transform duration-200 group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </span>
                  </summary>
                  <div className="grid grid-cols-2 gap-4 border-t border-[var(--surface)] p-4 max-[840px]:grid-cols-1">
                    {category.items.map((item) => (
                      <ArchiveItem key={item.name} {...item} />
                    ))}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
