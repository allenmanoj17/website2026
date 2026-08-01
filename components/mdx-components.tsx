import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, CheckCircle2, ExternalLink, ImageIcon } from "lucide-react";
import { slugifyHeading } from "@/lib/writing-shared";

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(textFromChildren).join("");
  }
  if (children && typeof children === "object" && "props" in children) {
    return textFromChildren((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

export function Checklist({ children }: { children: ReactNode }) {
  return (
    <section className="my-8 rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.05)] [&_li]:pl-1 [&_li]:marker:text-[var(--accent)] [&_ul]:mb-0 [&_ul]:mt-4">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
        <CheckCircle2 size={16} strokeWidth={1.8} aria-hidden="true" />
        Checklist
      </div>
      {children}
    </section>
  );
}

export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-[var(--accent)] bg-[var(--surface)] px-5 py-4">
      {title ? (
        <div className="mb-2 flex items-center gap-2 text-[14px] font-medium text-[var(--text)]">
          <AlertCircle size={16} strokeWidth={1.8} aria-hidden="true" />
          {title}
        </div>
      ) : null}
      <div className="[&>p:last-child]:mb-0 [&>p:first-child]:mt-0">{children}</div>
    </aside>
  );
}

export function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  const imageClassName = "h-auto w-full rounded-sm object-cover";

  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded bg-[var(--surface)] p-2">
        {src.startsWith("/") ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 860px) 100vw, 760px"
            className={imageClassName}
          />
        ) : (
          // External editorial images are intentionally unoptimised unless moved into /public.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} width={width} height={height} className={imageClassName} />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 flex items-start gap-2 font-mono text-[11px] leading-[1.6] text-[var(--text-3)]">
          <ImageIcon size={14} strokeWidth={1.8} className="mt-[2px] shrink-0" aria-hidden="true" />
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function BeforeAfter({ before, after }: { before: string; after: string }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-3 max-[620px]:grid-cols-1">
      <div className="rounded bg-[var(--surface)] p-5">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-3)]">
          Before
        </div>
        <p className="m-0 text-[14px] leading-[1.7] text-[var(--text-2)]">{before}</p>
      </div>
      <div className="rounded bg-[var(--dark)] p-5">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--dark-text-2)]">
          After
        </div>
        <p className="m-0 text-[14px] leading-[1.7] text-[var(--dark-text)]">{after}</p>
      </div>
    </div>
  );
}

function ArticleLink({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  const className =
    "font-medium text-[var(--accent)] underline decoration-[rgba(137,28,28,0.35)] underline-offset-4 transition-opacity hover:opacity-75";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} inline-flex items-baseline gap-1`}
        {...props}
      >
        {children}
        <ExternalLink size={12} strokeWidth={1.8} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export const mdxComponents = {
  Checklist,
  Callout,
  Figure,
  BeforeAfter,
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      id={slugifyHeading(textFromChildren(children))}
      className="mb-4 mt-14 scroll-mt-28 text-[clamp(25px,3vw,34px)] font-light leading-[1.2] text-[var(--text)]"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      id={slugifyHeading(textFromChildren(children))}
      className="mb-3 mt-10 scroll-mt-28 text-[20px] font-medium leading-[1.35] text-[var(--text)]"
      {...props}
    >
      {children}
    </h3>
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-5 text-[16px] leading-[1.85] text-[var(--text-2)] max-[640px]:text-[15px]" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-[16px] leading-[1.75] text-[var(--text-2)] max-[640px]:text-[15px]" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-[16px] leading-[1.75] text-[var(--text-2)] max-[640px]:text-[15px]" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-1" {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-8 border-l-2 border-[var(--accent)] pl-5 text-[20px] font-light leading-[1.6] text-[var(--text)] [&>p]:text-inherit"
      {...props}
    />
  ),
  a: ArticleLink,
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded-sm bg-[var(--surface)] px-1.5 py-0.5 font-mono text-[0.88em] text-[var(--text)]"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-8 max-w-full overflow-x-auto rounded bg-[var(--dark)] p-5 font-mono text-[13px] leading-[1.7] text-[var(--dark-text)] [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left text-[14px]" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="border-b border-[var(--surface-2)] bg-[var(--surface)] p-3 font-medium text-[var(--text)]" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-[var(--surface-2)] p-3 text-[var(--text-2)]" {...props} />
  ),
  img: ({ src, alt, width, height }: ComponentPropsWithoutRef<"img">) =>
    typeof src === "string" ? (
      <Figure
        src={src}
        alt={alt ?? ""}
        width={typeof width === "number" ? width : undefined}
        height={typeof height === "number" ? height : undefined}
      />
    ) : null,
};
