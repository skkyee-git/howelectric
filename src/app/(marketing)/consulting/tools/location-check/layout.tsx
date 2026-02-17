import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Location Viability Check",
  description:
    "Evaluate whether your site is viable for EV charging. Instant scoring based on traffic, demographics, competition, and electrical infrastructure.",
  keywords: ["location viability", "site check EV", "charging location score", "EV site analysis", "location assessment"],
  openGraph: {
    title: "EV Charging Location Viability Check",
    description: "Evaluate whether your site is viable for EV charging. Instant scoring based on traffic, demographics, competition, and electrical infrastructure.",
    url: "/consulting/tools/location-check",
  },
  twitter: {
    title: "EV Charging Location Viability Check",
    description: "Evaluate whether your site is viable for EV charging. Instant scoring based on traffic, demographics, competition, and electrical infrastructure.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
