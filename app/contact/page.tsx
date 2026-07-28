import type { Metadata } from "next";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  PenLine,
} from "lucide-react";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import { ButtonLink } from "@/components/ui-primitives";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Allen Manoj about a data system, AI workflow, monitoring product, reporting process, or relevant data and AI role.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Allen Manoj",
    description:
      "Send the current workflow, source material, report, or product idea. A polished specification is not required.",
    url: "https://allenmanoj.com/contact",
    siteName: "Allen Manoj",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Allen Manoj",
      },
    ],
  },
};

const conversationStarters = [
  {
    number: "01",
    title: "The current problem",
    text: "What is manual, fragmented, unreliable, or difficult to understand today?",
  },
  {
    number: "02",
    title: "The working context",
    text: "Which sources, reports, tools, teams, or interfaces are already involved?",
  },
  {
    number: "03",
    title: "The useful outcome",
    text: "What decision, action, or repeatable workflow should the system make easier?",
  },
];

const profileLinks = [
  { label: "GitHub", href: "https://github.com/allenmanoj17", icon: Code2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/allenmanoj", icon: BriefcaseBusiness },
  { label: "Medium", href: "https://allenmanoj.medium.com/", icon: PenLine },
  { label: "X", href: "https://x.com/AllenManoj87", icon: ArrowUpRight },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--dark)] px-11 pb-20 pt-32 max-[900px]:px-6 max-[900px]:pb-14 max-[900px]:pt-28 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="grid grid-cols-[minmax(0,1fr)_minmax(300px,400px)] items-end gap-12 max-[860px]:grid-cols-1">
            <div>
              <SectionEye label="Contact" dark />
              <h1 className="max-w-[820px] text-[clamp(44px,7vw,88px)] font-light leading-[0.98] tracking-normal text-[var(--dark-text)]">
                Send me the messy version.
              </h1>
              <p className="mt-6 max-w-[720px] text-[18px] font-light leading-[1.65] text-[var(--dark-text-2)] max-[640px]:text-[16px]">
                Explain what is not working, what information exists, and what a useful outcome
                would look like. You do not need a formal brief.
              </p>
            </div>
            <div className="border-l border-[rgba(255,247,238,0.16)] pl-7 max-[860px]:border-l-0 max-[860px]:border-t max-[860px]:pl-0 max-[860px]:pt-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
                Direct email
              </div>
              <a
                href="mailto:allenmanoj17@gmail.com"
                className="mt-3 block text-[clamp(18px,2.4vw,28px)] font-light leading-[1.3] text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-75"
              >
                allenmanoj17@gmail.com
              </a>
              <ButtonLink
                href="mailto:allenmanoj17@gmail.com?subject=System%20conversation"
                className="mt-6"
              >
                <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                Start a conversation
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-14 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <Reveal className="mb-9 max-w-[720px]">
            <SectionEye label="A useful first message" />
            <h2 className="section-title">Three details are enough to begin.</h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-4 max-[840px]:grid-cols-1">
            {conversationStarters.map((item, index) => (
              <Reveal key={item.number} delay={index * 70} className="h-full">
                <article className="flex h-full min-h-[220px] flex-col justify-between rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                  <span className="font-mono text-[11px] text-[var(--accent)]">{item.number}</span>
                  <div className="mt-8">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="body-copy mt-3">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-8 border-t border-[var(--surface-2)] pt-8 max-[760px]:grid-cols-1">
            <div>
              <h2 className="card-title">Projects, collaboration, and relevant roles</h2>
              <p className="body-copy mt-2 max-w-[680px]">
                Email is the main contact route. These profiles provide additional work, research,
                and professional context.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 py-2 text-[13px] text-[var(--accent)] transition-opacity duration-150 hover:opacity-75"
                >
                  <link.icon size={15} strokeWidth={1.8} aria-hidden="true" />
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.8}
                    className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
