export const featuredProjects = [
  {
    name: "Reporting Automation Demo",
    description:
      "A small-business reporting system that turns spreadsheet exports into a clean owner dashboard, scheduled summaries, and exception alerts.",
    outcome: "Turns manual weekly reporting into a repeatable decision workflow.",
    badge: "commercial demo",
    badgeVariant: "build" as const,
    tags: ["Power BI", "Python", "SQL", "Automation"],
    href: "#",
  },
  {
    name: "Lens",
    description:
      "Scans public websites and scores them across trust, speed, AI readability, and conversion, then explains each issue in plain English.",
    outcome: "Turns website signals into prioritised fixes.",
    badge: "independent product",
    badgeVariant: "product" as const,
    tags: ["Claude", "Playwright", "FastAPI"],
    href: "https://lens.allenmanoj.com",
  },
  {
    name: "Plunk",
    description:
      "A simulated revenue intelligence system with warehouse modelling, lead scoring, explainability, AI-assisted outreach, orchestration, and alerts.",
    outcome: "Turns product usage into sales action.",
    badge: "simulated case study",
    badgeVariant: "sim" as const,
    tags: ["BigQuery", "dbt", "XGBoost", "Airflow"],
    href: "#",
  },
  {
    name: "Sentinel",
    description:
      "Open-source web intelligence system that creates watches for companies, people, topics, pages, and URLs, gathers source evidence with Firecrawl, scores changes with Claude, and escalates important updates through ElevenLabs voice briefings.",
    outcome: "Turns web changes into evidence-backed alerts.",
    badge: "independent build",
    badgeVariant: "build" as const,
    tags: ["Firecrawl", "Claude", "Supabase", "FastAPI"],
    href: "https://github.com/allenmanoj17/sentinel",
  },
  {
    name: "BrandScan",
    description:
      "Crawls a website with headless Chromium and extracts colours, fonts, contrast ratios, and components into an editable brand board with exportable JSON, CSS, and Tailwind tokens.",
    outcome: "Turns visual websites into reusable design tokens.",
    badge: "internal tool",
    badgeVariant: "internal" as const,
    tags: ["Playwright", "Postgres", "Tailwind"],
    href: "#",
  },
];

export const services = [
  {
    number: "01",
    name: "Data pipelines & analytics engineering",
    description:
      "I bring scattered data into a clean, queryable system: source extraction, warehouse modelling, transformation logic, scheduled jobs, and quality checks. This is useful when reporting depends on manual exports, brittle spreadsheets, or data that lives across tools that do not speak to each other.",
    tags: ["Python", "SQL", "dbt", "BigQuery", "Airflow", "Postgres"],
  },
  {
    number: "02",
    name: "Reporting systems & dashboard automation",
    description:
      "I turn recurring reporting into a maintained system: dashboards, scheduled summaries, anomaly checks, stakeholder-ready metrics, and delivery workflows. The goal is not more charts; it is fewer status meetings and clearer decisions.",
    tags: ["Power BI", "Looker Studio", "Claude API", "FastAPI", "Next.js"],
  },
  {
    number: "03",
    name: "Product & revenue intelligence",
    description:
      "I build the analysis layer around users, leads, revenue, and retention: funnel analysis, cohorts, activation metrics, lead scoring, SHAP explanations, and conversion reporting. This helps product and sales teams see where attention is needed.",
    tags: ["Python", "SQL", "XGBoost", "SHAP", "BigQuery"],
  },
  {
    number: "04",
    name: "AI systems & workflow automation",
    description:
      "I build AI workflows around real operational tasks: classification, summarisation, evidence collection, change monitoring, scoring, retrieval, and human-readable outputs. The useful part is the system around the model: inputs, guardrails, logging, and handoff.",
    tags: ["Claude API", "LangChain", "FastAPI", "Python", "Supabase"],
  },
  {
    number: "05",
    name: "Data products & internal tooling",
    description:
      "I design and ship internal tools where the data work needs a usable interface: diagnostic portals, reporting products, admin dashboards, monitoring screens, and MVPs. I can cover the path from raw data and API design through to the front-end experience.",
    tags: ["Next.js", "React", "FastAPI", "Postgres", "AWS"],
  },
];

export const archive = [
  {
    category: "Machine learning & deep learning",
    items: [
      {
        name: "Histopathology Image Classification",
        description:
          "Built and tuned SVM, MLP, and CNN models for colorectal cancer tissue classification. Reached 72% validation accuracy with stratified 5-fold cross-validation and Keras Tuner.",
        tags: ["Python", "TensorFlow", "scikit-learn", "Keras Tuner"],
      },
      {
        name: "Pulmonary Disease Classification",
        description:
          "Deep learning framework for respiratory sound analysis. Converted raw audio into spectrogram images and used CNN/EfficientNetB0 models for multiclass pulmonary disease classification.",
        tags: ["Python", "CNN", "EfficientNetB0", "Deep Learning"],
        href: "https://github.com/allenmanoj17/Detection-of-Pulmonary-Diseases-using-Respiratory-Sounds",
      },
      {
        name: "Detection of Mental Health",
        description:
          "Predicted adult mental health outcomes from employee survey data using Logistic Regression, Decision Trees, Random Forest, KNN, and SVM. Reached 84.23% accuracy with feature selection and cross-validation.",
        tags: ["Python", "Flask", "scikit-learn", "Pandas"],
        href: "https://github.com/allenmanoj17/Mental-Health-Treatment-Prediction",
      },
      {
        name: "Crop Mapping Using Fused Optical-Radar Data Set",
        description:
          "Optimised LDA, Logistic Regression, KNN, SVM, and Random Forest models for seven-class crop classification from fused optical-radar data.",
        tags: ["R", "Machine Learning", "Remote Sensing"],
      },
      {
        name: "Age and Gender Detection",
        description:
          "Computer vision system for predicting age and gender from images or webcam streams using CNN-based CaffeNet architecture.",
        tags: ["Computer Vision", "CNN", "CaffeNet"],
        href: "https://github.com/allenmanoj17/Agender",
      },
      {
        name: "Mood-Based Music Recommender System",
        description:
          "Real-time playlist recommender combining DenseNet121 facial emotion detection, DistilBERT sentiment analysis, and Spotify track features such as valence and tempo.",
        tags: ["DenseNet121", "DistilBERT", "Streamlit", "Spotify API"],
      },
    ],
  },
  {
    category: "Data & analytics",
    items: [
      {
        name: "Image Captioning Web App",
        description:
          "Scalable Flask app on AWS with EC2 Auto Scaling, ALB, S3-triggered Lambda, EventBridge, RDS, Gemini caption generation, thumbnail creation, IAM, VPC, and CloudWatch observability.",
        tags: ["Flask", "EC2", "S3", "Lambda", "EventBridge", "RDS"],
      },
      {
        name: "Efficient ETL Pipeline",
        description:
          "AWS-powered ETL pipeline for data transfer, error reporting, and dashboard visualisation using Redshift, Glue, CloudWatch, QuickSight, and PostgreSQL.",
        tags: ["Redshift", "Glue", "CloudWatch", "QuickSight", "PostgreSQL"],
        href: "https://github.com/allenmanoj17/ETL-Pipeline-using-AWS-Cloud",
      },
      {
        name: "Churn Analysis Dashboard",
        description:
          "Interactive Tableau dashboard for churn patterns, KPIs, cohort analysis, churn prediction metrics, and retention segmentation.",
        tags: ["Tableau", "Data Visualisation", "Analytics"],
        href: "https://public.tableau.com/app/profile/allenmanoj/viz/AnalyzeChurn_17355702446080/ChurnAnalysis",
      },
      {
        name: "Customer Segmentation",
        description:
          "Clustering analysis of customer behaviour and spending patterns to support targeted marketing strategies.",
        tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      },
      {
        name: "Smart Lender",
        description:
          "Predictive loan eligibility web application comparing applicant details against risk criteria, with analytics dashboards and IBM Watson chatbot support.",
        tags: ["Python", "Flask", "XGBoost", "IBM Cloud", "IBM Watson"],
        href: "https://github.com/allenmanoj17/Smart-Lender",
      },
      {
        name: "Project Management System - Bhumi",
        description:
          "WhatsApp proof of concept for Tech4Change using Twilio and Streamlit, enabling users to submit service requests and receive automated updates.",
        tags: ["Python", "Twilio", "Streamlit"],
      },
    ],
  },
  {
    category: "Personal systems",
    note: "Systems built for personal use — not client work or portfolio pieces.",
    items: [
      {
        name: "LifeOS",
        description:
          "Personal planning workspace centred on TrackDaily: daily planning, seven-day planning, Google Calendar conflict views, analytics, reviews, settings, PWA metadata, and Web Push reminders.",
        tags: ["Next.js 16", "React 19", "Convex", "Clerk", "PWA"],
        href: "https://github.com/allenmanoj17/lifeOS",
      },
      {
        name: "Morsel",
        description:
          "AI-powered nutrition, workout, supplement, and behavioural analytics PWA with natural language meal logging, workout volume trends, recovery status, macro adherence, hydration insights, and AI end-of-day reviews.",
        tags: ["Next.js", "FastAPI", "Supabase", "Claude", "Recharts"],
        href: "https://github.com/allenmanoj17/morsel",
      },
      {
        name: "Haven Architect",
        description:
          "Generative ambient audio engine for deep work. Uses Llama through Cloudflare AI to design sound textures, ElevenLabs for sound generation, Durable Objects for session state, R2 for audio caching, and a gapless Web Audio player.",
        tags: ["Next.js", "Cloudflare Workers", "Durable Objects", "ElevenLabs", "Web Audio API"],
        href: "https://github.com/allenmanoj17/haven",
      },
    ],
  },
];

export const experience = [
  {
    role: "Research Data Assistant",
    org: "The University of Sydney",
    dates: "Aug 2025 – Feb 2026",
    description:
      "Research data work across health datasets, Python, SQL, and Power BI, with a focus on reliable clinical data infrastructure.",
    tags: ["Python", "SQL", "Power BI"],
  },
  {
    role: "Data Intern",
    org: "Careers Centre, The University of Sydney",
    dates: "Apr 2025 – Present",
    description:
      "Cleaned and analysed student engagement metrics with Excel, Python, and Power BI to support internal reporting and service improvements.",
    tags: ["Excel", "Python", "Power BI", "Data Analysis"],
  },
  {
    role: "Data Consultant Intern",
    org: "EDU Talent",
    dates: "Jun – Jul 2024",
    description:
      "Analysed student commencement, completion, attrition, teacher retention, and market expansion data to support reporting and retention strategy.",
    tags: ["Data Analysis", "Reporting", "Market Research"],
  },
  {
    role: "Associate Product Manager & Data Intern",
    org: "Qwk, the Convenience App",
    dates: "Feb – May 2023",
    description:
      "Product analytics, user behaviour analysis, Selenium data extraction, and data-driven feature prioritisation for a consumer convenience platform.",
    tags: ["Python", "Selenium", "Excel", "Data Analysis"],
  },
  {
    role: "Data Analyst Intern",
    org: "Bhumi",
    dates: "May – Nov 2022",
    description:
      "Data extraction, interpretation, transformation, visualisation, and decision support for a social impact NGO.",
    tags: ["Data Extraction", "Data Visualisation", "Decision Support"],
  },
  {
    role: "Data Scientist Intern",
    org: "Exposys Data Labs",
    dates: "Nov – Dec 2021",
    description:
      "Customer segmentation project using K-means clustering and exploratory analysis to support marketing decisions.",
    tags: ["Python", "K-Means", "scikit-learn"],
  },
];

export const recognition = [
  ["SUEDE Designathon", "3rd Place & Best UI · Sep 2024"],
  ["Paper Propine", "1st place, national paper presentation · Apr 2023"],
  ["Bug To Business Make-a-thon", "Best Marketing Strategy · Nov 2022"],
  ["Bhumi - Data Analysis Circle", "Intern of the Month · Aug 2022"],
  ["EMinds Hackathon", "1st place · May 2022"],
  ["Ease the Error 2.0", "Best UI/UX · May 2021"],
];

export const articles = [
  {
    title: "Is Machine Learning the only way for Data Visualisation?",
    platform: "Medium · Techiepedia",
    href: "https://medium.com/techiepedia/is-machine-learning-the-only-way-for-data-visualization-27e760803bea",
  },
  {
    title: "Microsoft Azure for Artificial Intelligence/Machine Learning",
    platform: "Medium · Analytics Vidhya",
    href: "https://medium.com/analytics-vidhya/azure-for-ai-ml-76b91274c391",
  },
  {
    title: "Headstart in Deep-Tech | Data Science, Machine Learning",
    platform: "Medium · Techiepedia",
    href: "https://medium.com/techiepedia/head-start-in-deep-tech-4e2195db3849",
  },
];
