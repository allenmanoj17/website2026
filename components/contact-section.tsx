import Reveal from "@/components/reveal";
import { ButtonLink, mutedEyebrowClassName, panelClassName } from "@/components/ui-primitives";
import { ArrowRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";

const contactIcons = {
  Email: Mail,
  GitHub: Code2,
  LinkedIn: BriefcaseBusiness,
};

export default function ContactSection() {
  const contactLinks = [
    { label: "Email", href: "mailto:allenmanoj17@gmail.com", text: "allenmanoj17@gmail.com" },
    { label: "GitHub", href: "https://github.com/allenmanoj17", text: "github.com/allenmanoj17" },
    { label: "LinkedIn", href: "https://linkedin.com/in/allenmanoj", text: "linkedin.com/in/allenmanoj" },
  ];

  return (
    <section id="contact" className="bg-[var(--dark)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px]">
        <Reveal className="grid grid-cols-[minmax(0,1fr)_minmax(280px,380px)] gap-14 max-[860px]:grid-cols-1 max-[640px]:gap-8">
          <div>
            <div className={mutedEyebrowClassName("dark", "mb-6")}>
              Contact
            </div>
            <h2 className="max-w-[760px] text-[clamp(34px,5.2vw,72px)] font-light leading-[1.06] tracking-normal text-[var(--dark-text)]">
              Send me the messy version.
            </h2>
            <p className="mt-6 max-w-[680px] text-[16px] leading-[1.8] text-[var(--dark-text-2)] max-[640px]:text-[15px]">
              Bring the dashboard nobody trusts, the recurring report that takes too long, or the
              AI workflow that still needs structure. We can turn it into a clearer system.
            </p>
          </div>
          <div className="self-end">
            <div className={panelClassName("dark", "p-5")}>
              <div className="mb-4 inline-flex rounded-sm bg-[rgba(255,247,238,0.08)] px-3 py-2 font-mono text-[11px] leading-[1.5] text-[var(--dark-text)]">
                Sydney · open to focused projects and relevant full-time roles
              </div>
              <div className={mutedEyebrowClassName("dark")}>
                Best next step
              </div>
              <p className="mt-3 text-[14px] leading-[1.75] text-[var(--dark-text-2)]">
                Send the current workflow, source material, report, or product idea. The rough
                version is enough to begin.
              </p>
              <ButtonLink href="mailto:allenmanoj17@gmail.com" className="mt-6 px-[22px]">
                <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                Start a conversation <ArrowRight size={15} strokeWidth={1.8} className="motion-arrow" aria-hidden="true" />
              </ButtonLink>
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
                className={panelClassName("dark", "motion-project-card block p-5 transition-colors duration-150 hover:bg-[rgba(255,247,238,0.08)]")}
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
