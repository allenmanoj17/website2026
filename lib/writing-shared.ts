export const writingSeries = [
  "portfolio-foundations",
  "project-evidence",
  "freelance-conversion",
  "privacy-and-analytics",
  "search-and-discovery",
  "build-notes",
] as const;

export type WritingSeries = (typeof writingSeries)[number];

export const writingSeriesLabels: Record<WritingSeries, string> = {
  "portfolio-foundations": "Portfolio foundations",
  "project-evidence": "Project evidence",
  "freelance-conversion": "Freelance conversion",
  "privacy-and-analytics": "Privacy and analytics",
  "search-and-discovery": "Search and discovery",
  "build-notes": "Build notes",
};

export type WritingArticleSummary = {
  slug: string;
  title: string;
  description: string;
  series: WritingSeries;
  seriesLabel: string;
  publishedAt: string;
  updatedAt: string;
  draft: boolean;
  featured: boolean;
  keywords: string[];
  relatedSlugs: string[];
  readingMinutes: number;
};

export function slugifyHeading(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
