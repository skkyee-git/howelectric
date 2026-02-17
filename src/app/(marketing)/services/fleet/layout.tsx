import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Depot EV Charging Installation",
  description:
    "EV charging infrastructure for bus depots, logistics hubs, and fleet yards. High-power DC charging with smart load management and scheduling.",
  keywords: ["fleet charging", "depot charging", "bus depot EV", "logistics charging", "fleet infrastructure"],
  openGraph: {
    title: "Fleet Depot EV Charging Installation",
    description: "EV charging infrastructure for bus depots, logistics hubs, and fleet yards. High-power DC charging with smart load management and scheduling.",
    url: "/services/fleet",
  },
  twitter: {
    title: "Fleet Depot EV Charging Installation",
    description: "EV charging infrastructure for bus depots, logistics hubs, and fleet yards. High-power DC charging with smart load management and scheduling.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
