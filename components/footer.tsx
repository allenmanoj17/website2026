import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  PenLine,
  ScanSearch,
} from "lucide-react";
import { ButtonLink } from "@/components/ui-primitives";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/allenmanoj17", icon: Code2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/allenmanoj", icon: BriefcaseBusiness },
  { label: "X", href: "https://x.com/AllenManoj87", icon: ArrowUpRight },
  { label: "Medium", href: "https://allenmanoj.medium.com/", icon: PenLine },
  { label: "Lens", href: "https://lens.allenmanoj.com", icon: ScanSearch },
];

const siteLinks = [
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] px-11 pb-8 pt-16 max-[900px]:px-6 max-[900px]:pt-12 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px] border-t border-[var(--surface-2)] pt-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-10 max-[760px]:grid-cols-1">
          <div>
            <div className="eyebrow mb-4">Allen Manoj</div>
            <p className="max-w-[660px] text-[clamp(22px,3vw,34px)] font-light leading-[1.2] text-[var(--text)]">
              Data and AI systems, from source evidence to operational decisions.
            </p>
            <p className="mt-3 font-mono text-[11px] leading-[1.6] text-[var(--text-3)]">
              Open to selected projects and relevant data or AI roles
            </p>
          </div>
          <ButtonLink href="mailto:allenmanoj17@gmail.com?subject=System%20conversation">
            <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
            Start a conversation
          </ButtonLink>
        </div>

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)_minmax(360px,0.7fr)] gap-14 border-t border-[var(--surface-2)] pt-8 max-[760px]:grid-cols-1 max-[640px]:gap-8">
          <a
            href="mailto:allenmanoj17@gmail.com"
            className="w-fit font-mono text-[12px] text-[var(--accent)] transition-opacity duration-150 hover:opacity-75"
          >
            allenmanoj17@gmail.com
          </a>
          <div className="grid grid-cols-2 gap-8 max-[480px]:grid-cols-1">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-3)]">
                Explore
              </div>
              <nav aria-label="Footer navigation" className="grid gap-2">
                {siteLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center justify-between gap-3 py-1 text-[14px] text-[var(--text-2)] transition-colors duration-150 hover:text-[var(--accent)]"
                  >
                    {link.label}
                    <ArrowRight
                      size={14}
                      strokeWidth={1.8}
                      className="transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-3)]">
                Elsewhere
              </div>
              <nav aria-label="Social links" className="grid gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between gap-3 py-1 text-[14px] text-[var(--text-2)] transition-colors duration-150 hover:text-[var(--accent)]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <link.icon size={14} strokeWidth={1.8} aria-hidden="true" />
                      {link.label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.8}
                      className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--surface-2)] pt-8">
          <div className="text-[clamp(48px,12vw,136px)] font-light leading-[0.9] tracking-normal text-[var(--text)]">
            Allen Manoj
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] leading-[1.6] text-[var(--text-3)]">
            <p>© 2026 Allen Manoj</p>
            <p>Sydney, Australia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
