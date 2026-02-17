import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Serve EV Consulting",
  description:
    "DIY EV charging planning with free tools, templates, and calculators. Assess feasibility, estimate ROI, and find subsidies on your own.",
  keywords: ["DIY EV planning", "self-serve consulting", "EV tools", "charging calculator", "free EV assessment"],
  openGraph: {
    title: "Self-Serve EV Consulting",
    description: "DIY EV charging planning with free tools, templates, and calculators. Assess feasibility, estimate ROI, and find subsidies on your own.",
    url: "/consulting/self-serve",
  },
  twitter: {
    title: "Self-Serve EV Consulting",
    description: "DIY EV charging planning with free tools, templates, and calculators. Assess feasibility, estimate ROI, and find subsidies on your own.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
