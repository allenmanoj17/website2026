import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionEye from "@/components/section-eye";
import { featuredProjects } from "@/data/site";

type Project = (typeof featuredProjects)[number];

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
            url: "/opengraph-image",
            width: 1200,
            height: 630,
            alt: `${project.name} by Allen Manoj`,
          },
        ],
      },
    };
  });
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "audit") {
    return (
      <div className="rounded bg-[var(--accent)] p-5 text-[var(--dark-text)]">
        <div className="mb-5 flex items-end justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em]">Lens audit</span>
          <span className="text-[52px] font-light leading-none">82</span>
        </div>
        <div className="space-y-3">
          {["Trust", "AI readability", "Conversion"].map((label, index) => (
            <div key={label}>
              <div className="mb-1 flex justify-between font-mono text-[11px]">
                <span>{label}</span>
                <span>{index === 0 ? "strong" : "fix"}</span>
              </div>
              <div className="h-2 rounded-sm bg-[rgba(255,247,238,0.24)]">
                <div
                  className="h-2 rounded-sm bg-[var(--dark-text)]"
                  style={{ width: `${index === 0 ? 78 : index === 1 ? 54 : 62}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded bg-[rgba(255,255,255,0.13)] p-4 text-[13px] leading-[1.55]">
          Add one clear service summary, proof point, and contact path.
        </div>
      </div>
    );
  }

  if (project.visual === "tokens") {
    return (
      <div className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.05)]">
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
          Token board
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["#891C1C", "#1A1714", "#F4F0EA", "#FFFCF9"].map((colour) => (
            <div key={colour} className="h-16 rounded-sm" style={{ background: colour }} />
          ))}
        </div>
        <div className="mt-5 grid gap-2 font-mono text-[12px] text-[var(--text-2)]">
          <span>tokens.json</span>
          <span>brand.css</span>
          <span>tailwind.config.ts</span>
        </div>
      </div>
    );
  }

  if (project.visual === "evidence") {
    return (
      <div className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.05)]">
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
          Evidence feed
        </div>
        {["source captured", "change scored", "alert routed"].map((item, index) => (
          <div
            key={item}
            className="mb-3 grid grid-cols-[32px_minmax(0,1fr)_48px] items-center gap-3 rounded bg-[var(--surface)] p-3 last:mb-0"
          >
            <span className="font-mono text-[11px] text-[var(--accent)]">0{index + 1}</span>
            <span className="text-[14px] text-[var(--text)]">{item}</span>
            <span className="font-mono text-[11px] text-[var(--text-3)]">{index === 1 ? "91" : "ok"}</span>
          </div>
        ))}
      </div>
    );
  }

  if (project.visual === "flow") {
    return (
      <div className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.05)]">
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
          Workflow map
        </div>
        <div className="grid gap-3">
          {["product usage", "lead score", "explanation", "sales action"].map((item) => (
            <div key={item} className="rounded bg-[var(--surface)] px-4 py-3 text-[14px] text-[var(--text)]">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.05)]">
      <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
        Reporting view
      </div>
      <div className="mb-5 grid grid-cols-3 gap-3">
        {["Revenue", "Exceptions", "Summary"].map((item) => (
          <div key={item} className="rounded bg-[var(--surface)] p-3">
            <div className="font-mono text-[11px] text-[var(--text-3)]">{item}</div>
            <div className="mt-3 h-8 rounded-sm bg-[var(--accent)] opacity-90" />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[74, 88, 55].map((width) => (
          <div key={width} className="h-3 rounded-sm bg-[var(--surface)]">
            <div className="h-3 rounded-sm bg-[var(--accent)]" style={{ width: `${width}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
      <h2 className="mb-3 text-[18px] font-medium leading-[1.35] text-[var(--text)]">{title}</h2>
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
        <div className="mx-auto grid max-w-[1140px] grid-cols-[minmax(0,1fr)_380px] gap-12 max-[900px]:grid-cols-1">
          <div className="min-w-0">
            <SectionEye label="System notes" />
            <h1 className="page-title mb-5">{project.name}</h1>
            <p className="lede max-w-[760px]">{project.outcome}</p>
            <p className="body-copy mt-5 max-w-[760px]">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.ctaHref}
                target={project.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={project.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
              >
                {project.ctaLabel} →
              </a>
              <Link
                href="/work"
                className="rounded-sm px-1 py-[10px] text-[13px] font-medium text-[var(--accent)] transition-opacity duration-150 hover:opacity-75"
              >
                Back to work →
              </Link>
            </div>
          </div>
          <ProjectVisual project={project} />
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
        <div className="mx-auto grid max-w-[1140px] grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          <DetailCard title="Problem" body={project.problem} />
          <DetailCard title="System" body={project.system} />
          <DetailCard title="Output" body={project.output} />
        </div>
      </section>

      <section className="bg-[var(--dark)] px-11 py-16 max-[900px]:px-6 max-[420px]:px-4">
        <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-6">
          <div>
            <SectionEye label="Next step" dark />
            <h2 className="section-title section-title-dark max-w-[680px]">
              Bring a messy workflow, report, or product signal.
            </h2>
          </div>
          <a
            href="mailto:allen@allenmanoj.com?subject=System%20walkthrough"
            className="rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
          >
            Start a conversation →
          </a>
        </div>
      </section>
    </>
  );
}
