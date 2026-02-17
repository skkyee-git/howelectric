import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise EV Consulting",
  description:
    "Large-scale EV infrastructure deployment for enterprises. Multi-site planning, fleet electrification, and custom charging network strategy.",
  keywords: ["enterprise EV consulting", "large-scale charging", "multi-site EV", "fleet electrification", "charging network strategy"],
  openGraph: {
    title: "Enterprise EV Consulting",
    description: "Large-scale EV infrastructure deployment for enterprises. Multi-site planning, fleet electrification, and custom charging network strategy.",
    url: "/consulting/enterprise",
  },
  twitter: {
    title: "Enterprise EV Consulting",
    description: "Large-scale EV infrastructure deployment for enterprises. Multi-site planning, fleet electrification, and custom charging network strategy.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
