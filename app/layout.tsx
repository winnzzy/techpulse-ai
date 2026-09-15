import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/site";
import "./globals.css";
import "./decision-framework.css";
import "./guide.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "TechPulse AI | AI, Technology & the Future Explained", template: "%s | TechPulse AI" },
  description: "Practical AI guides, tool reviews, coding tutorials, cybersecurity insights, and technology analysis.",
  applicationName: "TechPulse AI", authors: [{ name: "TechPulse AI Editorial" }], creator: "TechPulse AI", publisher: "TechPulse AI", category: "technology",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { type: "website", siteName: "TechPulse AI", title: "TechPulse AI | AI, Technology & the Future Explained", description: "Practical AI guides, tool reviews, coding tutorials, cybersecurity insights, and technology analysis." },
  twitter: { card: "summary_large_image", title: "TechPulse AI", description: "AI, technology and the future explained clearly." },
};
const nav = [["AI Tools","/category/ai-tools"],["AI Explained","/category/ai-explained"],["Guides","/category/guides"],["Tools","/tools"],["Search","/search"]];
const organizationJsonLd={"@context":"https://schema.org","@type":"Organization","@id":`${siteUrl}/#organization`,name:"TechPulse AI",url:siteUrl,logo:`${siteUrl}/icon.svg`,description:"Independent, practical coverage of artificial intelligence, software and emerging technology."};
const websiteJsonLd={"@context":"https://schema.org","@type":"WebSite","@id":`${siteUrl}/#website`,url:siteUrl,name:"TechPulse AI",description:"AI, technology and the future explained clearly.",publisher:{"@id":`${siteUrl}/#organization`}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteJsonLd)}}/><header className="nav"><div className="container nav-inner"><Link href="/" className="brand" aria-label="TechPulse AI home">TechPulse <span>AI</span></Link><nav className="nav-links" aria-label="Main navigation">{nav.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}</nav><Link className="nav-cta" href="/contact">Get the newsletter</Link></div></header>{children}<footer className="footer"><div className="container footer-grid"><div><Link href="/" className="brand">TechPulse <span>AI</span></Link><p>Independent, practical coverage of AI, software, and the technology shaping how we work.</p></div><div><strong>Explore</strong><div className="footer-links"><Link href="/category/ai-tools">AI Tools</Link><Link href="/category/ai-explained">AI Explained</Link><Link href="/category/guides">Guides</Link><Link href="/tools">TechPulse Labs</Link><Link href="/search">Search</Link><a href="/feed.xml">RSS feed</a></div></div><div><strong>Company</strong><div className="footer-links"><Link href="/about">About</Link><Link href="/authors/techpulse-ai-editorial">Editorial team</Link><Link href="/editorial-standards">Editorial standards</Link><Link href="/advertise">Advertise & partner</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></div><div className="container footer-bottom">© {new Date().getFullYear()} TechPulse AI. Built for useful, original technology publishing.</div></footer></body></html>}
