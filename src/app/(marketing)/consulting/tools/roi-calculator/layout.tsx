import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging ROI Calculator",
  description:
    "Estimate returns on your EV charging investment. Input your parameters and get instant revenue projections, payback period, and IRR analysis.",
  keywords: ["EV ROI calculator", "charging station returns", "investment calculator", "payback calculator", "EV revenue estimate"],
  openGraph: {
    title: "EV Charging ROI Calculator",
    description: "Estimate returns on your EV charging investment. Input your parameters and get instant revenue projections, payback period, and IRR analysis.",
    url: "/consulting/tools/roi-calculator",
  },
  twitter: {
    title: "EV Charging ROI Calculator",
    description: "Estimate returns on your EV charging investment. Input your parameters and get instant revenue projections, payback period, and IRR analysis.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
