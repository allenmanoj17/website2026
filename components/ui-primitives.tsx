import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Tone = "light" | "dark" | "red";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const buttonTone: Record<Tone, string> = {
  red: "bg-[var(--accent)] text-[var(--dark-text)] hover:opacity-90",
  dark: "bg-[var(--dark)] text-[var(--dark-text)] hover:opacity-90",
  light: "bg-[var(--panel)] text-[var(--text)] hover:bg-[var(--surface)]",
};

export function buttonClassName(tone: Tone = "red", className?: string) {
  return cn(
    "motion-button inline-flex items-center gap-2 rounded-sm px-5 py-[11px] text-[13px] font-medium transition-opacity duration-150 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]",
    buttonTone[tone],
    className,
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function ButtonLink({ href, children, tone = "red", className, ...props }: ButtonLinkProps) {
  const webExternal = href.startsWith("http");
  const external = webExternal || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = buttonClassName(tone, className);

  if (external) {
    return (
      <a
        href={href}
        target={webExternal ? "_blank" : undefined}
        rel={webExternal ? "noopener noreferrer" : undefined}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

export function panelClassName(tone: "light" | "dark" = "light", className?: string) {
  return cn(
    "rounded shadow-[0_12px_36px_rgba(26,23,20,0.04)]",
    tone === "dark" ? "bg-[var(--dark-2)] text-[var(--dark-text)]" : "bg-[var(--panel)] text-[var(--text)]",
    className,
  );
}

export function mutedEyebrowClassName(tone: "light" | "dark" = "light", className?: string) {
  return cn(
    "font-mono text-[11px] uppercase tracking-[0.08em]",
    tone === "dark" ? "text-[var(--dark-text-2)]" : "text-[var(--accent)]",
    className,
  );
}
