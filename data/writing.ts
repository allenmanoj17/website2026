export type Article = {
  title: string;
  platform: string;
  date: string;
  href: string;
};

export type WritingNote = {
  title: string;
  slug: string;
  date: string;
  publishedAt: string;
  updatedAt: string;
  description: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
  examples: string[];
  takeaway: string;
};

export const articles: Article[] = [
  {
    title: "Is Machine Learning the Only Way for Data Visualisation?",
    platform: "Medium - Techiepedia",
    date: "2022",
    href: "https://medium.com/techiepedia/is-machine-learning-the-only-way-for-data-visualization-27e760803bea",
  },
  {
    title: "Microsoft Azure for Artificial Intelligence and Machine Learning",
    platform: "Medium - Analytics Vidhya",
    date: "2022",
    href: "https://medium.com/analytics-vidhya/azure-for-ai-ml-76b91274c391",
  },
  {
    title: "Headstart in Deep-Tech - Data Science and Machine Learning",
    platform: "Medium - Techiepedia",
    date: "2022",
    href: "https://medium.com/techiepedia/head-start-in-deep-tech-4e2195db3849",
  },
];

export const writingNotes: WritingNote[] = [
  {
    title: "Most teams do not have a data problem. They have a visibility problem.",
    slug: "visibility-problem",
    date: "2026",
    publishedAt: "2026-06-21",
    updatedAt: "2026-07-28",
    description:
      "A practical note on why reporting problems usually start with unclear inputs, definitions, ownership, and decision paths.",
    intro:
      "When reporting feels broken, the first instinct is usually to ask for another dashboard. I think the better starting point is to ask what the team cannot currently see, trust, or act on.",
    sections: [
      {
        heading: "The issue is rarely a lack of data",
        body:
          "Most teams already have more data than they can comfortably use. The problem is that the data is scattered across tools, named differently in each place, updated on different schedules, and interpreted differently by each team. When that happens, adding another dashboard rarely helps. It just creates another place to argue about which number is correct.",
      },
      {
        heading: "Visibility means more than access",
        body:
          "A visible system makes the source, definition, owner, freshness, and intended decision clear. It tells someone what changed, why it matters, and what they should inspect next. That is the difference between a warehouse table that technically exists and a reporting workflow that people can trust.",
      },
      {
        heading: "The useful work is usually upstream",
        body:
          "Before building the final chart, I care about the shape of the inputs: where they come from, how often they move, what breaks, and which assumptions are hidden inside spreadsheet logic. Good reporting starts with those decisions. The dashboard is the surface. The system underneath is what makes it useful.",
      },
    ],
    examples: [
      "A sales team has leads, product usage, and CRM notes, but no shared view of which accounts deserve attention today.",
      "A leadership team receives weekly numbers, but each metric is rebuilt by hand and nobody is confident about the source.",
      "A product team tracks events, but activation and retention mean different things across analytics, finance, and sales.",
    ],
    takeaway:
      "In a build, this means I start with source clarity, definitions, ownership, freshness, and decision paths before I design the final dashboard.",
  },
  {
    title: "What makes a dashboard useful enough to act on",
    slug: "useful-dashboard",
    date: "2026",
    publishedAt: "2026-06-21",
    updatedAt: "2026-07-28",
    description:
      "A note on dashboards that reduce ambiguity: clear metrics, plain labels, visible ownership, and obvious next steps.",
    intro:
      "A dashboard earns its place when it changes the next action. If it only adds another surface to check, the system is still doing too much work in people's heads.",
    sections: [
      {
        heading: "A dashboard should reduce a decision",
        body:
          "A dashboard is useful when it makes the next conversation shorter. It should make a metric legible, show whether something needs attention, and help a person decide what to inspect or do next. If the dashboard needs a long explanation every time it opens, it is not yet a decision surface.",
      },
      {
        heading: "Labels matter more than density",
        body:
          "Teams often add more charts when the real issue is unclear language. Activation, retention, qualified lead, active user, and revenue can each mean several things. A useful dashboard makes those definitions visible enough that the chart can be trusted without a meeting beside it.",
      },
      {
        heading: "The best dashboards have a handoff",
        body:
          "A good reporting product does not stop at showing a number. It points to the source, highlights exceptions, shows the owner, and makes the next action obvious. That might be a weekly summary, an alert, a follow-up list, or a workflow in another tool. The dashboard should be part of the operating system, not a screenshot people paste into slides.",
      },
    ],
    examples: [
      "A weekly report should show what changed, which metric moved, and who owns the next follow-up.",
      "A revenue dashboard should separate normal movement from exceptions that need attention.",
      "A product dashboard should make activation, retention, and conversion definitions visible beside the chart.",
    ],
    takeaway:
      "In a build, this means I design around plain labels, metric definitions, exception states, and a handoff into the next workflow.",
  },
  {
    title: "How I think about AI workflows: inputs, checks, logs, fallbacks, and outputs",
    slug: "ai-workflow-systems",
    date: "2026",
    publishedAt: "2026-06-21",
    updatedAt: "2026-07-28",
    description:
      "A note on treating AI as one layer inside an operational workflow, not as the whole system.",
    intro:
      "Useful AI systems are rarely just prompts. They are workflows with inputs, checks, logs, fallbacks, and outputs that a person or another system can actually use.",
    sections: [
      {
        heading: "The model is not the workflow",
        body:
          "AI work becomes useful when the surrounding system is clear. The model may classify, summarise, score, retrieve, or draft, but the reliability comes from the inputs, checks, logs, fallbacks, and outputs around it. Without that layer, the result is a demo. With it, the work can become part of an actual process.",
      },
      {
        heading: "Inputs and checks carry the quality",
        body:
          "The best prompt cannot rescue unclear inputs. I think about what the workflow receives, what context is attached, what constraints are enforced, and how the output is checked before a person sees it. Confidence, source evidence, schema validation, and failure states matter as much as the generated text.",
      },
      {
        heading: "Outputs need a handoff",
        body:
          "A useful AI workflow produces something a person or system can act on: a scored queue, a short brief, an exception list, a draft with evidence, or a structured record. The output should make uncertainty visible and make the next step obvious. That is where AI shifts from impressive to operational.",
      },
    ],
    examples: [
      "A monitoring workflow should keep source evidence beside every AI-generated summary.",
      "A classification workflow should log confidence, rejected records, and fallback paths.",
      "A writing or outreach workflow should produce a draft with context, not a black-box recommendation.",
    ],
    takeaway:
      "In a build, this means the model is treated as one layer inside a maintained system, with clear inputs and a human-readable handoff.",
  },
];
