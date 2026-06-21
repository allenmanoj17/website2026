export default function ProfileVisual() {
  return (
    <div
      role="img"
      aria-label="Abstract profile visual for Allen Manoj"
      className="relative min-h-[320px] overflow-hidden rounded bg-[var(--dark)] p-6 text-[var(--dark-text)] shadow-[0_18px_46px_rgba(0,0,0,0.14)]"
    >
      <div className="absolute right-6 top-6 rounded bg-[var(--accent)] px-3 py-2 font-mono text-[11px] text-[var(--dark-text)]">
        data → system
      </div>
      <div className="absolute bottom-0 left-1/2 h-[230px] w-[180px] -translate-x-1/2 rounded-t-full bg-[rgba(255,247,238,0.08)]" />
      <div className="absolute bottom-[88px] left-1/2 size-[104px] -translate-x-1/2 rounded-full bg-[rgba(255,247,238,0.14)]" />
      <div className="absolute bottom-0 left-1/2 h-[120px] w-[260px] -translate-x-1/2 rounded-t-[140px] bg-[rgba(255,247,238,0.12)]" />
      <div className="relative z-10 flex h-full min-h-[268px] flex-col justify-between">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
          Allen Manoj
        </div>
        <div>
          <div className="text-[72px] font-light leading-none">AM</div>
          <p className="mt-4 max-w-[260px] text-[14px] leading-[1.7] text-[var(--dark-text-2)]">
            allenmanoj.com · 2026
          </p>
        </div>
      </div>
    </div>
  );
}
