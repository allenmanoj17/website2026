# PostHog Dashboards: Portfolio Traffic & Intent, Portfolio Content & Quality

Two dashboards in PostHog measure consented, pseudonymous portfolio traffic and enquiry
intent. They must not use named profiles, replay, search terms, form content, advertising
or retargeting data.

## Consent boundary

- PostHog loads only after a visitor allows analytics through the site preferences control.
- Do Not Track prevents analytics even after an opt-in.
- Rejection or withdrawal stops future capture and clears PostHog browser storage.
- Dashboard labels must say `sessions` or `pseudonymous visitors`, never named people.

## Reading these dashboards

Every trend, number and table tile has period-over-period comparison switched on, showing the
percentage change against the immediately preceding period of the same length. A raw count on its
own (e.g. "Contact starts: 2") isn't decision-relevant without knowing the direction of travel —
always read the comparison arrow, not just the headline number.

Breakdowns with an open-ended number of possible values (pages, countries, regions, cities) are
tables so they stay readable as the list grows. Breakdowns over a small, fixed set of categories
(devices, homepage sections, CTA locations, project slugs) stay as bar charts, where a visual size
comparison is more useful than a ranked list.

Every tile filters out `site_environment = local` at the project level (`test_account_filters`),
so events from `npm run dev` never reach these numbers — and `lib/analytics.ts` now refuses to
initialise PostHog at all when `window.location.hostname === "localhost"`, so local testing can't
generate events in the first place. Before 2026-08-08, the project's test-account filter pointed
at a person-property cohort that could never match anything (person profiles are permanently
disabled on this project), so it silently filtered nothing — roughly 40% of all events captured up
to that point were local dev traffic. Historical local events remain in PostHog but are excluded
from every tile with "filter test accounts" on, which is all of them.

## Dashboard: Portfolio traffic & intent (review weekly)

All tiles below are temporarily widened to a 90-day window while real traffic volume is low (a
30-day window was returning near-empty tiles). Narrow them back to 30 days once weekly visit
counts are consistently high enough for a 30-day window to be meaningful on its own — that's a
judgement call to make at review time, not a fixed date.

### Overview

- **Pseudonymous visitors** — `$pageview`, unique count, Number, last 90 days
- **Sessions** — `$pageview`, unique-session count, Number, last 90 days
- **Contact starts** — `contact_started`, total count, Number, last 90 days
- **Contact rate** — formula `contact_started ÷ pseudonymous visitors × 100`, Number (%), last 90 days

### Acquisition

- **Daily page views** — `$pageview`, total count, line chart, last 90 days
- **Top pages** — `$pageview`, breakdown `page_path`, table, last 90 days
- **Acquisition sources** — `$pageview`, breakdown `traffic_source` then `traffic_medium`, table, last
  90 days. Uses the site's own UTM-aware attribution properties, not PostHog's raw referrer, so
  campaign links (`?utm_source=...`) attribute correctly.
- **Devices** — `$pageview`, breakdown `$device_type`, bar chart, last 90 days

### Intent & conversion

- **Visit → project interest → contact funnel** — `$pageview` → `project_link_clicked` →
  `contact_started`, funnel, last 90 days. Aggregate conversion rate only; not a per-visitor path
  view. Strictly sequential — a visitor who contacts without first clicking a project link does not
  complete this funnel.
- **Visit → contact (direct)** — `$pageview` → `contact_started`, funnel, last 90 days. Catches
  visitors who convert without clicking a project link first (e.g. straight from the nav) — the
  step the sequential funnel above misses.
- **CTA clicks by location** — `primary_cta_clicked`, breakdown `location`, bar chart, last 90 days
- **Project proof interest** — `project_link_clicked`, breakdown `project_slug` then `link_type`,
  bar chart, last 90 days
- **Contact starts by location** — `contact_started`, breakdown `location` then `project_slug`,
  table, last 90 days. This records an email-link click, not a sent email.
- **Outbound profile clicks** — `outbound_link_clicked`, breakdown `destination` then `location`,
  table, last 90 days

## Dashboard: Portfolio content & quality (review monthly)

### Content

- **Article click-through** — `article_link_clicked`, breakdown `article_slug` then `location`,
  table, last 90 days
- **Article read completion** — `article_read_progress`, breakdown `article_slug` then `milestone`,
  table, last 90 days
- **Writing search effectiveness** — `writing_search_used`, breakdown `result_count`, table, last 90
  days. Search queries are never captured, only the result count.
- **Sections reached** — `section_viewed`, breakdown `section_id`, bar chart, last 30 days.
  Homepage scroll-depth signal.

### Quality

- **Average LCP / CLS / INP** — `web_vital_measured`, filtered to each `metric_name`, breakdown
  `$pathname`, line chart, last 30 days. Raw magnitude by page.
- **Web vitals rating** — `web_vital_measured`, breakdown `metric_name` then `rating`, table, last
  90 days. The pass/fail view: percentage of measurements landing `good` / `needs-improvement` /
  `poor` against Core Web Vitals thresholds, without having to remember the raw thresholds
  yourself.

### Geography

- **Countries** — `$pageview`, breakdown `$geoip_country_name`, table, last 90 days
- **Regions** — `$pageview`, breakdown `$geoip_subdivision_1_name` (state/province), table, last 90
  days
- **Cities** — `$pageview`, breakdown `$geoip_city_name`, table, last 90 days. Only available while
  IP anonymisation remains enabled at the project level.

Review aggregate patterns only. Do not inspect or export location events to identify people.

## Operating rules

- Wait for seven days of real, consented traffic before drawing conclusions.
- Review traffic and contact intent weekly (Portfolio traffic & intent); review project, writing,
  performance and geography signals monthly (Portfolio content & quality).
- Do not create named visitor profiles, individual journeys, ad audiences, cross-device matching or
  retention reports. The conversion funnel above is an aggregate statistic, not a per-visitor path
  view, and does not violate this rule.
- Do not enable session replay, heatmaps, autocapture, surveys, console/error capture or
  browser-performance capture.
