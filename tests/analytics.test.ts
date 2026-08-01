import assert from "node:assert/strict";
import test from "node:test";
import {
  deriveTrafficAttribution,
  getPageType,
  sanitiseAnalyticsProperties,
} from "../lib/analytics";

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
