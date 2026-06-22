export const featuredProjects = [
  {
    name: "Reporting Automation Demo",
    slug: "reporting-automation-demo",
    description:
      "A working demo that replaces manual weekly exports and reporting commentary with an automated dashboard, scheduled summaries, and exception alerts for small business owners who still report by hand.",
    outcome: "Replaces manual weekly reporting with a maintained, automated workflow.",
    badge: "commercial demo",
    badgeVariant: "build" as const,
    tags: ["Power BI", "Python", "SQL", "Automation"],
    href: "/work/reporting-automation-demo",
    summary:
      "A demonstration of what replacing a manual reporting loop actually looks like. Built for small businesses and agency owners who spend hours each week assembling numbers that should assemble themselves.",
    problem:
      "Most small business reporting still depends on someone pulling exports, stitching spreadsheets, writing commentary, and running a status meeting to explain what changed. The process is slow, inconsistent, and leaves when the person leaves.",
    system:
      "Incoming files are normalised, validated, and transformed on a schedule. Owner-level metrics are calculated, exceptions flagged automatically, and a weekly summary produced and delivered without manual input. The workflow is documented and maintainable.",
    output:
      "A maintained reporting system that reduces weekly reporting effort from hours to minutes, with a live dashboard, automated exception list, scheduled summary delivery, and metric definitions the whole team can rely on.",
    visual: "dashboard" as const,
    ctaLabel: "Request a walkthrough",
    ctaHref: "mailto:allen@allenmanoj.com?subject=Reporting%20automation%20walkthrough",
  },
  {
    name: "Lens",
    slug: "lens",
    description:
      "Scans any public website and scores it across trust signals, page speed, AI readability, and conversion, then explains each issue in plain English with specific, prioritised fixes.",
    outcome: "Turns website signals into a prioritised fix list.",
    badge: "independent product",
    badgeVariant: "product" as const,
    tags: ["Claude", "Playwright", "FastAPI", "Next.js", "Supabase"],
    href: "/work/lens",
    tryHref: "https://lens.allenmanoj.com",
    summary:
      "A website analysis product that gives founders, agency owners, and small teams a clear view of what their site communicates to both humans and AI tools. Free to run at lens.allenmanoj.com.",
    problem:
      "Most website audits focus on SEO or speed in isolation. They rarely connect trust signals, AI readability, conversion friction, and page speed into one prioritised view, and almost none account for how large language models and AI search engines read and evaluate a page.",
    system:
      "Lens crawls a public page using Playwright, evaluates it across trust signals, page speed, AI readability, security, and conversion, scores each dimension out of 100, and identifies the highest-impact issue with a plain-English explanation and a specific recommended fix.",
    output:
      "A scored audit with an overall site health score, dimension-level breakdowns, a prioritised top issue, and specific actions a team can take. The output is written so a non-technical founder can read and act on it without needing a developer to translate it.",
    visual: "audit" as const,
    ctaLabel: "Run a Lens scan",
    ctaHref: "https://lens.allenmanoj.com",
  },
  {
    name: "Plunk",
    slug: "plunk",
    description:
      "A simulated revenue intelligence system built on BigQuery, dbt, XGBoost, and LangChain. Models product usage data, scores accounts by conversion likelihood with SHAP explainability, drafts AI-assisted outreach, and delivers daily briefings via Airflow and Slack.",
    outcome: "Turns product usage data into a prioritised sales action layer.",
    badge: "simulated case study",
    badgeVariant: "sim" as const,
    tags: ["BigQuery", "dbt", "XGBoost", "LangChain", "Airflow", "Claude"],
    href: "/work/plunk",
    summary:
      "A clearly labelled simulated case study in analytics engineering, ML lead scoring, and AI-assisted outreach. Demonstrates a full data-to-action pipeline across warehouse modelling, transformation, scoring, explainability, outreach generation, orchestration, and alerting.",
    problem:
      "Product usage, account health, and revenue signals usually live in separate systems: CRM, product database, billing, and analytics. Sales teams end up working from gut feel or stale exports because there is no single layer that converts behaviour into prioritised action.",
    system:
      "Product events are ingested into BigQuery and modelled with dbt. XGBoost scores each account's conversion likelihood, with SHAP values explaining which signals drove the score. LangChain and Claude generate personalised outreach drafts for high-priority accounts. Airflow orchestrates the pipeline and Slack delivers daily briefings to the sales team.",
    output:
      "A daily feed of prioritised accounts with conversion scores, signal explanations, and ready-to-send outreach drafts, updated automatically from product behaviour without manual analysis.",
    visual: "flow" as const,
    ctaLabel: "Request a walkthrough",
    ctaHref: "mailto:allen@allenmanoj.com?subject=Plunk%20case%20study%20walkthrough",
  },
  {
    name: "Sentinel",
    slug: "sentinel",
    description:
      "Open-source web intelligence system that monitors companies, people, topics, and URLs for meaningful change. Gathers evidence with Firecrawl, scores importance with Claude, and escalates updates through alerts and ElevenLabs voice briefings.",
    outcome: "Turns web changes into evidence-backed intelligence briefings.",
    badge: "independent build",
    badgeVariant: "build" as const,
    tags: ["Firecrawl", "Claude", "Supabase", "FastAPI", "ElevenLabs"],
    href: "/work/sentinel",
    sourceHref: "https://github.com/allenmanoj17/sentinel",
    summary:
      "An open-source AI monitoring system for teams that need evidence-backed intelligence rather than raw web alerts. Tracks meaningful changes across companies, people, topics, and URLs with source evidence and importance scoring.",
    problem:
      "Web monitoring tools generate noise. They surface raw changes without evidence, context, or any signal about which updates actually matter. Teams end up with another feed to check rather than intelligence they can act on.",
    system:
      "Sentinel creates configurable watches for companies, people, pages, or topics. Firecrawl gathers source evidence on a schedule. Claude scores each change for importance and extracts key context. High-importance updates are routed through Slack alerts and optional ElevenLabs voice briefings for teams that prefer audio digests.",
    output:
      "Evidence-backed change alerts with an importance score, source context, and enough detail to decide whether a change matters and what should happen next without reading through unfiltered monitoring feeds.",
    visual: "evidence" as const,
    ctaLabel: "View source on GitHub",
    ctaHref: "https://github.com/allenmanoj17/sentinel",
  },
  {
    name: "BrandScan",
    slug: "brandscan",
    description:
      "Internal tool that crawls a website with headless Chromium and extracts actual colours, fonts, contrast ratios, and components into an editable brand board with exportable JSON, CSS, and Tailwind tokens.",
    outcome: "Turns a live website into a structured, reusable design system.",
    badge: "internal tool",
    badgeVariant: "internal" as const,
    tags: ["Playwright", "Celery", "Postgres", "Cloudflare R2", "Next.js"],
    href: "/work/brandscan",
    summary:
      "An internal accelerator that replaces manual brand discovery with an automated crawl. Produces a structured brand board and exportable design tokens from any live website.",
    problem:
      "When a project starts with an existing brand, the visual system lives in screenshots, designers' memories, and buried CSS files. Extracting the actual colours, fonts, and contrast ratios is tedious, inconsistent, and easy to get wrong.",
    system:
      "BrandScan crawls a target website using headless Chromium via Playwright, extracts computed colours, font families, sizes, contrast ratios, and component samples, then runs an async Celery job to structure them into an editable brand board. Results are stored in Cloudflare R2.",
    output:
      "A structured brand board with extracted colours, typography, contrast audit scores, and component crops. Exportable as JSON, CSS variables, and Tailwind configuration. Reduces brand discovery from hours of manual inspection to a short automated crawl.",
    visual: "tokens" as const,
    ctaLabel: "Request a walkthrough",
    ctaHref: "mailto:allen@allenmanoj.com?subject=BrandScan%20walkthrough",
  },
];

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
        href: "https://github.com/allenmanoj17/morsel",
      },
      {
        name: "Haven",
        description:
          "Generative ambient audio engine for deep work. Uses Llama via Cloudflare AI Workers to design evolving sound textures, ElevenLabs for audio synthesis, Durable Objects for session state, R2 for audio caching, and a gapless Web Audio API player.",
        tags: ["Next.js", "Cloudflare Workers", "Durable Objects", "ElevenLabs", "Web Audio API"],
        href: "https://github.com/allenmanoj17/haven",
      },
    ],
  },
];

export const experience = [
  {
    role: "Project Officer - Data & Systems",
    org: "Careers Centre, The University of Sydney",
    dates: "Jan 2026 - Present",
    description:
      "Building and maintaining reporting infrastructure for student engagement data across career services. Delivers automated Power BI dashboards, Python data pipelines, and weekly reporting outputs that support operational decisions.",
    tags: ["Python", "Power BI", "SQL", "Data Pipelines", "Reporting Systems"],
  },
  {
    role: "Data Intern",
    org: "Careers Centre, The University of Sydney",
    dates: "Apr 2025 - Jan 2026",
    description:
      "Supported internal reporting by cleaning and analysing student engagement metrics using Excel, Python, and Power BI. Delivered front-line student support, guided students to career resources, and coordinated logistics for information sessions and workshops.",
    tags: ["Excel", "Python", "Power BI", "Data Analysis", "Student Support"],
  },
  {
    role: "Research Data Assistant",
    org: "Charles Perkins Centre, The University of Sydney",
    dates: "Aug 2025 - Feb 2026",
    description:
      "Designed and maintained clinical data pipelines for health research datasets. Delivered reproducible data infrastructure in Python and SQL, with Power BI dashboards used by research leads for analysis and reporting.",
    tags: ["Python", "SQL", "Power BI", "Clinical Data", "Data Pipelines"],
  },
  {
    role: "Associate Product Manager & Data Intern",
    org: "Qwk, the Convenience App",
    dates: "Feb - May 2023",
    description:
      "Combined product analytics and automated data extraction to inform feature prioritisation at a consumer convenience startup. Used Selenium for structured data collection and built usage analysis that connected product behaviour to roadmap decisions.",
    tags: ["Python", "Selenium", "Product Analytics", "User Behaviour Analysis"],
  },
  {
    role: "Data Analyst Intern",
    org: "Bhumi",
    dates: "May - Nov 2022",
    description:
      "Delivered end-to-end data work for one of India's largest youth-led NGOs, from raw extraction and transformation through to visualisation and decision support.",
    tags: ["Python", "Data Visualisation", "Data Transformation", "Reporting"],
  },
  {
    role: "Data Scientist Intern",
    org: "Exposys Data Labs",
    dates: "Nov - Dec 2021",
    description:
      "Applied K-means clustering and exploratory data analysis to a customer transaction dataset to identify behavioural segments. Delivered segmentation findings and visualisations used to support targeted marketing decisions.",
    tags: ["Python", "K-Means Clustering", "scikit-learn", "Pandas", "EDA"],
  },
];

export const recognition = [
  ["SUEDE Designathon", "3rd Place & Best UI - Sep 2024"],
  ["Paper Propine", "1st Place - National Paper Presentation - Apr 2023"],
  ["EMinds Hackathon", "1st Place - May 2022"],
  ["Bug To Business Make-a-thon", "Best Marketing Strategy - Nov 2022"],
  ["Bhumi - Data Analysis Circle", "Intern of the Month - Aug 2022"],
  ["Ease the Error 2.0", "Best UI/UX - May 2021"],
];

export const leadership = [
  {
    title: "Co-Lead - Data Collection",
    org: "Omdena Nellore Chapter",
    period: "Jan 2023",
    detail:
      "Led data collection and analysis for a project examining the disconnect between graduate skills and employment outcomes across India. Turned collected evidence into structured reports used by the chapter team.",
    tags: ["Data Analysis", "Research", "Reporting", "AI for Social Good"],
  },
  {
    title: "Vice President",
    org: "Association of Computer Engineers",
    period: "Oct 2022 - Jun 2023",
    detail:
      "Led a 50-member student organisation across design, web development, marketing, content, and finance. Organised the Interrupt Symposium and multiple technical events, coordinating cross-functional teams to deliver within time and budget.",
    tags: ["Team Leadership", "Event Management", "Operations", "Cross-functional"],
  },
  {
    title: "Tech Head",
    org: "FORum for Economic Studies by Engineers",
    period: "Mar 2021 - Mar 2022",
    detail:
      "Led technical work for student community initiatives, including the Coders' Forum, Mock Placement support for 700+ attendees, and website work using HTML, CSS, and JavaScript.",
    tags: ["Technical Leadership", "Web Development", "Community", "Event Systems"],
  },
];

export const articles = [
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

export const writingNotes = [
  {
    title: "Most teams do not have a data problem. They have a visibility problem.",
    slug: "visibility-problem",
    date: "2026",
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

export const seo = {
  siteName: "Allen Manoj",
  siteUrl: "https://allenmanoj.com",
  pages: {
    home: {
      title: "Allen Manoj - Data & AI Systems",
      description:
        "Independent builder of data and AI systems based in Sydney. Reporting automation, data pipelines, analytics engineering, and AI workflow tools for small teams.",
    },
    work: {
      title: "Work - Allen Manoj",
      description:
        "Selected systems across reporting automation, data engineering, AI workflows, and analytics products. Technical archive of ML, cloud, and data projects.",
    },
    about: {
      title: "About - Allen Manoj",
      description:
        "Background, experience, research publications, and technical skills. Data engineering and AI systems work across Sydney, university, and independent builds.",
    },
    writing: {
      title: "Writing - Allen Manoj",
      description:
        "Articles and notes on data systems, AI workflows, machine learning, and building things.",
    },
  },
  keywords: [
    "Allen Manoj",
    "data engineer Sydney",
    "analytics engineer Sydney",
    "AI workflow automation Sydney",
    "reporting automation",
    "dashboard automation",
    "data pipeline engineer",
    "AI systems builder",
    "LangChain developer",
    "dbt analytics engineer",
    "BigQuery data engineering",
    "FastAPI developer Sydney",
    "data product engineer",
    "applied AI engineer Sydney",
    "data consultant Sydney",
  ],
};
