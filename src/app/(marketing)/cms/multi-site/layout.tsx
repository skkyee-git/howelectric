import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Site CMS Solution",
  description:
    "Manage multiple EV charging locations from one dashboard. Centralised monitoring, cross-site analytics, and unified billing for growing networks.",
  keywords: ["multi-site CMS", "multiple locations", "centralised management", "cross-site analytics", "network management"],
  openGraph: {
    title: "Multi-Site CMS Solution",
    description: "Manage multiple EV charging locations from one dashboard. Centralised monitoring, cross-site analytics, and unified billing for growing networks.",
    url: "/cms/multi-site",
  },
  twitter: {
    title: "Multi-Site CMS Solution",
    description: "Manage multiple EV charging locations from one dashboard. Centralised monitoring, cross-site analytics, and unified billing for growing networks.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
