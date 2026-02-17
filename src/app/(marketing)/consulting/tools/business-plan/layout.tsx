import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Business Plan Generator",
  description:
    "Generate a professional EV charging business plan. Revenue projections, market analysis, operational costs, and funding-ready financial models.",
  keywords: ["EV business plan", "charging station business", "revenue projections", "EV market analysis", "business plan generator"],
  openGraph: {
    title: "EV Charging Business Plan Generator",
    description: "Generate a professional EV charging business plan. Revenue projections, market analysis, operational costs, and funding-ready financial models.",
    url: "/consulting/tools/business-plan",
  },
  twitter: {
    title: "EV Charging Business Plan Generator",
    description: "Generate a professional EV charging business plan. Revenue projections, market analysis, operational costs, and funding-ready financial models.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
