import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Search",
  description: "Search TechPulse AI articles, guides, explainers and reviews.",
  robots: { index: false, follow: true },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query
    ? posts.filter((post) => [post.title, post.excerpt, post.category, ...post.content].join(" ").toLowerCase().includes(query))
    : posts;

  return (
    <main>
      <section className="container hub-hero">
        <div className="eyebrow">Search</div>
        <h1>Find the useful part faster.</h1>
        <p className="lead">Search across TechPulse AI’s practical AI guides, explainers and technology coverage.</p>
        <div className="search-shell">
          <form className="search-form" action="/search" method="get">
            <input name="q" defaultValue={q} placeholder="Try: AI agents, local AI, AI tools…" aria-label="Search articles" />
            <button className="button" type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <div>
            <div className="eyebrow">{query ? "Results" : "Browse all"}</div>
            <h2>{query ? `${results.length} result${results.length === 1 ? "" : "s"} for “${q}”` : "All published articles"}</h2>
          </div>
        </div>
        {results.length ? (
          <div className="grid">
            {results.map((post) => (
              <article className="card" key={post.slug}>
                <span className="badge">{post.category}</span>
                <h3><Link href={`/articles/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <div className="meta">{post.readingTime}</div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">No articles match that search yet. Try a broader term such as “AI”, “agents”, “local”, or “tools”.</div>
        )}
      </section>
    </main>
  );
}
