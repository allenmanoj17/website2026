# PostHog setup

The site contains a privacy-first PostHog integration. It remains inactive until both an enable
switch and a public project token are configured.

## 1. Create the project

Create a PostHog Cloud project in the EU region. In PostHog project settings:

- enable cookieless server hash mode under Web analytics;
- set IP data capture to discard;
- disable autocapture and heatmaps;
- leave session recording, surveys, and person profiles disabled.

The browser code also enforces these controls, except IP capture, which is a PostHog project
setting.

## 2. Configure the environment

Copy the values from `.env.example` into `.env.local` for local testing or into the Vercel project
environment:

```text
NEXT_PUBLIC_POSTHOG_ENABLED=true
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=phc_your_public_project_token
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

The project token is intended for browser use. Never add a PostHog personal API key to a
`NEXT_PUBLIC_` variable.

## 3. Events

Only these events are allowed by the client:

- `$pageview`: pathname only, with query strings removed;
- `primary_cta_clicked`: page location and destination;
- `project_link_clicked`: page location, project slug, and link type;
- `article_link_clicked`: page location and article slug;
- `article_read_progress`: article slug and 50% or 90% reading milestone;
- `contact_started`: page location and optional project slug;
- `section_viewed`: named homepage section;
- `outbound_link_clicked`: allowlisted profile destination and page location;
- `writing_search_used`: query length and result count, never the query.

Every event also includes pathname, page type, and local/production environment. Page views include
privacy-safe acquisition fields: UTM source, medium and campaign when supplied, or a referring domain
and broad channel. Query strings and referrer paths are removed before events are sent.

Do Not Track is checked before the PostHog package is loaded.

## 4. Useful insights

Create these PostHog insights after the first events arrive:

1. Homepage journey: `$pageview` on `/` to `project_link_clicked` to `contact_started`.
2. Project interest: `project_link_clicked` grouped by `project_slug` and `link_type`.
3. Writing journey: `$pageview` on `/writing` to `article_link_clicked`.
4. Writing search: `writing_search_used` grouped by `result_count`; use zero-result searches to
   identify discoverability gaps without collecting private search text.

Use anonymous event trends and funnels only. Do not call `posthog.identify()` for this site.
