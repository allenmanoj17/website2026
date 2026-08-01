export type AnalyticsConsent = "unknown" | "granted" | "denied";

export const ANALYTICS_CONSENT_STORAGE_KEY = "allenmanoj.analytics-consent";
export const ANALYTICS_CONSENT_EVENT = "allenmanoj:analytics-consent-changed";
export const ANALYTICS_PREFERENCES_EVENT = "allenmanoj:analytics-preferences-open";
export const ANALYTICS_CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 365;

type StoredConsent = {
  value: Exclude<AnalyticsConsent, "unknown">;
  expiresAt: number;
};

export function parseAnalyticsConsent(raw: string | null, now = Date.now()): AnalyticsConsent {
  if (!raw) return "unknown";

  try {
    const parsed = JSON.parse(raw) as StoredConsent;
    if (
      (parsed.value !== "granted" && parsed.value !== "denied") ||
      !Number.isFinite(parsed.expiresAt) ||
      parsed.expiresAt <= now
    ) {
      return "unknown";
    }

    return parsed.value;
  } catch {
    return "unknown";
  }
}

export function canUseAnalytics(consent: AnalyticsConsent, doNotTrack = false) {
  return consent === "granted" && !doNotTrack;
}

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return "unknown";

  const raw = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
  const consent = parseAnalyticsConsent(raw);
  if (raw && consent === "unknown") {
    window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY);
  }
  return consent;
}

export function setAnalyticsConsent(value: Exclude<AnalyticsConsent, "unknown">) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    ANALYTICS_CONSENT_STORAGE_KEY,
    JSON.stringify({ value, expiresAt: Date.now() + ANALYTICS_CONSENT_MAX_AGE_MS }),
  );
  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: value }));
}

export function openAnalyticsPreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(ANALYTICS_PREFERENCES_EVENT));
}

export function browserDoNotTrackEnabled() {
  if (typeof navigator === "undefined") return false;
  return navigator.doNotTrack === "1";
}
