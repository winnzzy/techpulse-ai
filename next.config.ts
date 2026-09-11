import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/articles/is-chatgpt-plus-worth-it",
        destination: "/articles/is-paid-ai-assistant-worth-it",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
