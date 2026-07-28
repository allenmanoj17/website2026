export type ProjectVisual =
  | "dashboard"
  | "audit"
  | "editorial"
  | "flow"
  | "evidence"
  | "tokens";

export type Project = {
  name: string;
  slug: string;
  classification: string;
  publicStatus?: string;
  description: string;
  outcome: string;
  tags: string[];
  href: string;
  liveHref?: string;
  sourceHref?: string;
  summary: string;
  problem: string;
  system: string;
  output: string;
  architecture: string[];
  engineeringFocus: string[];
  currentEvidence: { label: string; href: string; external?: boolean }[];
  nextValidation: string[];
  limitations: string[];
  systemBehaviour: string[];
  reliability: string[];
  evaluation: string[];
  visual: ProjectVisual;
  emailSubject: string;
  audience: string;
  flow: string[];
  analyticsLoop?: string[];
  updatedAt: string;
};

export const featuredProjects: Project[] = [
  {
    name: "Lens",
    slug: "lens",
    classification: "Website intelligence system",
    publicStatus: "In development",
    description:
      "Replaces vague website feedback with a scored audit and prioritised fixes.",
    outcome: "Turns website signals into a prioritised fix list.",
    tags: ["Claude", "Playwright", "FastAPI", "Next.js", "Supabase"],
    href: "/work/lens",
    liveHref: "https://lens.allenmanoj.com",
    summary:
      "A website intelligence system for founders, agencies, and small teams that need a clearer view of technical health, trust, findability, conversion readiness, and AI visibility.",
    problem:
      "Most website audits focus on SEO or speed in isolation. They rarely connect trust signals, AI readability, conversion friction, and page speed into one prioritised view, and almost none account for how large language models and AI search engines read and evaluate a page.",
    system:
      "Lens plans a crawl, extracts HTML, headers, metadata, links, and visible content, then separates deterministic checks from heuristic and AI-assisted analysis. Findings retain their evidence, confidence, rule version, affected URL, and recommended action before prioritisation.",
    output:
      "A prioritised set of evidence-backed findings with enough context for a non-technical owner to understand what failed, why it matters, and what to change next.",
    architecture: ["Crawl", "Extract", "Validate", "Score", "Explain", "Monitor"],
    engineeringFocus: [
      "Reproducible diagnostic rules",
      "Evidence and confidence on every finding",
      "Versioned scoring and scan comparison",
    ],
    currentEvidence: [
      { label: "Current product build", href: "https://lens.allenmanoj.com", external: true },
      { label: "System architecture", href: "/work/lens" },
    ],
    nextValidation: [
      "Publish the rule catalogue and category-weight methodology.",
      "Measure false positives across a fixed set of representative websites.",
      "Validate scan comparison across versioned diagnostic rules.",
    ],
    limitations: [
      "The product and diagnostic catalogue are still evolving.",
      "Heuristic and AI-assisted findings require explicit confidence and review boundaries.",
    ],
    systemBehaviour: [
      "A crawl planner selects the pages and resources to inspect.",
      "Extraction records technical and visible-page signals.",
      "Deterministic, heuristic, and AI-assisted checks run separately.",
      "Findings retain source evidence before prioritisation and explanation.",
      "Versioned scans can later support monitoring and change comparison.",
    ],
    reliability: [
      "Failed pages remain visible rather than silently reducing coverage.",
      "Every finding carries a rule version and affected URL.",
      "AI-assisted recommendations remain downstream of captured evidence.",
    ],
    evaluation: [
      "Deterministic checks are evaluated for reproducibility.",
      "Heuristic checks require threshold and false-positive review.",
      "AI-assisted checks require groundedness and unsupported-claim testing.",
    ],
    visual: "audit",
    emailSubject: "Lens system discussion",
    audience: "Founders, agencies, and small teams that need a clearer read on website trust, AI readability, speed, and conversion issues.",
    flow: ["Public website", "Evidence-backed diagnostics", "Prioritised fixes"],
    updatedAt: "2026-07-28",
  },
  {
    name: "Automated Intelligence Revenue System (AIRS)",
    slug: "airs",
    classification: "Revenue intelligence system",
    description:
      "Replaces stale product exports with prioritised accounts, clear reasoning, and sales-ready next steps.",
    outcome: "Turns product usage signals into prioritised, explainable revenue action.",
    tags: ["BigQuery", "dbt", "XGBoost", "SHAP", "Airflow", "Power BI"],
    href: "/work/airs",
    summary:
      "A revenue intelligence system design connecting behavioural product data, governed analytical models, explainable scoring, orchestration, and operational sales interfaces.",
    problem:
      "Product usage, account health, CRM, and billing signals often live in separate systems. Revenue teams work from stale exports or intuition because no governed layer converts that behaviour into prioritised action.",
    system:
      "Product events, CRM accounts, and billing state land in BigQuery and are modelled with dbt. A feature pipeline supports baseline comparison and XGBoost scoring, SHAP provides local explanations, and Airflow coordinates delivery into sales briefings and Power BI.",
    output:
      "A governed daily view of prioritised accounts, score explanations, and recommended next actions, designed around sales capacity rather than an arbitrary probability threshold.",
    architecture: ["BigQuery", "dbt", "Features", "XGBoost", "SHAP", "Airflow", "Power BI"],
    engineeringFocus: [
      "Contract-tested analytical models",
      "Temporal evaluation and calibration",
      "Idempotent batch orchestration",
    ],
    currentEvidence: [{ label: "Current system design", href: "/work/airs" }],
    nextValidation: [
      "Compare a rules baseline, logistic regression, and XGBoost on a temporal split.",
      "Select thresholds using precision, recall, and lift at the team’s daily capacity.",
      "Publish an idempotency test before presenting the orchestration as production-ready.",
      "Evaluate generated outreach for evidence coverage and unsupported claims.",
    ],
    limitations: [
      "No measured model or business-performance claim is published yet.",
      "Outreach generation remains outside current evidence until its evaluation benchmark exists.",
    ],
    systemBehaviour: [
      "Product, CRM, and billing data are modelled at account and scoring-date grain.",
      "Contract checks protect keys, freshness, accepted values, and feature ranges.",
      "Baseline and candidate models produce comparable account scores.",
      "Local explanations translate model signals into controlled operational language.",
      "Airflow coordinates scoring and delivery into a decision interface.",
    ],
    reliability: [
      "The design uses stable account and scoring-date keys.",
      "Batch writes are designed around merge semantics instead of blind append.",
      "Notifications require deterministic delivery keys to prevent duplicate outreach.",
    ],
    evaluation: [
      "Use temporal train, validation, and untouched test windows.",
      "Compare PR-AUC, precision@k, recall@k, lift@k, Brier score, and calibration.",
      "Keep generated factual statements traceable to allowed evidence fields.",
    ],
    visual: "flow",
    emailSubject: "AIRS system discussion",
    audience: "Product-led teams that need to connect usage, account health, and revenue signals into prioritised actions.",
    flow: ["Product and account data", "Explainable scoring", "Revenue action"],
    updatedAt: "2026-07-28",
  },
  {
    name: "DistributionOS",
    slug: "distributionos",
    classification: "Evidence-first content system",
    publicStatus: "In development",
    description:
      "Replaces scattered ideas and manual drafting with a source-grounded editorial workflow.",
    outcome: "Turns trusted source material into grounded, reusable content without losing voice.",
    tags: ["Next.js", "Supabase", "pgvector", "OpenAI", "TypeScript"],
    href: "/work/distributionos",
    summary:
      "An AI-enabled editorial workspace for builders, founders, and small teams that keeps research, positioning, approved claims, drafting, editing, visual assets, publishing, and review inside one evidence-aware workflow.",
    problem:
      "Most AI writing tools start from a prompt and produce generic drafts. Builders and small teams have scattered notes, research, positioning guidance, and past writing, but no reliable way to reuse that context without losing evidence or voice.",
    system:
      "DistributionOS ingests notes, briefs, uploads, links, and saved signals into a searchable source library with safe-to-share controls. Project profiles define audiences, positioning, approved claims, themes, and writing constraints. Retrieval supports grounded drafting, comparative editing, style learning, visual generation, publishing, and performance review.",
    output:
      "A repeatable editorial workflow producing source-grounded drafts, reusable voice rules, platform-ready content, supporting visuals, and a measurable path from source ingestion to repeat use.",
    architecture: ["Sources", "Safe retrieval", "Project context", "Draft", "Edit", "Publish", "Review"],
    engineeringFocus: [
      "Privacy-bounded source retrieval",
      "Evidence-grounded generation",
      "Behavioural product analytics",
    ],
    currentEvidence: [{ label: "Current system design", href: "/work/distributionos" }],
    nextValidation: [
      "Validate retrieval quality against a fixed source-and-claim test set.",
      "Measure how editing behaviour changes reusable style rules.",
      "Define activation and retention events before presenting product-performance conclusions.",
    ],
    limitations: [
      "The product is in development and has no public live environment.",
      "Style-learning and performance loops require real repeated usage before evaluation.",
    ],
    systemBehaviour: [
      "Trusted sources are ingested with explicit safe-to-share boundaries.",
      "Project profiles constrain audience, positioning, claims, and writing rules.",
      "Retrieval selects relevant evidence before drafting begins.",
      "Comparative editing captures differences between generated and final writing.",
      "Publishing and review events form the behavioural analytics loop.",
    ],
    reliability: [
      "Private sources must remain outside prompts unless explicitly allowed.",
      "Generated claims require traceable source context.",
      "Draft, edit, and publishing states remain recoverable independently.",
    ],
    evaluation: [
      "Measure retrieval relevance and source coverage.",
      "Track unsupported claims and generic phrasing.",
      "Evaluate activation, draft completion, return usage, and time to first useful output.",
    ],
    visual: "editorial",
    emailSubject: "DistributionOS system discussion",
    audience: "Builders, founders, and small teams with notes, research, positioning, and past writing that should become a repeatable distribution system.",
    flow: ["Trusted sources", "Grounded drafting", "Publish and review"],
    analyticsLoop: [
      "Sign up",
      "Create project",
      "Add source material",
      "Draft",
      "Edit",
      "Generate visuals",
      "Publish or export",
      "Return",
    ],
    updatedAt: "2026-07-28",
  },
  {
    name: "Sentinel",
    slug: "sentinel",
    classification: "Open-source monitoring system",
    publicStatus: "Open source",
    description:
      "Replaces noisy monitoring feeds with scored changes, source evidence, and useful escalation.",
    outcome: "Turns changing web information into evidence-backed alerts and briefings.",
    tags: ["Firecrawl", "Claude", "Supabase", "FastAPI", "ElevenLabs"],
    href: "/work/sentinel",
    liveHref: "https://sentinel-ai.up.railway.app/",
    sourceHref: "https://github.com/allenmanoj17/sentinel",
    summary:
      "An open-source AI monitoring system for teams that need evidence-backed intelligence rather than raw web alerts. Tracks meaningful changes across companies, people, topics, and URLs with source evidence and importance scoring.",
    problem:
      "Web monitoring tools generate noise. They surface raw changes without evidence, context, or any signal about which updates actually matter. Teams end up with another feed to check rather than intelligence they can act on.",
    system:
      "Sentinel schedules configured watches, retrieves source content, canonicalises noisy pages, compares the result with prior state, preserves evidence, and uses AI only after deterministic change detection to evaluate significance and route alerts.",
    output:
      "Evidence-backed change alerts with an importance score, source context, and enough detail to decide whether a change matters and what should happen next without reading through unfiltered monitoring feeds.",
    architecture: ["Schedule", "Retrieve", "Canonicalise", "Compare", "Evaluate", "Persist", "Alert"],
    engineeringFocus: [
      "Evidence-preserving change detection",
      "Persistent monitoring state",
      "False-positive and duplicate suppression",
    ],
    currentEvidence: [
      { label: "Open current build", href: "https://sentinel-ai.up.railway.app/", external: true },
      { label: "View source", href: "https://github.com/allenmanoj17/sentinel", external: true },
    ],
    nextValidation: [
      "Publish a fixed change-detection test corpus.",
      "Measure false positives after dynamic-content removal.",
      "Document recovery behaviour for retrieval and notification failures.",
    ],
    limitations: [
      "Significance evaluation remains dependent on source quality and configured thresholds.",
      "Dynamic pages require source-specific canonicalisation to avoid noisy alerts.",
    ],
    systemBehaviour: [
      "Monitoring definitions establish what should be checked and when.",
      "Retrieved content is canonicalised before comparison.",
      "Deterministic change detection identifies candidate differences.",
      "Source evidence is persisted before AI significance evaluation.",
      "High-priority changes are routed through configured channels.",
    ],
    reliability: [
      "Persistent state allows comparisons to survive worker restarts.",
      "Duplicate suppression prevents repeated alerts for the same evidence.",
      "Retrieval and notification failures remain separate retry boundaries.",
    ],
    evaluation: [
      "Test canonicalisation against dynamic and stable page regions.",
      "Measure change-detection precision and duplicate-alert rate.",
      "Review AI significance decisions against human-labelled examples.",
    ],
    visual: "evidence",
    emailSubject: "Sentinel system discussion",
    audience: "Teams that track companies, people, topics, or pages and need important changes separated from noise.",
    flow: ["Source watch", "Evidence and significance", "Routed alert"],
    updatedAt: "2026-07-28",
  },
];

export const secondaryProjects: Project[] = [
  {
    name: "BrandScan",
    slug: "brandscan",
    classification: "Internal accelerator",
    description:
      "Replaces manual visual inspection with extracted colours, typography, contrast checks, and design tokens.",
    outcome: "Turns a live website into reusable visual tokens and structured brand signals.",
    tags: ["Playwright", "Celery", "Postgres", "Cloudflare R2", "Next.js"],
    href: "/work/brandscan",
    summary:
      "An internal accelerator that replaces manual brand discovery with an automated crawl. Produces a structured brand board and exportable design tokens from any live website.",
    problem:
      "When a project starts with an existing brand, the visual system lives in screenshots, designers' memories, and buried CSS files. Extracting the actual colours, fonts, and contrast ratios is tedious, inconsistent, and easy to get wrong.",
    system:
      "BrandScan crawls a target website using headless Chromium via Playwright, extracts computed colours, font families, sizes, contrast ratios, and component samples, then runs an async Celery job to structure them into an editable brand board. Results are stored in Cloudflare R2.",
    output:
      "A structured brand board with extracted colours, typography, contrast audit scores, component crops, and exportable implementation tokens.",
    architecture: ["Website", "Crawl", "Extract", "Structure", "Store", "Export"],
    engineeringFocus: ["Headless extraction", "Asynchronous processing", "Reusable token output"],
    currentEvidence: [{ label: "System notes", href: "/work/brandscan" }],
    nextValidation: ["Test extraction across a wider range of component and stylesheet patterns."],
    limitations: ["Extraction quality depends on how consistently the source site exposes its visual system."],
    systemBehaviour: [
      "A target site is crawled using headless Chromium.",
      "Computed visual properties are extracted and normalised.",
      "An asynchronous job assembles an editable brand board.",
      "Structured results are stored for export.",
    ],
    reliability: [
      "Crawl and processing stages remain separate failure boundaries.",
      "Exports are generated from stored structured results rather than transient page state.",
    ],
    evaluation: ["Compare extracted tokens with manually verified source styles."],
    visual: "tokens",
    emailSubject: "BrandScan system discussion",
    audience: "Teams starting from an existing website or brand that need the visual system turned into reusable implementation tokens.",
    flow: ["Live website", "Visual extraction", "Design tokens"],
    updatedAt: "2026-07-28",
  },
];

export const allProjects: Project[] = [...featuredProjects, ...secondaryProjects];

export const services = [
  {
    number: "01",
    name: "Data pipelines & analytics engineering",
    description:
      "I design and build data pipelines that connect scattered sources into a clean, queryable layer: source extraction, warehouse modelling with dbt, transformation logic, scheduled jobs, and data quality checks. Most useful when reporting depends on manual exports, brittle spreadsheet logic, or sources that never talk to each other.",
    tags: ["Python", "SQL", "dbt", "BigQuery", "Airflow", "Postgres", "Supabase"],
  },
  {
    number: "02",
    name: "Reporting systems & dashboard automation",
    description:
      "I turn recurring reporting into a maintained system: automated dashboards, scheduled summaries, anomaly detection, stakeholder-ready metrics, and delivery workflows. The goal is not more charts; it is fewer status meetings and clearer decisions.",
    tags: ["Power BI", "Looker Studio", "Claude API", "FastAPI", "Next.js", "Recharts"],
  },
  {
    number: "03",
    name: "Product & revenue intelligence",
    description:
      "I build the analysis layer that connects product behaviour to business outcomes: funnel analysis, cohort tracking, activation and retention metrics, lead scoring with SHAP explainability, and conversion reporting. Product and sales teams get a clear view of which segments or accounts need attention and why.",
    tags: ["Python", "SQL", "XGBoost", "SHAP", "BigQuery", "dbt"],
  },
  {
    number: "04",
    name: "AI systems & workflow automation",
    description:
      "I build AI workflows around specific operational problems: classification, summarisation, evidence collection, change monitoring, scoring, retrieval, and structured output generation. The valuable part is the system around the model: structured inputs, output guardrails, confidence logging, fallback handling, and a clear handoff when human review is needed.",
    tags: ["Claude API", "LangChain", "FastAPI", "Python", "Supabase", "Firecrawl"],
  },
  {
    number: "05",
    name: "Data products & internal tooling",
    description:
      "I design and build internal tools where the data work needs a proper interface: diagnostic portals, reporting dashboards, admin panels, monitoring screens, and data-backed MVPs. I cover the full path from data model and API design through to front-end, so the output is a working product rather than disconnected scripts.",
    tags: ["Next.js", "React", "FastAPI", "Postgres", "AWS", "TypeScript"],
  },
];

export const archive = [
  {
    category: "Machine learning & deep learning",
    items: [
      {
        name: "Histopathology Image Classification",
        description:
          "SVM, MLP, and CNN models for nine-class colorectal cancer tissue classification. Reached 72% validation accuracy using stratified 5-fold cross-validation and Keras Tuner hyperparameter optimisation.",
        tags: ["Python", "TensorFlow", "scikit-learn", "Keras Tuner", "CNN"],
      },
      {
        name: "Pulmonary Disease Classification",
        description:
          "Deep learning framework for multiclass respiratory disease classification from audio. Raw recordings converted to log-mel spectrogram images and classified with CNN and EfficientNetB0 transfer learning across seven disease classes.",
        tags: ["Python", "CNN", "EfficientNetB0", "Deep Learning", "Signal Processing"],
        href: "https://github.com/allenmanoj17/Detection-of-Pulmonary-Diseases-using-Respiratory-Sounds",
      },
      {
        name: "Mental Health Treatment Prediction",
        description:
          "Predicted adult mental health treatment outcomes from employee survey data. Compared Logistic Regression, Decision Trees, Random Forest, KNN, and SVM with feature selection and cross-validation. Best model reached 84.23% accuracy.",
        tags: ["Python", "Flask", "scikit-learn", "Pandas", "Classification"],
        href: "https://github.com/allenmanoj17/Mental-Health-Treatment-Prediction",
      },
      {
        name: "Crop Mapping - Fused Optical-Radar Classification",
        description:
          "Seven-class crop type classification from fused optical and synthetic aperture radar satellite imagery. Optimised LDA, Logistic Regression, KNN, SVM, and Random Forest models with feature engineering on multi-temporal satellite bands.",
        tags: ["R", "Machine Learning", "Remote Sensing", "SAR", "Classification"],
      },
      {
        name: "Age and Gender Detection",
        description:
          "Real-time age and gender prediction from images and live webcam streams. CNN-based CaffeNet architecture with multi-output classification for age range and gender across multiple demographic groups.",
        tags: ["Computer Vision", "CNN", "CaffeNet", "OpenCV", "Python"],
        href: "https://github.com/allenmanoj17/Agender",
      },
      {
        name: "Mood-Based Music Recommender",
        description:
          "Playlist recommender combining live facial emotion detection with DenseNet121 and text sentiment analysis with DistilBERT to match a user's current state to Spotify track features including valence, tempo, and energy.",
        tags: ["DenseNet121", "DistilBERT", "Streamlit", "Spotify API", "Emotion Detection"],
      },
    ],
  },
  {
    category: "Data & analytics",
    items: [
      {
        name: "Image Captioning Web App",
        description:
          "Production-grade Flask application on AWS with EC2 Auto Scaling, an Application Load Balancer, S3-triggered Lambda for async processing, EventBridge scheduling, RDS for persistence, Gemini caption generation, and CloudWatch observability.",
        tags: ["Flask", "EC2", "S3", "Lambda", "EventBridge", "RDS", "CloudWatch"],
      },
      {
        name: "ETL Pipeline - AWS Data Infrastructure",
        description:
          "End-to-end ETL pipeline for structured data transfer, transformation, error reporting, and dashboard delivery. Built on Redshift as the warehouse, Glue for orchestration, CloudWatch for error alerting, QuickSight for visualisation, and PostgreSQL for operational storage.",
        tags: ["Redshift", "AWS Glue", "CloudWatch", "QuickSight", "PostgreSQL"],
        href: "https://github.com/allenmanoj17/ETL-Pipeline-using-AWS-Cloud",
      },
      {
        name: "Churn Analysis Dashboard",
        description:
          "Interactive Tableau dashboard covering churn patterns, KPIs, cohort analysis, churn prediction metrics, and retention segmentation. Includes executive summary view and drill-down by customer segment.",
        tags: ["Tableau", "Data Visualisation", "Cohort Analysis", "Retention Analytics"],
        href: "https://public.tableau.com/app/profile/allenmanoj/viz/AnalyzeChurn_17355702446080/ChurnAnalysis",
      },
      {
        name: "Customer Segmentation",
        description:
          "K-means clustering on customer behaviour and transaction data. Identified segments with different spending patterns and purchase frequency, used to inform targeted marketing strategy and retention priorities.",
        tags: ["Python", "Pandas", "NumPy", "K-Means", "Matplotlib", "Seaborn"],
      },
      {
        name: "Smart Lender - Loan Eligibility Prediction",
        description:
          "Web application for loan eligibility prediction using XGBoost trained on applicant financial and demographic data. Includes risk scoring dashboards, eligibility decision logic, and an IBM Watson chatbot for applicant guidance.",
        tags: ["Python", "Flask", "XGBoost", "IBM Cloud", "IBM Watson"],
        href: "https://github.com/allenmanoj17/Smart-Lender",
      },
      {
        name: "Project Management System - Bhumi",
        description:
          "WhatsApp-based service request system for Bhumi's Tech4Change initiative. Users submit requests via WhatsApp and receive automated status updates through a Twilio integration, with a Streamlit admin interface for the operations team.",
        tags: ["Python", "Twilio", "Streamlit", "WhatsApp API", "Automation"],
      },
    ],
  },
  {
    category: "Personal systems",
    note: "Systems built for personal use - included because they show what gets built when there is no brief.",
    items: [
      {
        name: "LifeOS",
        description:
          "Personal planning workspace with daily and seven-day planning, Google Calendar conflict detection, productivity analytics, push notification reminders, and a PWA wrapper for home screen use.",
        tags: ["Next.js 16", "React 19", "Convex", "Clerk", "PWA", "Web Push"],
        href: "https://github.com/allenmanoj17/lifeOS",
      },
      {
        name: "Morsel",
        description:
          "Health and recovery tracking PWA with natural language meal logging, workout volume trends, supplement tracking, recovery status, macro adherence, hydration analysis, and Claude-powered end-of-day reviews.",
        tags: ["Next.js", "FastAPI", "Supabase", "Claude API", "Recharts", "PWA"],
        href: "https://morsel-log.vercel.app/",
      },
      {
        name: "Haven",
        description:
          "Generative ambient audio engine for deep work. Uses Llama via Cloudflare AI Workers to design evolving sound textures, ElevenLabs for audio synthesis, Durable Objects for session state, R2 for audio caching, and a gapless Web Audio API player.",
        tags: ["Next.js", "Cloudflare Workers", "Durable Objects", "ElevenLabs", "Web Audio API"],
        href: "https://haven-soundscape.vercel.app/",
      },
    ],
  },
];
