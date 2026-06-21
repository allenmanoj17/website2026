export default function ContactSection() {
  const contactLinks = [
    { label: "Email", href: "mailto:allen@allenmanoj.com", text: "allen@allenmanoj.com" },
    { label: "GitHub", href: "https://github.com/allenmanoj17", text: "github.com/allenmanoj17" },
    { label: "LinkedIn", href: "https://linkedin.com/in/allenmanoj", text: "linkedin.com/in/allenmanoj" },
  ];

  return (
    <section id="contact" className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-[minmax(0,1fr)_380px] gap-14 max-[860px]:grid-cols-1">
        <div>
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
            Contact
          </div>
          <h2 className="max-w-[760px] text-[clamp(36px,5.2vw,72px)] font-light leading-[1.04] tracking-normal text-[var(--dark-text)]">
            Send me the messy version.
          </h2>
          <p className="mt-6 max-w-[680px] text-[16px] leading-[1.8] text-[var(--dark-text-2)]">
            Bring the dashboard nobody trusts, the recurring report, the scattered data sources, or
            the AI workflow you want to make real. I&apos;ll help turn it into a system.
          </p>
        </div>
        <div className="self-end">
          <div className="rounded bg-[var(--dark-2)] p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
              Best next step
            </div>
            <p className="mt-3 text-[14px] leading-[1.75] text-[var(--dark-text-2)]">
              Send the current workflow, report, spreadsheet, product idea, or rough problem. The
              imperfect version is enough to start.
            </p>
            <a
              href="mailto:allen@allenmanoj.com"
              className="mt-6 inline-flex items-center rounded-sm bg-[var(--accent)] px-[22px] py-[11px] text-[13px] font-medium text-[var(--dark-text)] transition-all duration-150 ease-in-out hover:opacity-90"
            >
              Start a conversation →
            </a>
          </div>
        </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 max-[820px]:grid-cols-1">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded bg-[var(--dark-2)] p-5 transition-colors duration-150 hover:bg-[rgba(255,247,238,0.08)]"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
                {link.label}
              </div>
              <div className="mt-3 text-[14px] leading-[1.6] text-[var(--dark-text)]">
                {link.text} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
