import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-Time EV Charging Dashboard",
  description:
    "Monitor your entire charging network in real time. Live charger status, energy consumption, revenue tracking, and performance analytics.",
  keywords: ["charging dashboard", "real-time monitoring", "charger status", "energy analytics", "revenue tracking"],
  openGraph: {
    title: "Real-Time EV Charging Dashboard",
    description: "Monitor your entire charging network in real time. Live charger status, energy consumption, revenue tracking, and performance analytics.",
    url: "/cms/dashboard",
  },
  twitter: {
    title: "Real-Time EV Charging Dashboard",
    description: "Monitor your entire charging network in real time. Live charger status, energy consumption, revenue tracking, and performance analytics.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
