import SectionEye from "@/components/section-eye";

const columns = [
  {
    number: "01",
    header: "Data & warehousing",
    description: "Clean source data, model it properly, and keep reporting inputs reliable.",
    core: ["Python", "SQL", "dbt", "BigQuery", "PostgreSQL"],
    supporting: ["Supabase", "Redshift", "Pandas", "data modelling", "quality checks"],
  },
  {
    number: "02",
    header: "AI & machine learning",
    description: "Build model-assisted workflows around evidence, scoring, and human-readable output.",
    core: ["Claude API", "LangChain", "Firecrawl", "scikit-learn", "XGBoost"],
    supporting: ["SHAP", "TensorFlow", "Hugging Face", "prompt evaluation"],
  },
  {
    number: "03",
    header: "Products & interfaces",
    description: "Turn the data work into tools, dashboards, admin screens, and usable products.",
    core: ["Next.js", "React", "TypeScript", "FastAPI", "Tailwind CSS"],
    supporting: ["Flask", "Recharts", "dashboard UX", "admin tools"],
  },
  {
    number: "04",
    header: "Cloud & automation",
    description: "Schedule jobs, move data, monitor workflows, and ship systems that keep running.",
    core: ["AWS", "S3", "Lambda", "EventBridge", "Docker"],
    supporting: ["GitHub Actions", "Celery", "Playwright", "Cloudflare Workers"],
  },
  {
    number: "05",
    header: "Visualisation & BI",
    description: "Design metrics, reporting views, and decision layers people can actually use.",
    core: ["Power BI", "Tableau", "Looker Studio", "QuickSight"],
    supporting: ["KPI design", "cohorts", "retention views", "stakeholder reporting"],
  },
  {
    number: "06",
    header: "Research & analysis",
    description: "Evaluate models and analysis carefully enough for the result to be trusted.",
    core: ["experiment design", "cross-validation", "model tuning", "error analysis"],
    supporting: ["classification", "clustering", "health research data"],
  },
];

export default function StackSection() {
  return (
    <section className="bg-[var(--bg)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px]">
        <SectionEye label="Stack" />
        <div className="mb-10 grid grid-cols-[minmax(0,680px)_minmax(220px,1fr)] gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-5">
          <div>
            <h2 className="section-title">
              The stack is broad because the systems are end-to-end.
            </h2>
            <p className="body-copy mt-3">
              I work across the data layer, model layer, automation layer, and interface layer. The
              value is being able to connect those parts into one working system.
            </p>
          </div>
          <div className="self-end rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)]">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
              Working range
            </div>
            <p className="mt-3 text-[14px] leading-[1.7] text-[var(--text-2)]">
              Warehouse logic, model workflows, scheduled automation, and the interface people use
              to make decisions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {columns.map((column) => (
            <div
              key={column.header}
              className="group min-w-0 rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.035)] transition-all duration-150 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_16px_42px_rgba(26,23,20,0.07)]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[11px] text-[var(--accent)]">{column.number}</div>
                  <h3 className="mt-3 text-[18px] font-medium leading-[1.35] text-[var(--text)]">
                    {column.header}
                  </h3>
                </div>
                <div className="h-px min-w-[48px] flex-1 translate-y-[10px] bg-[var(--surface-2)] transition-colors duration-150 group-hover:bg-[var(--accent)]" />
              </div>
              <p className="mb-5 text-[14px] leading-[1.7] text-[var(--text-2)]">
                {column.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-[6px]">
                {column.core.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm bg-[var(--accent)] px-[7px] py-[3px] font-mono text-[11px] text-[var(--dark-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {column.supporting.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm bg-[var(--surface)] px-[7px] py-[3px] font-mono text-[11px] text-[var(--text-2)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
