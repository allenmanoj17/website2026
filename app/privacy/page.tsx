import type { Metadata } from "next";
import SectionEye from "@/components/section-eye";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy and cookie information for allenmanoj.com, including contact details, analytics status, and cookie use.",
  alternates: {
    canonical: "/privacy",
  },
};

const items = [
  {
    title: "Personal information",
    body: "If you email me, I receive the information you choose to send, such as your name, email address, company, project context, and message.",
  },
  {
    title: "Analytics",
    body: "This site does not currently run visitor analytics. If analytics are added later, this page should be updated before collection starts.",
  },
  {
    title: "Cookies",
    body: "This site does not use non-essential tracking cookies. There is no cookie banner because there are no advertising, retargeting, or behavioural analytics cookies currently set by the site.",
  },
  {
    title: "External links",
    body: "The site links to GitHub, LinkedIn, Medium, and Lens. Those services may collect data under their own privacy policies when you visit them.",
  },
  {
    title: "Contact",
    body: "For privacy questions or requests, email allen@allenmanoj.com.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-[var(--bg)] px-11 pb-24 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[900px]">
        <SectionEye label="Privacy" />
        <h1 className="page-title mb-5">Privacy policy</h1>
        <p className="lede mb-12 max-w-[720px]">
          Plain-English privacy and cookie information for allenmanoj.com.
        </p>
        <div className="space-y-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]"
            >
              <h2 className="card-title">{item.title}</h2>
              <p className="body-copy mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
