"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ANALYTICS_PREFERENCES_EVENT,
  browserDoNotTrackEnabled,
  getAnalyticsConsent,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics-consent";
import { revokeAnalyticsCapture } from "@/lib/analytics";

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<AnalyticsConsent>("unknown");
  const [open, setOpen] = useState(false);
  const [doNotTrack, setDoNotTrack] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setConsent(getAnalyticsConsent());
      setDoNotTrack(browserDoNotTrackEnabled());
    });

    const handlePreferences = () => setOpen(true);
    window.addEventListener(ANALYTICS_PREFERENCES_EVENT, handlePreferences);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(ANALYTICS_PREFERENCES_EVENT, handlePreferences);
    };
  }, []);

  const saveConsent = (value: Exclude<AnalyticsConsent, "unknown">) => {
    setAnalyticsConsent(value);
    setConsent(value);
    setOpen(false);
    if (value === "denied") {
      void revokeAnalyticsCapture();
    }
  };

  if (consent !== "unknown" && !open) return null;

  const isPreferences = consent !== "unknown";
  const title = isPreferences ? "Cookie preferences" : "Analytics preferences";
  const description = doNotTrack
    ? "Your browser has asked websites not to track you. Analytics will remain disabled."
    : "Allow optional analytics to help improve projects, writing and navigation. It uses a pseudonymous first-party identifier after consent. No names, email addresses, messages or search text are collected.";

  return (
    <section
      aria-labelledby="analytics-consent-title"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-[720px] border border-[var(--surface-2)] bg-[var(--panel-strong)] p-5 shadow-[0_18px_55px_rgba(26,23,20,0.16)] sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[500px]">
            <p className="eyebrow mb-2">Optional analytics</p>
            <h2 id="analytics-consent-title" className="card-title">
              {title}
            </h2>
            <p className="body-copy mt-2 text-[14px] leading-[1.65]">{description}</p>
            <Link
              href="/privacy"
              className="motion-link mt-3 inline-flex text-[13px] text-[var(--accent)]"
            >
              Read the privacy policy
            </Link>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <button
              type="button"
              onClick={() => saveConsent("denied")}
              className="motion-button min-h-11 border border-[var(--text)] px-4 text-[13px] font-medium text-[var(--text)]"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => saveConsent("granted")}
              disabled={doNotTrack}
              className="motion-button min-h-11 bg-[var(--accent)] px-4 text-[13px] font-medium text-[var(--dark-text)] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Allow analytics
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
