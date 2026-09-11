import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "TechPulse AI" },
  };

  return (
    <main className="article-wrap">
      <article className="article-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="eyebrow">{post.category}</div>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="meta">By {post.author} · {post.readingTime} · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
        {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <p><strong>Editorial note:</strong> TechPulse AI aims to publish practical, original analysis. Product capabilities and pricing can change, so readers should verify time-sensitive details with official sources before making purchasing or business decisions.</p>
        <p><Link className="button" href="/">← Back to TechPulse AI</Link></p>
      </article>
    </main>
  );
}
