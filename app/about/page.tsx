import type { Metadata } from "next";
import SectionEye from "@/components/section-eye";
import StackSection from "@/components/stack-section";
import { experience, recognition } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Allen Manoj: Sydney-based data and AI systems builder with experience in reporting systems, analytics workflows, research data, and internal tools.",
  alternates: {
    canonical: "/about",
  },
};

const education = [
  {
    name: "Master of Computer Science — Data Science and Artificial Intelligence",
    detail: "University of Sydney · 2024 – 2026",
  },
  {
    name: "B.E. Computer Science and Engineering",
    detail: "Sri Venkateswara College of Engineering · 2019 – 2023",
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
  { label: "GitHub", href: "https://github.com/allenmanoj17", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/allenmanoj", external: true },
  { label: "X", href: "https://x.com/AllenManoj87", external: true },
  { label: "Medium", href: "https://allenmanoj.medium.com/", external: true },
  { label: "Lens", href: "https://lens.allenmanoj.com", external: true },
  { label: "Email", href: "mailto:allen@allenmanoj.com", external: false },
];

const focus = ["Data pipelines", "Reporting automation", "AI workflows", "Analytics products", "Internal tools"];

const profileFacts = [
  ["Based in", "Sydney, Australia"],
  ["Current", "Project/Program Officer (Data & Systems)"],
  ["Study", "MCS · Data Science & AI, University of Sydney"],
];

const leadership = [
  {
    title: "Co-Lead, Omdena Nellore Chapter",
    detail: "Data leadership and community coordination around applied AI and data projects.",
  },
  {
    title: "Microsoft Student Ambassador",
    detail: "Technical outreach, learning sessions, and student developer community involvement.",
  },
  {
    title: "Engineering society leadership",
    detail: "Student leadership at Sri Venkateswara College of Engineering.",
  },
];

function SocialLink({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external: boolean;
}) {
  const className =
    "font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-75";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label} →
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {label} →
    </a>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--bg)] px-11 pb-16 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto grid max-w-[1140px] grid-cols-[minmax(0,1fr)_380px] gap-12 max-[920px]:grid-cols-1">
          <div className="min-w-0">
            <SectionEye label="About" />
            <h1 className="page-title mb-6">I build the path from data to usable systems.</h1>
            <p className="lede max-w-[780px]">
              I work across the full path from data infrastructure to usable product.
            </p>
            <div className="mt-7 max-w-[760px] space-y-4">
              <p className="body-copy">
                I&apos;m based in Sydney and build data, reporting, and AI workflow systems:
                pipelines, dashboards, monitoring workflows, intelligence tools, and internal
                products.
              </p>
              <p className="body-copy">
                The thread across the work is practical clarity: clean inputs, reliable metrics,
                maintainable automation, and interfaces that help someone make a better decision.
              </p>
            </div>
            <div className="mt-8 grid max-w-[760px] grid-cols-3 gap-3 max-[720px]:grid-cols-1">
              {focus.slice(0, 3).map((item) => (
                <div key={item} className="rounded bg-[var(--panel)] p-4 shadow-[0_12px_36px_rgba(26,23,20,0.035)]">
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
                    Focus
                  </div>
                  <div className="mt-2 text-[15px] font-medium text-[var(--text)]">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="self-start rounded bg-[var(--dark)] p-6 text-[var(--dark-text)] shadow-[0_18px_46px_rgba(0,0,0,0.14)]">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
                  Allen Manoj
                </div>
                <div className="mt-4 text-[56px] font-light leading-none">AM</div>
              </div>
              <div className="rounded bg-[var(--accent)] px-3 py-2 font-mono text-[11px] text-[var(--dark-text)]">
                data → system
              </div>
            </div>
            <dl className="space-y-4">
              {profileFacts.map(([label, value]) => (
                <div key={label} className="border-t border-[rgba(255,247,238,0.14)] pt-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
                    {label}
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.7] text-[var(--dark-text)]">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-[rgba(255,247,238,0.14)] pt-5">
              {links.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-11 py-20 max-[900px]:px-6 max-[900px]:py-12 max-[420px]:px-4">
        <div className="mx-auto grid max-w-[1140px] grid-cols-[300px_minmax(0,1fr)] gap-12 max-[900px]:grid-cols-1">
          <div>
            <SectionEye label="Experience" />
            <h2 className="section-title">Relevant data, systems, and product work.</h2>
            <p className="body-copy mt-4">
              Kept focused on roles that support the current story: data systems, reporting,
              product analytics, research data, and decision tooling.
            </p>
          </div>
          <div className="relative space-y-4 before:absolute before:left-[10px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--surface-2)] max-[720px]:before:hidden">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.org}`}
                className="relative grid grid-cols-[minmax(0,1fr)_210px] gap-6 rounded bg-[var(--panel)] p-5 pl-10 shadow-[0_12px_36px_rgba(26,23,20,0.04)] max-[720px]:grid-cols-1 max-[720px]:pl-5"
              >
                <div className="absolute left-[5px] top-7 size-[11px] rounded-full bg-[var(--accent)] max-[720px]:hidden" />
                <div>
                  <h3 className="card-title">{item.role}</h3>
                  <p className="body-copy mt-2">{item.description}</p>
                </div>
                <div className="small-meta">
                  <div className="text-[var(--accent)]">{item.org}</div>
                  <div>{item.dates}</div>
                  <div className="mt-3 flex flex-wrap gap-[5px]">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-sm bg-[var(--surface)] px-[7px] py-[3px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-16 max-[900px]:px-6 max-[900px]:py-12 max-[420px]:px-4">
        <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-10 max-[820px]:grid-cols-1">
          <div>
            <SectionEye label="Education" />
            <div className="space-y-3">
              {education.map((item) => (
                <article
                  key={item.name}
                  className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]"
                >
                  <h3 className="card-title">{item.name}</h3>
                  <div className="small-meta mt-2">{item.detail}</div>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionEye label="Research" />
            <p className="body-copy mb-5">
              Published work in machine learning and deep learning for emotion detection and
              respiratory disease classification.
            </p>
            <div className="space-y-3">
              {research.map((item) => (
                <article
                  key={item.title}
                  className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]"
                >
                  <h3 className="card-title">{item.title}</h3>
                  <div className="small-meta mt-2">{item.publisher}</div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
                  >
                    View on IEEE →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-16 max-[900px]:px-6 max-[900px]:py-12 max-[420px]:px-4">
        <div className="mx-auto grid max-w-[1140px] grid-cols-[260px_minmax(0,1fr)] gap-12 max-[900px]:grid-cols-1">
          <div>
            <SectionEye label="Leadership & community" />
            <h2 className="section-title">Where I have led and contributed.</h2>
          </div>
          <div className="grid grid-cols-3 gap-3 max-[900px]:grid-cols-1">
            {leadership.map((item) => (
              <article
                key={item.title}
                className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]"
              >
                <h3 className="card-title">{item.title}</h3>
                <p className="body-copy mt-3">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] px-11 py-16 max-[900px]:px-6 max-[900px]:py-12 max-[420px]:px-4">
        <div className="mx-auto grid max-w-[1140px] grid-cols-[260px_minmax(0,1fr)] gap-12 max-[900px]:grid-cols-1">
          <div>
            <SectionEye label="Recognition" />
            <h2 className="section-title">Awards and recognition.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 max-[760px]:grid-cols-1">
            {recognition.map(([name, detail]) => (
              <div
                key={name}
                className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]"
              >
                <div className="card-title">{name}</div>
                <div className="small-meta mt-2">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StackSection />
    </>
  );
}
