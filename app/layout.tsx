import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { contactDetails } from "@/lib/site-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3001");

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Heal with Magic",
    template: "%s | Heal with Magic",
  },
  description:
    "Heal with Magic by Shamitha Venkat offers gentle healing sessions, 21-day programs, WhatsApp support, and heart-led guidance for emotional balance and transformation.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Heal with Magic",
    "Shamitha Venkat",
    "healing sessions",
    "Ho'oponopono healing",
    "energy healing",
    "holistic healing support",
    "healing programs India",
  ],
  icons: {
    icon: "/heal-with-magic-logo-white.jpg",
    shortcut: "/heal-with-magic-logo-white.jpg",
    apple: "/heal-with-magic-logo-white.jpg",
  },
  openGraph: {
    title: "Heal with Magic",
    description:
      "Gentle healing, manifestation, and transformation with Shamitha Venkat.",
    siteName: "Heal with Magic",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heal with Magic",
    description:
      "Gentle healing, manifestation, and transformation with Shamitha Venkat.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socialLinks = contactDetails.instagramLink ? [contactDetails.instagramLink] : [];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Heal with Magic",
        url: siteUrl,
      },
      {
        "@type": "Person",
        name: "Shamitha Venkat",
        url: siteUrl,
        email: contactDetails.email,
        sameAs: socialLinks,
      },
      {
        "@type": "Organization",
        name: "Heal with Magic",
        url: siteUrl,
        email: contactDetails.email,
        telephone: contactDetails.phone,
        sameAs: socialLinks,
      },
    ],
  };

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
