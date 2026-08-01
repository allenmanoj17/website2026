# PostHog Dashboard: Portfolio Acquisition

Create one dashboard named **Portfolio acquisition** in PostHog. It measures consented,
pseudonymous portfolio traffic and enquiry intent. It must not use named profiles, replay,
search terms, form content, advertising or retargeting data.

## Consent boundary

- PostHog loads only after a visitor allows analytics through the site preferences control.
- Do Not Track prevents analytics even after an opt-in.
- Rejection or withdrawal stops future capture and clears PostHog browser storage.
- Dashboard labels must say `sessions` or `pseudonymous visitors`, never named people.

## Dashboard tiles

### 1. Page views and sessions

- Event: `$pageview`
- Display: Daily total count and unique-session count
- Date range: Last 30 days

### 2. Landing pages and acquisition

- Event: `$pageview`
- Breakdown: `page_path`, then `traffic_source`, `traffic_medium` or `traffic_campaign`
- Display: Table or bar chart, total count
- Date range: Last 30 days

### 3. Project proof interest

- Event: `project_link_clicked`
- Breakdown: `project_slug`
- Display: Bar chart, total count
- Date range: Last 30 days

### 4. Conversation starts

- Event: `contact_started`
- Breakdown: `location`
- Display: Daily count and table by location
- Date range: Last 30 days

This records an email-link click, not a sent email.

### 5. Writing engagement

- Events: `article_read_progress`, `writing_search_used`
- Breakdown: `article_slug` and `milestone`
- Display: Table, total count
- Date range: Last 90 days

Search queries are never captured.

### 6. Quality

- Event: `web_vital_measured`
- Breakdown: `metric_name` and `rating`
- Display: Table or line chart
- Date range: Last 30 days

### 7. Geography

- Event: `$pageview`
- Breakdown: country first, then city only if PostHog supplies it while IP anonymisation remains enabled
- Display: Table, total count
- Date range: Last 90 days

Review aggregate patterns only. Do not inspect or export location events to identify people.

## Operating rules

- Wait for seven days of real, consented traffic before drawing conclusions.
- Review traffic and contact intent weekly; review project, writing and performance signals monthly.
- Do not create named visitor profiles, individual journeys, ad audiences, cross-device matching or retention reports.
- Do not enable session replay, heatmaps, autocapture, surveys, console/error capture or browser-performance capture.
