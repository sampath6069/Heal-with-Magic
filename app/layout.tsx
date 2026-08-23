import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import { LeadTracking } from "@/components/LeadTracking";
import { contactDetails, siteData } from "@/lib/site-data";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
    default: siteData.companyName,
    template: `%s | ${siteData.companyName}`,
  },
  description: siteData.description,
  keywords: [
    "Design Space and Infra",
    "interior designers in Guntur",
    "residential interiors Andhra Pradesh",
    "commercial interiors Hyderabad",
    "modular kitchen design",
    "custom furniture interiors",
  ],
  icons: {
    icon: "/design-space-logo.jpg",
    shortcut: "/design-space-logo.jpg",
    apple: "/design-space-logo.jpg",
  },
  openGraph: {
    title: siteData.companyName,
    description: siteData.description,
    siteName: siteData.companyName,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.companyName,
    description: siteData.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        {googleAnalyticsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${googleAnalyticsId}');`}
            </Script>
          </>
        )}
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteData.companyName,
            description: siteData.description,
            url: siteUrl,
            telephone: contactDetails.phone,
            email: contactDetails.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "7th Lane, Sriram Nagar",
              addressLocality: "Guntur",
              addressRegion: "Andhra Pradesh",
              addressCountry: "IN",
            },
            areaServed: ["Guntur", "Narasaraopet", "Vinukonda", "Sattenapalli", "Hyderabad", "Andhra Pradesh"],
            priceRange: "Project based",
          })}
        </Script>
        <LeadTracking />
        {children}
      </body>
    </html>
  );
}
