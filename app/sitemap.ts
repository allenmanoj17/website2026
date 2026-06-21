import type { MetadataRoute } from "next";

const routes = ["", "/work", "/about", "/writing", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://allenmanoj.com${route}`,
    lastModified: new Date("2026-06-20"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
