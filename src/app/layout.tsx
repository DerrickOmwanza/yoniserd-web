import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { contact, site, socials } from "@/content/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — Youth Network Integrated Services for Research and Development`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: ["youth empowerment", "NGO Kenya", "Kisii", "community research", "youth development", site.shortName],
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: site.shortName,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#14284b",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/icon.png`,
  foundingDate: site.founded,
  email: contact.email,
  telephone: contact.phoneHref.replace("tel:", ""),
  address: { "@type": "PostalAddress", addressLocality: "Kisii", addressCountry: "KE" },
  sameAs: socials.map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
