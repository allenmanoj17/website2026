import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
        <div style={{ color: "#891C1C", fontSize: 28, letterSpacing: 2, textTransform: "uppercase" }}>
          Data, reporting, and AI workflow systems
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1, fontWeight: 300 }}>Allen Manoj</div>
          <div style={{ marginTop: 28, maxWidth: 900, fontSize: 46, lineHeight: 1.16, fontWeight: 300 }}>
            Dashboards, pipelines, reporting systems, and AI workflows that make decisions clear.
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#514841" }}>allenmanoj.com</div>
      </div>
    ),
    size,
  );
}
