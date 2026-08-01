import { Feed } from "feed";
import { getPublishedArticles } from "@/lib/writing";

const siteUrl = "https://allenmanoj.com";

export const dynamic = "force-static";

export function GET() {
  const articles = getPublishedArticles();
  const feed = new Feed({
    title: "Writing by Allen Manoj",
    description:
      "Notes on data systems, AI workflows, credible portfolios, privacy, and practical product building.",
    id: `${siteUrl}/writing`,
    link: `${siteUrl}/writing`,
    language: "en-AU",
    copyright: `Copyright ${new Date().getUTCFullYear()} Allen Manoj`,
    updated: articles[0] ? new Date(`${articles[0].updatedAt}T00:00:00Z`) : new Date(),
    author: {
      name: "Allen Manoj",
      email: "allenmanoj17@gmail.com",
      link: siteUrl,
    },
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
    },
  });

  for (const article of articles) {
    const url = `${siteUrl}/writing/${article.slug}`;
    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      category: [{ name: article.seriesLabel }],
      author: [{ name: "Allen Manoj", email: "allenmanoj17@gmail.com", link: siteUrl }],
      date: new Date(`${article.updatedAt}T00:00:00Z`),
      published: new Date(`${article.publishedAt}T00:00:00Z`),
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
