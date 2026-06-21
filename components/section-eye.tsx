type SectionEyeProps = {
  label: string;
  dark?: boolean;
};

export default function SectionEye({ label, dark = false }: SectionEyeProps) {
  return (
    <div
      className={`mb-9 font-mono text-[11px] uppercase tracking-[0.08em] ${
        dark ? "text-[var(--dark-text-2)]" : "text-[var(--accent)]"
      }`}
    >
      {label}
    </div>
  );
}
