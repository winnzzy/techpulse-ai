import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI & Technology Tools",
  description: "TechPulse Labs: practical calculators, selectors and interactive tools for AI users, developers and technology buyers.",
};

const tools = [
  ["AI Subscription ROI Calculator", "Estimate whether a paid AI plan can justify its cost from time saved and recurring usage.", "Planned"],
  ["Local LLM Hardware Checker", "Match RAM, VRAM and hardware constraints to realistic local-model options.", "Planned"],
  ["AI Tool Finder", "Turn a workflow and budget into a shortlist of tool categories and evaluation criteria.", "Planned"],
  ["Token & API Cost Calculator", "Estimate model usage costs for common application and automation workloads.", "Planned"],
  ["AI Stack Builder", "Map a business workflow to models, retrieval, automation and human-approval components.", "Planned"],
  ["Model Comparison Explorer", "Compare models using task fit, deployment, context and other practical dimensions rather than one leaderboard score.", "Planned"],
];

export default function ToolsPage() {
  return (
    <main className="container">
      <section className="hub-hero">
        <div className="eyebrow">TechPulse Labs</div>
        <h1>Useful tools for making better technology decisions.</h1>
        <p className="lead">We are building free interactive utilities that turn complicated AI decisions into practical answers. These tools will complement our independent guides and comparisons.</p>
      </section>
      <section className="section">
        <div className="grid">
          {tools.map(([title, copy, status]) => (
            <article className="card" key={title}><span className="badge">{status}</span><h3>{title}</h3><p>{copy}</p><div className="meta">TechPulse Labs</div></article>
          ))}
        </div>
      </section>
      <section className="trust-strip">
        <div><div className="eyebrow">Why tools?</div><h2>Answers people can act on.</h2></div>
        <div className="trust-points">
          <p><strong>Practical.</strong><br />Built around decisions readers actually need to make.</p>
          <p><strong>Transparent.</strong><br />Methodology and commercial relationships will be disclosed where relevant.</p>
          <p><strong>Upgradeable.</strong><br />Free utilities can grow into deeper datasets, reports and professional products over time.</p>
        </div>
      </section>
    </main>
  );
}
