# Privacy Data Register

## Scope

This register covers allenmanoj.com and is reviewed when the site adds a form, newsletter, waitlist, payment flow, analytics provider, or a new tracking event.

## Processing activities

| Activity | Purpose | Data | Provider | Retention | Access | Deletion / incident contact |
| --- | --- | --- | --- | --- | --- | --- |
| Website hosting | Serve the portfolio securely | Request and technical delivery data handled by the host | Vercel | Provider operational retention | Allen Manoj | Vercel support and incident process |
| Optional analytics | Improve acquisition, navigation, projects, writing and performance | Pseudonymous analytics identifier, event schema fields, coarse device/referrer/UTM and permitted aggregate geography | PostHog Cloud EU | 12-month target configured (`event_retention_months = 12`); automatic enforcement is currently off at the project level (`events_retention_enforced = false`), so data is not yet auto-deleted at that mark — verified via the PostHog API on 2026-08-04, pending a manual check of Project Settings → Data management to confirm whether enforcement is plan-gated or just needs to be switched on | Allen Manoj | Cookie preferences stops future capture; PostHog support for provider incidents |
| Email enquiries | Respond to professional contact | Information voluntarily included in an email | Google / Gmail | As long as reasonably necessary for the conversation or legal record | Allen Manoj | allenmanoj17@gmail.com |

## Non-negotiable controls

- Analytics starts only after explicit consent and stops on withdrawal or Do Not Track.
- No names, emails, message content, search text, form fields, full URLs with query strings, full referrer paths or hashed identifiers are sent to PostHog as custom analytics data. PostHog may process the connection IP to derive permitted geography, then drops it from stored event data through the project anonymisation setting.
- PostHog's own GeoIP enrichment and SDK defaults attach more than the site discloses on the
  Privacy page (precise latitude/longitude, postal code, full user agent string, browser/OS
  version numbers, screen and viewport dimensions, and per-pageview scroll/content-percentage
  fields). Verified present in a live raw event on 2026-08-04 and confirmed not used by any
  dashboard tile. `lib/analytics.ts`'s `before_send` hook now strips all of these client-side
  before the event leaves the browser, keeping only `$geoip_country_name`,
  `$geoip_subdivision_1_name` and `$geoip_city_name` from the GeoIP block. Re-check a live event's
  raw properties after any `posthog-js` upgrade in case new default fields appear.
- PostHog person profiles, session replay, heatmaps, surveys, autocapture, console logs, exception capture and advertising use remain disabled.
- PostHog is analytics-only. Future newsletter, waitlist and contact records remain in their chosen email/form system.
- Newsletter marketing consent must be separate, unchecked by default and use double opt-in.

## Review checklist

- Confirm PostHog project access, authorised domains, EU region and retention.
- Confirm whether `events_retention_enforced` can be switched on in Project Settings → Data
  management, so the stated 12-month retention is actually enforced rather than a configured
  target. Last checked 2026-08-04: still off, not settable via the project API.
- Confirm the public Privacy page matches actual provider and event behaviour.
- Review the analytics allow-list and test that an unknown property is discarded.
- Review vendor DPAs, subprocessors and security notices before adding a provider.
