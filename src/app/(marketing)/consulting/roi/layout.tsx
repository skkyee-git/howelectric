import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging ROI Analysis",
  description:
    "Detailed financial projections for your EV charging investment. Revenue modelling, payback periods, and long-term profitability analysis.",
  keywords: ["EV ROI analysis", "charging station returns", "EV investment", "revenue modelling", "payback period"],
  openGraph: {
    title: "EV Charging ROI Analysis",
    description: "Detailed financial projections for your EV charging investment. Revenue modelling, payback periods, and long-term profitability analysis.",
    url: "/consulting/roi",
  },
  twitter: {
    title: "EV Charging ROI Analysis",
    description: "Detailed financial projections for your EV charging investment. Revenue modelling, payback periods, and long-term profitability analysis.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
