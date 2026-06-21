type ArchiveItemProps = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
};

const sharedClass =
  "group block rounded bg-[var(--panel)] p-5 shadow-[0_12px_36px_rgba(26,23,20,0.04)] transition-all duration-150 ease-in-out";

function Inner({ name, description, tags, href }: ArchiveItemProps) {
  return (
    <>
      <h3 className="text-[15px] font-medium leading-[1.45] text-[var(--text)]">
        {name}
        {href ? <span className="ml-1 text-[var(--accent)]">↗</span> : null}
      </h3>
      <p className="mt-[4px] text-[14px] leading-[1.65] text-[var(--text-2)]">{description}</p>
      <div className="mt-[6px] flex flex-wrap gap-[5px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-[var(--surface-2)] px-[7px] py-[3px] font-mono text-[11px] text-[var(--text-2)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

export default function ArchiveItem({ name, description, tags, href }: ArchiveItemProps) {
  const external = href?.startsWith("http");

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`${sharedClass} hover:shadow-[0_10px_28px_rgba(26,23,20,0.07)]`}
      >
        <Inner name={name} description={description} tags={tags} href={href} />
      </a>
    );
  }

  return (
    <div className={sharedClass}>
      <Inner name={name} description={description} tags={tags} />
    </div>
  );
}
