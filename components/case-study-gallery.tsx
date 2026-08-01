import {
  BellRing,
  BookOpen,
  CheckCircle2,
  FileText,
  Gauge,
  Palette,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import ProjectVisual from "@/components/project-visual";
import type { Project } from "@/data/site";

type CaseStudyGalleryProps = {
  project: Project;
  primaryTitle: string;
  primaryCaption: string;
  secondaryTitle: string;
  secondaryCaption: string;
};

function Frame({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded bg-[var(--dark-2)] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between border-b border-[rgba(255,247,238,0.1)] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-[rgba(255,247,238,0.3)]" />
            <span className="size-2 rounded-full bg-[rgba(255,247,238,0.18)]" />
            <span className="size-2 rounded-full bg-[rgba(255,247,238,0.1)]" />
          </div>
          <span className="font-mono text-[10px] text-[var(--dark-text-2)]">{title}</span>
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
      <figcaption className="mt-4">
        <div className="text-[14px] font-medium text-[var(--dark-text)]">{title}</div>
        <p className="mt-1 text-[13px] leading-[1.6] text-[var(--dark-text-2)]">{caption}</p>
      </figcaption>
    </figure>
  );
}

function FindingVisual() {
  return (
    <div className="rounded bg-[rgba(255,247,238,0.07)] p-5 text-[var(--dark-text)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
            Finding · AI readability
          </div>
          <h3 className="mt-3 text-[20px] font-medium leading-[1.3]">Service evidence is difficult to verify</h3>
        </div>
        <span className="rounded-sm bg-[var(--accent)] px-3 py-1 font-mono text-[10px]">High priority</span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
        {[
          [SearchCheck, "Evidence", "Primary service page does not include a concrete proof point."],
          [Gauge, "Confidence", "Heuristic · review recommended"],
          [FileText, "Affected page", "/services/data-systems"],
          [CheckCircle2, "Next action", "Add a specific outcome, method, or verifiable example."],
        ].map(([Icon, label, text]) => {
          const ItemIcon = Icon as typeof SearchCheck;
          return (
            <div key={String(label)} className="rounded bg-[rgba(255,247,238,0.08)] p-4">
              <div className="flex items-center gap-2 text-[var(--dark-text)]">
                <ItemIcon size={15} strokeWidth={1.8} aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.08em]">{String(label)}</span>
              </div>
              <p className="mt-3 text-[12px] leading-[1.6] text-[var(--dark-text-2)]">{String(text)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RevenueVisual() {
  return (
    <div className="rounded bg-[rgba(255,247,238,0.07)] p-5 text-[var(--dark-text)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
            Account review
          </div>
          <div className="mt-2 text-[22px] font-light">Northstar Labs</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-[var(--dark-text-2)]">priority score</div>
          <div className="mt-1 text-[32px] font-light">0.84</div>
        </div>
      </div>
      <div className="space-y-3">
        {[
          ["Weekly active seats", 88, "+ signal"],
          ["Feature adoption", 72, "+ signal"],
          ["Admin inactivity", 46, "risk"],
        ].map(([label, width, signal]) => (
          <div key={String(label)} className="grid grid-cols-[130px_minmax(0,1fr)_60px] items-center gap-3 max-[520px]:grid-cols-1">
            <span className="text-[12px] text-[var(--dark-text-2)]">{label}</span>
            <div className="h-2 rounded-sm bg-[rgba(255,247,238,0.1)]">
              <div className="h-2 rounded-sm bg-[var(--dark-text)]" style={{ width: `${width}%` }} />
            </div>
            <span className="font-mono text-[10px] text-[var(--dark-text-2)]">{signal}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded bg-[rgba(255,247,238,0.08)] p-4 text-[12px] leading-[1.6] text-[var(--dark-text-2)]">
        Review expansion readiness. Lead with seat growth and feature adoption; verify the inactive admin before outreach.
      </div>
    </div>
  );
}

function EditorialVisual() {
  return (
    <div className="grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
      {[
        ["AI draft", "Generic opening", "The draft states the idea but loses the source detail and Allen’s direct tone."],
        ["Edited version", "Evidence-led opening", "The final version begins with the observed workflow problem and keeps the supporting source attached."],
      ].map(([label, title, text], index) => (
        <div key={label} className="rounded bg-[rgba(255,247,238,0.07)] p-5 text-[var(--dark-text)]">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
            {index === 0 ? <Sparkles size={14} strokeWidth={1.8} aria-hidden="true" /> : <BookOpen size={14} strokeWidth={1.8} aria-hidden="true" />}
            {label}
          </div>
          <h3 className="mt-5 text-[18px] font-medium">{title}</h3>
          <p className="mt-3 text-[12px] leading-[1.7] text-[var(--dark-text-2)]">{text}</p>
          <div className="mt-5 h-1.5 rounded-sm bg-[rgba(255,247,238,0.1)]">
            <div className="h-1.5 rounded-sm bg-[var(--dark-text)]" style={{ width: index === 0 ? "42%" : "78%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function SentinelVisual() {
  return (
    <div className="rounded bg-[rgba(255,247,238,0.07)] p-5 text-[var(--dark-text)]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <BellRing size={18} strokeWidth={1.8} aria-hidden="true" />
          <div>
            <div className="text-[16px] font-medium">Pricing page changed</div>
            <div className="mt-1 font-mono text-[10px] text-[var(--dark-text-2)]">captured 14:32 AEST</div>
          </div>
        </div>
        <span className="rounded-sm bg-[var(--accent)] px-3 py-1 font-mono text-[10px]">significance 91</span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
        <div className="rounded bg-[rgba(255,247,238,0.08)] p-4">
          <div className="font-mono text-[10px] text-[var(--dark-text-2)]">Before</div>
          <p className="mt-3 text-[12px] leading-[1.6] text-[var(--dark-text-2)]">
            Team plan includes 10 projects and standard support.
          </p>
        </div>
        <div className="rounded bg-[rgba(255,247,238,0.08)] p-4">
          <div className="font-mono text-[10px] text-[var(--dark-text-2)]">After</div>
          <p className="mt-3 text-[12px] leading-[1.6] text-[var(--dark-text)]">
            Team plan includes unlimited projects and priority support.
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[12px] text-[var(--dark-text-2)]">
        <ShieldCheck size={14} strokeWidth={1.8} aria-hidden="true" />
        Source evidence saved before significance evaluation
      </div>
    </div>
  );
}

function TokenVisual() {
  return (
    <div className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-1">
      <div className="rounded bg-[rgba(255,247,238,0.07)] p-5 text-[var(--dark-text)]">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
          <Palette size={14} strokeWidth={1.8} aria-hidden="true" />
          Colour roles
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            ["#891C1C", "action"],
            ["#1A1714", "text"],
            ["#F4F0EA", "surface"],
            ["#FFFCF9", "background"],
          ].map(([colour, label]) => (
            <div key={colour}>
              <div className="h-12 rounded-sm" style={{ background: colour }} />
              <div className="mt-2 font-mono text-[10px] text-[var(--dark-text-2)]">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded bg-[rgba(255,247,238,0.07)] p-5 text-[var(--dark-text)]">
        <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
          Typography and components
        </div>
        <div className="mt-5 border-b border-[rgba(255,247,238,0.1)] pb-4">
          <div className="text-[20px] font-light">IBM Plex Sans</div>
          <div className="mt-2 font-mono text-[10px] text-[var(--dark-text-2)]">
            body · heading · interface
          </div>
        </div>
        <div className="mt-4 grid gap-3">
          <span className="w-fit rounded-sm bg-[var(--accent)] px-3 py-2 text-[11px] font-medium">
            Primary action
          </span>
          <span className="w-fit rounded-sm border border-[rgba(255,247,238,0.18)] px-3 py-2 text-[11px]">
            Secondary action
          </span>
        </div>
      </div>
      <div className="rounded bg-[rgba(255,247,238,0.07)] p-5 text-[var(--dark-text)]">
        <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
          Export preview
        </div>
        <div className="mt-5 space-y-3 font-mono text-[11px]">
          {[
            ["--colour-action", "#891C1C"],
            ["--colour-text", "#1A1714"],
            ["--surface-muted", "#F4F0EA"],
            ["--font-body", "IBM Plex Sans"],
          ].map(([token, value]) => (
            <div key={token} className="flex justify-between gap-4 border-b border-[rgba(255,247,238,0.1)] pb-3">
              <span>{token}</span>
              <span className="text-[var(--dark-text-2)]">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecondaryVisual({ project }: { project: Project }) {
  if (project.slug === "lens") return <FindingVisual />;
  if (project.slug === "airs") return <RevenueVisual />;
  if (project.slug === "distributionos") return <EditorialVisual />;
  if (project.slug === "sentinel") return <SentinelVisual />;
  return <TokenVisual />;
}

export default function CaseStudyGallery({
  project,
  primaryTitle,
  primaryCaption,
  secondaryTitle,
  secondaryCaption,
}: CaseStudyGalleryProps) {
  return (
    <div className="grid gap-10">
      <Frame title={primaryTitle} caption={primaryCaption}>
        <ProjectVisual project={project} tone="dark" />
      </Frame>
      <Frame title={secondaryTitle} caption={secondaryCaption}>
        <SecondaryVisual project={project} />
      </Frame>
    </div>
  );
}
