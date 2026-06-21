# Allen Manoj — Personal Site PRD
> For Claude Code / Codex. Build exactly as specified. Do not add sections, components, or features not listed here.

---

## 1. Project Overview

**What:** Personal site for Allen Manoj — independent data and AI systems builder based in Sydney.

**Audiences:**
1. Hiring managers for data, analytics, and AI engineering roles
2. Consulting clients needing reporting, pipeline, or AI workflow work

**Goal:** Both audiences understand what Allen does and know what to do next within 10 seconds.

**Pages:** `/` · `/work` · `/about` · `/writing`

---

## 2. Tech Stack

```
Framework:   Next.js 14 (App Router)
Language:    TypeScript
Styling:     Tailwind CSS + CSS custom properties
Fonts:       IBM Plex Sans + IBM Plex Mono (via next/font/google)
Deployment:  Vercel
Domain:      allenmanoj.com
```

---

## 3. Design System

### Color tokens — add to globals.css

```css
:root {
  --bg:           #FFF1E5;  /* FT Salmon — main background */
  --surface:      #F5E8D8;  /* Cards, hover surfaces */
  --surface-2:    #EDD8C0;  /* Tags, darker surfaces */
  --text:         #1A1714;  /* Primary text */
  --text-2:       #6A6058;  /* Secondary text */
  --text-3:       #9A8C7A;  /* Labels, captions */
  --accent:       #891C1C;  /* Burgundy — use sparingly */
  --border:       #DDD0C0;  /* Primary borders */
  --border-2:     #C4B090;  /* Emphasis borders */
  --dark:         #141210;  /* Dark section backgrounds */
  --dark-2:       #1E1A16;  /* Dark surfaces */
  --dark-text:    #F0EAE0;  /* Text on dark */
  --dark-text-2:  rgba(240,234,224,0.45); /* Muted on dark */
  --dark-border:  rgba(240,234,224,0.08); /* Borders on dark */
  --ok:           #4A9E6E;  /* Green / synced */
  --warn:         #C8883A;  /* Amber / stale */
}
```

### Typography

```
Primary:    IBM Plex Sans — weights 300, 400, 500
Monospace:  IBM Plex Mono — weights 300, 400

Scale:
  Display:   clamp(42px, 5vw, 64px) / weight 300 / tracking -0.04em
  H1 pages:  42px / weight 300 / tracking -0.035em
  H3:        17px / weight 500 / tracking -0.02em
  Body:      15px / weight 400 / leading 1.65
  Body sm:   13px / weight 400 / leading 1.6
  Labels:    11px / IBM Plex Mono / uppercase / tracking 0.08em
  Tags:      11px / IBM Plex Mono
  Mono data: 12px / IBM Plex Mono
```

### Spacing

```
Section padding (light):  py-[4.5rem] px-11
Section padding (dark):   py-[5.5rem] px-11
Max content width:        max-w-[1140px] mx-auto
Section divider:          h-[0.5px] bg-[var(--border)] max-w-[calc(1140px-5.5rem)] mx-auto
```

### Borders & Radius

```
All borders:     0.5px solid
Cards:           rounded (4px)
Buttons:         rounded-sm (2px)
Badges:          rounded-sm (2px)
```

### Transitions

```
All:  transition-all duration-150 ease-in-out
```

---

## 4. File Structure

```
app/
  layout.tsx              ← root layout: nav + footer + font loading
  page.tsx                ← homepage
  work/page.tsx           ← work + archive
  about/page.tsx          ← full background
  writing/page.tsx        ← articles
  globals.css             ← tokens + base

components/
  nav.tsx
  footer.tsx
  pipeline-card.tsx       ← hero right column
  project-row.tsx         ← reusable (homepage + /work)
  service-row.tsx
  stack-section.tsx
  pov-section.tsx         ← dark section
  contact-section.tsx     ← dark section
  section-eye.tsx         ← label above sections
  archive-item.tsx        ← /work archive entries
```

---

## 5. Shared Components

### Nav — `components/nav.tsx`

```
Position:    sticky top-0 z-50
Background:  rgba(255,241,229,0.92) backdrop-blur-md
Border:      border-b border-[0.5px] border-[var(--border)]
Height:      h-[52px]
Layout:      flex items-center justify-between
             max-w-[1140px] mx-auto px-11

Left:
  "Allen Manoj"
  font-size: 13px  weight: 500  tracking: -0.015em  color: var(--text)

Right (flex items-center gap-8):
  Links: Work · Thinking · About
    12.5px  color: var(--text-2)  hover: var(--text)
    href: /work · /#thinking · /about
  
  CTA button: "Start a conversation"
    href: /#contact
    bg: var(--text)  color: var(--dark-text)
    12px  weight 500  px-[15px] py-[7px]  rounded-sm

Mobile (<900px):
  Hide nav links
  Show only CTA button
```

### Footer — `components/footer.tsx`

```
Background:  var(--dark)
Border:      border-t border-[0.5px] border-[rgba(255,241,229,0.06)]
Layout:      flex items-center justify-between
             max-w-[1140px] mx-auto px-11 py-5

Left:
  "allen.manoj"
  IBM Plex Mono  12px  color: rgba(240,234,224,0.2)

Right (flex gap-6):
  Links: github · linkedin · writing · email
  IBM Plex Mono  12px
  Default: rgba(240,234,224,0.2)
  Hover:   rgba(240,234,224,0.55)
  hrefs:
    github:   https://github.com/allenmanoj17
    linkedin: https://linkedin.com/in/allenmanoj
    writing:  /writing
    email:    mailto:allen@allenmanoj.com

Mobile: flex-col gap-3 align-start
```

### Section Eye — `components/section-eye.tsx`

```tsx
// Props: label, dark? (boolean)
// Usage: <SectionEye label="Selected systems" />

IBM Plex Mono  11px  uppercase  tracking-[0.08em]
Light sections: color var(--text-3) [#9A8C7A]
Dark sections:  color rgba(240,234,224,0.25)
margin-bottom:  2.25rem
```

### Project Row — `components/project-row.tsx`

```tsx
// Props: name, description, badge, badgeVariant, tags[], href

Layout:
  grid grid-cols-[1fr_auto] items-center gap-8
  py-[1.375rem]
  border-b border-[0.5px] border-[var(--border)]
  cursor-pointer

Hover state (group hover):
  background: var(--surface)
  padding-left: 12px  padding-right: 12px
  margin-left: -12px  margin-right: -12px
  width: calc(100% + 24px)
  border-radius: 4px
  transition-all duration-200

Left:
  Name: 17px weight 500 tracking -0.02em
        default: var(--text)  hover: var(--accent)  transition-colors
  Description: 13px var(--text-2) leading-[1.5] mt-[3px]

Right (flex items-center gap-2):
  Badge (see badge variants below)
  Tech tags: 11px IBM Plex Mono bg-[var(--surface-2)] text-[var(--text-2)] px-[7px] py-[3px] rounded-sm
             hidden on mobile
  Arrow: "↗"  16px  default: var(--border-2)
         hover: var(--accent) translate-x-[2px] -translate-y-[2px]

Badge variants:
  product:  bg-[rgba(74,158,110,0.12)] text-[#2A7A4A]  "independent product"
  sim:      bg-[var(--surface)] text-[var(--text-2)]   "simulated case study"
  build:    bg-[var(--surface)] text-[var(--text-2)]   "independent build"
  internal: bg-[var(--surface)] text-[var(--text-2)]   "internal tool"
  All: 10px IBM Plex Mono px-2 py-[3px] rounded-sm tracking-[0.03em]
```

### Service Row — `components/service-row.tsx`

```tsx
// Props: number, name, description, tags[]

Layout:
  grid grid-cols-[40px_1fr_24px] items-center gap-6
  py-[1.375rem]
  border-b border-[0.5px] border-[var(--border)]
  cursor-pointer

First row also has border-t.

Hover:
  Same padding shift as project row
  Name → var(--accent)
  Arrow → var(--accent) translate-x-[3px]

Number: "01" etc.
  12px IBM Plex Mono  color: var(--border-2)

Name: 17px weight 500 tracking -0.02em  var(--text) → var(--accent)

Description: 13px var(--text-2) leading-[1.5] mt-[3px]

Below description — tags row:
  flex flex-wrap gap-[6px] mt-[8px]
  Each tag: 11px IBM Plex Mono bg-[var(--surface)] text-[var(--text-2)]
            px-[7px] py-[3px] rounded-sm
  Hidden on mobile.

Arrow: "→"  15px  var(--border-2)  transition-all
```

---

## 6. Homepage (`app/page.tsx`)

### Section 1: Hero

```
Background: var(--bg)
Max-width:  1140px mx-auto
Padding:    pt-[5.5rem] pb-[5rem] px-11
Layout:     grid grid-cols-[1fr_400px] gap-20 items-center
            min-height: calc(100vh - 52px)
Mobile:     grid-cols-1
```

**Left column:**

```
Status row (flex items-center gap-2 mb-8):
  Dot: 6px × 6px rounded-full bg-[var(--ok)]
       animation: pulse (see below)
  Text: "Sydney · available for projects & roles"
        IBM Plex Mono  11px  var(--text-3)  tracking-[0.04em]

Name: "Allen Manoj"
  clamp(42px, 5vw, 64px)  weight 300  tracking-[-0.04em]  leading-[1.04]
  var(--text)  mb-[0.2rem]

Role: "Independent builder of"  (line break)  "data and AI systems."
  clamp(24px, 3vw, 38px)  weight 300  tracking-[-0.03em]  leading-[1.22]
  var(--text-2)  mb-7

Sub: "I build data pipelines, analytics systems, AI workflows, and data products
      — end-to-end, from warehouse to interface."
  15px  var(--text-2)  leading-[1.75]  max-w-[420px]  mb-9

CTAs (flex gap-3 items-center):
  Primary: "View selected work"
    href: #systems
    bg: var(--accent)  color: var(--dark-text)
    13px weight 500  px-5 py-[10px]  rounded-sm  hover:opacity-88
  
  Ghost: "Start a conversation →"
    href: #contact
    13px  var(--text-2)  hover: var(--accent)  transition-colors

Status dot pulse animation (globals.css):
@keyframes status-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(74,158,110,0.4); }
  50%       { box-shadow: 0 0 0 5px rgba(74,158,110,0); }
}
.status-dot { animation: status-pulse 2s ease infinite; }
```

**Right column — Pipeline monitoring card** (`components/pipeline-card.tsx`):

```
Outer:
  background: #141210
  border: 0.5px solid #1E1A16
  border-radius: 6px
  box-shadow: 0 8px 40px rgba(26,18,16,0.18)
  font-family: IBM Plex Mono
  Hidden on mobile.

Header (bg #0E0C0A, border-b 0.5px rgba(255,241,229,0.07), px-4 py-[11px]):
  flex justify-between items-center
  Left:  "data.pipeline"  11px  #C8906A  tracking-[0.06em]
  Right: "monitoring"     10px  rgba(240,234,224,0.3)  tracking-[0.04em]

Inner (p-4):

  Column headers row (grid grid-cols-[148px_65px_78px_88px] pb-[9px]
                      border-b 0.5px rgba(255,241,229,0.07) mb-2):
    source / rows / updated / status
    10px  uppercase  tracking-[0.07em]  rgba(240,234,224,0.25)

  5 data rows (flex flex-col gap-[7px] mb-[14px]):
    Each: grid grid-cols-[148px_65px_78px_88px] items-center
          px-[7px] py-[5px] rounded-sm
          hover: bg rgba(255,241,229,0.03)
    
    Row 1: google_ads      | 4,821  | 2h ago | ✓ synced  [green #4A9E6E]
    Row 2: meta_ads        | 3,102  | 2h ago | ✓ synced
    Row 3: crm_contacts    | 8,440  | 2h ago | ✓ synced
    Row 4: analytics_events| 28,114 | 2h ago | ✓ synced
    Row 5: shopify_orders  | 1,288  | 3h ago | ⚠ stale   [amber #C8883A]
    
    source col: 12px  var(--dark-text)
    rows col:   12px  rgba(240,234,224,0.5)
    updated:    11px  rgba(240,234,224,0.4)
    status:     flex items-center gap-[5px]  11px
                dot: 5px × 5px rounded-full
                ok text: #4A9E6E  warn text: #C8883A

  Footer (border-t 0.5px rgba(255,241,229,0.07) pt-[10px] pb-1 px-[7px]
          flex flex-col gap-[5px]):
    3 stat rows (flex justify-between):
      Label: 10px rgba(240,234,224,0.25)
      Value: 11px rgba(240,234,224,0.5)
      
      last_run  → 14 min ago
      next_run  → in 46 min
      errors    → 0
    
    Summary (border-t mt-1 pt-[6px]):
      "5 sources · 45,765 total rows · 1 warning"
      10px  rgba(240,234,224,0.2)  tracking-[0.02em]
```

---

### Section divider

```tsx
<div className="max-w-[calc(1140px-5.5rem)] mx-auto h-[0.5px] bg-[var(--border)]" />
```

---

### Section 2: Systems

```
id="systems"
SectionEye: "Selected systems"
Top-right link: "View all work →"
  href: /work  12.5px  var(--text-3)  hover:var(--accent)

4 ProjectRow components:
```

| name | description | badge | badgeVariant | tags |
|---|---|---|---|---|
| Lens | Scans public websites and scores them across trust, speed, AI readability, and conversion — explains every problem in plain English. | independent product | product | Next.js · FastAPI · Claude · Playwright · Supabase |
| Plunk | A simulated revenue intelligence system — BigQuery warehouse, dbt transforms, XGBoost lead scoring with SHAP explanations, LangChain + Claude outreach generation, Airflow orchestration, Slack alerting. | simulated case study | sim | BigQuery · dbt · XGBoost · LangChain · Airflow |
| Sentinel | Autonomous monitoring system — LangChain agent pipeline, web crawling, change detection, importance scoring, and alert delivery. Runs without intervention. | independent build | build | FastAPI · LangChain · Supabase · Claude |
| BrandScan | Crawls a website with headless Chromium and extracts actual colours, fonts, contrast ratios, and components into an editable brand board with exportable JSON/CSS/Tailwind tokens. | internal tool | internal | Celery · Playwright · Postgres · Cloudflare R2 |

```
Below list:
  "→ technical archive — older ML, analytics, and cloud work"
  href: /work#archive
  display: block mt-4  12.5px IBM Plex Mono  var(--text-3)  hover:var(--accent)
```

---

### Section 3: Services

```
SectionEye: "Services"

5 ServiceRow components:
```

| number | name | description | tags |
|---|---|---|---|
| 01 | Data pipelines & analytics engineering | Warehouse design, ETL/ELT pipelines, dbt transforms, data quality monitoring, and scheduled jobs. For teams whose data lives in five places and needs to live in one. | Python · SQL · dbt · BigQuery · Airflow · Postgres |
| 02 | Reporting systems & dashboard automation | Automated dashboards, AI-written summaries, anomaly alerts, and scheduled delivery. For teams spending hours on reports that should run themselves. | Power BI · Looker Studio · Claude API · FastAPI · Next.js |
| 03 | Product & revenue intelligence | Funnel analysis, cohort tracking, retention metrics, lead scoring, and conversion dashboards. For product and sales teams who need to understand what's happening with their users. | Python · SQL · XGBoost · SHAP · BigQuery |
| 04 | AI systems & workflow automation | LLM pipelines, monitoring agents, summarisation, classification, and scoring systems. For teams with a specific repetitive process that involves judgment or analysis. | Claude API · LangChain · FastAPI · Python · Supabase |
| 05 | Data products & internal tooling | End-to-end data product builds — from raw data to usable interface. Reporting portals, diagnostic tools, admin dashboards, and MVP data products. | Next.js · React · FastAPI · Postgres · AWS |

---

### Section 4: Stack

```
SectionEye: "Stack"
Layout: grid grid-cols-4 gap-0
         border border-[0.5px] border-[var(--border)] rounded
         overflow-hidden
Mobile: grid-cols-2
```

```
Each column (p-6 border-r border-[0.5px] border-[var(--border)]):
  Last column: no border-right

Column header:
  11px IBM Plex Mono uppercase tracking-[0.08em] var(--text-3)
  mb-4

Items:
  13px var(--text-2) leading-[1.8]
  Listed one per line or as comma-separated

Hover on column: bg-[var(--surface)]
```

| Column | Header | Items |
|---|---|---|
| 1 | Data & warehousing | Python · SQL · dbt · BigQuery · PostgreSQL · Supabase · Airflow · Redshift · Pandas |
| 2 | AI & machine learning | Claude API · LangChain · FastAPI · scikit-learn · XGBoost · TensorFlow · Keras · SHAP · Hugging Face |
| 3 | Visualisation & BI | Power BI · Tableau · Looker Studio · Recharts · Next.js · React |
| 4 | Infrastructure | AWS · Docker · GitHub Actions · Celery · Playwright · Cloudflare R2 · REST APIs |

---

### Section 5: How I think — DARK SECTION

```
id="thinking"
background: var(--dark)
max-w-[1140px] mx-auto px-11 py-[4.5rem]

SectionEye: "How I think" (dark variant)

3 items (border-t border-[var(--dark-border)] on first,
          border-b border-[var(--dark-border)] on all):

Layout: grid grid-cols-[210px_1fr] gap-12 py-7 items-start
Mobile: grid-cols-1 gap-2
```

| statement | support |
|---|---|
| Most teams don't have a data problem. They have a visibility problem. | The data often exists across exports, spreadsheets, and dashboards — the hard part is making it legible enough to drive a decision. That's usually a systems and clarity problem, not a volume problem. |
| AI doesn't replace good data infrastructure. It rewards it. | The teams getting the most from AI already know where their data is and what it means. Building that foundation is the real work — the AI layer comes after, not instead of, reliable pipelines. |
| The best dashboard is the one nobody has to explain. | If you need a meeting to walk someone through it, the design failed — not the person reading it. Clarity is the output, not a feature you add at the end. |

```
Statement: 15px weight 500 var(--dark-text) leading-[1.45] tracking-[-0.01em]
Support:   13px var(--dark-text-2) leading-[1.72]
```

---

### Section 6: About snippet

```
SectionEye: "About"
Layout: grid grid-cols-[1fr_220px] gap-16 items-start
Mobile: grid-cols-1

Left column:

  Para 1 (15px var(--text-2) leading-[1.75] mb-3):
  "I'm Allen Manoj, based in Sydney. I build end-to-end data and AI systems —
   from pipelines and dashboards to intelligent workflows and usable products."

  Para 2 (15px var(--text-2) leading-[1.75] mb-4):
  "I'm interested in the whole problem: how data gets collected, cleaned, made
   legible, and eventually drives a decision or action. I work across that full
   chain rather than handing off between stages."

  Background card (bg-[var(--surface)] border border-[0.5px] border-[var(--border)]
                   rounded-sm p-4 mt-4):
    Eye: "Background" — 10px IBM Plex Mono uppercase tracking-[0.08em] var(--text-3) mb-1
    Text (13px var(--text-2) leading-[1.65]):
    "Experience includes research data work, analytics, product, and engineering
     across university, startup, and independent builds. Currently completing an
     MCS in Data Science & AI at the University of Sydney."
    
    "Full background →" (block mt-3  12px IBM Plex Mono  var(--accent)
                          hover:opacity-80  href: /about)

  Links row (flex gap-5 mt-5):
    GitHub →   href: https://github.com/allenmanoj17
    LinkedIn → href: https://linkedin.com/in/allenmanoj
    Writing →  href: /writing
    All: 13px IBM Plex Mono var(--text-2) hover:var(--accent)

Right column:
  Photo (w-full aspect-[3/4] bg-[var(--surface)] border border-[0.5px]
         border-[var(--border)] rounded flex items-center justify-center):
    "AM" — 32px weight 300 var(--border-2) tracking-[-0.04em]
    (Placeholder — real photo swapped in later)
  
  Caption (11px IBM Plex Mono text-center var(--text-3) leading-[1.5] mt-3):
    "Sydney, Australia
     MCS · Data Science & AI
     University of Sydney"
  
  Mobile: hide right column
```

---

### Section 7: Contact — DARK SECTION

```
id="contact"
background: var(--dark)
max-w-[1140px] mx-auto px-11 py-[5.5rem]

Eye: "Get in touch"
  IBM Plex Mono  11px  uppercase  tracking-[0.08em]
  color: rgba(200,144,106,0.7)  mb-6

Headline:
  "Have a " <span color:#C8906A>"reporting problem,"</span>
  line break
  "workflow bottleneck,"
  line break
  "or data product idea?"
  
  clamp(30px, 4vw, 50px)  weight 300  tracking-[-0.03em]
  leading-[1.15]  var(--dark-text)  mb-4

Sub (14px var(--dark-text-2) max-w-[380px] leading-[1.72] mb-9):
  "Tell me what's messy or manual. I'll tell you if I can help — and how.
   Also open to the right role — reach out."

Button:
  "Start a conversation →"
  href: mailto:allen@allenmanoj.com
  inline-flex items-center gap-2  13px weight 500
  bg: var(--dark-text)  color: var(--dark)
  px-[22px] py-[11px]  rounded-sm  hover:opacity-88
```

---

## 7. Work Page (`app/work/page.tsx`)

```
Background: var(--bg)

Header section (max-w-[1140px] mx-auto px-11 pt-[4.5rem] pb-[3rem]):
  "Work" — 42px weight 300 tracking-[-0.035em] var(--text) mb-2
  "Systems I've built — and the archive of everything else."
  15px var(--text-2)
```

### Featured systems

```
SectionEye: "Selected systems"
Same 4 ProjectRow components as homepage — identical props and styling.
```

### Technical archive

```
id="archive"
SectionEye: "Technical archive"

Intro (13px var(--text-2) mb-8 max-w-[560px]):
"Older research, analytics, and applied ML work. Built across university,
 internships, and independent projects."

3 categories, each:
  Category header: 13px weight 500 var(--text) mb-3 mt-8 first:mt-0

  Items (ArchiveItem component):
    border-b border-[0.5px] border-[var(--border)] py-[0.875rem]
    
    Name: 14px weight 500 var(--text)
    Description: 13px var(--text-2) leading-[1.5] mt-[2px]
    Tags row (flex flex-wrap gap-[5px] mt-[6px]):
      Each: 11px IBM Plex Mono bg-[var(--surface)] text-[var(--text-2)]
            px-[7px] py-[3px] rounded-sm
```

**Category 1: Machine learning & deep learning**

| name | description | tags |
|---|---|---|
| Histopathology Image Classification | SVM, MLP, and CNN models for cancer tissue classification. 72% accuracy. | Python · TensorFlow · scikit-learn · Keras |
| Pulmonary Disease Classification | Audio transformed to spectrograms, classified with EfficientNetB0. | Python · CNN · Deep Learning |
| Mental Health Prediction | ML classification from survey and behavioural data. | Python · scikit-learn · Pandas |
| Crop Mapping | Satellite imagery classification using ensemble methods. | Python · Remote Sensing |
| Age & Gender Detection | CNN-based demographic classification from images. | TensorFlow · OpenCV · Python |
| Mood-Based Music Recommender | Facial emotion and text sentiment combined to recommend Spotify playlists. | DenseNet121 · DistilBERT · Streamlit · Spotify API |

**Category 2: Data & analytics**

| name | description | tags |
|---|---|---|
| ETL Pipeline & Dashboard | AWS-powered data pipeline with automated QuickSight visualisation. | Redshift · Glue · CloudWatch · QuickSight · PostgreSQL |
| Churn Analysis Dashboard | Interactive Tableau dashboard for customer retention analysis and KPIs. | Tableau · Data Visualisation |
| Customer Segmentation | K-means clustering for customer behaviour analysis. | Python · K-Means · Pandas |
| Smart Lender | Credit risk scoring and loan default prediction system. | Python · scikit-learn · Risk Modelling |
| Image Captioning Web App | Flask web app deployed on AWS with serverless image captioning. | Flask · EC2 · S3 · Lambda · EventBridge |

**Category 3: Personal systems**

```
Sub-note above items (12px var(--text-3) italic mb-4):
"Systems built for personal use — not client work or portfolio pieces."
```

| name | description | tags |
|---|---|---|
| LifeOS | Personal planning and execution system with daily/weekly planning, calendar awareness, and productivity analytics. | Next.js · FastAPI · Supabase |
| Morsel | Health and recovery tracking — meals, workouts, supplements, and AI-driven health insights. | React · FastAPI · Python |
| Haven | Generative ambient audio system using AI to create evolving soundscapes for focus and deep work. | Web Audio API · AI · Next.js |

---

## 8. About Page (`app/about/page.tsx`)

```
Background: var(--bg)
Max-width: 680px mx-auto (narrower — this is a reading page)
Padding: px-11 py-[4.5rem]
```

### Bio

```
"About" — 42px weight 300 tracking-[-0.035em] mb-8

Para 1 (15px var(--text-2) leading-[1.75] mb-4):
"I'm Allen Manoj, based in Sydney. I build end-to-end data and AI systems
— from pipelines and dashboards to intelligent workflows and usable products.
I'm interested in the whole problem: how data gets collected, cleaned, made
legible, and eventually drives a decision or action."

Para 2 (15px var(--text-2) leading-[1.75]):
"I work across the full stack of a data problem rather than handing off
between stages. That means I can take something from raw, scattered data to
a working dashboard, an automated report, or a deployed AI workflow —
without needing a team of specialists."
```

### Experience

```
SectionEye: "Experience"

4 entries, each:
  Role name: 14px weight 500 var(--text) mb-[2px]
  Org + dates: 12px IBM Plex Mono var(--text-3) mb-[4px]
  Description: 13px var(--text-2) leading-[1.6] mb-[6px]
  Tags: 11px IBM Plex Mono bg-[var(--surface)] px-[7px] py-[3px] rounded-sm
  Border-bottom: 0.5px var(--border)
  Padding: py-4
```

| role | org | dates | description | tags |
|---|---|---|---|---|
| Research Data Assistant | Charles Perkins Centre, University of Sydney | Aug 2025 – Present | Built and maintained data pipelines for health research datasets. Worked with Python, SQL, and Power BI on clinical data infrastructure. | Python · SQL · Power BI |
| Associate Product Manager & Data Intern | Qwk, the Convenience App | Feb – May 2023 | Product analytics, user behaviour analysis, and data-driven feature prioritisation for a consumer convenience platform. | Python · Selenium · Data Analysis |
| Data Analyst Intern | Bhumi | May – Nov 2022 | Data extraction, visualisation, and decision support for a social impact NGO. | Data Analysis · Visualisation |
| Data Scientist Intern | Exposys Data Labs | Nov – Dec 2021 | Customer segmentation using K-means clustering on transactional data. | Python · K-Means · scikit-learn |

### Education

```
SectionEye: "Education"

2 entries (same layout as experience, no tags):

Master of Computer Science — Data Science and Artificial Intelligence
University of Sydney · 2024 – 2026

B.E. Computer Science and Engineering
Sri Venkateswara College of Engineering · 2019 – 2023
```

### Research & publications

```
SectionEye: "Research"

Intro (13px var(--text-2) mb-6):
"Published research in deep learning for medical imaging and respiratory
disease classification."

2 entries, each:
  Title: 14px weight 500 var(--text)
  Publisher + year: 12px IBM Plex Mono var(--text-3)
  Link: "View on IEEE →"  12px IBM Plex Mono var(--accent) hover:opacity-80
  Border-bottom: 0.5px var(--border)  py-4
```

| title | publisher | href |
|---|---|---|
| Detection of Emotions Using a Boosted Machine Learning Approach | IEEE Xplore · 2023 | https://ieeexplore.ieee.org/document/10040393 |
| A Deep Learning Framework for Multiclass Categorization of Pulmonary Diseases | IEEE Xplore · 2023 | https://ieeexplore.ieee.org/document/10235057 |

### Recognition

```
SectionEye: "Recognition"

Simple list (flex flex-col gap-0):
Each item:
  border-b 0.5px var(--border)  py-3
  flex justify-between items-baseline

Name: 13px var(--text)
Detail: 12px IBM Plex Mono var(--text-3)
```

| name | detail |
|---|---|
| SUEDE Designathon | 3rd Place & Best UI · Sep 2024 |
| Paper Propine | 1st place, national paper presentation · Apr 2023 |
| EMinds Hackathon | 1st place · May 2022 |
| Bug To Business Make-a-thon | Best Marketing Strategy · Nov 2022 |
| Ease the Error 2.0 | Best UI/UX · May 2021 |

### Community

```
SectionEye: "Community"

One paragraph (13px var(--text-2) leading-[1.7]):
"Community involvement includes data leadership as Co-Lead at Omdena Nellore
Chapter, technical outreach as a Microsoft Student Ambassador, and engineering
society leadership at Sri Venkateswara College of Engineering."
```

---

## 9. Writing Page (`app/writing/page.tsx`)

```
Background: var(--bg)
Max-width: 680px mx-auto px-11 py-[4.5rem]

"Writing" — 42px weight 300 tracking-[-0.035em] mb-2
Sub (15px var(--text-2) mb-12):
"I write occasionally about data systems, AI workflows, and building things."
```

### Long form

```
SectionEye: "Long form"

3 entries, each:
  border-b 0.5px var(--border) py-5
  
  Title: 14px weight 500 var(--text) mb-[3px]
  Platform: 12px IBM Plex Mono var(--text-3) mb-[6px]
  "Read on Medium →": 12px IBM Plex Mono var(--accent) hover:opacity-80
```

| title | platform | href |
|---|---|---|
| Is Machine Learning the Only Way for Data Visualization? | Medium · Techiepedia | https://medium.com/techiepedia/is-machine-learning-the-only-way-for-data-visualization-27e760803bea |
| Microsoft Azure for Artificial Intelligence & Machine Learning | Medium · Analytics Vidhya | https://medium.com/analytics-vidhya/azure-for-ai-ml-76b91274c391 |
| Headstart in Deep-Tech \| Data Science, Machine Learning | Medium · Techiepedia | https://medium.com/techiepedia/head-start-in-deep-tech-4e2195db3849 |

### Notes

```
SectionEye: "Notes"

Empty state (13px var(--text-3) italic):
"Short notes on things I've built and learned. Coming soon."
```

---

## 10. SEO & Metadata

```tsx
// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://allenmanoj.com'),
}

// app/page.tsx
export const metadata = {
  title: 'Allen Manoj — Data & AI Systems',
  description: 'Allen Manoj builds data pipelines, analytics systems, AI workflows, and data products — end-to-end, from warehouse to interface. Based in Sydney.',
  openGraph: {
    title: 'Allen Manoj — Data & AI Systems',
    description: 'End-to-end data and AI systems builder based in Sydney.',
    url: 'https://allenmanoj.com',
    siteName: 'Allen Manoj',
  },
}

// app/work/page.tsx
title: 'Work — Allen Manoj'
description: 'Selected systems and technical archive — data pipelines, AI tools, analytics, and ML projects.'

// app/about/page.tsx
title: 'About — Allen Manoj'
description: 'Background, experience, research, and education.'

// app/writing/page.tsx
title: 'Writing — Allen Manoj'
description: 'Articles and notes on data systems, AI, and building things.'
```

---

## 11. Responsive Rules

```
Breakpoints (Tailwind defaults):
  sm:  640px
  md:  768px
  lg:  1024px
  xl:  1280px
  Use 900px (arbitrary: max-[900px]) as main mobile breakpoint.

At <900px:
  Hero:         grid-cols-1, pipeline card hidden
  Nav:          hide links, show CTA only
  Sections:     px-6 py-14
  POV items:    grid-cols-1 gap-2
  Stack:        grid-cols-2
  About grid:   grid-cols-1, photo hidden
  Project rows: hide tech tags
  Service rows: hide stack tags
  Footer:       flex-col gap-3 items-start

At <640px:
  Stack:        grid-cols-1
  Font sizes:   scale down ~10-15%
```

---

## 12. Rules — Do Not Break These

```
1.  Never use the word "senior" about Allen anywhere on the site.
2.  Never mention prices anywhere.
3.  Never write "passionate about" anywhere.
4.  No emoji anywhere on the site.
5.  Plunk badge must always say "simulated case study" — never implies client work.
6.  No skills list anywhere — Stack section only on homepage.
7.  No experience timeline on homepage — /about only.
8.  No volunteering entries on the site anywhere.
9.  Contact section is an email link — no form, no Tally embed, no modal.
10. All section eye labels: IBM Plex Mono, 11px, uppercase, tracking-[0.08em].
11. Accent colour (#891C1C) used maximum 4 times per page.
12. Pipeline card is static — no live API calls, hardcoded data only.
13. Photo placeholder ("AM") — do not use a stock photo or avatar.
14. Lens href: https://lens.allenmanoj.com (placeholder until live)
15. All external links open in new tab (target="_blank" rel="noopener noreferrer").
```

---

## 13. Tailwind Config additions

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      salmon: '#FFF1E5',
      burgundy: '#891C1C',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
  },
}
```

---

*End of PRD. Build exactly as specified.*
