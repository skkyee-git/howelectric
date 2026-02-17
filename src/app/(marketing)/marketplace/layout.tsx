import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Marketplace — Coming 2027",
  description:
    "India\'s first EV charging hardware marketplace launching in 2027. Browse chargers, accessories, and bundled solutions. Currently available: consulting, services, CMS.",
  keywords: ["EV marketplace", "charger marketplace", "buy EV charger", "charging hardware", "EV accessories"],
  openGraph: {
    title: "EV Charging Marketplace — Coming 2027",
    description: "India\'s first EV charging hardware marketplace launching in 2027. Browse chargers, accessories, and bundled solutions. Currently available: consulting, services, CMS.",
    url: "/marketplace",
  },
  twitter: {
    title: "EV Charging Marketplace — Coming 2027",
    description: "India\'s first EV charging hardware marketplace launching in 2027. Browse chargers, accessories, and bundled solutions. Currently available: consulting, services, CMS.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
