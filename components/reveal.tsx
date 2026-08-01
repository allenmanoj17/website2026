import { type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <div
      className={`motion-reveal ${className}`}
      data-reveal
      data-visible="false"
      style={style}
    >
      {children}
    </div>
  );
}
