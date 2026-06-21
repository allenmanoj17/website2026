import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://allenmanoj.com/sitemap.xml",
    host: "https://allenmanoj.com",
  };
}
