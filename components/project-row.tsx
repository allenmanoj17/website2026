import { ArrowRight } from "lucide-react";

type BadgeVariant = "product" | "sim" | "build" | "internal";
type ProjectVisualType = "dashboard" | "audit" | "flow" | "evidence" | "tokens";

type ProjectRowProps = {
  name: string;
  slug?: string;
  description: string;
  summary?: string;
  outcome?: string;
  problem?: string;
  system?: string;
  output?: string;
  visual?: ProjectVisualType;
  badge: string;
  badgeVariant: BadgeVariant;
  tags: string[];
  href: string;
  tryHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const badgeClasses: Record<BadgeVariant, string> = {
  product: "bg-[var(--accent)] text-[var(--dark-text)]",
  sim: "bg-[var(--surface)] text-[var(--accent)]",
  build: "bg-[var(--surface)] text-[var(--accent)]",
  internal: "bg-[var(--surface)] text-[var(--accent)]",
};

export default function ProjectRow({
  name,
  description,
  outcome,
  problem,
  system,
  output,
  badge,
  badgeVariant,
  tags,
  href,
  tryHref,
}: ProjectRowProps) {
  const external = href.startsWith("http");
  const isLink = href !== "#";

  const content = (
    <div
      className={`group flex h-full min-w-0 flex-col justify-between rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)] transition-all duration-200 ease-in-out ${
        isLink ? "hover:shadow-[0_12px_36px_rgba(26,23,20,0.08)]" : ""
      }`}
    >
      <div>
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-sm px-2 py-[3px] font-mono text-[10px] tracking-[0.03em] ${badgeClasses[badgeVariant]}`}
          >
            {badge}
          </span>
          {badgeVariant === "product" ? (
            <span className="rounded-sm bg-[var(--accent)] px-2 py-[3px] font-mono text-[10px] tracking-[0.03em] text-[var(--dark-text)]">
              try it
            </span>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="card-title">
            {name}
          </h3>
          {badgeVariant === "sim" ? (
            <span className="rounded-sm bg-[var(--surface)] px-2 py-[3px] font-mono text-[10px] text-[var(--accent)]">
              simulated case study
            </span>
          ) : null}
        </div>
        {outcome ? (
          <p className="mt-2 text-[13px] font-medium leading-[1.6] text-[var(--accent)]">
            {outcome}
          </p>
        ) : null}
        <p className="mt-4 text-[14px] leading-[1.75] text-[var(--text-2)]">{description}</p>
        {problem && system && output ? (
          <div className="mt-5 grid gap-2">
            {[
              ["Problem", problem],
              ["System", system],
              ["Output", output],
            ].map(([label, text]) => (
              <div key={label} className="rounded bg-[var(--surface)] p-3">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--accent)]">
                  {label}
                </div>
                <p className="clamp-2 text-[12px] leading-[1.6] text-[var(--text-2)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="mt-6 flex min-w-0 flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[12px] font-medium ${
            isLink ? "text-[var(--accent)]" : "text-[var(--text-3)]"
          }`}
        >
          <span>
            {isLink
              ? badgeVariant === "product"
                ? "View Lens notes"
                : "View system notes"
              : "Request a walkthrough"}
          </span>
          <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
        </span>
        {tryHref ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-[12px] font-medium text-[var(--accent)]">
            <span>Try it</span>
            <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
          </span>
        ) : null}
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-[var(--surface-2)] px-[7px] py-[3px] font-mono text-[11px] text-[var(--text-2)] max-[900px]:hidden"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (!isLink) {
    return content;
  }

  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {content}
    </a>
  );
}
