import { ImageResponse } from "next/og";
import { getPost } from "@/lib/posts";

export const alt = "TechPulse AI article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "TechPulse AI";
  const category = post?.category ?? "Technology";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px",
          background: "linear-gradient(145deg, #06101d 0%, #10233d 58%, #183650 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
            TechPulse <span style={{ marginLeft: 9, color: "#8fe8ff" }}>AI</span>
          </div>
          <div style={{ fontSize: 22, color: "#8fe8ff", textTransform: "uppercase", letterSpacing: 3 }}>{category}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1030 }}>
          <div style={{ fontSize: title.length > 65 ? 52 : 62, lineHeight: 1.08, fontWeight: 800 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: 23, color: "#b9c7d8" }}>
          <span>Practical, independent technology coverage</span>
          <span>TechPulse AI</span>
        </div>
      </div>
    ),
    size,
  );
}
