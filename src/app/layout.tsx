import type { Metadata } from "next";
import { Outfit, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono-space",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HowElectric — India's EV Charging Infrastructure Platform",
    template: "%s | HowElectric",
  },
  description:
    "India's first EV charging infrastructure platform. Expert consulting, installation services, charge-point management software, and professional training — everything you need to build and scale EV charging networks.",
  keywords: [
    "EV charging",
    "electric vehicle",
    "charging station",
    "EV infrastructure",
    "EVSE",
    "charge point operator",
    "CPO",
    "OCPP",
    "EV consulting",
    "EV installation",
    "charging management software",
    "CMS",
    "India EV",
    "HowElectric",
  ],
  authors: [{ name: "HowElectric", url: "https://howelectric.com" }],
  creator: "HowElectric",
  publisher: "HowElectric",
  metadataBase: new URL("https://howelectric.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://howelectric.com",
    siteName: "HowElectric",
    title: "HowElectric — India's EV Charging Infrastructure Platform",
    description:
      "Expert consulting, installation services, charge-point management software, and professional training for EV charging infrastructure across India.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@howelectric",
    creator: "@howelectric",
    title: "HowElectric — India's EV Charging Infrastructure Platform",
    description:
      "Expert consulting, installation services, CMS software, and professional training for EV charging infrastructure across India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#0A2647",
    "msapplication-TileColor": "#0A2647",
    "apple-mobile-web-app-title": "HowElectric",
    "application-name": "HowElectric",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
