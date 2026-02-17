import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare EV Charging CMS Platforms",
  description:
    "See how HowElectric CMS compares with other charging management platforms. Feature-by-feature comparison on pricing, OCPP, and scalability.",
  keywords: ["CMS comparison", "charging software compare", "HowElectric vs", "best EV CMS", "platform comparison"],
  openGraph: {
    title: "Compare EV Charging CMS Platforms",
    description: "See how HowElectric CMS compares with other charging management platforms. Feature-by-feature comparison on pricing, OCPP, and scalability.",
    url: "/cms/compare",
  },
  twitter: {
    title: "Compare EV Charging CMS Platforms",
    description: "See how HowElectric CMS compares with other charging management platforms. Feature-by-feature comparison on pricing, OCPP, and scalability.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
