import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS for Real Estate Developers",
  description:
    "Add smart EV charging to your properties with our CMS. Resident billing, visitor access, energy management, and property dashboard.",
  keywords: ["real estate EV", "property charging", "resident billing", "apartment EV management", "smart building"],
  openGraph: {
    title: "CMS for Real Estate Developers",
    description: "Add smart EV charging to your properties with our CMS. Resident billing, visitor access, energy management, and property dashboard.",
    url: "/cms/real-estate",
  },
  twitter: {
    title: "CMS for Real Estate Developers",
    description: "Add smart EV charging to your properties with our CMS. Resident billing, visitor access, energy management, and property dashboard.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
