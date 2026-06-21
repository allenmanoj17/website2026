type BadgeVariant = "product" | "sim" | "build" | "internal";

type ProjectRowProps = {
  name: string;
  description: string;
  outcome?: string;
  badge: string;
  badgeVariant: BadgeVariant;
  tags: string[];
  href: string;
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
  badge,
  badgeVariant,
  tags,
  href,
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
      </div>
      <div className="mt-6 flex min-w-0 flex-wrap items-center gap-2">
        <span
          className={`font-mono text-[12px] font-medium ${
            isLink ? "text-[var(--accent)]" : "text-[var(--text-3)]"
          }`}
        >
          {isLink
            ? badgeVariant === "product"
              ? "Try Lens for your website →"
              : "View project →"
            : "Request a walkthrough →"}
        </span>
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
