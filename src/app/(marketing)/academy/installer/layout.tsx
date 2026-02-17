import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charger Installer Certification",
  description:
    "Become a certified EV charger installer. Hands-on training covering AC/DC installation, safety standards, testing, and commissioning.",
  keywords: ["installer certification", "EV installer training", "charger installation course", "hands-on training", "certified installer"],
  openGraph: {
    title: "EV Charger Installer Certification",
    description: "Become a certified EV charger installer. Hands-on training covering AC/DC installation, safety standards, testing, and commissioning.",
    url: "/academy/installer",
  },
  twitter: {
    title: "EV Charger Installer Certification",
    description: "Become a certified EV charger installer. Hands-on training covering AC/DC installation, safety standards, testing, and commissioning.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
