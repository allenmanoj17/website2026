import Link from "next/link";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";

const items = [
  {
    statement: "Most teams don't have a data problem. They have a visibility problem.",
    support:
      "Start with inputs, definitions, and the decision the system needs to support.",
  },
  {
    statement: "AI doesn't replace good data infrastructure. It rewards it.",
    support:
      "Models work best when inputs, checks, logs, fallbacks, and outputs are designed around them.",
  },
  {
    statement: "The best dashboard is the one nobody has to explain.",
    support:
      "Use plain labels, prioritised actions, and obvious next steps instead of chart density.",
  },
];

export default function PovSection() {
  return (
    <section id="thinking" className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px]">
        <Reveal>
          <SectionEye label="How I think" dark />
        </Reveal>
        <Reveal delay={80} className="mb-10 max-w-[700px]">
          <h2 className="section-title section-title-dark">
            Clear systems beat clever dashboards.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.75] text-[var(--dark-text-2)]">
            Notes on making data legible enough to change what happens next.
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-1">
          {items.map((item, index) => (
            <Reveal key={item.statement} delay={index * 80}>
              <div className="rounded bg-[var(--dark-2)] p-6">
              <h3 className="card-title card-title-dark">
                {item.statement}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.65] text-[var(--dark-text-2)]">
                {item.support}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160} className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded bg-[var(--dark-2)] p-5">
          <p className="max-w-[520px] text-[14px] leading-[1.65] text-[var(--dark-text-2)]">
            Longer notes on systems, trade-offs, and what I learn while building.
          </p>
          <Link
            href="/writing"
            className="motion-button rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] hover:opacity-90"
          >
            Read writing <span className="motion-arrow">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
