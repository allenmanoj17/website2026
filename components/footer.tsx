import Link from "next/link";

const socialLinks = [
  { label: "github", href: "https://github.com/allenmanoj17", external: true },
  { label: "linkedin", href: "https://linkedin.com/in/allenmanoj", external: true },
  { label: "x", href: "https://x.com/allenmanoj87", external: true },
  { label: "medium", href: "https://medium.com/@allenmanoj17", external: true },
  { label: "lens", href: "https://lens.allenmanoj.com", external: true },
];

const siteLinks = [
  { label: "work", href: "/work", external: false },
  { label: "writing", href: "/writing", external: false },
  { label: "about", href: "/about", external: false },
  { label: "privacy", href: "/privacy", external: false },
  { label: "email", href: "mailto:allen@allenmanoj.com", external: false },
];

function FooterLink({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external: boolean;
}) {
  const className =
    "font-mono text-[12px] text-[var(--text-2)] transition-colors duration-150 ease-in-out hover:text-[var(--accent)]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] px-11 py-10 max-[900px]:px-6 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-10 pb-8 max-[760px]:grid-cols-1">
          <div className="min-w-0">
            <div className="text-[15px] font-medium tracking-normal text-[var(--text)]">Allen Manoj</div>
            <p className="mt-2 max-w-[460px] text-[13px] leading-[1.65] text-[var(--text-2)]">
              Data systems, AI workflows, analytics products, and internal tools.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 max-[760px]:grid-cols-1">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-3)]">
                Social
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {socialLinks.map((link) => (
                  <FooterLink key={link.label} {...link} />
                ))}
              </div>
            </div>
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-3)]">
                Site
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {siteLinks.map((link) => (
                  <FooterLink key={link.label} {...link} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <div className="text-[clamp(42px,9vw,112px)] font-light leading-none tracking-normal text-[var(--text)]">
            Allen Manoj
          </div>
          <div className="mt-5 font-mono text-[12px] text-[var(--text-3)]">
            © 2026 Allen Manoj — Crafted with clarity, caffeine ☕
          </div>
        </div>
      </div>
    </footer>
  );
}
