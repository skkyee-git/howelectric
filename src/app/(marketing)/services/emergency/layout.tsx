import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Emergency EV Charger Repair",
  description:
    "Round-the-clock emergency repair service for EV chargers across India. Average 4-hour response time with certified technicians nationwide.",
  keywords: ["emergency charger repair", "24/7 EV repair", "charger breakdown", "urgent repair service", "EV technician"],
  openGraph: {
    title: "24/7 Emergency EV Charger Repair",
    description: "Round-the-clock emergency repair service for EV chargers across India. Average 4-hour response time with certified technicians nationwide.",
    url: "/services/emergency",
  },
  twitter: {
    title: "24/7 Emergency EV Charger Repair",
    description: "Round-the-clock emergency repair service for EV chargers across India. Average 4-hour response time with certified technicians nationwide.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
