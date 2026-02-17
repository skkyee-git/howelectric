import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise CMS Solution",
  description:
    "Enterprise-grade EV charging management for large-scale networks. API access, SLA guarantees, dedicated support, and custom integrations.",
  keywords: ["enterprise CMS", "large-scale charging", "enterprise API", "SLA support", "custom integrations"],
  openGraph: {
    title: "Enterprise CMS Solution",
    description: "Enterprise-grade EV charging management for large-scale networks. API access, SLA guarantees, dedicated support, and custom integrations.",
    url: "/cms/enterprise",
  },
  twitter: {
    title: "Enterprise CMS Solution",
    description: "Enterprise-grade EV charging management for large-scale networks. API access, SLA guarantees, dedicated support, and custom integrations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
