import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Database, Workflow } from "lucide-react";
import ProjectVisual from "@/components/project-visual";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import { featuredProjects } from "@/data/site";

const siteUrl = "https://allenmanoj.com";

function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProject(slug);

    if (!project) {
      return {};
    }

    return {
      title: project.name,
      description: `${project.name} by Allen Manoj: ${project.outcome} ${project.summary}`,
      alternates: {
        canonical: `/work/${project.slug}`,
      },
      openGraph: {
        title: `${project.name} — Allen Manoj`,
        description: project.summary,
        url: `${siteUrl}/work/${project.slug}`,
        siteName: "Allen Manoj",
        images: [
          {
            url: `/work/${project.slug}/opengraph-image`,
            width: 1200,
            height: 630,
            alt: `${project.name} by Allen Manoj`,
          },
        ],
      },
    };
  });
}

function DetailCard({ number, title, body }: { number: string; title: string; body: string }) {
  const icons = {
    "01": Database,
    "02": Workflow,
    "03": CheckCircle2,
  };
  const Icon = icons[number as keyof typeof icons] ?? Database;

  return (
    <div className="rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)] max-[640px]:p-5">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-sm bg-[var(--accent)] font-mono text-[12px] text-[var(--dark-text)]">
          <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <h2 className="text-[20px] font-medium leading-[1.3] text-[var(--text)]">{title}</h2>
      </div>
      <p className="body-copy">{body}</p>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": project.name === "Lens" ? "SoftwareApplication" : "CreativeWork",
    name: project.name,
    url: `${siteUrl}/work/${project.slug}`,
    description: project.summary,
    creator: {
      "@type": "Person",
      name: "Allen Manoj",
      url: siteUrl,
    },
    keywords: project.tags.join(", "),
    applicationCategory: project.name === "Lens" ? "BusinessApplication" : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-[var(--bg)] px-11 pb-20 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto grid max-w-[1140px] grid-cols-[minmax(0,1fr)_minmax(280px,380px)] gap-12 max-[940px]:grid-cols-1">
          <Reveal className="min-w-0">
            <SectionEye label="System notes" />
            <h1 className="page-title mb-5">{project.name}</h1>
            <p className="lede max-w-[760px]">{project.outcome}</p>
            <p className="body-copy mt-5 max-w-[760px]">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.ctaHref}
                target={project.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={project.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
              >
                {project.ctaLabel} <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <Link
                href="/work"
                className="rounded-sm px-1 py-[10px] text-[13px] font-medium text-[var(--accent)] transition-opacity duration-150 hover:opacity-75"
              >
                Back to work →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ProjectVisual project={project} />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-8 max-w-[760px]">
            <SectionEye label="System breakdown" />
            <h2 className="section-title">
              What it replaces, how it works, and what changes.
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-5 max-[1040px]:grid-cols-1">
            <Reveal delay={0}>
              <DetailCard number="01" title="Problem" body={project.problem} />
            </Reveal>
            <Reveal delay={80}>
              <DetailCard number="02" title="System" body={project.system} />
            </Reveal>
            <Reveal delay={160}>
              <DetailCard number="03" title="Output" body={project.output} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--dark)] px-11 py-16 max-[900px]:px-6 max-[420px]:px-4">
        <Reveal className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-6">
          <div>
            <SectionEye label="Next step" dark />
            <h2 className="section-title section-title-dark max-w-[680px]">
              Bring a messy workflow, report, or product signal.
            </h2>
          </div>
          <a
            href="mailto:allen@allenmanoj.com?subject=System%20walkthrough"
            className="inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
          >
            Start a conversation <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
