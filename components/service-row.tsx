import {
  BarChart3,
  Bot,
  Database,
  LineChart,
  PanelsTopLeft,
  type LucideIcon,
} from "lucide-react";

type ServiceRowProps = {
  number: string;
  name: string;
  description: string;
  usefulWhen?: string;
  variant?: "light" | "dark" | "accent";
  className?: string;
};

const icons: Record<string, LucideIcon> = {
  "01": Database,
  "02": BarChart3,
  "03": LineChart,
  "04": Bot,
  "05": PanelsTopLeft,
};

function ServiceIcon({ number, dark }: { number: string; dark: boolean }) {
  const Icon = icons[number] ?? Database;

  return (
    <div
      className={`grid size-12 place-items-center rounded-sm ${
        dark ? "bg-[rgba(255,247,238,0.12)]" : "bg-[var(--surface)]"
      }`}
      aria-hidden="true"
    >
      <Icon
        size={24}
        strokeWidth={1.8}
        className={dark ? "text-[var(--dark-text)]" : "text-[var(--accent)]"}
      />
    </div>
  );
}

export default function ServiceRow({
  number,
  name,
  description,
  usefulWhen,
  variant = "light",
  className = "",
}: ServiceRowProps) {
  const isDark = variant === "dark";
  const isAccent = variant === "accent";

  return (
    <article
      tabIndex={0}
      className={`group flex min-h-[300px] min-w-0 flex-col justify-between overflow-hidden rounded border p-6 transition-all duration-200 ease-in-out hover:-translate-y-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] max-[640px]:min-h-[250px] max-[640px]:p-5 ${
        isAccent
          ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--dark-text)]"
          : isDark
            ? "border-[var(--dark)] bg-[var(--dark)] text-[var(--dark-text)]"
            : "border-[var(--surface-2)] bg-[var(--panel)] text-[var(--text)] hover:border-[var(--accent)]"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-6">
        <ServiceIcon number={number} dark={isDark || isAccent} />
        <span
          className={`font-mono text-[12px] ${
            isDark || isAccent ? "text-[var(--dark-text)]" : "text-[var(--accent)]"
          }`}
        >
          {number}
        </span>
      </div>
      {usefulWhen ? (
        <div>
          <h3 className="text-[clamp(25px,3vw,36px)] font-light leading-[1.08] tracking-normal">
            {name}
          </h3>
          <div className="max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover:mt-5 group-hover:max-h-48 group-hover:opacity-100 group-focus:max-h-48 group-focus:opacity-100 max-[640px]:mt-5 max-[640px]:max-h-none max-[640px]:opacity-100">
            <p
              className={`max-w-[520px] text-[15px] leading-[1.65] ${
                isDark || isAccent ? "text-[rgba(255,247,238,0.78)]" : "text-[var(--text-2)]"
              }`}
            >
              {description}
            </p>
            <p
              className={`mt-4 text-[13px] leading-[1.6] ${
                isDark || isAccent ? "text-[rgba(255,247,238,0.64)]" : "text-[var(--text-3)]"
              }`}
            >
              {usefulWhen}
            </p>
          </div>
        </div>
      ) : null}
    </article>
  );
}
