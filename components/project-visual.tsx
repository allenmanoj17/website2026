import type { ReactNode } from "react";

type Project = {
  name: string;
  visual?: "dashboard" | "audit" | "flow" | "evidence" | "tokens";
};

type ProjectVisualProps = {
  project: Project;
  tone?: "light" | "dark";
  compact?: boolean;
};

const surfaceClass = {
  light: "bg-[var(--panel)] text-[var(--text)] shadow-[0_12px_36px_rgba(26,23,20,0.05)]",
  dark: "bg-[rgba(255,247,238,0.07)] text-[var(--dark-text)]",
};

const mutedTextClass = {
  light: "text-[var(--text-2)]",
  dark: "text-[var(--dark-text-2)]",
};

const insetClass = {
  light: "bg-[var(--surface)]",
  dark: "bg-[rgba(255,247,238,0.09)]",
};

const accentBarClass = {
  light: "bg-[var(--accent)]",
  dark: "bg-[var(--dark-text)]",
};

function VisualShell({
  label,
  tone,
  compact,
  children,
}: {
  label: string;
  tone: "light" | "dark";
  compact: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`rounded p-5 ${surfaceClass[tone]} ${compact ? "min-h-[180px]" : ""}`}>
      <div
        className={`mb-5 font-mono text-[11px] uppercase tracking-[0.08em] ${
          tone === "dark" ? "text-[var(--dark-text)]" : "text-[var(--accent)]"
        }`}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

export default function ProjectVisual({
  project,
  tone = "light",
  compact = false,
}: ProjectVisualProps) {
  if (project.visual === "audit") {
    return (
      <VisualShell label="Lens audit" tone={tone} compact={compact}>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div className={`font-mono text-[11px] leading-[1.5] ${mutedTextClass[tone]}`}>
            site health
          </div>
          <span className={`${compact ? "text-[42px]" : "text-[52px]"} font-light leading-none`}>
            82
          </span>
        </div>
        <div className="space-y-3">
          {[
            ["Trust", 78, "strong"],
            ["AI readability", 54, "fix"],
            ["Conversion", 62, "fix"],
          ].map(([label, width, status]) => (
            <div key={label}>
              <div className={`mb-1 flex justify-between font-mono text-[11px] ${mutedTextClass[tone]}`}>
                <span>{label}</span>
                <span>{status}</span>
              </div>
              <div className={`h-2 rounded-sm ${insetClass[tone]}`}>
                <div
                  className={`h-2 rounded-sm ${accentBarClass[tone]}`}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        {!compact ? (
          <div className={`mt-5 rounded p-4 text-[13px] leading-[1.55] ${insetClass[tone]}`}>
            Add a service summary, proof point, and contact path.
          </div>
        ) : null}
      </VisualShell>
    );
  }

  if (project.visual === "tokens") {
    return (
      <VisualShell label="Token board" tone={tone} compact={compact}>
        <div className="grid grid-cols-4 gap-2">
          {["#891C1C", "#1A1714", "#F4F0EA", "#FFFCF9"].map((colour) => (
            <div key={colour} className={`${compact ? "h-10" : "h-16"} rounded-sm`} style={{ background: colour }} />
          ))}
        </div>
        <div className={`mt-5 grid gap-2 font-mono text-[12px] ${mutedTextClass[tone]}`}>
          <span>tokens.json</span>
          <span>brand.css</span>
          {!compact ? <span>tailwind.config.ts</span> : null}
        </div>
      </VisualShell>
    );
  }

  if (project.visual === "evidence") {
    return (
      <VisualShell label="Evidence feed" tone={tone} compact={compact}>
        {["source captured", "change scored", "alert routed"].map((item, index) => (
          <div
            key={item}
            className={`mb-3 grid grid-cols-[28px_minmax(0,1fr)_42px] items-center gap-3 rounded p-3 last:mb-0 ${insetClass[tone]}`}
          >
            <span className="font-mono text-[11px] text-[var(--accent)]">0{index + 1}</span>
            <span className={`text-[13px] ${tone === "dark" ? "text-[var(--dark-text)]" : "text-[var(--text)]"}`}>
              {item}
            </span>
            <span className={`font-mono text-[11px] ${mutedTextClass[tone]}`}>
              {index === 1 ? "91" : "ok"}
            </span>
          </div>
        ))}
      </VisualShell>
    );
  }

  if (project.visual === "flow") {
    return (
      <VisualShell label="Workflow map" tone={tone} compact={compact}>
        <div className="grid gap-3">
          {["product usage", "lead score", "explanation", "sales action"].map((item) => (
            <div key={item} className={`rounded px-4 py-3 text-[13px] ${insetClass[tone]}`}>
              {item}
            </div>
          ))}
        </div>
      </VisualShell>
    );
  }

  return (
    <VisualShell label="Reporting view" tone={tone} compact={compact}>
      <div className="mb-5 grid grid-cols-3 gap-3">
        {["Revenue", "Exceptions", "Summary"].map((item) => (
          <div key={item} className={`rounded p-3 ${insetClass[tone]}`}>
            <div className={`font-mono text-[11px] ${mutedTextClass[tone]}`}>{item}</div>
            <div className={`mt-3 h-8 rounded-sm ${accentBarClass[tone]} opacity-90`} />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[74, 88, 55].map((width) => (
          <div key={width} className={`h-3 rounded-sm ${insetClass[tone]}`}>
            <div className={`h-3 rounded-sm ${accentBarClass[tone]}`} style={{ width: `${width}%` }} />
          </div>
        ))}
      </div>
    </VisualShell>
  );
}
