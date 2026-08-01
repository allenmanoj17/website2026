import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import AnalyticsController from "@/components/analytics-controller";
import Footer from "@/components/footer";
import MotionController from "@/components/motion-controller";
import Nav from "@/components/nav";
import { featuredProjects } from "@/data/site";

const siteUrl = "https://allenmanoj.com";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Allen Manoj — Data & AI Systems Builder",
    template: "%s — Allen Manoj",
  },
  description:
    "Allen Manoj turns fragmented data into decision systems people trust, spanning analytics infrastructure, revenue intelligence, applied AI, and operational software.",
  keywords: [
    "Allen Manoj",
    "data systems builder Sydney",
    "AI systems builder Sydney",
    "analytics engineering",
    "data infrastructure",
    "revenue intelligence",
    "AI workflows",
    "monitoring systems",
    "decision systems",
    "internal tools",
  ],
  authors: [{ name: "Allen Manoj", url: siteUrl }],
  creator: "Allen Manoj",
  publisher: "Allen Manoj",
  category: "technology",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Allen Manoj",
    title: "Allen Manoj — Data & AI Systems Builder",
    description:
      "Decision systems spanning data infrastructure, analytics, applied AI, monitoring, and operational software.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Allen Manoj — Data & AI Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allen Manoj — Data & AI Systems Builder",
    description: "I turn fragmented data into decision systems people trust.",
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFCF9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Allen Manoj",
        url: siteUrl,
        image: `${siteUrl}/allenmanoj.png`,
        email: "mailto:allenmanoj17@gmail.com",
        sameAs: [
          "https://github.com/allenmanoj17",
          "https://linkedin.com/in/allenmanoj",
          "https://x.com/AllenManoj87",
          "https://allenmanoj.medium.com/",
        ],
        jobTitle: "Data and AI systems builder",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          addressCountry: "AU",
        },
        knowsAbout: [
          "Data infrastructure",
          "Analytics engineering",
          "Revenue intelligence",
          "Applied AI workflows",
          "Monitoring systems",
          "Decision interfaces",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Allen Manoj",
        description:
          "Portfolio and writing by Allen Manoj, a data and AI systems builder based in Sydney.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-AU",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Allen Manoj data and AI systems",
        url: siteUrl,
        areaServed: ["Australia", "Sydney", "Remote"],
        serviceType: [
          "Data infrastructure",
          "Analytics systems",
          "Revenue intelligence",
          "Applied AI workflows",
          "Monitoring systems",
          "Operational software",
        ],
        provider: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/work#featured-systems`,
        name: "Featured systems by Allen Manoj",
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}/work/${project.slug}`,
          name: project.name,
          description: project.outcome,
        })),
      },
      ...featuredProjects.map((project) => ({
        "@type":
          project.slug === "lens" || project.slug === "distributionos" || project.slug === "brandscan"
            ? "SoftwareApplication"
            : "CreativeWork",
        "@id": `${siteUrl}/work/${project.slug}#system`,
        name: project.name,
        url: `${siteUrl}/work/${project.slug}`,
        description: project.summary,
        dateModified: project.updatedAt,
        creator: {
          "@id": `${siteUrl}/#person`,
        },
        keywords: project.tags.join(", "),
        applicationCategory:
          project.slug === "lens" || project.slug === "distributionos" || project.slug === "brandscan"
            ? "BusinessApplication"
            : undefined,
      })),
    ],
  };

  return (
    <html lang="en-AU" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-[var(--bg)] font-sans text-[var(--text)] antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-sm bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-[var(--dark-text)] transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnalyticsController />
        <MotionController />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
