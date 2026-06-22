"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, Menu } from "lucide-react";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 max-[480px]:top-2 max-[480px]:px-3">
      <div
        className="motion-nav mx-auto max-w-[1180px] rounded border border-transparent bg-[var(--nav-bg)] px-7 shadow-[0_10px_35px_rgba(26,23,20,0.08)] backdrop-blur-md max-[900px]:px-5 max-[420px]:px-4"
        data-scrolled={scrolled ? "true" : "false"}
      >
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
              className="motion-link text-[12.5px] text-[var(--text-2)]"
              data-active={isActive("/work") ? "true" : "false"}
            >
              Work
            </Link>
            <Link
              href="/writing"
              className="motion-link text-[12.5px] text-[var(--text-2)]"
              data-active={isActive("/writing") ? "true" : "false"}
            >
              Writing
            </Link>
            <Link
              href="/about"
              className="motion-link text-[12.5px] text-[var(--text-2)]"
              data-active={isActive("/about") ? "true" : "false"}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="motion-button inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-sm bg-[var(--accent)] px-[15px] py-[7px] text-[12px] font-medium text-[var(--dark-text)] hover:opacity-90"
            >
              <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
              Start a conversation
            </Link>
          </nav>
          <details className="group relative hidden max-[900px]:block">
            <summary
              aria-label="Open navigation"
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-sm bg-[var(--accent)] text-[var(--dark-text)]"
            >
              <Menu size={18} strokeWidth={2} aria-hidden="true" />
            </summary>
            <nav className="absolute right-0 top-12 grid w-[min(320px,calc(100vw-1.5rem))] gap-2 rounded bg-[var(--nav-bg)] p-4 shadow-[0_16px_42px_rgba(26,23,20,0.12)] backdrop-blur-md">
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
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-sm bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-[var(--dark-text)]"
              >
                <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
                Start a conversation
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
