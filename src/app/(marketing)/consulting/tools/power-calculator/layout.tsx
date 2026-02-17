import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Power Requirements Calculator",
  description:
    "Calculate electrical requirements for your EV charging setup. Determine transformer capacity, cable sizing, and load management needs.",
  keywords: ["power calculator", "electrical requirements", "transformer capacity", "load management", "EV power needs"],
  openGraph: {
    title: "EV Charging Power Requirements Calculator",
    description: "Calculate electrical requirements for your EV charging setup. Determine transformer capacity, cable sizing, and load management needs.",
    url: "/consulting/tools/power-calculator",
  },
  twitter: {
    title: "EV Charging Power Requirements Calculator",
    description: "Calculate electrical requirements for your EV charging setup. Determine transformer capacity, cable sizing, and load management needs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
