import SectionEye from "@/components/section-eye";

const columns = [
  {
    header: "Data & warehousing",
    items: ["Python", "SQL", "dbt", "BigQuery", "PostgreSQL", "Supabase", "Redshift", "Pandas", "data modelling", "quality checks"],
  },
  {
    header: "AI & machine learning",
    items: ["Claude API", "LangChain", "Firecrawl", "scikit-learn", "XGBoost", "SHAP", "TensorFlow", "Hugging Face", "prompt evaluation"],
  },
  {
    header: "Products & interfaces",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Flask", "Recharts", "dashboard UX", "admin tools"],
  },
  {
    header: "Cloud & automation",
    items: ["AWS", "S3", "Lambda", "EventBridge", "Docker", "GitHub Actions", "Celery", "Playwright", "Cloudflare Workers"],
  },
  {
    header: "Visualisation & BI",
    items: ["Power BI", "Tableau", "Looker Studio", "QuickSight", "KPI design", "cohorts", "retention views", "stakeholder reporting"],
  },
  {
    header: "Research & analysis",
    items: ["experiment design", "cross-validation", "model tuning", "error analysis", "classification", "clustering", "health research data"],
  },
];

export default function StackSection() {
  return (
    <section className="bg-[var(--bg)] px-11 py-24 max-[900px]:px-6 max-[900px]:py-16 max-[420px]:px-4">
      <div className="mx-auto max-w-[1140px]">
        <SectionEye label="Stack" />
        <div className="mb-8 max-w-[680px]">
          <h2 className="section-title">
            A practical stack for taking messy data to a working product.
          </h2>
          <p className="body-copy mt-3">
            I work across the data layer, model layer, automation layer, and interface layer. The
            value is being able to connect those parts into one working system.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {columns.map((column) => (
            <div
              key={column.header}
              className="min-w-0 rounded bg-[var(--panel)] p-6 transition-all duration-150 ease-in-out hover:shadow-[0_10px_28px_rgba(26,23,20,0.06)]"
            >
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-3)]">
                {column.header}
              </h3>
              <div className="flex flex-wrap gap-[6px]">
                {column.items.map((item) => (
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
