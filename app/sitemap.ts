import type { MetadataRoute } from "next";
import { featuredProjects, writingNotes } from "@/data/site";

const routes = ["", "/work", "/about", "/writing", "/privacy"];
const projectRoutes = featuredProjects.map((project) => `/work/${project.slug}`);
const writingRoutes = writingNotes.map((note) => `/writing/${note.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...projectRoutes, ...writingRoutes].map((route) => ({
    url: `https://allenmanoj.com${route}`,
    lastModified: new Date("2026-06-21"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/work/") || route.startsWith("/writing/") ? 0.7 : 0.8,
  }));
}
