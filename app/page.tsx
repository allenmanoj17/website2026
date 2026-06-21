import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/contact-section";
import PovSection from "@/components/pov-section";
import ProfileVisual from "@/components/profile-visual";
import SectionEye from "@/components/section-eye";
import ServiceRow from "@/components/service-row";
import { featuredProjects, services } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Allen Manoj — Data, Reporting & AI Workflow Systems",
  },
  description:
    "Allen Manoj builds data pipelines, analytics systems, AI workflows, and data products end-to-end, from warehouse to interface.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Allen Manoj — Data, Reporting & AI Workflow Systems",
    description:
      "Data pipelines, analytics systems, AI workflows, and data products built end-to-end, from warehouse to interface.",
    url: "https://allenmanoj.com",
    siteName: "Allen Manoj",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Allen Manoj — Data, Reporting & AI Workflow Systems",
      },
    ],
  },
};

const lensProject = featuredProjects.find((project) => project.name === "Lens");
const otherProjects = featuredProjects.filter((project) => project.name !== "Lens");

const helpItems = services.map((service) => ({
  ...service,
  description:
    {
      "01": "Clean extraction, modelling, scheduled jobs, and checks when reporting depends on messy exports or disconnected tools.",
      "02": "Dashboards, summaries, anomaly checks, and delivery workflows that reduce manual reporting loops.",
      "03": "Funnels, cohorts, lead scoring, conversion reporting, and revenue signals that show where attention is needed.",
      "04": "Classification, summarisation, evidence collection, monitoring, scoring, retrieval, and handoff around real tasks.",
      "05": "Diagnostic portals, reporting products, admin dashboards, monitoring screens, and data-backed MVPs.",
    }[service.number] ?? service.description,
}));

type FeaturedProject = (typeof featuredProjects)[number];

function HomeProjectCard({ project }: { project: FeaturedProject }) {
  const href = project.href === "#" ? "/#contact" : project.href;
  const external = href.startsWith("http");

  const content = (
    <div className="h-full rounded bg-[var(--dark-2)] p-6 shadow-[0_18px_46px_rgba(0,0,0,0.16)]">
      <h3 className="card-title card-title-dark">
        {project.name}
      </h3>
      {project.outcome ? (
        <p className="mt-2 text-[13px] font-medium leading-[1.6] text-[var(--dark-text)]">
          {project.outcome}
        </p>
      ) : null}
      <p className="mt-4 text-[14px] leading-[1.75] text-[var(--dark-text-2)]">
        {project.description}
      </p>
      <span className="mt-6 inline-flex rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 group-hover:opacity-90">
        {project.href === "#" ? "Request a walkthrough →" : "View project →"}
      </span>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block h-full">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="group block h-full">
      {content}
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section className="flex min-h-[calc(100svh-52px)] items-center bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
        <div className="mx-auto w-full max-w-[1140px]">
          <div className="min-w-0 max-w-[900px]">
            <div className="mb-7 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)]">
              Data, reporting, and AI workflow systems
            </div>
            <h1 className="hero-title mb-5">
              Allen Manoj
            </h1>
            <p className="hero-statement mb-9 max-w-[900px]">
              I build data pipelines, analytics systems, AI workflows, and data products — end-to-end, from warehouse to interface.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <Link
                href="#systems"
                className="rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-all duration-150 ease-in-out hover:opacity-[0.88]"
              >
                View selected work
              </Link>
              <a
                href="mailto:allen@allenmanoj.com"
                className="rounded-sm px-1 py-[10px] text-[13px] font-medium text-[var(--accent)] transition-opacity duration-150 ease-in-out hover:opacity-75"
              >
                Start a conversation →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div>
              <SectionEye label="Selected systems" dark />
              <h2 className="section-title section-title-dark max-w-[680px]">
                Systems that turn messy inputs into useful outputs.
              </h2>
              <p className="body-copy body-copy-dark mt-3 max-w-[560px]">
                Product demos, independent builds, and clearly labelled simulated case studies.
              </p>
            </div>
            <Link
              href="/work"
              className="rounded-sm bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 ease-in-out hover:opacity-90"
            >
              View all work →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 max-[820px]:grid-cols-1">
            {lensProject ? (
              <a
                href={lensProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group col-span-2 rounded bg-[var(--accent)] p-8 text-[var(--dark-text)] shadow-[0_24px_70px_rgba(137,28,28,0.32)] transition-transform duration-200 ease-in-out hover:-translate-y-1 max-[820px]:col-span-1 max-[640px]:p-6"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_280px] gap-8 max-[820px]:grid-cols-1">
                  <div className="flex min-h-[320px] flex-col justify-between max-[820px]:min-h-0">
                    <div>
                      <div className="mb-5 inline-flex rounded-sm bg-[var(--dark-text)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
                        live product
                      </div>
                      <h3 className="text-[clamp(36px,5vw,64px)] font-light leading-none tracking-normal">
                        Lens
                      </h3>
                      <p className="mt-5 max-w-[720px] text-[20px] leading-[1.55] text-[rgba(255,247,238,0.9)] max-[640px]:text-[17px]">
                        Try Lens for your website. It scans trust, speed, AI readability, and
                        conversion signals, then turns them into prioritised fixes.
                      </p>
                    </div>
                    <span className="mt-8 inline-flex rounded-sm bg-[var(--dark-text)] px-5 py-[11px] text-[13px] font-medium text-[var(--accent)] transition-opacity duration-150 group-hover:opacity-90">
                      Run a Lens scan →
                    </span>
                  </div>
                  <div className="self-stretch rounded bg-[rgba(255,255,255,0.12)] p-5">
                    <div className="mb-5 flex items-end justify-between gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,247,238,0.72)]">
                        Sample audit
                      </span>
                      <span className="text-[48px] font-light leading-none">82</span>
                    </div>
                    <div className="space-y-4 text-[13px] leading-[1.55] text-[rgba(255,247,238,0.86)]">
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,247,238,0.58)]">
                          Top issue
                        </div>
                        <div className="mt-1">Pricing and next-step copy are hard for AI tools to cite.</div>
                      </div>
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,247,238,0.58)]">
                          Recommended fix
                        </div>
                        <div className="mt-1">Add one clear service summary, proof point, and contact path.</div>
                      </div>
                    </div>
                    <div className="mt-6 font-mono text-[12px] font-medium">
                      lens.allenmanoj.com →
                    </div>
                  </div>
                </div>
              </a>
            ) : null}
            {otherProjects.map((project) => (
              <HomeProjectCard key={project.name} project={project} />
            ))}
          </div>
          <Link
            href="/work#archive"
            className="mt-7 block font-mono text-[12.5px] text-[var(--dark-text-2)] transition-opacity duration-150 ease-in-out hover:opacity-75"
          >
            → technical archive — older ML, analytics, and cloud work
          </Link>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto grid max-w-[1140px] grid-cols-[360px_minmax(0,1fr)] gap-14 max-[980px]:grid-cols-1 max-[980px]:gap-9">
          <div className="self-start max-[980px]:max-w-[720px] min-[981px]:sticky min-[981px]:top-28">
            <SectionEye label="Where I can help" />
            <h2 className="section-title">
              Practical systems for messy operational work.
            </h2>
            <p className="body-copy mt-5">
              I help when the data exists, but the work still depends on manual reports,
              disconnected tools, or unclear metrics.
            </p>
            <a
              href="mailto:allen@allenmanoj.com"
              className="mt-7 inline-flex rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
            >
              Start a conversation →
            </a>
          </div>
          <div className="space-y-4">
            {helpItems.map((service, index) => (
              <div
                key={service.number}
                className="service-reveal"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <ServiceRow {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <PovSection />
      </div>

      <section className="bg-[var(--bg)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <div className="grid grid-cols-[minmax(0,1fr)_340px] gap-14 max-[900px]:grid-cols-1">
            <div className="min-w-0">
              <SectionEye label="About" />
              <h2 className="section-title mb-5 max-w-[760px]">
                I work across the full path from data infrastructure to usable product.
              </h2>
              <p className="body-copy mb-4 max-w-[760px]">
                I&apos;m Allen Manoj, based in Sydney. I build across data infrastructure,
                reporting, monitoring systems, AI workflows, and intelligence tools.
              </p>
              <p className="body-copy mb-5 max-w-[760px]">
                The common thread is turning unclear inputs into something people can inspect,
                trust, and act on.
              </p>
              <Link
                href="/about"
                className="font-mono text-[13px] text-[var(--accent)] transition-opacity duration-150 ease-in-out hover:opacity-80"
              >
                Full background →
              </Link>
            </div>
            <ProfileVisual />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
