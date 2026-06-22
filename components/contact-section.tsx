import Reveal from "@/components/reveal";
import { ArrowRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";

const contactIcons = {
  Email: Mail,
  GitHub: Code2,
  LinkedIn: BriefcaseBusiness,
};

export default function ContactSection() {
  const contactLinks = [
    { label: "Email", href: "mailto:allen@allenmanoj.com", text: "allen@allenmanoj.com" },
    { label: "GitHub", href: "https://github.com/allenmanoj17", text: "github.com/allenmanoj17" },
    { label: "LinkedIn", href: "https://linkedin.com/in/allenmanoj", text: "linkedin.com/in/allenmanoj" },
  ];

  return (
    <section id="contact" className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px]">
        <Reveal className="grid grid-cols-[minmax(0,1fr)_minmax(280px,380px)] gap-14 max-[860px]:grid-cols-1 max-[640px]:gap-8">
          <div>
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
              Contact
            </div>
            <h2 className="max-w-[760px] text-[clamp(34px,5.2vw,72px)] font-light leading-[1.06] tracking-normal text-[var(--dark-text)]">
              Send me the messy version.
            </h2>
            <p className="mt-6 max-w-[680px] text-[16px] leading-[1.8] text-[var(--dark-text-2)] max-[640px]:text-[15px]">
              Bring the dashboard nobody trusts, the recurring report, or the AI workflow you want
              to make real. I&apos;ll help turn it into a system.
            </p>
          </div>
          <div className="self-end">
            <div className="rounded bg-[var(--dark-2)] p-5">
              <div className="mb-4 inline-flex rounded-sm bg-[rgba(255,247,238,0.08)] px-3 py-2 font-mono text-[11px] leading-[1.5] text-[var(--dark-text)]">
                Sydney · available for projects & roles
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
                Best next step
              </div>
              <p className="mt-3 text-[14px] leading-[1.75] text-[var(--dark-text-2)]">
                Send the workflow, report, product idea, or rough problem. The imperfect version is
                enough to start.
              </p>
              <a
                href="mailto:allen@allenmanoj.com"
                className="motion-button mt-6 inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-[22px] py-[11px] text-[13px] font-medium text-[var(--dark-text)] hover:opacity-90"
              >
                <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                Start a conversation <ArrowRight size={15} strokeWidth={1.8} className="motion-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 gap-4 max-[960px]:grid-cols-1">
          {contactLinks.map((link, index) => (
            <Reveal key={link.label} delay={index * 80}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="motion-project-card block rounded bg-[var(--dark-2)] p-5 transition-colors duration-150 hover:bg-[rgba(255,247,238,0.08)]"
              >
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
                  {(() => {
                    const Icon = contactIcons[link.label as keyof typeof contactIcons];
                    return Icon ? <Icon size={15} strokeWidth={1.8} aria-hidden="true" /> : null;
                  })()}
                  <span>{link.label}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[14px] leading-[1.6] text-[var(--dark-text)]">
                  <span>{link.text}</span>
                  <ArrowRight size={14} strokeWidth={1.8} className="motion-arrow" aria-hidden="true" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
