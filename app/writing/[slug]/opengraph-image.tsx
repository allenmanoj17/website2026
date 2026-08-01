import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getWritingArticle } from "@/lib/writing";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getWritingArticle(slug);

  if (!article) {
    notFound();
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFCF9",
          color: "#1A1714",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 2, textTransform: "uppercase" }}>
            Allen Manoj
          </div>
          <div
            style={{
              color: "#FFF7EE",
              background: "#891C1C",
              borderRadius: 4,
              display: "flex",
              padding: "12px 18px",
              fontSize: 22,
            }}
          >
            {article.readingMinutes} min read
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#891C1C",
              display: "flex",
              fontSize: 26,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {article.seriesLabel}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              maxWidth: 1050,
              fontSize: 72,
              lineHeight: 1.06,
              fontWeight: 300,
            }}
          >
            {article.title}
          </div>
        </div>
        <div
          style={{
            maxWidth: 980,
            color: "#514841",
            display: "flex",
            fontSize: 26,
            lineHeight: 1.35,
          }}
        >
          {article.description}
        </div>
      </div>
    ),
    size,
  );
}
