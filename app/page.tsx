import Link from "next/link";
import { posts } from "@/lib/posts";

const topicLinks = [
  ["AI Tools", "/category/ai-tools", "Reviews, comparisons and buying guidance."],
  ["AI Explained", "/category/ai-explained", "Clear explanations of models, agents and emerging concepts."],
  ["Guides", "/category/guides", "Practical tutorials for getting useful work done."],
];

export default function HomePage() {
  const [lead, ...rest] = posts;

  return (
    <main>
      <section className="container hero editorial-hero">
        <div>
          <div className="eyebrow">Independent AI & Technology Publication</div>
          <h1>Useful technology coverage for people who actually use it.</h1>
          <p className="lead">TechPulse AI turns fast-moving AI and technology into practical guidance: what changed, what matters, what is worth paying for, and how to use it.</p>
          <div className="hero-actions">
            <Link className="button" href={`/articles/${lead.slug}`}>Read the latest guide</Link>
            <Link className="button button-secondary" href="/search">Search TechPulse AI</Link>
          </div>
        </div>
        <aside className="signal-panel">
          <span className="eyebrow">Our editorial standard</span>
          <strong>Signal over noise.</strong>
          <p>We prioritize first-hand testing, practical examples, transparent comparisons, and original analysis over recycled release notes.</p>
          <Link href="/about">How we publish →</Link>
        </aside>
      </section>

      <section className="container section feature-layout">
        <article className="feature-story feature-story-compact">
          <div className="feature-copy">
            <div className="feature-kicker"><span className="badge">Featured</span><span className="eyebrow">{lead.category}</span></div>
            <h2><Link href={`/articles/${lead.slug}`}>{lead.title}</Link></h2>
            <p>{lead.excerpt}</p>
            <div className="meta">{lead.readingTime} · {new Date(lead.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone:"UTC" })}</div>
            <Link className="feature-read-link" href={`/articles/${lead.slug}`}>Read featured article →</Link>
          </div>
        </article>
        <aside className="briefing-list">
          <div className="eyebrow">Editor’s briefing</div>
          <h2>Start with the fundamentals</h2>
          {rest.slice(0,3).map((post, index) => (
            <article className="briefing-item" key={post.slug}>
              <span>0{index + 1}</span>
              <div>
                <small>{post.category}</small>
                <h3><Link href={`/articles/${post.slug}`}>{post.title}</Link></h3>
                <div className="meta">{post.readingTime}</div>
              </div>
            </article>
          ))}
          <Link className="feature-read-link" href="/search">Browse all articles →</Link>
        </aside>
      </section>

      <section className="container section">
        <div className="section-head">
          <div><div className="eyebrow">Explore by topic</div><h2>Built around reader intent</h2></div>
          <p>Focused topic hubs make useful coverage easier to discover and easier for search engines to understand.</p>
        </div>
        <div className="topic-grid">{topicLinks.map(([label, href, description]) => (<Link className="topic-card" href={href} key={label}><span className="topic-index">/ {label}</span><h3>{label}</h3><p>{description}</p><strong>Explore topic →</strong></Link>))}</div>
      </section>

      <section className="container section">
        <div className="section-head"><div><div className="eyebrow">Latest</div><h2>Practical reads</h2></div><Link href="/search">Browse all →</Link></div>
        <div className="grid">{posts.map((post) => (<article key={post.slug} className="card"><span className="badge">{post.category}</span><h3><Link href={`/articles/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><div className="meta">{post.readingTime} · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone:"UTC" })}</div></article>))}</div>
      </section>

      <section className="container section trust-strip"><div><div className="eyebrow">Why readers should trust us</div><h2>Transparent by design.</h2></div><div className="trust-points"><p><strong>Originality:</strong> we add testing, examples, context or analysis rather than republishing.</p><p><strong>Disclosure:</strong> affiliate relationships and sponsored content will be labeled clearly.</p><p><strong>Corrections:</strong> material errors are corrected rather than quietly ignored.</p></div></section>

      <section className="container section"><div className="newsletter"><div><div className="eyebrow">The TechPulse Brief</div><h2>The signal, not the noise.</h2><p>A weekly digest of useful AI releases, practical tools, tutorials and important technology developments. No daily inbox flood.</p></div><Link className="button" href="/contact">Join the launch list</Link></div></section>
    </main>
  );
}
