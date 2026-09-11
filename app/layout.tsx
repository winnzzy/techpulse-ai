import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://techpulse-ai.example.com"),
  title: {
    default: "TechPulse AI | AI, Technology & the Future Explained",
    template: "%s | TechPulse AI",
  },
  description: "Practical AI guides, tool reviews, coding tutorials, cybersecurity insights, and technology analysis.",
  applicationName: "TechPulse AI",
  authors: [{ name: "TechPulse AI Editorial" }],
  creator: "TechPulse AI",
  publisher: "TechPulse AI",
  openGraph: {
    type: "website",
    siteName: "TechPulse AI",
    title: "TechPulse AI | AI, Technology & the Future Explained",
    description: "Practical AI guides, tool reviews, coding tutorials, cybersecurity insights, and technology analysis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechPulse AI",
    description: "AI, technology and the future explained clearly.",
  },
};

const nav = [
  ["AI", "/#ai"],
  ["AI Tools", "/#articles"],
  ["Tutorials", "/#articles"],
  ["Tech", "/#categories"],
  ["About", "/about"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="container nav-inner">
            <Link href="/" className="brand">TechPulse <span>AI</span></Link>
            <nav className="nav-links" aria-label="Main navigation">
              {nav.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer-row">
            <div><strong>TechPulse AI</strong><br />AI, technology & the future explained.</div>
            <div className="nav-links">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
            <div>© {new Date().getFullYear()} TechPulse AI</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
