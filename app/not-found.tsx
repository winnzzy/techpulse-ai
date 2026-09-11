import Link from "next/link";

export default function NotFound() {
  return (
    <main className="policy">
      <div className="eyebrow">404</div>
      <h1>That page could not be found.</h1>
      <p>The link may be outdated, the address may have been mistyped, or the page may have moved.</p>
      <p><Link href="/">Return to the TechPulse AI homepage</Link> or use <Link href="/search">search</Link> to find a topic.</p>
    </main>
  );
}
