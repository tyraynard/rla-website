import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_NAME, SITE_URL, SITE_EMAIL, SITE_REGION } from "@/lib/constants";

// ── Fonts ─────────────────────────────────────────────────────────────────
const displayFont = Cormorant_Garamond({
  subsets:  ["latin"],
  weight:   ["300", "400", "600"],
  style:    ["normal", "italic"],
  variable: "--font-display",
  display:  "swap",
  preload:  true,
});

const bodyFont = DM_Sans({
  subsets:  ["latin"],
  weight:   ["300", "400", "500"],
  variable: "--font-body",
  display:  "swap",
  preload:  true,
});

// ── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  `${SITE_NAME} — Independent Land Intelligence`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Premium land development advisory in Southern California. " +
    "Feasibility analysis, horizontal cost estimating, and strategic advisory " +
    "for developers and investors across Southern California.",
  keywords: [
    "independent land advisory",
    "feasibility analysis",
    "horizontal cost estimating",
    "land advisory Southern California",
    "developer advisory Orange County",
    "land entitlement consultant",
    SITE_NAME,
  ],
  authors:  [{ name: "Tyler Raynard", url: SITE_URL }],
  creator:  SITE_NAME,
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         SITE_URL,
    siteName:    SITE_NAME,
    title:       `${SITE_NAME} — Land Development Consulting`,
    description: "Premium land development advisory in Southern California.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       SITE_NAME,
    description: "Premium land development advisory in Southern California.",
    images:      ["/og-default.jpg"],
  },
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor:   "#0F0E0C",
  width:        "device-width",
  initialScale: 1,
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────
const jsonLd = {
  "@context":       "https://schema.org",
  "@type":          "ProfessionalService",
  name:             SITE_NAME,
  url:              SITE_URL,
  email:            SITE_EMAIL,
  description:
    "Premium land development advisory for developers and investors in Southern California.",
  areaServed:       SITE_REGION,
  serviceType:      [
    "Land Development Consulting",
    "Feasibility Analysis",
    "Horizontal Cost Estimating",
    "Developer Advisory",
  ],
  founder: {
    "@type": "Person",
    name:    "Tyler Raynard",
    jobTitle:"Founder & Principal Advisor",
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="bg-rla-obsidian text-rla-parchment antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
