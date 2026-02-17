import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential EV Charger Installation",
  description:
    "Professional EV charger installation for homes and apartments. Includes site survey, electrical upgrades, charger mounting, and testing.",
  keywords: ["residential EV charger", "home charger installation", "apartment charging", "Level 2 home charger", "EV home setup"],
  openGraph: {
    title: "Residential EV Charger Installation",
    description: "Professional EV charger installation for homes and apartments. Includes site survey, electrical upgrades, charger mounting, and testing.",
    url: "/services/residential",
  },
  twitter: {
    title: "Residential EV Charger Installation",
    description: "Professional EV charger installation for homes and apartments. Includes site survey, electrical upgrades, charger mounting, and testing.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
