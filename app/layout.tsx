import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { featuredProjects } from "@/data/site";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://allenmanoj.com"),
  title: {
    default: "Allen Manoj — Data, Reporting & AI Workflow Systems",
    template: "%s — Allen Manoj",
  },
  description:
    "Allen Manoj builds data pipelines, reporting automation, analytics products, AI workflows, dashboards, and internal tools for clearer decisions.",
  keywords: [
    "Allen Manoj",
    "data systems",
    "AI workflows",
    "reporting automation",
    "dashboard automation",
    "analytics engineering",
    "data pipelines",
    "internal tools",
    "Sydney data consultant",
    "AI product builder",
  ],
  authors: [{ name: "Allen Manoj", url: "https://allenmanoj.com" }],
  creator: "Allen Manoj",
  publisher: "Allen Manoj",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
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
    url: "https://allenmanoj.com",
    siteName: "Allen Manoj",
    title: "Allen Manoj — Data, Reporting & AI Workflow Systems",
    description:
      "Data pipelines, dashboards, reporting systems, AI workflows, analytics products, and internal tools built by Allen Manoj.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Allen Manoj — Data, Reporting & AI Workflow Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allen Manoj — Data, Reporting & AI Workflow Systems",
    description:
      "Data pipelines, dashboards, reporting systems, AI workflows, analytics products, and internal tools.",
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        "@id": "https://allenmanoj.com/#person",
        name: "Allen Manoj",
        url: "https://allenmanoj.com",
        email: "mailto:allen@allenmanoj.com",
        sameAs: [
          "https://github.com/allenmanoj17",
          "https://linkedin.com/in/allenmanoj",
          "https://x.com/AllenManoj87",
          "https://allenmanoj.medium.com/",
          "https://lens.allenmanoj.com",
        ],
        jobTitle: "Data and AI systems builder",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          addressCountry: "AU",
        },
        knowsAbout: [
          "Data pipelines",
          "Reporting automation",
          "Analytics engineering",
          "AI workflows",
          "Dashboard automation",
          "Internal tools",
          "Data products",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://allenmanoj.com/#website",
        url: "https://allenmanoj.com",
        name: "Allen Manoj",
        description:
          "Portfolio and writing by Allen Manoj, focused on data systems, reporting automation, AI workflows, analytics products, and internal tools.",
        publisher: {
          "@id": "https://allenmanoj.com/#person",
        },
        inLanguage: "en-AU",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://allenmanoj.com/#service",
        name: "Allen Manoj data and AI systems",
        url: "https://allenmanoj.com",
        areaServed: ["Australia", "Sydney", "Remote"],
        serviceType: [
          "Data pipelines",
          "Reporting automation",
          "Product and revenue intelligence",
          "AI workflow automation",
          "Data products and internal tools",
        ],
        provider: {
          "@id": "https://allenmanoj.com/#person",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://allenmanoj.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does Allen Manoj build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Allen Manoj builds data pipelines, reporting systems, dashboards, AI workflows, analytics products, monitoring systems, and internal tools.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Allen Manoj based?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Allen Manoj is based in Sydney, Australia and is open to focused data, AI, and product systems projects.",
            },
          },
          {
            "@type": "Question",
            name: "What are Allen Manoj's featured projects?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Featured projects include Lens, Reporting Automation Demo, Plunk, Sentinel, and BrandScan.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://allenmanoj.com/work#featured-systems",
        name: "Featured systems by Allen Manoj",
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://allenmanoj.com/work/${project.slug}`,
          name: project.name,
          description: project.outcome,
        })),
      },
      ...featuredProjects.map((project) => ({
        "@type": project.name === "Lens" ? "SoftwareApplication" : "CreativeWork",
        "@id": `https://allenmanoj.com/work/${project.slug}#system`,
        name: project.name,
        url: `https://allenmanoj.com/work/${project.slug}`,
        description: project.summary,
        creator: {
          "@id": "https://allenmanoj.com/#person",
        },
        keywords: project.tags.join(", "),
        applicationCategory: project.name === "Lens" ? "BusinessApplication" : undefined,
      })),
    ],
  };

  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-[var(--bg)] font-sans text-[var(--text)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
