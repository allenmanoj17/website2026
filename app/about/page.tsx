import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  PenLine,
  Users,
} from "lucide-react";
import Reveal from "@/components/reveal";
import PageCta from "@/components/page-cta";
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
  { label: "Email", href: "mailto:allenmanoj17@gmail.com", external: false, icon: Mail },
];

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
                I build the path from source data to operational software.
              </h1>
              <p className="lede max-w-[760px]">
                I&apos;m Allen Manoj, based in Sydney. I build across the full path from data
                infrastructure to usable product.
              </p>
              <p className="body-copy mt-5 max-w-[720px]">
                My work sits where data contracts, analytical logic, automation, monitoring, and
                interfaces meet. The goal is practical clarity: systems whose inputs, assumptions,
                failure modes, and outputs are clear enough to trust.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link
                  href="/work"
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-location="about_intro"
                  data-analytics-destination="work"
                  className="inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
                >
                  View selected work <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
                </Link>
                <a
                  href="mailto:allenmanoj17@gmail.com"
                  data-analytics-event="contact_started"
                  data-analytics-location="about_intro"
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
                    <span>Work</span>
                  </div>
                  <div className="mt-1 text-[15px] text-[var(--text)]">
                    Data systems, analytics, applied AI, and operational tools
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

          <ol className="border-t border-[var(--surface-2)]">
            {experience.map((item, index) => (
              <li
                key={`${item.role}-${item.org}`}
                className="border-b border-[var(--surface-2)]"
              >
                <Reveal
                  delay={index * 70}
                  className="grid grid-cols-[190px_minmax(0,1fr)] gap-10 py-7 max-[700px]:grid-cols-1 max-[700px]:gap-3"
                >
                  <div className="flex items-start gap-2 font-mono text-[12px] text-[var(--text-3)]">
                    <BriefcaseBusiness size={13} strokeWidth={1.8} aria-hidden="true" />
                    <span>{item.dates}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="card-title">{item.role}</h3>
                    <div className="small-meta mt-1 text-[var(--accent)]">{item.org}</div>
                    <p className="body-copy mt-4 max-w-[760px]">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
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
          <Reveal className="mb-10 max-w-[760px]">
            <SectionEye label="Leadership, community & recognition" />
            <h2 className="section-title">
              Technical leadership, shared learning, and selected project signals.
            </h2>
          </Reveal>
          <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] gap-8 max-[900px]:grid-cols-1">
            <div className="grid gap-3">
              {leadership.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                    <div className="grid size-10 place-items-center rounded-sm bg-[var(--surface)] text-[var(--accent)]">
                      <Users size={19} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="card-title">{item.title}</h3>
                        <div className="small-meta text-[var(--accent)]">{item.period}</div>
                      </div>
                      <div className="small-meta mt-2">{item.org}</div>
                      <p className="body-copy mt-3">{item.detail}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <div className="rounded bg-[var(--surface)] p-5">
                <h3 className="mb-4 text-[17px] font-medium text-[var(--text)]">
                  Selected recognition
                </h3>
                <div className="grid gap-0">
                  {recognition.map(([name, detail]) => (
                    <div
                      key={name}
                      className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-t border-[var(--surface-2)] py-4"
                    >
                      <Award
                        size={16}
                        strokeWidth={1.8}
                        className="mt-0.5 text-[var(--accent)]"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-[15px] font-medium text-[var(--text)]">{name}</div>
                        <div className="small-meta mt-1">{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StackSection />
      <PageCta
        eyebrow="Projects and relevant roles"
        title="Looking for someone who can connect data, decisions, and usable software?"
        description="Share the current problem, role, or system context. A polished brief is not required."
        subject="Project or role conversation"
      />
    </>
  );
}
