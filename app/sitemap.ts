import type { MetadataRoute } from "next";
import { allProjects, writingNotes } from "@/data/site";

const siteUrl = "https://allenmanoj.com";

const staticRoutes = [
  { path: "", updatedAt: "2026-07-28", priority: 1 },
  { path: "/work", updatedAt: "2026-07-28", priority: 0.9 },
  { path: "/about", updatedAt: "2026-07-28", priority: 0.8 },
  { path: "/writing", updatedAt: "2026-07-28", priority: 0.8 },
  { path: "/contact", updatedAt: "2026-07-28", priority: 0.8 },
  { path: "/privacy", updatedAt: "2026-07-28", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(route.updatedAt),
    changeFrequency: route.path === "" ? "weekly" : "monthly",
    priority: route.priority,
  }));

  const projectEntries: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(project.updatedAt),
    changeFrequency: "monthly",
    priority: project.slug === "brandscan" ? 0.5 : 0.8,
  }));

  const writingEntries: MetadataRoute.Sitemap = writingNotes.map((note) => ({
    url: `${siteUrl}/writing/${note.slug}`,
    lastModified: new Date(note.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries, ...writingEntries];
}
