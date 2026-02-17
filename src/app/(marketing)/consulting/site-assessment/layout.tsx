import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Site Assessment",
  description:
    "Comprehensive site evaluation for EV charging — electrical capacity, structural analysis, traffic patterns, and optimal charger placement.",
  keywords: ["site assessment", "EV charging location", "electrical capacity", "charger placement", "traffic analysis"],
  openGraph: {
    title: "EV Charging Site Assessment",
    description: "Comprehensive site evaluation for EV charging — electrical capacity, structural analysis, traffic patterns, and optimal charger placement.",
    url: "/consulting/site-assessment",
  },
  twitter: {
    title: "EV Charging Site Assessment",
    description: "Comprehensive site evaluation for EV charging — electrical capacity, structural analysis, traffic patterns, and optimal charger placement.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
