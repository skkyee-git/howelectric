import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Readiness Assessment Quiz",
  description:
    "Assess your organisation\'s readiness for EV charging infrastructure. Quick quiz covering demand, budget, infrastructure, and timeline factors.",
  keywords: ["EV readiness quiz", "charging readiness assessment", "EV infrastructure quiz", "readiness evaluation"],
  openGraph: {
    title: "EV Readiness Assessment Quiz",
    description: "Assess your organisation\'s readiness for EV charging infrastructure. Quick quiz covering demand, budget, infrastructure, and timeline factors.",
    url: "/consulting/quiz",
  },
  twitter: {
    title: "EV Readiness Assessment Quiz",
    description: "Assess your organisation\'s readiness for EV charging infrastructure. Quick quiz covering demand, budget, infrastructure, and timeline factors.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
