import Image from "next/image";

export default function ProfileVisual() {
  return (
    <div
      className="relative overflow-hidden rounded bg-[var(--dark)] p-5 text-[var(--dark-text)] shadow-[0_18px_46px_rgba(0,0,0,0.14)]"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
            Allen Manoj
          </div>
          <div className="mt-2 text-[15px] font-medium leading-[1.4] text-[var(--dark-text)]">
            Data & AI systems
          </div>
        </div>
      </div>
      <div className="relative aspect-[369/328] w-full overflow-hidden rounded bg-[var(--panel)]">
        <Image
          src="/allenmanoj.png"
          alt="Portrait of Allen Manoj"
          fill
          sizes="(max-width: 900px) 100vw, 360px"
          className="object-cover object-center"
          priority={false}
        />
      </div>
      <div className="mt-5 grid gap-3">
        {[
          ["Builds", "pipelines, dashboards, workflows"],
          ["Works across", "warehouse to interface"],
        ].map(([label, value]) => (
          <div key={label} className="border-t border-[rgba(255,247,238,0.14)] pt-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
              {label}
            </div>
            <div className="mt-1 text-[14px] leading-[1.6] text-[var(--dark-text)]">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
