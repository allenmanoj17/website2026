import type { Metadata } from "next";
import SectionEye from "@/components/section-eye";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How allenmanoj.com handles email contact, consent preferences and optional privacy-first analytics.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy — Allen Manoj",
    description:
      "How allenmanoj.com handles email contact, consent preferences and optional privacy-first analytics.",
    url: "https://allenmanoj.com/privacy",
    siteName: "Allen Manoj",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Privacy information for allenmanoj.com",
      },
    ],
  },
};

const items = [
  {
    title: "1. Who this policy applies to",
    body: "This policy applies to allenmanoj.com, a personal portfolio operated by Allen Manoj in Australia. For privacy questions, access requests, corrections, or complaints, contact allenmanoj17@gmail.com.",
  },
  {
    title: "2. Information collected",
    body: "This site has no accounts, checkout, newsletter, advertising pixels, or retargeting. If you email me, I receive the information you choose to include, such as your name, email address, company, project context, and message. Optional analytics is activated only after you allow it through the site’s preferences control.",
  },
  {
    title: "3. Optional analytics",
    body: "If you allow analytics, the site uses PostHog Cloud EU to understand traffic, content engagement, project interest, navigation and performance. Events are limited to page and section views, calls to action, project and article link clicks, reading milestones, contact starts, outbound profile links, writing-search length and result count, and Core Web Vitals. A first-party pseudonymous analytics identifier may be stored to measure sessions, return visits and aggregate events per visitor. Analytics can include page path, page type, referral domain, campaign source or medium, browser/device category, and country, region or city inferred from the network request. PostHog may process the connection IP to derive that geography; the project is configured to remove IP addresses from stored event data. Search terms, email contents, names, email addresses, form inputs, message content, hashed emails and person profiles are not sent to PostHog.",
  },
  {
    title: "4. Cookies and browser storage",
    body: "The site stores your analytics preference as a necessary first-party setting so it can remember your choice. Optional analytics storage is set only after you allow analytics and may be used for up to 90 days. You can change your choice at any time through Cookie preferences in the footer. Withdrawing consent stops analytics capture and clears PostHog browser storage. The site does not use advertising, retargeting, session replay, heatmaps, surveys, cross-device matching or persistent person profiles. Third-party websites opened through a link from this site have their own privacy practices.",
  },
  {
    title: "5. How information is used",
    body: "Email information is used to respond to your enquiry and manage any resulting professional conversation. Limited analytics is used to improve navigation, project proof, writing, and calls to action. Personal information is not sold, rented, or used for behavioural advertising.",
  },
  {
    title: "6. Service providers and overseas processing",
    body: "This site is hosted by Vercel. Email sent to the listed Gmail address is processed by Google. If you allow analytics, event data is processed by PostHog Cloud EU. These providers may process information outside Australia, including in the European Economic Area and other locations where they or their subprocessors operate. Information is disclosed only where needed to operate the site, receive email, or provide the analytics described here.",
  },
  {
    title: "7. Data protection and retention",
    body: "Reasonable technical and organisational measures are used to protect information, including HTTPS, restricted provider access and a defined analytics event schema. Analytics events are retained by PostHog for up to 12 months and are not exported into a separate visitor database. Email correspondence is retained only for as long as reasonably necessary to respond, maintain a professional record, meet legal obligations, or resolve a query.",
  },
  {
    title: "8. Your choices, access, and complaints",
    body: "You can accept, reject or later withdraw analytics through Cookie preferences in the footer. Do Not Track is honoured where supported and prevents PostHog from starting. You may ask to access or correct personal information you have provided by email. Analytics is pseudonymous and does not create person profiles, so it is generally not possible to identify or retrieve a particular visitor’s events. If you have a privacy complaint, email allenmanoj17@gmail.com with the details. You will receive an acknowledgement and a response within a reasonable period. If the matter is not resolved, you may contact the Office of the Australian Information Commissioner.",
  },
  {
    title: "9. Changes to this policy",
    body: "This policy may be updated when the site’s information-handling practices change. The current version will always be published on this page.",
  },
];

const cookies = [
  {
    name: "Analytics preference",
    purpose: "Remembers whether optional analytics is allowed or rejected.",
    duration: "12 months",
    required: "Yes",
  },
  {
    name: "PostHog analytics storage",
    purpose: "Measures optional sessions, return visits and aggregate engagement after consent.",
    duration: "Up to 90 days",
    required: "No",
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-[var(--bg)] px-11 pb-24 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[900px]">
        <SectionEye label="Privacy" />
        <h1 className="page-title mb-5">Privacy policy</h1>
        <p className="lede mb-12 max-w-[720px]">
          This policy explains how allenmanoj.com collects, uses, stores, and discloses personal
          information and limited technical data.
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
        <section aria-labelledby="cookie-summary" className="mt-10">
          <h2 id="cookie-summary" className="card-title">
            Cookie and storage summary
          </h2>
          <div className="mt-4 overflow-x-auto border border-[var(--surface-2)] bg-[var(--panel)]">
            <table className="w-full min-w-[620px] border-collapse text-left text-[13px]">
              <thead className="border-b border-[var(--surface-2)] bg-[var(--surface)] text-[var(--text)]">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium">Storage</th>
                  <th scope="col" className="px-4 py-3 font-medium">Purpose</th>
                  <th scope="col" className="px-4 py-3 font-medium">Duration</th>
                  <th scope="col" className="px-4 py-3 font-medium">Required</th>
                </tr>
              </thead>
              <tbody>
                {cookies.map((cookie) => (
                  <tr key={cookie.name} className="border-b border-[var(--surface-2)] last:border-0">
                    <th scope="row" className="px-4 py-3 align-top font-medium text-[var(--text)]">
                      {cookie.name}
                    </th>
                    <td className="px-4 py-3 align-top text-[var(--text-2)]">{cookie.purpose}</td>
                    <td className="px-4 py-3 align-top text-[var(--text-2)]">{cookie.duration}</td>
                    <td className="px-4 py-3 align-top text-[var(--text-2)]">{cookie.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
}
