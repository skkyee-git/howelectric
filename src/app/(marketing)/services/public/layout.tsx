import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public EV Charging Station Installation",
  description:
    "Set up public EV charging stations on highways, urban areas, and fuel stations. Turnkey installation with payment integration and monitoring.",
  keywords: ["public EV charging", "highway charging station", "urban charging", "fuel station EV", "public charger setup"],
  openGraph: {
    title: "Public EV Charging Station Installation",
    description: "Set up public EV charging stations on highways, urban areas, and fuel stations. Turnkey installation with payment integration and monitoring.",
    url: "/services/public",
  },
  twitter: {
    title: "Public EV Charging Station Installation",
    description: "Set up public EV charging stations on highways, urban areas, and fuel stations. Turnkey installation with payment integration and monitoring.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
