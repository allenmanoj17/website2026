import type { Metadata } from "next";
import ArchiveItem from "@/components/archive-item";
import ProjectRow from "@/components/project-row";
import SectionEye from "@/components/section-eye";
import { archive, featuredProjects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected systems by Allen Manoj: Lens, reporting automation, web intelligence, revenue workflows, BrandScan, analytics, and ML projects.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-[var(--bg)] px-11 pb-20 pt-28 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto grid max-w-[1140px] grid-cols-[minmax(0,1fr)_320px] gap-12 max-[820px]:grid-cols-1">
          <div>
            <h1 className="page-title mb-5">
              Work
            </h1>
            <p className="lede max-w-[680px]">
              Selected systems across reporting automation, web intelligence, revenue workflows,
              and data products.
            </p>
          </div>
          <aside className="self-end rounded bg-[var(--panel)] p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-3)]">
              Project types
            </div>
            <p className="mt-3 text-[14px] leading-[1.75] text-[var(--text-2)]">
              Independent products, commercial demos, internal tools, and clearly labelled
              simulated case studies.
            </p>
          </aside>
        </div>
      </section>

      <section id="featured-systems" className="bg-[var(--bg)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEye label="Selected systems" />
              <h2 className="section-title max-w-[620px]">
                Systems with a clear input, output, and decision layer.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 max-[820px]:grid-cols-1">
            {featuredProjects.map((project) => (
              <ProjectRow key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="archive" className="bg-[var(--bg)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
        <div className="mx-auto max-w-[1140px]">
          <div className="mb-10 max-w-[720px]">
            <SectionEye label="Technical archive" />
            <h2 className="section-title">
              Earlier research, analytics, and applied ML work.
            </h2>
            <p className="body-copy mt-3">
              Kept available for technical context, but separated from the main commercial story.
            </p>
          </div>
          {archive.map((category, index) => (
            <div key={category.category}>
              <h2
                className={`mb-3 text-[13px] font-medium text-[var(--text)] ${
                  index === 0 ? "mt-0" : "mt-8"
                }`}
              >
                {category.category}
              </h2>
              {category.note ? (
                <p className="mb-4 text-[12px] italic text-[var(--text-3)]">{category.note}</p>
              ) : null}
              <div className="grid grid-cols-2 gap-5 max-[820px]:grid-cols-1">
                {category.items.map((item) => (
                  <ArchiveItem key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
