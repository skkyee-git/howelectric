import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charger Upgrade & Modernisation",
  description:
    "Upgrade your existing EV chargers with latest technology. Firmware updates, power upgrades, OCPP migration, and smart feature additions.",
  keywords: ["charger upgrade", "EV modernisation", "firmware update", "power upgrade", "OCPP migration"],
  openGraph: {
    title: "EV Charger Upgrade & Modernisation",
    description: "Upgrade your existing EV chargers with latest technology. Firmware updates, power upgrades, OCPP migration, and smart feature additions.",
    url: "/services/upgrades",
  },
  twitter: {
    title: "EV Charger Upgrade & Modernisation",
    description: "Upgrade your existing EV chargers with latest technology. Firmware updates, power upgrades, OCPP migration, and smart feature additions.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
