import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertise & Partner",
  description: "Commercial partnership opportunities with TechPulse AI across editorial sponsorships, newsletters, tools, research and technology audiences.",
};

const opportunities = [
  ["Newsletter sponsorships", "Reach readers through clearly identified sponsorship placements in future TechPulse AI briefings."],
  ["Sponsored content", "Partner on useful, clearly disclosed sponsored explainers, product education and campaign content without controlling independent editorial coverage."],
  ["Category & tool sponsorships", "Sponsor relevant topic hubs, interactive tools, reports or special projects where the commercial relationship is obvious to readers."],
  ["Research partnerships", "Support original surveys, benchmarks, market reports and data projects with transparent sponsor attribution."],
  ["Webinars & education", "Collaborate on practical webinars, workshops and educational programs for technology professionals and businesses."],
  ["Custom campaigns", "Build multi-format campaigns combining publication, newsletter, research, tools and educational experiences."],
];

export default function AdvertisePage() {
  return (
    <main className="container">
      <section className="hub-hero">
        <div className="eyebrow">Commercial partnerships</div>
        <h1>Reach people actively learning, evaluating and buying technology.</h1>
        <p className="lead">TechPulse AI is building an independent technology publication around practical AI education, software evaluation, tools and original research. We are designing partnerships to create genuine reader value rather than interrupt it.</p>
      </section>

      <section className="section">
        <div className="section-head"><div><div className="eyebrow">Partnership formats</div><h2>Built beyond banner advertising</h2></div></div>
        <div className="grid">
          {opportunities.map(([title, copy]) => (
            <article className="card" key={title}><span className="badge">Partner</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="trust-strip">
        <div><div className="eyebrow">Editorial firewall</div><h2>Trust is part of the product.</h2></div>
        <div className="trust-points">
          <p><strong>Clear disclosure.</strong><br />Paid relationships will be labeled so readers can distinguish advertising from independent editorial work.</p>
          <p><strong>No pay-for-praise.</strong><br />Commercial relationships do not purchase favorable independent reviews or undisclosed rankings.</p>
          <p><strong>Useful campaigns.</strong><br />We prioritize partnerships that help readers understand or solve a technology problem.</p>
        </div>
      </section>

      <section className="section">
        <div className="newsletter">
          <div><div className="eyebrow">Work with TechPulse AI</div><h2>Planning a technology campaign?</h2><p>Partnership inventory and a formal media kit will expand as audience data becomes available. Start a conversation about sponsorship, research, education or custom campaigns.</p></div>
          <Link className="button" href="/contact">Contact partnerships</Link>
        </div>
      </section>
    </main>
  );
}
