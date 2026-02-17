import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "HowElectric investor relations — growth metrics, funding updates, market opportunity, and vision for India\'s EV charging infrastructure.",
  keywords: ["investor relations", "funding", "growth metrics", "EV market opportunity", "invest in HowElectric"],
  openGraph: {
    title: "Investor Relations",
    description: "HowElectric investor relations — growth metrics, funding updates, market opportunity, and vision for India\'s EV charging infrastructure.",
    url: "/investors",
  },
  twitter: {
    title: "Investor Relations",
    description: "HowElectric investor relations — growth metrics, funding updates, market opportunity, and vision for India\'s EV charging infrastructure.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
