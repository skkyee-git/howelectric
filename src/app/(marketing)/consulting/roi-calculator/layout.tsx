import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging ROI Calculator",
  description:
    "Calculate the return on investment for your EV charging station. Comprehensive analysis of costs, revenue, and payback periods.",
  keywords: ["EV ROI", "charging ROI calculator", "investment returns", "payback period"],
  openGraph: {
    title: "EV Charging ROI Calculator",
    description: "Calculate the return on investment for your EV charging station. Comprehensive analysis of costs, revenue, and payback periods.",
    url: "/consulting/roi-calculator",
  },
  twitter: {
    title: "EV Charging ROI Calculator",
    description: "Calculate the return on investment for your EV charging station. Comprehensive analysis of costs, revenue, and payback periods.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
