import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "TechPulse AI Editorial Team",
  description: "Meet the TechPulse AI editorial team and learn how our technology coverage is researched, reviewed and corrected.",
  alternates: { canonical: "/authors/techpulse-ai-editorial" },
};

export default function EditorialAuthorPage() {
  return (
    <main>
      <section className="container hub-hero">
        <div className="eyebrow">Author profile</div>
        <h1>TechPulse AI Editorial</h1>
        <p className="lead">The editorial identity used for collaborative guides, explainers and reviews published by TechPulse AI.</p>
        <div className="author-shell">
          <div className="author-mark">TP</div>
          <div>
            <h2>How we work</h2>
            <p>Our goal is to make technology coverage useful enough to act on. Articles should add original explanation, testing, examples, comparison, synthesis or practical context rather than simply rephrasing announcements.</p>
            <p>When a piece involves product recommendations, we aim to explain the criteria behind the recommendation. Commercial relationships, affiliate links and sponsored material will be disclosed clearly when introduced.</p>
            <p>Material factual errors should be corrected promptly. Significant updates will be reflected in the article when they materially change the recommendation or conclusion.</p>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Published work</div>
            <h2>Articles from the editorial desk</h2>
          </div>
        </div>
        <div className="grid">
          {posts.map((post) => (
            <article className="card" key={post.slug}>
              <span className="badge">{post.category}</span>
              <h3><Link href={`/articles/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
              <div className="meta">{post.readingTime}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
