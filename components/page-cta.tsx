import { Mail } from "lucide-react";
import Reveal from "@/components/reveal";
import { ButtonLink } from "@/components/ui-primitives";

type PageCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  subject: string;
};

export default function PageCta({
  eyebrow,
  title,
  description,
  subject,
}: PageCtaProps) {
  const href = `mailto:allenmanoj17@gmail.com?subject=${encodeURIComponent(subject)}`;

  return (
    <section className="bg-[var(--bg)] px-11 py-16 max-[900px]:px-6 max-[900px]:py-12 max-[420px]:px-4">
      <Reveal className="mx-auto grid max-w-[1140px] grid-cols-[minmax(0,1fr)_auto] items-end gap-8 border-t border-[var(--surface-2)] pt-10 max-[760px]:grid-cols-1">
        <div>
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h2 className="max-w-[760px] text-[clamp(28px,4vw,44px)] font-light leading-[1.12] text-[var(--text)]">
            {title}
          </h2>
          <p className="body-copy mt-3 max-w-[660px]">{description}</p>
        </div>
        <ButtonLink
          href={href}
          data-analytics-event="contact_started"
          data-analytics-location="page_cta"
        >
          <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
          Start a conversation
        </ButtonLink>
      </Reveal>
    </section>
  );
}
