import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

const categoryMap: Record<string, { name: string; description: string; match: string[] }> = {
  "ai-tools": {
    name: "AI Tools",
    description: "Practical reviews, comparisons and buying guidance for AI software that can improve real workflows.",
    match: ["AI Tools"],
  },
  "ai-explained": {
    name: "AI Explained",
    description: "Clear explanations of AI models, agents, infrastructure and the concepts behind fast-moving technology.",
    match: ["AI Explained"],
  },
  guides: {
    name: "Guides",
    description: "Hands-on guidance for choosing, configuring and using technology more effectively.",
    match: ["Guides"],
  },
};

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryMap[slug];
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryMap[slug];
  if (!category) notFound();

  const categoryPosts = posts.filter((post) => category.match.includes(post.category));

  return (
    <main>
      <section className="container hub-hero">
        <div className="eyebrow">Topic hub</div>
        <h1>{category.name}</h1>
        <p className="lead">{category.description}</p>
      </section>

      <section className="container section">
        <div className="grid">
          {categoryPosts.map((post) => (
            <article key={post.slug} className="card">
              <span className="badge">{post.category}</span>
              <h3><Link href={`/articles/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
              <div className="meta">{post.readingTime} · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="newsletter">
          <div>
            <div className="eyebrow">Keep exploring</div>
            <h2>Looking for something specific?</h2>
            <p>Search across TechPulse AI’s guides, explainers and reviews.</p>
          </div>
          <Link className="button" href="/search">Search articles</Link>
        </div>
      </section>
    </main>
  );
}
