import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS Integration & Setup Guides",
  description:
    "Step-by-step guides for setting up and integrating HowElectric CMS. Charger onboarding, payment setup, branding, and third-party integrations.",
  keywords: ["CMS guides", "setup guide", "integration guide", "charger onboarding", "payment setup"],
  openGraph: {
    title: "CMS Integration & Setup Guides",
    description: "Step-by-step guides for setting up and integrating HowElectric CMS. Charger onboarding, payment setup, branding, and third-party integrations.",
    url: "/cms/guides",
  },
  twitter: {
    title: "CMS Integration & Setup Guides",
    description: "Step-by-step guides for setting up and integrating HowElectric CMS. Charger onboarding, payment setup, branding, and third-party integrations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
