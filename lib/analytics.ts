import {
  browserDoNotTrackEnabled,
  canUseAnalytics,
  getAnalyticsConsent,
} from "@/lib/analytics-consent";

export const analyticsEvents = [
  "$pageview",
  "primary_cta_clicked",
  "project_link_clicked",
  "article_link_clicked",
  "article_read_progress",
  "contact_started",
  "section_viewed",
  "outbound_link_clicked",
  "writing_search_used",
  "web_vital_measured",
] as const;

export type AnalyticsEvent = (typeof analyticsEvents)[number];

type AnalyticsValue = string | number;
type AnalyticsProperties = Record<string, AnalyticsValue | undefined>;

const commonProperties = ["page_path", "page_type", "site_environment"];
const withCommonProperties = (properties: string[]) =>
  new Set([...commonProperties, ...properties]);

const allowedProperties: Record<AnalyticsEvent, ReadonlySet<string>> = {
  $pageview: withCommonProperties([
    "traffic_source",
    "traffic_medium",
    "traffic_campaign",
    "referring_domain",
  ]),
  primary_cta_clicked: withCommonProperties(["location", "destination"]),
  project_link_clicked: withCommonProperties(["location", "project_slug", "link_type"]),
  article_link_clicked: withCommonProperties(["location", "article_slug"]),
  article_read_progress: withCommonProperties(["article_slug", "milestone"]),
  contact_started: withCommonProperties(["location", "project_slug"]),
  section_viewed: withCommonProperties(["section_id"]),
  outbound_link_clicked: withCommonProperties(["location", "destination"]),
  writing_search_used: withCommonProperties(["query_length", "result_count"]),
  web_vital_measured: withCommonProperties([
    "metric_name",
    "metric_value",
    "metric_unit",
    "rating",
  ]),
};

const cleanString = (value: string) => value.trim().slice(0, 80);

export function getPageType(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname === "/work") return "work_index";
  if (pathname.startsWith("/work/")) return "project_case_study";
  if (pathname === "/writing") return "writing_index";
  if (pathname.startsWith("/writing/")) return "article";
  if (pathname === "/about") return "about";
  if (pathname === "/contact") return "contact";
  if (pathname === "/privacy") return "privacy";
  return "other";
}

const channelByDomain: Array<[RegExp, string, string]> = [
  [/google\.|bing\.|duckduckgo\.|yahoo\./, "organic_search", "organic"],
  [/linkedin\./, "linkedin", "social"],
  [/(^|\.)x\.com$|twitter\./, "x", "social"],
  [/medium\./, "medium", "social"],
  [/github\./, "github", "referral"],
];

export function deriveTrafficAttribution(currentUrl: string, referrer = "") {
  const current = new URL(currentUrl, "https://allenmanoj.com");
  const campaignSource = current.searchParams.get("utm_source");
  const campaignMedium = current.searchParams.get("utm_medium");
  const campaignName = current.searchParams.get("utm_campaign");

  if (campaignSource) {
    return {
      traffic_source: campaignSource,
      traffic_medium: campaignMedium || "campaign",
      traffic_campaign: campaignName || undefined,
      referring_domain: undefined,
    };
  }

  if (!referrer) {
    return {
      traffic_source: "direct",
      traffic_medium: "none",
      traffic_campaign: undefined,
      referring_domain: undefined,
    };
  }

  try {
    const referrerUrl = new URL(referrer);
    const referringDomain = referrerUrl.hostname.replace(/^www\./, "").toLowerCase();
    const currentDomain = current.hostname.replace(/^www\./, "").toLowerCase();

    if (referringDomain === currentDomain) {
      return {
        traffic_source: "internal",
        traffic_medium: "internal",
        traffic_campaign: undefined,
        referring_domain: undefined,
      };
    }

    const knownChannel = channelByDomain.find(([pattern]) => pattern.test(referringDomain));
    return {
      traffic_source: knownChannel?.[1] || "referral",
      traffic_medium: knownChannel?.[2] || "referral",
      traffic_campaign: undefined,
      referring_domain: referringDomain,
    };
  } catch {
    return {
      traffic_source: "direct",
      traffic_medium: "none",
      traffic_campaign: undefined,
      referring_domain: undefined,
    };
  }
}

export function sanitiseAnalyticsProperties(
  event: AnalyticsEvent,
  properties: AnalyticsProperties,
) {
  const allowed = allowedProperties[event];
  const sanitised: Record<string, AnalyticsValue> = {};

  for (const [key, value] of Object.entries(properties)) {
    if (!allowed.has(key) || value === undefined) {
      continue;
    }

    if (typeof value === "number") {
      if (Number.isFinite(value)) {
        sanitised[key] = Math.max(0, Math.round(value));
      }
      continue;
    }

    const cleaned = cleanString(value);
    if (cleaned) {
      sanitised[key] = cleaned;
    }
  }

  return sanitised;
}

const configured =
  process.env.NEXT_PUBLIC_POSTHOG_ENABLED === "true" &&
  Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN);

let clientPromise: Promise<typeof import("posthog-js").default | null> | null = null;

function withoutQuery(value: unknown) {
  if (typeof value !== "string") {
    return value;
  }

  try {
    const url = new URL(value, window.location.origin);
    return `${url.origin}${url.pathname}`;
  } catch {
    return undefined;
  }
}

function originOnly(value: unknown) {
  if (typeof value !== "string") {
    return value;
  }

  try {
    return new URL(value, window.location.origin).origin;
  } catch {
    return undefined;
  }
}

function getPageContext() {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    page_path: window.location.pathname,
    page_type: getPageType(window.location.pathname),
    site_environment: window.location.hostname === "localhost" ? "local" : "production",
  };
}

async function getAnalyticsClient() {
  if (
    !configured ||
    typeof window === "undefined" ||
    !canUseAnalytics(getAnalyticsConsent(), browserDoNotTrackEnabled())
  ) {
    return null;
  }

  if (!clientPromise) {
    clientPromise = import("posthog-js").then(({ default: posthog }) => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
        defaults: "2026-05-30",
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
        capture_exceptions: false,
        capture_heatmaps: false,
        capture_performance: false,
        disable_session_recording: true,
        disable_surveys: true,
        advanced_disable_feature_flags: true,
        person_profiles: "never",
        persistence: "localStorage+cookie",
        cookie_expiration: 90,
        // The project anonymises IPs after it derives permitted aggregate geography.
        ip: true,
        respect_dnt: true,
        before_send: (capture) => {
          if (!capture || !analyticsEvents.includes(capture.event as AnalyticsEvent)) {
            return null;
          }

          capture.properties.$current_url = withoutQuery(capture.properties.$current_url);
          capture.properties.$initial_current_url = withoutQuery(
            capture.properties.$initial_current_url,
          );
          capture.properties.$referrer = originOnly(capture.properties.$referrer);
          capture.properties.$initial_referrer = originOnly(
            capture.properties.$initial_referrer,
          );
          return capture;
        },
      });
      posthog.opt_in_capturing();

      return posthog;
    });
  }

  return clientPromise;
}

function clearPostHogStorage() {
  if (typeof window === "undefined") return;

  for (let index = window.localStorage.length - 1; index >= 0; index -= 1) {
    const key = window.localStorage.key(index);
    if (key?.startsWith("ph_") || key?.startsWith("__ph_opt_in_out_")) {
      window.localStorage.removeItem(key);
    }
  }

  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (name.startsWith("ph_") || name.startsWith("__ph_opt_in_out_")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  }
}

export async function revokeAnalyticsCapture() {
  const client = await clientPromise;
  client?.opt_out_capturing();
  client?.reset();
  clearPostHogStorage();
  clientPromise = null;
}

export async function trackAnalyticsEvent(
  event: AnalyticsEvent,
  properties: AnalyticsProperties = {},
) {
  const client = await getAnalyticsClient();
  client?.capture(
    event,
    sanitiseAnalyticsProperties(event, {
      ...properties,
      ...getPageContext(),
    }),
  );
}
