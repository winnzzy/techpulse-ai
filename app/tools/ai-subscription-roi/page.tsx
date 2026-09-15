import type { Metadata } from "next";
import Link from "next/link";
import ROICalculator from "./ROICalculator";

export const metadata: Metadata = {
  title: "AI Subscription ROI Calculator",
  description: "Estimate whether a paid AI subscription is worth its monthly cost based on time saved, usage frequency and the value of your time.",
  alternates: { canonical: "/tools/ai-subscription-roi" },
};

export default function ROIToolPage() {
  return (
    <main className="container">
      <section className="hub-hero tool-hero">
        <div className="eyebrow">TechPulse Labs · Free calculator</div>
        <h1>Is that AI subscription actually worth paying for?</h1>
        <p className="lead">Estimate the value of time an AI tool saves you, discount unrealistic productivity claims, and calculate the daily time saving needed to break even.</p>
      </section>

      <ROICalculator />

      <section className="section tool-explainer">
        <div className="section-head"><div><div className="eyebrow">Methodology</div><h2>How the calculator works</h2></div></div>
        <div className="grid">
          <article className="card"><span className="badge">01</span><h3>Estimate time saved</h3><p>Start with a realistic workday. Count time genuinely removed from a task, not time spent experimenting with the tool.</p></article>
          <article className="card"><span className="badge">02</span><h3>Discount the headline gain</h3><p>The realization rate accounts for checking, corrections, prompting and work that cannot be converted into useful productive time.</p></article>
          <article className="card"><span className="badge">03</span><h3>Compare value with cost</h3><p>Effective hours saved are multiplied by your hourly time value and compared with the subscription price. The result is an estimate, not a promise.</p></article>
        </div>
      </section>

      <section className="trust-strip">
        <div><div className="eyebrow">Decision rule</div><h2>Test the workflow, not the marketing.</h2></div>
        <div className="trust-points">
          <p><strong>Use your own tasks.</strong><br />Measure the same recurring work with and without the tool.</p>
          <p><strong>Include review time.</strong><br />An answer that takes ten minutes to verify did not save the full generation time.</p>
          <p><strong>Recheck monthly.</strong><br />Your usage and the product can change, so an old ROI estimate can become misleading.</p>
        </div>
      </section>

      <section className="section"><div className="newsletter"><div><div className="eyebrow">Keep evaluating</div><h2>Choose AI tools deliberately.</h2><p>Our practical guide covers the non-financial factors that matter too: reliability, privacy, workflow fit and switching cost.</p></div><Link className="button" href="/articles/how-to-choose-the-right-ai-tool">Read the AI tool buying guide</Link></div></section>
    </main>
  );
}
