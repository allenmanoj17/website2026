import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4">
      <div className="mx-auto max-w-[1280px] rounded bg-[var(--nav-bg)] px-7 shadow-[0_10px_35px_rgba(26,23,20,0.08)] backdrop-blur-md max-[900px]:px-5 max-[420px]:px-4">
        <div className="flex min-h-[52px] items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap text-[13px] font-medium tracking-normal text-[var(--text)] transition-all duration-150 ease-in-out"
          >
            Allen Manoj
          </Link>
          <nav className="flex min-w-0 items-center justify-end gap-8 max-[900px]:hidden">
            <Link
              href="/work"
              className="text-[12.5px] text-[var(--text-2)] transition-opacity duration-150 ease-in-out hover:opacity-75"
            >
              Work
            </Link>
            <Link
              href="/writing"
              className="text-[12.5px] text-[var(--text-2)] transition-opacity duration-150 ease-in-out hover:opacity-75"
            >
              Writing
            </Link>
            <Link
              href="/about"
              className="text-[12.5px] text-[var(--text-2)] transition-opacity duration-150 ease-in-out hover:opacity-75"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="shrink-0 whitespace-nowrap rounded-sm bg-[var(--accent)] px-[15px] py-[7px] text-[12px] font-medium text-[var(--dark-text)] transition-all duration-150 ease-in-out hover:opacity-90"
            >
              Start a conversation
            </Link>
          </nav>
          <details className="group relative hidden max-[900px]:block">
            <summary
              aria-label="Open navigation"
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-sm bg-[var(--accent)] text-[var(--dark-text)]"
            >
              <span className="relative block h-[12px] w-[18px]">
                <span className="absolute left-0 top-0 h-[2px] w-full bg-current transition-transform duration-150 group-open:top-[5px] group-open:rotate-45" />
                <span className="absolute left-0 top-[5px] h-[2px] w-full bg-current transition-opacity duration-150 group-open:opacity-0" />
                <span className="absolute left-0 top-[10px] h-[2px] w-full bg-current transition-transform duration-150 group-open:top-[5px] group-open:-rotate-45" />
              </span>
            </summary>
            <nav className="absolute right-0 top-12 grid w-[min(320px,calc(100vw-2rem))] gap-2 rounded bg-[var(--nav-bg)] p-4 shadow-[0_16px_42px_rgba(26,23,20,0.12)] backdrop-blur-md">
              <Link href="/work" className="rounded-sm px-1 py-2 text-[15px] text-[var(--text)]">
                Work
              </Link>
              <Link href="/writing" className="rounded-sm px-1 py-2 text-[15px] text-[var(--text)]">
                Writing
              </Link>
              <Link href="/about" className="rounded-sm px-1 py-2 text-[15px] text-[var(--text)]">
                About
              </Link>
              <Link
                href="/#contact"
                className="mt-2 inline-flex w-fit rounded-sm bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-[var(--dark-text)]"
              >
                Start a conversation
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
