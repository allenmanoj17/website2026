import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  PenLine,
  Users,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import StackSection from "@/components/stack-section";
import { experience, leadership, recognition } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Allen Manoj: Sydney-based data and AI systems builder with experience in reporting systems, analytics workflows, research data, and internal tools.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Allen Manoj",
    description:
      "Background, experience, research, leadership, and technical stack for Allen Manoj, a Sydney-based data and AI systems builder.",
    url: "https://allenmanoj.com/about",
    siteName: "Allen Manoj",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About Allen Manoj",
      },
    ],
  },
};

const education = [
  {
    name: "Master of Computer Science — Data Science and Artificial Intelligence",
    detail: "University of Sydney · 2024 - 2026",
  },
  {
    name: "B.E. Computer Science and Engineering",
    detail: "Sri Venkateswara College of Engineering · 2019 - 2023",
  },
];

const research = [
  {
    title: "Detection of Emotions Using a Boosted Machine Learning Approach",
    publisher: "IEEE Xplore · 2023",
    href: "https://ieeexplore.ieee.org/document/10040393",
  },
  {
    title: "A Deep Learning Framework for Multiclass Categorisation of Pulmonary Diseases",
    publisher: "IEEE Xplore · 2023",
    href: "https://ieeexplore.ieee.org/document/10235057",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/allenmanoj17", external: true, icon: Code2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/allenmanoj", external: true, icon: BriefcaseBusiness },
  { label: "X", href: "https://x.com/AllenManoj87", external: true, icon: ArrowRight },
  { label: "Medium", href: "https://allenmanoj.medium.com/", external: true, icon: PenLine },
  { label: "Email", href: "mailto:allen@allenmanoj.com", external: false, icon: Mail },
];

const buildPrinciples = [
  {
    title: "Data has to be explainable",
    text: "Definitions, ownership, freshness, and source logic should be clear before the dashboard is trusted.",
    icon: Database,
  },
  {
    title: "Automation needs a handoff",
    text: "A useful workflow does not just run. It tells someone what changed, what failed, and what should happen next.",
    icon: Workflow,
  },
  {
    title: "Interfaces are part of the system",
    text: "The output should be usable by the person making the decision, not just technically correct.",
    icon: CheckCircle2,
  },
];

const experienceHighlights = [
  "Reporting infrastructure",
  "Research data pipelines",
  "Product analytics",
  "Operational dashboards",
];

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-[6px]">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-sm bg-[var(--surface)] px-[7px] py-[3px] font-mono text-[11px] text-[var(--text-2)]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ExternalLink({
  label,
  href,
  external,
  icon: Icon,
}: {
  label: string;
  href: string;
  external: boolean;
  icon: typeof ArrowRight;
}) {
  const className =
    "inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--accent)] transition-opacity duration-150 hover:opacity-75";
  const content = (
    <>
      <Icon size={13} strokeWidth={1.8} aria-hidden="true" />
      <span>{label}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--bg)] px-11 pb-12 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <div className="grid grid-cols-[minmax(0,1fr)_300px] items-start gap-14 max-[900px]:grid-cols-1">
            <Reveal className="min-w-0">
              <SectionEye label="About" />
              <h1 className="page-title mb-6 max-w-[820px]">
                Data systems, reporting workflows, and useful internal tools.
              </h1>
              <p className="lede max-w-[760px]">
                I&apos;m Allen Manoj, based in Sydney. I build across the full path from data
                infrastructure to usable product.
              </p>
              <p className="body-copy mt-5 max-w-[720px]">
                My work sits where pipelines, metrics, automation, and interfaces meet. The goal is
                practical clarity: systems people can inspect, trust, and act on.
              </p>
              <div className="mt-8 grid max-w-[720px] grid-cols-2 gap-3 max-[620px]:grid-cols-1">
                {experienceHighlights.map((item) => (
                  <div key={item} className="rounded bg-[var(--panel)] px-4 py-3 shadow-[0_10px_28px_rgba(26,23,20,0.035)]">
                    <div className="flex items-center gap-2 text-[14px] font-medium leading-[1.5] text-[var(--text)]">
                      <CheckCircle2 size={15} strokeWidth={1.8} className="text-[var(--accent)]" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
                >
                  View selected work <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
                </Link>
                <a
                  href="mailto:allen@allenmanoj.com"
                  className="inline-flex items-center gap-2 font-mono text-[13px] text-[var(--accent)] transition-opacity duration-150 hover:opacity-80"
                >
                  <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                  Start a conversation
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="rounded bg-[var(--panel)] p-4 shadow-[0_16px_46px_rgba(26,23,20,0.06)]">
              <div className="relative aspect-[1/1] overflow-hidden rounded bg-[var(--surface)]">
                <Image
                  src="/allenmanoj.png"
                  alt="Portrait of Allen Manoj"
                  fill
                  sizes="(max-width: 900px) 100vw, 320px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="mt-5 grid gap-4 border-t border-[var(--surface-2)] pt-5">
                <div>
                  <div className="flex items-center gap-2 small-meta">
                    <MapPin size={13} strokeWidth={1.8} aria-hidden="true" />
                    <span>Based in</span>
                  </div>
                  <div className="mt-1 text-[15px] text-[var(--text)]">Sydney, Australia</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 small-meta">
                    <BriefcaseBusiness size={13} strokeWidth={1.8} aria-hidden="true" />
                    <span>Current</span>
                  </div>
                  <div className="mt-1 text-[15px] text-[var(--text)]">
                    Data & systems work at The University of Sydney
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                  {links.map((link) => (
                    <ExternalLink key={link.label} {...link} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-14 max-[900px]:px-6 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
            {buildPrinciples.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="grid size-10 place-items-center rounded-sm bg-[var(--surface)] text-[var(--accent)]">
                      <item.icon size={19} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div className="font-mono text-[12px] text-[var(--accent)]">0{index + 1}</div>
                  </div>
                  <h2 className="card-title">{item.title}</h2>
                  <p className="mt-3 text-[14px] leading-[1.7] text-[var(--text-2)]">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-10 grid grid-cols-[minmax(0,560px)_minmax(260px,1fr)] items-end gap-10 max-[900px]:grid-cols-1">
            <div>
              <SectionEye label="Experience" />
              <h2 className="section-title">
                Experience across data systems, research, and product analytics.
              </h2>
            </div>
            <p className="body-copy max-w-[520px]">
              I keep coming back to the same kind of work: turning messy operational data into
              reporting, analysis, and tools that teams can rely on.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
            {experience.map((item, index) => (
              <Reveal key={`${item.role}-${item.org}`} delay={index * 70}>
                <article className="h-full rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="card-title">{item.role}</h3>
                      <div className="small-meta mt-1 text-[var(--accent)]">{item.org}</div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[12px] text-[var(--text-3)]">
                      <BriefcaseBusiness size={13} strokeWidth={1.8} aria-hidden="true" />
                      <span>{item.dates}</span>
                    </div>
                  </div>
                  <p className="body-copy">{item.description}</p>
                  <div className="mt-4">
                    <TagList tags={item.tags.slice(0, 3)} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-8 max-w-[680px]">
            <SectionEye label="Education" />
            <h2 className="section-title">Formal study in computer science, data science, and AI.</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
            {education.map((item, index) => (
              <Reveal key={item.name} delay={index * 80}>
                <article className="h-full rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                  <div className="mb-5 grid size-10 place-items-center rounded-sm bg-[var(--surface)] text-[var(--accent)]">
                    <GraduationCap size={20} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="card-title">{item.name}</h3>
                  <div className="small-meta mt-3">{item.detail}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--dark)] px-11 py-20 text-[var(--dark-text)] max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-9 grid grid-cols-[minmax(0,560px)_minmax(260px,1fr)] items-end gap-10 max-[900px]:grid-cols-1">
            <div>
              <SectionEye label="Research" dark />
              <h2 className="section-title section-title-dark">
                Published work in machine learning and deep learning.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.75] text-[var(--dark-text-2)]">
              Research context across emotion detection and respiratory disease classification.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 max-[780px]:grid-cols-1">
            {research.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full rounded bg-[var(--dark-2)] p-6">
                  <div className="mb-5 grid size-10 place-items-center rounded-sm bg-[rgba(255,247,238,0.1)] text-[var(--dark-text)]">
                    <BookOpen size={20} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-[20px] font-medium leading-[1.35] text-[var(--dark-text)]">
                    {item.title}
                  </h3>
                  <div className="mt-3 font-mono text-[12px] text-[var(--dark-text-2)]">
                    {item.publisher}
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
                  >
                    View on IEEE <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-16 max-[900px]:px-6 max-[900px]:py-12 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-9 max-w-[720px]">
            <SectionEye label="Leadership & community" />
            <h2 className="section-title">Technical leadership, data communities, and student teams.</h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-1">
            {leadership.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="grid size-10 place-items-center rounded-sm bg-[var(--surface)] text-[var(--accent)]">
                      <Users size={19} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div className="small-meta text-[var(--accent)]">{item.period}</div>
                  </div>
                  <h3 className="card-title mt-3">{item.title}</h3>
                  <div className="small-meta mt-2">{item.org}</div>
                  <p className="body-copy mt-4">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-16 max-[900px]:px-6 max-[900px]:py-12 max-[420px]:px-4">
        <Reveal className="mx-auto grid max-w-[1140px] grid-cols-[minmax(240px,300px)_minmax(0,1fr)] gap-12 max-[900px]:grid-cols-1">
          <div>
            <SectionEye label="Recognition" />
            <h2 className="section-title">Selected signals from competitions and project work.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
            {recognition.map(([name, detail], index) => (
              <Reveal key={name} delay={index * 50}>
                <div className="h-full rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                  <div className="mb-4 grid size-9 place-items-center rounded-sm bg-[var(--surface)] text-[var(--accent)]">
                    <Award size={17} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className="card-title">{name}</div>
                  <div className="small-meta mt-2">{detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <StackSection />
    </>
  );
}
