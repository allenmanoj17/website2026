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
    <footer className="bg-[var(--bg)] px-11 pb-7 pt-10 max-[900px]:px-6 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px] border-t border-[var(--surface-2)] pt-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="eyebrow">Allen Manoj</div>
          <p className="text-[13px] leading-[1.6] text-[var(--text-2)]">
            Available for selected data and AI systems projects and relevant roles
          </p>
        </div>

        <div className="mt-6 grid grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] gap-10 border-t border-[var(--surface-2)] pt-6 max-[760px]:grid-cols-1 max-[760px]:gap-7">
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-3)]">
              Direct email
            </div>
            <a
              href="mailto:allenmanoj17@gmail.com"
              data-analytics-event="contact_started"
              data-analytics-location="footer"
              className="inline-flex items-center gap-2 text-[14px] text-[var(--accent)] transition-opacity duration-150 hover:opacity-75"
            >
              <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
              allenmanoj17@gmail.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-10 max-[500px]:grid-cols-1 max-[500px]:gap-7">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-3)]">
                Explore
              </div>
              <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
                {siteLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 py-1 text-[13px] text-[var(--text-2)] transition-colors duration-150 hover:text-[var(--accent)]"
                  >
                    {link.label}
                    <ArrowRight
                      size={12}
                      strokeWidth={1.8}
                      className="transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-3)]">
                Elsewhere
              </div>
              <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-analytics-event="outbound_link_clicked"
                    data-analytics-location="footer"
                    data-analytics-destination={link.label.toLowerCase()}
                    className="group inline-flex items-center gap-1.5 py-1 text-[13px] text-[var(--text-2)] transition-colors duration-150 hover:text-[var(--accent)]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <link.icon size={13} strokeWidth={1.8} aria-hidden="true" />
                      {link.label}
                    </span>
                    <ArrowUpRight
                      size={12}
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

        <div className="mt-9 border-t border-[var(--surface-2)] pt-6">
          <div className="text-[clamp(52px,9vw,108px)] font-light leading-[0.9] tracking-normal text-[var(--text)]">
            Allen Manoj
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] leading-[1.6] text-[var(--text-3)]">
            <p>© 2026 Allen Manoj</p>
            <p>Sydney, Australia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
