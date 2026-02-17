import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charger Annual Maintenance Contracts",
  description:
    "Keep your EV chargers running with AMC plans. Basic, Professional, and Enterprise tiers with preventive maintenance and priority support.",
  keywords: ["EV charger AMC", "maintenance contract", "charger maintenance", "preventive maintenance", "charger servicing"],
  openGraph: {
    title: "EV Charger Annual Maintenance Contracts",
    description: "Keep your EV chargers running with AMC plans. Basic, Professional, and Enterprise tiers with preventive maintenance and priority support.",
    url: "/services/amc",
  },
  twitter: {
    title: "EV Charger Annual Maintenance Contracts",
    description: "Keep your EV chargers running with AMC plans. Basic, Professional, and Enterprise tiers with preventive maintenance and priority support.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
