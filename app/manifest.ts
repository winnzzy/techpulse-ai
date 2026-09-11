import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechPulse AI",
    short_name: "TechPulse AI",
    description: "AI, technology and the future explained clearly.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
