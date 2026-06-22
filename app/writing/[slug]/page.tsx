import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";
import { writingNotes } from "@/data/site";

const siteUrl = "https://allenmanoj.com";

function getNote(slug: string) {
  return writingNotes.find((note) => note.slug === slug);
}

export function generateStaticParams() {
  return writingNotes.map((note) => ({ slug: note.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const note = getNote(slug);

    if (!note) {
      return {};
    }

    return {
      title: note.title,
      description: note.description,
      alternates: {
        canonical: `/writing/${note.slug}`,
      },
      openGraph: {
        title: `${note.title} — Allen Manoj`,
        description: note.description,
        url: `${siteUrl}/writing/${note.slug}`,
        siteName: "Allen Manoj",
        images: [
          {
            url: "/opengraph-image",
            width: 1200,
            height: 630,
            alt: `${note.title} by Allen Manoj`,
          },
        ],
      },
    };
  });
}

export default async function WritingNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.description,
    datePublished: `${note.date}-01-01`,
    dateModified: `${note.date}-01-01`,
    author: {
      "@type": "Person",
      name: "Allen Manoj",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Allen Manoj",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/writing/${note.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-[var(--bg)] px-11 pb-24 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <SectionEye label="Writing" />
            <h1 className="page-title mb-6">{note.title}</h1>
            <p className="lede max-w-[760px]">{note.description}</p>
            <div className="mt-5 font-mono text-[12px] text-[var(--text-3)]">Note · {note.date}</div>
          </Reveal>

          <Reveal delay={120} className="mt-10 rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)] max-[640px]:p-5">
            <p className="text-[18px] font-light leading-[1.65] text-[var(--text)] max-[640px]:text-[16px]">
              {note.intro}
            </p>
          </Reveal>

          <div className="mt-14 space-y-10">
            {note.sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 70}>
              <section>
                <h2 className="card-title">{section.heading}</h2>
                <p className="body-copy mt-4 text-[16px] max-[640px]:text-[15px]">{section.body}</p>
              </section>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
          <section>
            <h2 className="card-title">Practical examples</h2>
            <div className="mt-5 grid gap-3">
              {note.examples.map((example, index) => (
                <div
                  key={example}
                  className="grid grid-cols-[36px_minmax(0,1fr)] gap-4 rounded bg-[var(--panel)] p-4 shadow-[0_12px_36px_rgba(26,23,20,0.04)]"
                >
                  <span className="grid size-8 place-items-center rounded-sm bg-[var(--accent)] font-mono text-[11px] text-[var(--dark-text)]">
                    0{index + 1}
                  </span>
                  <p className="text-[15px] leading-[1.7] text-[var(--text-2)]">{example}</p>
                </div>
              ))}
            </div>
          </section>
          </Reveal>

          <Reveal className="mt-14 rounded bg-[var(--dark)] p-6 text-[var(--dark-text)] max-[640px]:p-5">
          <section>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
              What this changes in a build
            </div>
            <p className="text-[17px] font-light leading-[1.65] max-[640px]:text-[16px]">
              {note.takeaway}
            </p>
          </section>
          </Reveal>

          <Reveal className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--surface-2)] pt-8">
            <Link
              href="/writing"
              className="rounded-sm bg-[var(--accent)] px-5 py-[10px] text-[13px] font-medium text-[var(--dark-text)] transition-opacity duration-150 hover:opacity-90"
            >
              Back to writing →
            </Link>
            <a
              href="mailto:allen@allenmanoj.com"
              className="font-mono text-[13px] text-[var(--accent)] transition-opacity duration-150 hover:opacity-80"
            >
              Start a conversation →
            </a>
          </Reveal>
        </div>
      </article>
    </>
  );
}
