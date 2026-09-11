import Link from "next/link";
import { categories, posts } from "@/lib/posts";

export default function HomePage() {
  return (
    <main>
      <section className="container hero" id="ai">
        <div>
          <div className="eyebrow">Independent AI & Technology Publication</div>
          <h1>Understand what matters in AI and tech.</h1>
          <p className="lead">TechPulse AI publishes practical guides, tool reviews, explainers, coding tutorials, cybersecurity insight, and analysis designed to help readers make better technology decisions.</p>
        </div>
        <aside className="hero-card">
          <span className="eyebrow">Editorial promise</span>
          <strong>Useful before viral.</strong>
          <p className="lead">We prioritize original testing, clear explanations, transparent comparisons, and actionable takeaways over recycled headlines.</p>
        </aside>
      </section>

      <section className="container section" id="articles">
        <div className="section-head">
          <div>
            <div className="eyebrow">Start here</div>
            <h2>Featured articles</h2>
          </div>
          <p>Practical, evergreen content built for humans first.</p>
        </div>
        <div className="grid">
          {posts.map((post) => (
            <article key={post.slug} className="card">
              <span className="badge">{post.category}</span>
              <h3><Link href={`/articles/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
              <div className="meta">{post.readingTime} · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section" id="categories">
        <div className="section-head">
          <div>
            <div className="eyebrow">Coverage</div>
            <h2>What we write about</h2>
          </div>
        </div>
        <div className="categories">
          {categories.map((category) => <span className="category" key={category}>{category}</span>)}
        </div>
      </section>

      <section className="container section">
        <div className="newsletter">
          <div>
            <div className="eyebrow">Newsletter</div>
            <h2>The signal, not the noise.</h2>
            <p>A future weekly digest of the most useful AI releases, practical tools, tutorials, and important technology developments.</p>
          </div>
          <Link className="button" href="/contact">Join the launch list</Link>
        </div>
      </section>
    </main>
  );
}
