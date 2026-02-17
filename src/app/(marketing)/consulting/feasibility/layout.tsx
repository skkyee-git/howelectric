import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Feasibility Study",
  description:
    "Assess the viability of EV charging at your location. Expert analysis of demand, infrastructure, costs, and revenue potential across India.",
  keywords: ["EV feasibility study", "charging station viability", "EV demand analysis", "infrastructure assessment"],
  openGraph: {
    title: "EV Charging Feasibility Study",
    description: "Assess the viability of EV charging at your location. Expert analysis of demand, infrastructure, costs, and revenue potential across India.",
    url: "/consulting/feasibility",
  },
  twitter: {
    title: "EV Charging Feasibility Study",
    description: "Assess the viability of EV charging at your location. Expert analysis of demand, infrastructure, costs, and revenue potential across India.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
