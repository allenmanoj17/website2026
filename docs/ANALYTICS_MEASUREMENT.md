# Analytics measurement plan

## Primary question

Which traffic sources, projects, and articles create enough interest for someone to start a
conversation?

The main success event is `contact_started`. It measures intent, not a confirmed enquiry. Email
delivery and whether a conversation is qualified must still be reviewed manually.

## Dashboard 1: Portfolio acquisition

Track weekly:

- page views by `traffic_source` and `traffic_medium`;
- project interest by `project_slug`;
- current-build and source interest by `link_type`;
- contact starts by `page_type`, `page_path`, and `project_slug`;
- outbound credibility checks by `destination`.

Create this homepage funnel:

```text
$pageview where page_path = /
→ section_viewed where section_id = selected_systems
→ project_link_clicked
→ contact_started
```

Break it down by `traffic_source`. Do not optimise for page views alone; optimise for project
interest and contact intent from relevant sources.

## Dashboard 2: Project proof

Create a funnel for each featured system:

```text
$pageview where page_path = /work/{slug}
→ project_link_clicked where link_type = current_build or source
→ contact_started where project_slug = {slug}
```

Use the drop-off to decide whether a case study needs clearer evidence, a stronger visual, or a
more relevant CTA. Avoid comparing projects with very small sample sizes.

## Dashboard 3: Writing

Track weekly:

- article opens by `article_slug`;
- 50% and 90% reading milestones;
- article-to-contact starts;
- writing searches and zero-result searches;
- acquisition source for article page views.

Create this funnel:

```text
$pageview where page_type = writing_index
→ article_link_clicked
→ article_read_progress where milestone = 50
→ contact_started
```

Use 90% completion as a strong engagement signal, not a guarantee that every word was read.

## Practical review cadence

Review monthly until traffic is high enough for weekly decisions:

1. Check that event volume and properties look valid.
2. Identify the sources producing project or article engagement.
3. Read the highest-exit pages and improve one page at a time.
4. Record what changed and compare the following four weeks.
5. Treat fewer than roughly 30 relevant visits as directional, not conclusive.

Do not add identity tracking, session replay, raw search terms, or advertising pixels to answer
these questions.
