import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  ExternalLink,
  GitBranch,
  Mail,
  ShieldCheck,
} from "lucide-react";
import CaseStudyGallery from "@/components/case-study-gallery";
import ProjectVisual from "@/components/project-visual";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import { ButtonLink } from "@/components/ui-primitives";
import { caseStudies } from "@/data/case-studies";
import { allProjects, type Project } from "@/data/site";

const siteUrl = "https://allenmanoj.com";

const topics = [
  ["overview", "Overview"],
  ["challenge", "Challenge"],
  ["architecture", "Architecture"],
  ["visuals", "Visuals"],
  ["decisions", "Decisions"],
  ["reliability", "Reliability"],
  ["evidence", "Evidence"],
] as const;

function getProject(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} Case Study — Allen Manoj`,
      description: project.outcome,
      url: `${siteUrl}/work/${project.slug}`,
      siteName: "Allen Manoj",
      type: "article",
      modifiedTime: `${project.updatedAt}T00:00:00+10:00`,
      images: [
        {
          url: `/work/${project.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${project.name} case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Case Study — Allen Manoj`,
      description: project.outcome,
      images: [`/work/${project.slug}/opengraph-image`],
    },
  };
}

function SectionHeading({
  number,
  label,
  title,
  description,
  dark = false,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-[76px_minmax(0,1fr)] gap-6 max-[640px]:grid-cols-1 max-[640px]:gap-3">
      <span
        className={`font-mono text-[11px] ${
          dark ? "text-[var(--dark-text-2)]" : "text-[var(--accent)]"
        }`}
      >
        {number}
      </span>
      <div>
        <div
          className={`font-mono text-[11px] uppercase tracking-[0.08em] ${
            dark ? "text-[var(--dark-text-2)]" : "text-[var(--accent)]"
          }`}
        >
          {label}
        </div>
        <h2
          className={`mt-4 max-w-[820px] text-[clamp(28px,4vw,46px)] font-light leading-[1.12] tracking-normal ${
            dark ? "text-[var(--dark-text)]" : "text-[var(--text)]"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 max-w-[760px] text-[15px] leading-[1.75] ${
              dark ? "text-[var(--dark-text-2)]" : "text-[var(--text-2)]"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function ArchitectureFlow({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-4 gap-3 max-[900px]:grid-cols-3 max-[680px]:grid-cols-2 max-[420px]:grid-cols-1">
      {project.architecture.map((step, index) => (
        <div
          key={step}
          className="relative min-h-[116px] rounded bg-[var(--dark-2)] p-4 text-[var(--dark-text)]"
        >
          <div className="font-mono text-[10px] text-[var(--dark-text-2)]">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="mt-6 text-[15px] font-medium leading-[1.4]">{step}</div>
          {index < project.architecture.length - 1 ? (
            <ArrowRight
              size={15}
              strokeWidth={1.8}
              className="absolute -right-[9px] top-1/2 z-10 text-[var(--dark-text-2)] max-[420px]:hidden"
              aria-hidden="true"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function NumberedList({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ol className="grid gap-0">
      {items.map((item, index) => (
        <li
          key={item}
          className={`grid grid-cols-[44px_minmax(0,1fr)] gap-4 border-t py-4 ${
            dark ? "border-[rgba(255,247,238,0.12)]" : "border-[var(--surface-2)]"
          }`}
        >
          <span
            className={`font-mono text-[11px] ${
              dark ? "text-[var(--dark-text-2)]" : "text-[var(--accent)]"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-[14px] leading-[1.7] ${
              dark ? "text-[var(--dark-text-2)]" : "text-[var(--text-2)]"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}

function EvidenceLinks({ project }: { project: Project }) {
  return (
    <div className="grid gap-3">
      {project.currentEvidence.map((evidence) => {
        const isCurrentPage = evidence.href === project.href;
        const content = (
          <>
            <CheckCircle2 size={16} strokeWidth={1.8} className="text-[var(--accent)]" aria-hidden="true" />
            <span className="min-w-0 flex-1">{evidence.label}</span>
            {!isCurrentPage ? (
              evidence.external ? (
                <ExternalLink size={14} strokeWidth={1.8} className="text-[var(--accent)]" aria-hidden="true" />
              ) : (
                <ArrowRight size={14} strokeWidth={1.8} className="text-[var(--accent)]" aria-hidden="true" />
              )
            ) : null}
          </>
        );

        if (isCurrentPage) {
          return (
            <div
              key={evidence.label}
              className="flex items-center gap-3 border-t border-[var(--surface-2)] py-4 text-[14px] text-[var(--text)]"
            >
              {content}
            </div>
          );
        }

        if (evidence.external) {
          return (
            <a
              key={evidence.label}
              href={evidence.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border-t border-[var(--surface-2)] py-4 text-[14px] text-[var(--text)] transition-colors duration-150 hover:text-[var(--accent)]"
            >
              {content}
            </a>
          );
        }

        return (
          <Link
            key={evidence.label}
            href={evidence.href}
            className="group flex items-center gap-3 border-t border-[var(--surface-2)] py-4 text-[14px] text-[var(--text)] transition-colors duration-150 hover:text-[var(--accent)]"
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = caseStudies[slug];

  if (!project || !caseStudy) notFound();

  const currentIndex = allProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const emailHref = `mailto:allenmanoj17@gmail.com?subject=${encodeURIComponent(project.emailSubject)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type":
          project.slug === "lens" || project.slug === "distributionos"
            ? "SoftwareApplication"
            : "CreativeWork",
        "@id": `${siteUrl}/work/${project.slug}#system`,
        name: project.name,
        headline: `${project.name} case study`,
        url: `${siteUrl}/work/${project.slug}`,
        description: project.summary,
        dateModified: project.updatedAt,
        creator: {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: "Allen Manoj",
        },
        keywords: project.tags.join(", "),
        isAccessibleForFree: true,
        applicationCategory:
          project.slug === "lens" || project.slug === "distributionos"
            ? "BusinessApplication"
            : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Work",
            item: `${siteUrl}/work`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: project.name,
            item: `${siteUrl}/work/${project.slug}`,
          },
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

      <article>
        <section className="bg-[var(--bg)] px-11 pb-20 pt-32 max-[900px]:px-6 max-[900px]:pb-14 max-[900px]:pt-28 max-[420px]:px-4">
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <Link
                href="/work"
                className="mb-10 inline-flex items-center gap-2 font-mono text-[12px] text-[var(--accent)] transition-opacity duration-150 hover:opacity-75"
              >
                ← All work
              </Link>
            </Reveal>

            <div className="grid grid-cols-[minmax(0,1fr)_minmax(300px,430px)] items-end gap-12 max-[900px]:grid-cols-1">
              <Reveal>
                <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] text-[var(--accent)]">
                  <span>Case study</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.classification}</span>
                  {project.publicStatus ? (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{project.publicStatus}</span>
                    </>
                  ) : null}
                </div>
                <h1 className="page-title mb-6 max-w-[920px]">{project.name}</h1>
                <p className="lede max-w-[820px]">{project.outcome}</p>
                <p className="body-copy mt-5 max-w-[780px]">{project.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={emailHref}>
                    <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                    Discuss a similar system
                  </ButtonLink>
                  {project.liveHref ? (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-[var(--surface)] px-4 py-[10px] text-[13px] font-medium text-[var(--text)] transition-opacity duration-150 hover:opacity-75"
                    >
                      Open current build
                      <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
                    </a>
                  ) : null}
                  {project.sourceHref ? (
                    <a
                      href={project.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-[var(--surface)] px-4 py-[10px] text-[13px] font-medium text-[var(--text)] transition-opacity duration-150 hover:opacity-75"
                    >
                      View source
                      <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ProjectVisual project={project} />
              </Reveal>
            </div>

            <Reveal delay={180} className="mt-14 grid grid-cols-3 border-y border-[var(--surface-2)] max-[720px]:grid-cols-1">
              {[
                ["My role", caseStudy.role],
                ["Project stage", caseStudy.stage],
                ["Scope", caseStudy.scope],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className={`py-5 ${
                    index > 0
                      ? "border-l border-[var(--surface-2)] pl-6 max-[720px]:border-l-0 max-[720px]:border-t max-[720px]:pl-0"
                      : "pr-6"
                  }`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--accent)]">
                    {label}
                  </div>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--text-2)]">{value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <nav
          aria-label="Case study sections"
          className="sticky top-[74px] z-30 border-y border-[var(--surface-2)] bg-[rgba(255,252,249,0.96)] px-11 backdrop-blur-md max-[900px]:px-6 max-[420px]:px-4"
        >
          <div className="mx-auto flex max-w-[1140px] gap-6 overflow-x-auto py-3">
            {topics.map(([href, label], index) => (
              <a
                key={href}
                href={`#${href}`}
                className="shrink-0 font-mono text-[11px] text-[var(--text-2)] transition-colors duration-150 hover:text-[var(--accent)]"
              >
                {String(index + 1).padStart(2, "0")} {label}
              </a>
            ))}
          </div>
        </nav>

        <section
          id="overview"
          className="scroll-mt-32 bg-[var(--surface)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4"
        >
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <SectionHeading
                number="01"
                label="Overview"
                title="What the system is meant to change."
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-3 gap-8 max-[860px]:grid-cols-1">
              {[
                ["For", project.audience],
                ["Replaces", project.problem],
                ["Produces", project.output],
              ].map(([label, text], index) => (
                <Reveal key={label} delay={index * 70}>
                  <div className="border-t border-[var(--surface-2)] pt-5">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
                      {label}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.75] text-[var(--text-2)]">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="challenge"
          className="scroll-mt-32 bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4"
        >
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <SectionHeading
                number="02"
                label="Challenge"
                title={caseStudy.challengeTitle}
                description={caseStudy.challengeLead}
              />
            </Reveal>
            <Reveal delay={90} className="mt-12 grid grid-cols-[minmax(220px,0.35fr)_minmax(0,0.65fr)] gap-10 max-[760px]:grid-cols-1">
              <h3 className="text-[20px] font-light leading-[1.4] text-[var(--text)]">
                Design constraints
              </h3>
              <NumberedList items={caseStudy.constraints} />
            </Reveal>
          </div>
        </section>

        <section
          id="architecture"
          className="scroll-mt-32 bg-[var(--dark)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4"
        >
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <SectionHeading
                number="03"
                label="Architecture"
                title={caseStudy.approachTitle}
                description={project.system}
                dark
              />
            </Reveal>
            <Reveal delay={90} className="mt-12">
              <ArchitectureFlow project={project} />
            </Reveal>
            <Reveal delay={140} className="mt-10 grid grid-cols-3 gap-5 max-[820px]:grid-cols-1">
              {project.flow.map((step, index) => (
                <div key={step} className="border-t border-[rgba(255,247,238,0.16)] pt-5">
                  <div className="font-mono text-[10px] text-[var(--dark-text-2)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-[17px] font-medium text-[var(--dark-text)]">{step}</h3>
                </div>
              ))}
            </Reveal>
            {project.analyticsLoop ? (
              <Reveal delay={180} className="mt-12 border-t border-[rgba(255,247,238,0.16)] pt-8">
                <h3 className="text-[18px] font-medium text-[var(--dark-text)]">
                  Behavioural product loop
                </h3>
                <div className="mt-5 flex flex-wrap gap-x-2 gap-y-3 font-mono text-[11px] text-[var(--dark-text-2)]">
                  {project.analyticsLoop.map((step, index) => (
                    <span key={step}>
                      {step}
                      {index < project.analyticsLoop!.length - 1 ? " →" : ""}
                    </span>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>

        <section
          id="visuals"
          className="scroll-mt-32 bg-[var(--dark)] px-11 pb-24 pt-4 max-[900px]:px-6 max-[900px]:pb-16 max-[420px]:px-4"
        >
          <div className="mx-auto max-w-[1140px]">
            <Reveal className="mb-10 border-t border-[rgba(255,247,238,0.16)] pt-16">
              <SectionHeading
                number="04"
                label="Visual proof"
                title="Interface views for the workflow and its decisions."
                description="These are current design representations and can be replaced with production screenshots as the product matures."
                dark
              />
            </Reveal>
            <Reveal delay={90}>
              <CaseStudyGallery
                project={project}
                primaryTitle={caseStudy.primaryVisualTitle}
                primaryCaption={caseStudy.primaryVisualCaption}
                secondaryTitle={caseStudy.secondaryVisualTitle}
                secondaryCaption={caseStudy.secondaryVisualCaption}
              />
            </Reveal>
          </div>
        </section>

        <section
          id="decisions"
          className="scroll-mt-32 bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4"
        >
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <SectionHeading
                number="05"
                label="Key decisions"
                title={caseStudy.approachTitle}
                description={caseStudy.approachLead}
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 max-[760px]:grid-cols-1">
              {caseStudy.decisions.map((decision, index) => (
                <Reveal key={decision.title} delay={index * 60}>
                  <div className="border-t border-[var(--surface-2)] pt-5">
                    <div className="font-mono text-[10px] text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-3 text-[19px] font-medium leading-[1.4] text-[var(--text)]">
                      {decision.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.7] text-[var(--text-2)]">
                      {decision.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 grid grid-cols-[220px_minmax(0,1fr)] gap-10 border-t border-[var(--surface-2)] pt-8 max-[760px]:grid-cols-1">
              <h3 className="text-[20px] font-light leading-[1.4] text-[var(--text)]">Build notes</h3>
              <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
                {caseStudy.buildNotes.map((note) => (
                  <div key={note.title}>
                    <h4 className="text-[15px] font-medium text-[var(--text)]">{note.title}</h4>
                    <p className="mt-3 text-[13px] leading-[1.7] text-[var(--text-2)]">
                      {note.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="reliability"
          className="scroll-mt-32 bg-[var(--surface)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4"
        >
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <SectionHeading
                number="06"
                label="Behaviour and reliability"
                title="The system around the feature is part of the product."
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-12 max-[820px]:grid-cols-1">
              <Reveal>
                <div>
                  <div className="mb-5 flex items-center gap-3 text-[var(--accent)]">
                    <GitBranch size={19} strokeWidth={1.8} aria-hidden="true" />
                    <h3 className="text-[18px] font-medium text-[var(--text)]">System behaviour</h3>
                  </div>
                  <NumberedList items={project.systemBehaviour} />
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div>
                  <div className="mb-5 flex items-center gap-3 text-[var(--accent)]">
                    <ShieldCheck size={19} strokeWidth={1.8} aria-hidden="true" />
                    <h3 className="text-[18px] font-medium text-[var(--text)]">Reliability considerations</h3>
                  </div>
                  <NumberedList items={project.reliability} />
                </div>
              </Reveal>
            </div>
            <Reveal className="mt-14 grid grid-cols-[220px_minmax(0,1fr)] gap-10 border-t border-[var(--surface-2)] pt-8 max-[760px]:grid-cols-1">
              <div>
                <h3 className="text-[20px] font-light leading-[1.4] text-[var(--text)]">
                  Evaluation approach
                </h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-[var(--text-3)]">
                  What should be tested before stronger claims are made.
                </p>
              </div>
              <NumberedList items={project.evaluation} />
            </Reveal>
          </div>
        </section>

        <section
          id="evidence"
          className="scroll-mt-32 bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4"
        >
          <div className="mx-auto max-w-[1140px]">
            <Reveal>
              <SectionHeading
                number="07"
                label="Evidence and boundaries"
                title="What exists now, what remains limited, and what comes next."
                description="This separation is intentional: planned evaluation and reliability work is not presented as completed evidence."
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-3 gap-8 max-[900px]:grid-cols-1">
              <Reveal>
                <div>
                  <h3 className="mb-4 text-[18px] font-medium text-[var(--text)]">Current evidence</h3>
                  <EvidenceLinks project={project} />
                </div>
              </Reveal>
              <Reveal delay={70}>
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <CircleAlert size={18} strokeWidth={1.8} className="text-[var(--accent)]" aria-hidden="true" />
                    <h3 className="text-[18px] font-medium text-[var(--text)]">Limitations</h3>
                  </div>
                  <NumberedList items={project.limitations} />
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div>
                  <h3 className="mb-4 text-[18px] font-medium text-[var(--text)]">Next validation</h3>
                  <NumberedList items={project.nextValidation} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--dark)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
          <div className="mx-auto max-w-[1140px]">
            <Reveal className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-8 max-[760px]:grid-cols-1">
              <div>
                <SectionEye label="Discuss a similar system" dark />
                <h2 className="section-title section-title-dark max-w-[760px]">
                  Send the current workflow, source material, report, or product idea.
                </h2>
                <p className="mt-4 max-w-[640px] text-[15px] leading-[1.75] text-[var(--dark-text-2)]">
                  A polished specification is not required. The rough version is enough to establish
                  the problem boundary and useful next step.
                </p>
              </div>
              <ButtonLink href={emailHref}>
                <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                Discuss a similar system
              </ButtonLink>
            </Reveal>
            <Reveal className="mt-12 border-t border-[rgba(255,247,238,0.16)] pt-8">
              <Link
                href={nextProject.href}
                className="group flex items-end justify-between gap-6 text-[var(--dark-text)]"
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
                    Next case study
                  </span>
                  <span className="mt-3 block text-[clamp(24px,4vw,42px)] font-light leading-[1.1]">
                    {nextProject.name}
                  </span>
                </span>
                <ArrowRight
                  size={24}
                  strokeWidth={1.5}
                  className="mb-1 transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </section>
      </article>
    </>
  );
}
