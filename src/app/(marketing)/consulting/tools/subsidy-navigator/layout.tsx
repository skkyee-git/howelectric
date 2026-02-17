import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Subsidy Navigator",
  description:
    "Find government subsidies and incentives for EV charging in India. State-wise FAME II, FAME III, and local policy database updated regularly.",
  keywords: ["EV subsidies India", "FAME subsidy", "charging incentives", "government EV schemes", "subsidy navigator"],
  openGraph: {
    title: "EV Charging Subsidy Navigator",
    description: "Find government subsidies and incentives for EV charging in India. State-wise FAME II, FAME III, and local policy database updated regularly.",
    url: "/consulting/tools/subsidy-navigator",
  },
  twitter: {
    title: "EV Charging Subsidy Navigator",
    description: "Find government subsidies and incentives for EV charging in India. State-wise FAME II, FAME III, and local policy database updated regularly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
