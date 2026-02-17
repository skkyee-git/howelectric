import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Webinars",
  description:
    "Live and recorded webinars on EV charging topics. Industry experts discuss technology trends, policy updates, and business opportunities.",
  keywords: ["EV webinars", "charging webinar", "industry experts", "live sessions", "recorded webinars"],
  openGraph: {
    title: "EV Charging Webinars",
    description: "Live and recorded webinars on EV charging topics. Industry experts discuss technology trends, policy updates, and business opportunities.",
    url: "/academy/webinars",
  },
  twitter: {
    title: "EV Charging Webinars",
    description: "Live and recorded webinars on EV charging topics. Industry experts discuss technology trends, policy updates, and business opportunities.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
