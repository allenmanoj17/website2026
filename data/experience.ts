export type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  description: string;
  tags: string[];
};

export type LeadershipItem = {
  title: string;
  org: string;
  period: string;
  detail: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
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

export const recognition: [string, string][] = [
  ["SUEDE Designathon", "3rd Place & Best UI - Sep 2024"],
  ["Paper Propine", "1st Place - National Paper Presentation - Apr 2023"],
  ["EMinds Hackathon", "1st Place - May 2022"],
  ["Bug To Business Make-a-thon", "Best Marketing Strategy - Nov 2022"],
  ["Bhumi - Data Analysis Circle", "Intern of the Month - Aug 2022"],
  ["Ease the Error 2.0", "Best UI/UX - May 2021"],
];

export const leadership: LeadershipItem[] = [
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
