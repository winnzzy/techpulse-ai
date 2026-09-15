import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/category/ai-tools`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/category/ai-explained`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/category/guides`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/tools`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/tools/ai-subscription-roi`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/authors/techpulse-ai-editorial`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/editorial-standards`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/advertise`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/articles/${post.slug}`,
    lastModified: post.updated ?? post.date,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
