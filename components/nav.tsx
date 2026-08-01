"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Mail, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 max-[480px]:top-2 max-[480px]:px-3">
      <div
        className="motion-nav mx-auto max-w-[1180px] rounded border border-transparent bg-[var(--nav-bg)] px-7 shadow-[0_10px_35px_rgba(26,23,20,0.08)] max-[900px]:px-5 max-[420px]:px-4"
      >
        <div className="flex min-h-[52px] items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap text-[13px] font-medium tracking-normal text-[var(--text)] transition-opacity duration-150 hover:opacity-75"
          >
            Allen Manoj
          </Link>
          <nav aria-label="Primary navigation" className="flex min-w-0 items-center justify-end gap-7 max-[900px]:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="motion-link text-[12.5px] text-[var(--text-2)]"
                data-active={isActive(link.href) ? "true" : "false"}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:allenmanoj17@gmail.com"
              data-analytics-event="contact_started"
              data-analytics-location="desktop_nav"
              className="motion-button inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-sm bg-[var(--accent)] px-[15px] py-[7px] text-[12px] font-medium text-[var(--dark-text)] hover:opacity-90"
            >
              <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
              Start a conversation
            </a>
          </nav>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="hidden size-10 items-center justify-center rounded-sm bg-[var(--accent)] text-[var(--dark-text)] max-[900px]:flex"
          >
            {menuOpen ? (
              <X size={18} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={18} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
          {menuOpen ? (
            <nav
              ref={menuRef}
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute right-4 top-14 grid w-[min(320px,calc(100vw-1.5rem))] gap-1 rounded bg-[var(--nav-bg)] p-4 shadow-[0_16px_42px_rgba(26,23,20,0.12)] max-[480px]:right-3"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm px-2 py-3 text-[15px] text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:allenmanoj17@gmail.com"
                data-analytics-event="contact_started"
                data-analytics-location="mobile_nav"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-sm bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-[var(--dark-text)]"
              >
                <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
                Start a conversation
              </a>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
