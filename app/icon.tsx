import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#18130F",
          color: "#FFF7EE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: 142,
          fontWeight: 300,
          letterSpacing: -4,
        }}
      >
        AM
      </div>
    ),
    size,
  );
}
