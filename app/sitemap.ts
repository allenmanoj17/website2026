import type { MetadataRoute } from "next";
import { allProjects, featuredProjects } from "@/data/site";
import { getPublishedArticles } from "@/lib/writing";

const siteUrl = "https://allenmanoj.com";

const staticRoutes = [
  { path: "", updatedAt: "2026-08-01", priority: 1 },
  { path: "/work", updatedAt: "2026-08-01", priority: 0.9 },
  { path: "/about", updatedAt: "2026-07-28", priority: 0.8 },
  { path: "/writing", updatedAt: "2026-07-28", priority: 0.8 },
  { path: "/contact", updatedAt: "2026-07-28", priority: 0.8 },
  { path: "/privacy", updatedAt: "2026-07-28", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const writingArticles = getPublishedArticles();
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(route.updatedAt),
    changeFrequency: route.path === "" ? "weekly" : "monthly",
    priority: route.priority,
  }));

  const featuredSlugs = new Set(featuredProjects.map((project) => project.slug));
  const projectEntries: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(project.updatedAt),
    changeFrequency: "monthly",
    priority: featuredSlugs.has(project.slug) ? 0.8 : 0.7,
  }));

  const writingEntries: MetadataRoute.Sitemap = writingArticles.map((article) => ({
    url: `${siteUrl}/writing/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries, ...writingEntries];
}
