import assert from "node:assert/strict";
import test from "node:test";
import {
  deriveTrafficAttribution,
  getPageType,
  sanitiseAnalyticsProperties,
} from "../lib/analytics";
import {
  canUseAnalytics,
  parseAnalyticsConsent,
} from "../lib/analytics-consent";

test("analytics properties are restricted to each event schema", () => {
  assert.deepEqual(
    sanitiseAnalyticsProperties("project_link_clicked", {
      location: " home_selected_systems ",
      project_slug: "lens",
      link_type: "case_study",
      email: "visitor@example.com",
      query: "private search text",
    }),
    {
      location: "home_selected_systems",
      project_slug: "lens",
      link_type: "case_study",
    },
  );
});

test("writing search records counts but cannot record the query", () => {
  assert.deepEqual(
    sanitiseAnalyticsProperties("writing_search_used", {
      query_length: 12.4,
      result_count: 3,
      query: "dashboard pricing",
    }),
    {
      query_length: 12,
      result_count: 3,
    },
  );
});

test("analytics strings and counts are bounded", () => {
  const result = sanitiseAnalyticsProperties("contact_started", {
    location: `  ${"a".repeat(120)}  `,
    project_slug: "lens",
  });

  assert.equal(result.location.length, 80);
  assert.equal(result.project_slug, "lens");
});

test("traffic attribution keeps campaign fields but drops unrelated query data", () => {
  assert.deepEqual(
    deriveTrafficAttribution(
      "https://allenmanoj.com/work/lens?utm_source=linkedin&utm_medium=social&utm_campaign=lens-launch&utm_term=private",
      "https://www.linkedin.com/feed/",
    ),
    {
      traffic_source: "linkedin",
      traffic_medium: "social",
      traffic_campaign: "lens-launch",
      referring_domain: undefined,
    },
  );
});

test("traffic attribution classifies referrals without retaining their path", () => {
  assert.deepEqual(
    deriveTrafficAttribution(
      "https://allenmanoj.com/writing/visibility-problem",
      "https://www.google.com/search?q=private+query",
    ),
    {
      traffic_source: "organic_search",
      traffic_medium: "organic",
      traffic_campaign: undefined,
      referring_domain: "google.com",
    },
  );
});

test("page types support useful funnel breakdowns", () => {
  assert.equal(getPageType("/"), "home");
  assert.equal(getPageType("/work/lens"), "project_case_study");
  assert.equal(getPageType("/writing/privacy-first-analytics"), "article");
  assert.equal(getPageType("/contact"), "contact");
});

test("analytics stays disabled until a valid consent grant", () => {
  assert.equal(canUseAnalytics("unknown"), false);
  assert.equal(canUseAnalytics("denied"), false);
  assert.equal(canUseAnalytics("granted"), true);
  assert.equal(canUseAnalytics("granted", true), false);
});

test("expired or malformed consent preferences are ignored", () => {
  const now = 1_000;
  assert.equal(parseAnalyticsConsent(null, now), "unknown");
  assert.equal(parseAnalyticsConsent("not-json", now), "unknown");
  assert.equal(
    parseAnalyticsConsent(JSON.stringify({ value: "granted", expiresAt: 999 }), now),
    "unknown",
  );
  assert.equal(
    parseAnalyticsConsent(JSON.stringify({ value: "granted", expiresAt: 1_001 }), now),
    "granted",
  );
});

test("Core Web Vitals accept only the approved aggregate fields", () => {
  assert.deepEqual(
    sanitiseAnalyticsProperties("web_vital_measured", {
      metric_name: "LCP",
      metric_value: 1842.5,
      metric_unit: "ms",
      rating: "good",
      url: "https://allenmanoj.com/work/lens?private=value",
    }),
    {
      metric_name: "LCP",
      metric_value: 1843,
      metric_unit: "ms",
      rating: "good",
    },
  );
});
