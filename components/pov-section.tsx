import Link from "next/link";
import SectionEye from "@/components/section-eye";

const items = [
  {
    statement: "Most teams don't have a data problem. They have a visibility problem.",
    support:
      "That is why I start by mapping inputs, definitions, and the decision the system needs to support before building the dashboard.",
  },
  {
    statement: "AI doesn't replace good data infrastructure. It rewards it.",
    support:
      "I treat models and prompts as one layer inside a workflow: inputs, checks, logs, fallbacks, and human-readable outputs matter just as much.",
  },
  {
    statement: "The best dashboard is the one nobody has to explain.",
    support:
      "I design reporting around prioritised actions, plain labels, and obvious next steps instead of chart density.",
  },
];

export default function PovSection() {
  return (
    <section id="thinking" className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px]">
        <SectionEye label="How I think" dark />
        <div className="mb-10 max-w-[700px]">
          <h2 className="section-title section-title-dark">
            Clear systems beat clever dashboards.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.8] text-[var(--dark-text-2)]">
            My work is about making data legible enough to change a decision, a workflow, or a
            product experience.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-1">
          {items.map((item) => (
            <div key={item.statement} className="rounded bg-[var(--dark-2)] p-6">
              <h3 className="card-title card-title-dark">
                {item.statement}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.85] text-[var(--dark-text-2)]">
                {item.support}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded bg-[var(--dark-2)] p-5">
          <p className="max-w-[520px] text-[14px] leading-[1.75] text-[var(--dark-text-2)]">
            I keep longer notes on systems, trade-offs, and what I learn while building.
          </p>
          <Link
            href="/writing"
            className="rounded-sm bg-[var(--accent)] px-4 py-2 font-mono text-[12px] text-[var(--dark-text)] transition-opacity duration-150 ease-in-out hover:opacity-90"
          >
            Read writing →
          </Link>
        </div>
      </div>
    </section>
  );
}
