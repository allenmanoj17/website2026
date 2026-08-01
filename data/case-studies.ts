export type CaseStudyContent = {
  role: string;
  stage: string;
  scope: string;
  challengeTitle: string;
  challengeLead: string;
  constraints: string[];
  approachTitle: string;
  approachLead: string;
  decisions: {
    title: string;
    description: string;
  }[];
  primaryVisualTitle: string;
  primaryVisualCaption: string;
  secondaryVisualTitle: string;
  secondaryVisualCaption: string;
  buildNotes: {
    title: string;
    description: string;
  }[];
};

export const caseStudies: Record<string, CaseStudyContent> = {
  lens: {
    role: "Product design, systems architecture, and full-stack build",
    stage: "In development",
    scope: "Website diagnostics, evidence, scoring, and monitoring",
    challengeTitle: "A website audit is only useful when it changes what happens next.",
    challengeLead:
      "Founders can collect SEO scores, performance reports, and generic AI feedback from separate tools. The harder problem is connecting those signals into one defensible order of work without hiding the source evidence.",
    constraints: [
      "Keep deterministic, heuristic, and AI-assisted checks visibly separate.",
      "Attach evidence, affected URLs, confidence, and rule version to every finding.",
      "Make partial crawl failures visible rather than presenting incomplete coverage as a complete scan.",
      "Explain recommendations in language a non-technical owner can act on.",
    ],
    approachTitle: "Build the finding as a traceable object, not a line of generated advice.",
    approachLead:
      "The design begins with crawl evidence and a stable finding schema. Scoring and explanation happen after evidence capture, which keeps the AI layer useful without making it the source of truth.",
    decisions: [
      {
        title: "Evidence before explanation",
        description:
          "Captured page signals remain attached to the finding so every recommendation can be inspected.",
      },
      {
        title: "Separate rule families",
        description:
          "Deterministic checks, heuristics, and AI-assisted interpretation use different confidence and review rules.",
      },
      {
        title: "Version the scoring layer",
        description:
          "Rule and weight versions are part of the scan so future comparisons do not silently mix methodologies.",
      },
      {
        title: "Prioritise the next action",
        description:
          "The interface leads with severity, evidence, and the recommended fix rather than a score alone.",
      },
    ],
    primaryVisualTitle: "Diagnostic overview",
    primaryVisualCaption:
      "A category-level view designed to direct attention without treating one score as proof.",
    secondaryVisualTitle: "Finding detail",
    secondaryVisualCaption:
      "The proposed finding object keeps severity, confidence, evidence, affected URL, and next action together.",
    buildNotes: [
      {
        title: "Crawl boundary",
        description:
          "The planner needs explicit page limits, exclusions, canonical URLs, and a visible record of failed pages.",
      },
      {
        title: "Finding schema",
        description:
          "Rule ID, version, category, severity, confidence, evidence, URL, explanation, and action form the core contract.",
      },
      {
        title: "Monitoring path",
        description:
          "Versioned scans create the foundation for showing what improved, regressed, or changed between runs.",
      },
    ],
  },
  airs: {
    role: "Data architecture, analytical modelling, ML workflow, and product design",
    stage: "Current system design",
    scope: "Product usage, explainable scoring, orchestration, and revenue action",
    challengeTitle: "Revenue teams need a reason to act, not another model score.",
    challengeLead:
      "Usage events, account data, billing state, and CRM context usually arrive with different grains and definitions. A useful system has to govern those inputs before it ranks accounts or generates a recommendation.",
    constraints: [
      "Model product, CRM, and billing data at a stable account and scoring-date grain.",
      "Compare a simple rules or logistic baseline before accepting a more complex model.",
      "Keep explanations tied to governed features rather than generated sales language.",
      "Design delivery around team capacity and duplicate-safe orchestration.",
    ],
    approachTitle: "Treat scoring as one governed step inside a revenue workflow.",
    approachLead:
      "The system design connects warehouse contracts, feature generation, baseline comparison, explainable scoring, orchestration, and a sales-facing decision surface. The value comes from the complete path, not XGBoost in isolation.",
    decisions: [
      {
        title: "Stable analytical grain",
        description:
          "Account and scoring date form the contract across features, scores, explanations, and delivery.",
      },
      {
        title: "Baseline before complexity",
        description:
          "Rules and logistic regression provide a reference before evaluating whether XGBoost adds decision value.",
      },
      {
        title: "Capacity-aware thresholds",
        description:
          "Precision and lift at the team’s workable daily volume matter more than an arbitrary probability cut-off.",
      },
      {
        title: "Explain before outreach",
        description:
          "SHAP-backed reasons support account review; generated outreach remains outside current evidence.",
      },
    ],
    primaryVisualTitle: "Revenue action queue",
    primaryVisualCaption:
      "A proposed decision surface showing priority, evidence, explanation, and the next review step.",
    secondaryVisualTitle: "Account explanation",
    secondaryVisualCaption:
      "A feature-level view designed to make the ranking inspectable before anyone acts on it.",
    buildNotes: [
      {
        title: "Warehouse contracts",
        description:
          "Keys, grain, freshness, accepted values, and feature ranges need tests before scoring begins.",
      },
      {
        title: "Temporal evaluation",
        description:
          "Training and validation windows must respect time so future account behaviour does not leak backwards.",
      },
      {
        title: "Idempotent delivery",
        description:
          "Stable scoring and notification keys prevent duplicate records and repeated outreach after retries.",
      },
    ],
  },
  distributionos: {
    role: "Product architecture, retrieval workflow, AI interaction design, and analytics design",
    stage: "In development",
    scope: "Source library, grounded drafting, comparative editing, and publishing review",
    challengeTitle: "A writing system should preserve evidence and voice, not erase both.",
    challengeLead:
      "Generic writing tools begin with an empty prompt. DistributionOS begins with trusted notes, research, positioning, approved claims, and previous writing, then controls which parts are safe to retrieve into a draft.",
    constraints: [
      "Respect safe-to-share boundaries when retrieving private source material.",
      "Keep generated claims traceable to supporting context.",
      "Capture the difference between an AI draft and the final human edit.",
      "Measure the full behavioural loop without turning early usage into unsupported product claims.",
    ],
    approachTitle: "Make context a maintained product layer rather than a longer prompt.",
    approachLead:
      "Project profiles, source permissions, retrieval, drafting, editing, style learning, visual generation, and publishing are designed as separate states. That separation makes the workflow easier to inspect, recover, and improve.",
    decisions: [
      {
        title: "Privacy-bounded retrieval",
        description:
          "Every source carries an explicit sharing boundary before it can enter a generation context.",
      },
      {
        title: "Project context as a contract",
        description:
          "Audience, positioning, approved claims, themes, and writing constraints remain reusable across drafts.",
      },
      {
        title: "Comparative editing",
        description:
          "Original and edited versions remain side by side so recurring changes can become explicit voice rules.",
      },
      {
        title: "Behavioural loop",
        description:
          "Source use, drafting, editing, export, and return behaviour create a measurable product workflow.",
      },
    ],
    primaryVisualTitle: "Grounded editorial workspace",
    primaryVisualCaption:
      "Source context and drafting remain visible together instead of disappearing behind a single prompt box.",
    secondaryVisualTitle: "Draft comparison",
    secondaryVisualCaption:
      "A proposed comparison view for turning repeated human edits into maintainable writing rules.",
    buildNotes: [
      {
        title: "Source permissions",
        description:
          "Retrieval must filter by project, relevance, and safe-to-share state before generation.",
      },
      {
        title: "Claim grounding",
        description:
          "Draft claims should retain references to the source context that permitted them.",
      },
      {
        title: "Product analytics",
        description:
          "Activation, completion, editing depth, export, and repeat use form the initial measurement model.",
      },
    ],
  },
  sentinel: {
    role: "System architecture, backend workflow, monitoring logic, and intelligence interface",
    stage: "Open-source current build",
    scope: "Retrieval, change detection, evidence preservation, scoring, and alerting",
    challengeTitle: "Monitoring creates value only when it separates change from noise.",
    challengeLead:
      "Raw page diffs are full of navigation changes, timestamps, rotating content, and rendering noise. Sentinel needs deterministic evidence before AI can judge significance or route an alert.",
    constraints: [
      "Canonicalise dynamic content before comparing page state.",
      "Persist source evidence before asking a model to judge significance.",
      "Separate retrieval, comparison, evaluation, persistence, and notification retries.",
      "Suppress duplicate alerts without hiding a genuinely new change.",
    ],
    approachTitle: "Use AI after the change is proven, not to decide whether a change exists.",
    approachLead:
      "Sentinel creates a deterministic comparison boundary first. AI evaluates the importance of captured evidence downstream, while persistent state and delivery keys make monitoring recoverable.",
    decisions: [
      {
        title: "Canonical content",
        description:
          "Source-specific cleanup removes known dynamic regions before a comparison is created.",
      },
      {
        title: "Evidence first",
        description:
          "Before and after evidence is stored before significance evaluation or alert generation.",
      },
      {
        title: "Persistent watch state",
        description:
          "The comparison history survives worker restarts and supports later review.",
      },
      {
        title: "Separate retry boundaries",
        description:
          "A failed notification does not require retrieval and significance evaluation to run again.",
      },
    ],
    primaryVisualTitle: "Evidence-backed alert feed",
    primaryVisualCaption:
      "The alert surface leads with captured evidence, significance, and routing state.",
    secondaryVisualTitle: "Change inspection",
    secondaryVisualCaption:
      "A proposed review view keeps the source difference and the model’s significance judgement separate.",
    buildNotes: [
      {
        title: "Watch definition",
        description:
          "URL, schedule, extraction rules, canonicalisation, and routing preferences form the monitoring contract.",
      },
      {
        title: "Comparison state",
        description:
          "Content hashes, evidence, timestamps, and prior state support deterministic change detection.",
      },
      {
        title: "Alert deduplication",
        description:
          "A stable evidence and destination key prevents repeated delivery of the same change.",
      },
    ],
  },
  brandscan: {
    role: "Product design, extraction workflow, asynchronous processing, and interface design",
    stage: "Current build",
    scope: "Website crawl, visual extraction, brand board, and token export",
    challengeTitle: "A brand system is often visible everywhere and documented nowhere.",
    challengeLead:
      "When work begins from an existing website, colours, typography, spacing, and contrast decisions are buried across stylesheets and components. Manual inspection is slow and inconsistent.",
    constraints: [
      "Extract computed visual properties rather than relying only on source CSS declarations.",
      "Separate crawling from asynchronous structuring and export.",
      "Preserve page and component context for extracted visual signals.",
      "Make the result editable before it becomes implementation tokens.",
    ],
    approachTitle: "Turn the live interface into a structured, reviewable design-system draft.",
    approachLead:
      "BrandScan crawls representative pages, samples computed styles and components, normalises repeated values, then assembles a brand board that can be reviewed before export.",
    decisions: [
      {
        title: "Computed styles",
        description:
          "Extraction observes the rendered page so inherited and runtime styles are not missed.",
      },
      {
        title: "Frequency with context",
        description:
          "Repeated values are useful, but page location and component samples help explain what each token means.",
      },
      {
        title: "Asynchronous structuring",
        description:
          "Crawling, extraction, board generation, and export remain separate processing stages.",
      },
      {
        title: "Editable before export",
        description:
          "Users can resolve noise and duplicates before producing JSON, CSS, or Tailwind tokens.",
      },
    ],
    primaryVisualTitle: "Extracted token board",
    primaryVisualCaption:
      "The current review surface groups extracted colour, typography, contrast, and component results from a website crawl.",
    secondaryVisualTitle: "Token export",
    secondaryVisualCaption:
      "The reviewed output is converted into reusable JSON, CSS, and Tailwind-friendly implementation tokens.",
    buildNotes: [
      {
        title: "Crawl coverage",
        description:
          "Representative pages and component states matter more than blindly crawling every URL.",
      },
      {
        title: "Normalisation",
        description:
          "Equivalent colour formats, font declarations, and repeated values need stable grouping rules.",
      },
      {
        title: "Export boundary",
        description:
          "Only reviewed values should flow into the generated brand and implementation files.",
      },
    ],
  },
};
