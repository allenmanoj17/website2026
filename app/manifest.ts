import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Allen Manoj",
    short_name: "Allen Manoj",
    description:
      "Pipelines, dashboards, and AI workflows built to replace manual work and clarify the next decision.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFCF9",
    theme_color: "#891C1C",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
