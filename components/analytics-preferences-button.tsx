"use client";

import { openAnalyticsPreferences } from "@/lib/analytics-consent";

export default function AnalyticsPreferencesButton() {
  return (
    <button type="button" onClick={openAnalyticsPreferences} className="motion-link text-left">
      Cookie preferences
    </button>
  );
}
