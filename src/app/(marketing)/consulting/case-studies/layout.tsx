import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Case Studies",
  description:
    "Real-world EV charging deployment success stories. See how businesses across India built profitable charging networks with HowElectric.",
  keywords: ["EV case studies", "charging success stories", "EV deployment examples", "charging network case study"],
  openGraph: {
    title: "EV Charging Case Studies",
    description: "Real-world EV charging deployment success stories. See how businesses across India built profitable charging networks with HowElectric.",
    url: "/consulting/case-studies",
  },
  twitter: {
    title: "EV Charging Case Studies",
    description: "Real-world EV charging deployment success stories. See how businesses across India built profitable charging networks with HowElectric.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
