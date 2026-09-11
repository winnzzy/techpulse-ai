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
    alternates: { canonical: `/articles/${post.slug}` },
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

  const related = posts.filter((candidate) => candidate.slug !== post.slug).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://techpulse-ai.example.com/authors/techpulse-ai-editorial",
    },
    publisher: { "@type": "Organization", name: "TechPulse AI" },
    mainEntityOfPage: `https://techpulse-ai.example.com/articles/${post.slug}`,
  };

  return (
    <main className="article-wrap">
      <article className="article-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="eyebrow">{post.category}</div>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="meta">
          By <Link href="/authors/techpulse-ai-editorial">{post.author}</Link> · {post.readingTime} · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </div>
        {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <p><strong>Editorial note:</strong> TechPulse AI aims to publish practical, original analysis. Product capabilities and pricing can change, so readers should verify time-sensitive details with official sources before making purchasing or business decisions.</p>
      </article>

      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Continue reading</div>
            <h2>Related guides</h2>
          </div>
        </div>
        <div className="grid">
          {related.map((item) => (
            <article className="card" key={item.slug}>
              <span className="badge">{item.category}</span>
              <h3><Link href={`/articles/${item.slug}`}>{item.title}</Link></h3>
              <p>{item.excerpt}</p>
              <div className="meta">{item.readingTime}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
