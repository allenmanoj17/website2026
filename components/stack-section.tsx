import { Bot, Database, LayoutDashboard, PackageCheck } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionEye from "@/components/section-eye";

const groups = [
  {
    title: "Data foundations",
    description: "Python, SQL, dbt, BigQuery, PostgreSQL, Supabase, Redshift, Pandas, NumPy.",
    icon: Database,
  },
  {
    title: "Reporting & decisions",
    description: "Power BI, Tableau, Looker Studio, QuickSight, Excel, KPI design, cohorts, stakeholder reporting.",
    icon: LayoutDashboard,
  },
  {
    title: "AI & analysis",
    description: "Claude API, LangChain, Firecrawl, scikit-learn, XGBoost, SHAP, TensorFlow, Keras, experiment design.",
    icon: Bot,
  },
  {
    title: "Products & automation",
    description: "Next.js, React, TypeScript, FastAPI, Flask, Streamlit, AWS, Docker, GitHub Actions, Playwright.",
    icon: PackageCheck,
  },
];

const compactTools = [
  "R",
  "Jupyter",
  "DBeaver",
  "Figma",
  "Jira",
  "Asana",
  "Twilio",
  "Selenium",
  "Cloudflare Workers",
  "Matplotlib",
  "Seaborn",
  "Recharts",
];

export default function StackSection() {
  return (
    <section className="bg-[var(--bg)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px]">
        <Reveal className="mb-10 grid grid-cols-[minmax(0,620px)_minmax(260px,1fr)] items-end gap-10 max-[900px]:grid-cols-1">
          <div>
            <SectionEye label="Stack" />
            <h2 className="section-title">
              Tools I use to take work from raw data to a working system.
            </h2>
          </div>
          <p className="body-copy max-w-[520px]">
            The stack matters because the work usually crosses layers: source data, models,
            automation, reporting, and the interface people use.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 max-[820px]:grid-cols-1">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <article className="h-full rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
                <div className="mb-5 grid size-10 place-items-center rounded-sm bg-[var(--surface)] text-[var(--accent)]">
                  <group.icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="card-title">{group.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-[var(--text-2)]">
                  {group.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-5 rounded bg-[var(--surface)] p-5">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
            Also comfortable with
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {compactTools.map((tool) => (
              <span key={tool} className="font-mono text-[12px] text-[var(--text-2)]">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
