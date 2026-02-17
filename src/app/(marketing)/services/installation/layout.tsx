import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charger Installation Services",
  description:
    "Complete EV charger installation services across India. Residential, commercial, fleet, and public charging solutions with certified installers.",
  keywords: ["EV installation services", "charger installation India", "certified installer", "professional installation"],
  openGraph: {
    title: "EV Charger Installation Services",
    description: "Complete EV charger installation services across India. Residential, commercial, fleet, and public charging solutions with certified installers.",
    url: "/services/installation",
  },
  twitter: {
    title: "EV Charger Installation Services",
    description: "Complete EV charger installation services across India. Residential, commercial, fleet, and public charging solutions with certified installers.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
