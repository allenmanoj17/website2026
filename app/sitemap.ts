import type { MetadataRoute } from "next";
import { featuredProjects } from "@/data/site";

const routes = ["", "/work", "/about", "/writing", "/privacy"];
const projectRoutes = featuredProjects.map((project) => `/work/${project.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...projectRoutes].map((route) => ({
    url: `https://allenmanoj.com${route}`,
    lastModified: new Date("2026-06-21"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/work/") ? 0.7 : 0.8,
  }));
}
