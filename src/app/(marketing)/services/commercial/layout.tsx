import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial EV Charger Installation",
  description:
    "EV charger installation for offices, malls, hotels, and commercial properties. Scalable solutions with load management and billing integration.",
  keywords: ["commercial EV charger", "office charging", "mall EV charging", "hotel charger", "workplace charging"],
  openGraph: {
    title: "Commercial EV Charger Installation",
    description: "EV charger installation for offices, malls, hotels, and commercial properties. Scalable solutions with load management and billing integration.",
    url: "/services/commercial",
  },
  twitter: {
    title: "Commercial EV Charger Installation",
    description: "EV charger installation for offices, malls, hotels, and commercial properties. Scalable solutions with load management and billing integration.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
