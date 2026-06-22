import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#18130F",
          color: "#FFF7EE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#FFF7EE", fontSize: 24, letterSpacing: 2, textTransform: "uppercase" }}>
            Allen Manoj
          </div>
          <div
            style={{
              color: "#FFF7EE",
              background: "#891C1C",
              borderRadius: 4,
              padding: "12px 18px",
              fontSize: 22,
            }}
          >
            {project.badge}
          </div>
        </div>
        <div>
          <div style={{ color: "#891C1C", fontSize: 28, letterSpacing: 2, textTransform: "uppercase" }}>
            System notes
          </div>
          <div style={{ marginTop: 24, fontSize: 86, lineHeight: 1, fontWeight: 300 }}>
            {project.name}
          </div>
          <div style={{ marginTop: 28, maxWidth: 920, color: "rgba(255,247,238,0.82)", fontSize: 38, lineHeight: 1.22 }}>
            {project.outcome}
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, color: "rgba(255,247,238,0.72)", fontSize: 24 }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
