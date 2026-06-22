import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/contact-section";
import PovSection from "@/components/pov-section";
import Reveal from "@/components/reveal";
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
      "01": "Clean pipelines, warehouse models, scheduled jobs, and quality checks.",
      "02": "Dashboard automation, summaries, alerts, and reporting delivery workflows.",
      "03": "Funnels, cohorts, lead scoring, conversion reporting, and revenue signals.",
      "04": "Classification, summarisation, monitoring, retrieval, scoring, and handoff.",
      "05": "Diagnostic portals, admin dashboards, monitoring screens, and data-backed MVPs.",
    }[service.number] ?? service.description,
  usefulWhen:
    {
      "01": "Reporting still depends on exports, spreadsheet logic, or data that lives across tools.",
      "02": "The same report is rebuilt every week and still needs a meeting to explain it.",
      "03": "Product, sales, or revenue teams need to know which users, leads, or accounts need attention.",
      "04": "A real workflow needs AI support, but also checks, logs, fallbacks, and review paths.",
      "05": "The data work needs an interface people can actually use without touching scripts.",
    }[service.number] ?? "",
}));

type FeaturedProject = (typeof featuredProjects)[number];

function HomeProjectCard({ project }: { project: FeaturedProject }) {
  const href = project.href === "#" ? "/#contact" : project.href;
  const external = href.startsWith("http");

  const content = (
    <div className="motion-project-card h-full rounded bg-[var(--dark-2)] p-6 shadow-[0_18px_46px_rgba(0,0,0,0.16)]">
      <h3 className="card-title card-title-dark">
        {project.name}
      </h3>
      {project.outcome ? (
        <p className="mt-2 text-[13px] font-medium leading-[1.6] text-[var(--dark-text)]">
          {project.outcome}
        </p>
      ) : null}
      <p className="clamp-2 mt-4 text-[14px] leading-[1.7] text-[var(--dark-text-2)]">
        {project.description}
      </p>
      <span className="mt-6 inline-flex rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 group-hover:opacity-90">
        {project.href === "#" ? "Request a walkthrough" : "View project"}{" "}
        <span className="motion-arrow">→</span>
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
      <section className="flex min-h-svh items-center bg-[var(--bg)] px-11 pb-16 pt-32 max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-28 max-[640px]:min-h-[92svh] max-[420px]:px-4">
        <div className="mx-auto w-full max-w-[1140px]">
          <div className="min-w-0 max-w-[900px]">
            <Reveal delay={0} className="mb-7 font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--accent)]">
              Data and AI systems, end to end
            </Reveal>
            <Reveal delay={90}>
              <h1 className="hero-title mb-5">Allen Manoj</h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="hero-statement mb-6 max-w-[900px]">
                Independent builder of data and AI systems.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="body-copy mb-9 max-w-[740px] text-[18px] max-[640px]:text-[16px]">
                I build data pipelines, analytics systems, AI workflows, and data products — end-to-end, from warehouse to interface.
              </p>
            </Reveal>
            <Reveal delay={330} className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <Link
                href="#systems"
                className="motion-button rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] hover:opacity-[0.88]"
              >
                View selected work
              </Link>
              <a
                href="mailto:allen@allenmanoj.com"
                className="rounded-sm px-1 py-[10px] text-[13px] font-medium text-[var(--accent)] transition-opacity duration-150 ease-in-out hover:opacity-75"
              >
                Start a conversation →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="systems" className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div>
              <SectionEye label="Selected systems" dark />
              <h2 className="section-title section-title-dark max-w-[680px]">
                Selected systems with clear inputs, outputs, and decisions.
              </h2>
              <p className="body-copy body-copy-dark mt-3 max-w-[560px]">
                A tighter view of the work. Full system notes live on the Work page.
              </p>
            </div>
            <Link
              href="/work"
              className="motion-button rounded-sm bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-[var(--dark-text)] hover:opacity-90"
            >
              View all work →
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
            {lensProject ? (
              <Reveal key={lensProject.name} className="col-span-2 max-[900px]:col-span-1">
                <a
                  href={lensProject.tryHref ?? lensProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="motion-project-card group block rounded bg-[var(--dark-2)] p-8 text-[var(--dark-text)] shadow-[0_18px_46px_rgba(0,0,0,0.16)] max-[640px]:p-5"
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_260px] gap-8 max-[900px]:grid-cols-1 max-[640px]:gap-6">
                  <div className="flex min-h-[240px] flex-col justify-between max-[900px]:min-h-0">
                    <div>
                      <div className="mb-5 inline-flex rounded-sm bg-[rgba(255,247,238,0.08)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text)]">
                        live product
                      </div>
                      <h3 className="text-[clamp(36px,5vw,64px)] font-light leading-none tracking-normal">
                        Lens
                      </h3>
                      <p className="mt-5 max-w-[620px] text-[20px] leading-[1.55] text-[rgba(255,247,238,0.9)] max-[640px]:text-[16px]">
                        Try Lens for your website. Get a prioritised fix list for trust, speed,
                        AI readability, and conversion.
                      </p>
                    </div>
                    <span className="motion-button mt-8 inline-flex w-fit rounded-sm bg-[var(--accent)] px-5 py-[11px] text-[13px] font-medium text-[var(--dark-text)] group-hover:opacity-90">
                      Run a Lens scan <span className="motion-arrow">→</span>
                    </span>
                  </div>
                  <div className="rounded bg-[rgba(255,247,238,0.07)] p-5">
                    <div className="mb-5 flex items-end justify-between gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
                        sample score
                      </span>
                      <span className="text-[46px] font-light leading-none">82</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        ["Trust", "78%"],
                        ["AI readability", "54%"],
                        ["Conversion", "62%"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between border-t border-[rgba(255,247,238,0.12)] pt-3">
                          <span className="text-[13px] text-[var(--dark-text-2)]">{label}</span>
                          <span className="font-mono text-[12px] text-[var(--dark-text)]">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 font-mono text-[12px] text-[var(--dark-text)]">
                      lens.allenmanoj.com →
                    </div>
                  </div>
                  </div>
                </a>
              </Reveal>
            ) : null}
            {otherProjects.map((project, index) => (
              <Reveal key={project.name} delay={(index + 1) * 80} className="h-full">
                <HomeProjectCard project={project} />
              </Reveal>
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
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-10 grid grid-cols-[minmax(0,620px)_minmax(260px,1fr)] items-end gap-12 max-[860px]:grid-cols-1">
            <div>
              <SectionEye label="Where I can help" />
              <h2 className="section-title max-w-[720px]">
                Useful systems for data-heavy work.
              </h2>
            </div>
            <div>
              <p className="body-copy">
                I help when the raw pieces exist, but the reporting, automation, or interface
                around them is still too manual to trust.
              </p>
            </div>
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
            <Reveal delay={360} className="h-full">
              <div className="flex min-h-[300px] flex-col justify-between rounded border border-[var(--surface-2)] bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)] max-[640px]:min-h-[230px] max-[640px]:p-5">
                <div>
                  <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
                    Start here
                  </div>
                  <p className="text-[24px] font-light leading-[1.2] text-[var(--text)]">
                    Send the messy report, workflow, spreadsheet, or product idea.
                  </p>
                </div>
                <a
                  href="mailto:allen@allenmanoj.com"
                  className="mt-8 inline-flex w-fit rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
                >
                  Start a conversation →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div>
        <PovSection />
      </div>

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
              <h2 className="section-title mb-4 max-w-[720px]">
                I work across the full path from data infrastructure to usable product.
              </h2>
              <p className="body-copy max-w-[720px]">
                I build data pipelines, reporting systems, monitoring workflows, AI workflows, and
                internal tools that turn unclear inputs into something people can inspect, trust,
                and act on.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link
                  href="/about"
                  className="rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 ease-in-out hover:opacity-90"
                >
                  Read the background →
                </Link>
                <Link
                  href="/work"
                  className="font-mono text-[13px] text-[var(--accent)] transition-opacity duration-150 ease-in-out hover:opacity-80"
                >
                  View systems →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
