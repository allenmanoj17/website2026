import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { cn, panelClassName } from "@/components/ui-primitives";

type ProofLink = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

export function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="bg-[var(--bg)] px-11 py-5 max-[900px]:px-6 max-[420px]:px-4">
      <div className="mx-auto grid max-w-[1140px] grid-cols-5 gap-2 rounded bg-[var(--surface)] p-2 max-[900px]:grid-cols-3 max-[560px]:grid-cols-1">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 rounded bg-[var(--panel)] px-3 py-3">
            <CheckCircle2 size={15} strokeWidth={1.8} className="shrink-0 text-[var(--accent)]" aria-hidden="true" />
            <span className="text-[13px] leading-[1.35] text-[var(--text-2)]">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ClientProblemCard({
  title,
  description,
  icon,
  tone = "light",
}: {
  title: string;
  description: string;
  icon: ReactNode;
  tone?: "light" | "dark" | "accent";
}) {
  const dark = tone === "dark";
  const accent = tone === "accent";

  return (
    <article
      className={cn(
        "group min-h-[260px] rounded p-6 transition-transform duration-200 ease-out hover:-translate-y-1 max-[640px]:min-h-[220px] max-[640px]:p-5",
        dark
          ? "bg-[var(--dark)] text-[var(--dark-text)]"
          : accent
            ? "bg-[var(--accent)] text-[var(--dark-text)]"
            : "bg-[var(--panel)] text-[var(--text)] shadow-[0_12px_36px_rgba(26,23,20,0.04)]",
      )}
    >
      <div
        className={cn(
          "mb-12 grid size-12 place-items-center rounded-sm max-[640px]:mb-8",
          dark || accent ? "bg-[rgba(255,247,238,0.12)]" : "bg-[var(--surface)]",
        )}
      >
        {icon}
      </div>
      <h3 className="text-[clamp(22px,2.4vw,32px)] font-light leading-[1.08] tracking-normal">{title}</h3>
      <p
        className={cn(
          "mt-4 max-w-[420px] text-[14px] leading-[1.65]",
          dark || accent ? "text-[rgba(255,247,238,0.76)]" : "text-[var(--text-2)]",
        )}
      >
        {description}
      </p>
    </article>
  );
}

export function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className={panelClassName("light", "h-full p-6 max-[640px]:p-5")}>
      <div className="mb-10 font-mono text-[11px] text-[var(--accent)]">{number}</div>
      <h3 className="text-[28px] font-light leading-[1.1] text-[var(--text)]">{title}</h3>
      <p className="mt-4 text-[14px] leading-[1.65] text-[var(--text-2)]">{description}</p>
    </article>
  );
}

export function ProofLinkRow({ links, dark = false }: { links: ProofLink[]; dark?: boolean }) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) => {
        const classes = cn(
          "inline-flex items-center gap-2 rounded-sm text-[13px] font-medium transition-opacity duration-150 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]",
          link.primary
            ? "bg-[var(--accent)] px-4 py-2 text-[var(--dark-text)]"
            : dark
              ? "px-1 py-2 text-[var(--dark-text)]"
              : "px-1 py-2 text-[var(--accent)]",
        );
        const icon = link.external ? (
          <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
        ) : (
          <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
        );

        if (link.external || link.href.startsWith("mailto:")) {
          return (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={classes}
            >
              {link.label} {icon}
            </a>
          );
        }

        return (
          <Link key={`${link.label}-${link.href}`} href={link.href} className={classes}>
            {link.label} {icon}
          </Link>
        );
      })}
    </div>
  );
}
