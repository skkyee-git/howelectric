import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Business Course",
  description:
    "Learn to start and scale an EV charging business. Business planning, financial modelling, operations, marketing, and growth strategies.",
  keywords: ["EV business course", "charging business", "EV entrepreneurship", "business planning", "charging station business"],
  openGraph: {
    title: "EV Charging Business Course",
    description: "Learn to start and scale an EV charging business. Business planning, financial modelling, operations, marketing, and growth strategies.",
    url: "/academy/business",
  },
  twitter: {
    title: "EV Charging Business Course",
    description: "Learn to start and scale an EV charging business. Business planning, financial modelling, operations, marketing, and growth strategies.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
