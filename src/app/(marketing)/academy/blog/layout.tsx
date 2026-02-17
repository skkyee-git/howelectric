import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy Blog — EV Charging Insights",
  description:
    "Articles and insights on the EV charging industry. Technical guides, market analysis, policy updates, and career advice from industry experts.",
  keywords: ["EV blog", "charging industry insights", "technical articles", "market analysis", "EV career advice"],
  openGraph: {
    title: "Academy Blog — EV Charging Insights",
    description: "Articles and insights on the EV charging industry. Technical guides, market analysis, policy updates, and career advice from industry experts.",
    url: "/academy/blog",
  },
  twitter: {
    title: "Academy Blog — EV Charging Insights",
    description: "Articles and insights on the EV charging industry. Technical guides, market analysis, policy updates, and career advice from industry experts.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
