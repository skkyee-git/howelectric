import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Certified EV Charger Installer",
  description:
    "Locate certified EV charger installers near you. Browse our nationwide network of trained and vetted installation professionals.",
  keywords: ["find EV installer", "certified installer near me", "charger installer directory", "installation professional"],
  openGraph: {
    title: "Find a Certified EV Charger Installer",
    description: "Locate certified EV charger installers near you. Browse our nationwide network of trained and vetted installation professionals.",
    url: "/services/find-installer",
  },
  twitter: {
    title: "Find a Certified EV Charger Installer",
    description: "Locate certified EV charger installers near you. Browse our nationwide network of trained and vetted installation professionals.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
