import { ImageResponse } from "next/og";

export const alt = "TechPulse AI — AI, Technology & the Future Explained";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #07111f 0%, #0d1f38 52%, #142a45 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700 }}>
          TechPulse <span style={{ marginLeft: 10, color: "#8fe8ff" }}>AI</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#8fe8ff", marginBottom: 24 }}>
            Independent AI & Technology Publication
          </div>
          <div style={{ fontSize: 70, lineHeight: 1.05, fontWeight: 800 }}>
            AI, technology & the future — explained clearly.
          </div>
        </div>
        <div style={{ fontSize: 25, color: "#b9c7d8" }}>
          Practical guides · Tool reviews · AI explainers · Technology analysis
        </div>
      </div>
    ),
    size,
  );
}
