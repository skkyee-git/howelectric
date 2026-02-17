import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate EV Charging Training",
  description:
    "Custom EV charging training programs for organisations. On-site and virtual workshops for leadership, operations, and technical teams.",
  keywords: ["corporate training", "team training EV", "workshop", "organisation training", "custom EV program"],
  openGraph: {
    title: "Corporate EV Charging Training",
    description: "Custom EV charging training programs for organisations. On-site and virtual workshops for leadership, operations, and technical teams.",
    url: "/academy/corporate",
  },
  twitter: {
    title: "Corporate EV Charging Training",
    description: "Custom EV charging training programs for organisations. On-site and virtual workshops for leadership, operations, and technical teams.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
