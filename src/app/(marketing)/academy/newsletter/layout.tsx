import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Newsletter",
  description:
    "Weekly newsletter with EV charging industry updates, policy changes, market data, and career opportunities delivered to your inbox.",
  keywords: ["EV newsletter", "charging updates", "weekly digest", "industry news", "market data"],
  openGraph: {
    title: "EV Charging Newsletter",
    description: "Weekly newsletter with EV charging industry updates, policy changes, market data, and career opportunities delivered to your inbox.",
    url: "/academy/newsletter",
  },
  twitter: {
    title: "EV Charging Newsletter",
    description: "Weekly newsletter with EV charging industry updates, policy changes, market data, and career opportunities delivered to your inbox.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
