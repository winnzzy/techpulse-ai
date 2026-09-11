import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

const categoryHref: Record<string, string> = {
  "AI Tools": "/category/ai-tools",
  "AI Explained": "/category/ai-explained",
  Guides: "/category/guides",
};

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
      modifiedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);
  const hubHref = categoryHref[post.category] ?? "/search";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `${siteUrl}/articles/${post.slug}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: `${siteUrl}/authors/techpulse-ai-editorial`,
    },
    publisher: { "@id": `${siteUrl}/#organization` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntityOfPage: `${siteUrl}/articles/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: post.category, item: `${siteUrl}${hubHref}` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/articles/${post.slug}` },
    ],
  };

  return (
    <main className="article-wrap">
      <article className="article-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <nav className="meta article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span>›</span> <Link href={hubHref}>{post.category}</Link>
        </nav>
        <div className="eyebrow">{post.category}</div>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="article-byline">
          <div className="author-mini" aria-hidden="true">TP</div>
          <div>
            <div>By <Link href="/authors/techpulse-ai-editorial">{post.author}</Link></div>
            <div className="meta">{post.readingTime} · Published {new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</div>
          </div>
        </div>
        <div className="article-summary">
          <strong>What you’ll learn</strong>
          <p>{post.excerpt} This guide focuses on practical decisions, trade-offs, and the checks that matter before you act.</p>
        </div>
        <div className="article-body">
          {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <aside className="editorial-note">
          <strong>TechPulse AI editorial note</strong>
          <p>We aim to publish practical, original analysis and clearly separate editorial judgment from commercial relationships. Product capabilities and pricing can change, so verify time-sensitive details with official sources before making purchasing or business decisions.</p>
          <Link href="/editorial-standards">Read our editorial standards →</Link>
        </aside>
      </article>

      <section className="section article-related">
        <div className="section-head">
          <div>
            <div className="eyebrow">Continue reading</div>
            <h2>More from {post.category}</h2>
          </div>
          <Link href={hubHref}>Explore topic →</Link>
        </div>
        <div className="related-grid">
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
