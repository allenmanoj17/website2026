type ServiceRowProps = {
  number: string;
  name: string;
  description: string;
};

export default function ServiceRow({ number, name, description }: ServiceRowProps) {
  return (
    <div className="group grid min-w-0 grid-cols-[64px_minmax(0,1fr)] gap-5 rounded bg-[var(--panel)] p-6 shadow-[0_12px_36px_rgba(26,23,20,0.04)] transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_18px_46px_rgba(137,28,28,0.1)] max-[560px]:grid-cols-1">
      <div className="flex size-12 items-center justify-center rounded-sm bg-[var(--accent)] font-mono text-[12px] font-medium text-[var(--dark-text)]">
        {number}
      </div>
      <div className="min-w-0 pt-[2px]">
        <h3 className="card-title">
          {name}
        </h3>
        <p className="mt-3 max-w-[680px] text-[14px] leading-[1.7] text-[var(--text-2)]">
          {description}
        </p>
      </div>
    </div>
  );
}
