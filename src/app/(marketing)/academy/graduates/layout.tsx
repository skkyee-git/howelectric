import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graduate Network & Success Stories",
  description:
    "Meet HowElectric Academy graduates who are building India\'s EV charging ecosystem. Success stories, alumni community, and career outcomes.",
  keywords: ["academy graduates", "success stories", "alumni network", "career outcomes", "graduate community"],
  openGraph: {
    title: "Graduate Network & Success Stories",
    description: "Meet HowElectric Academy graduates who are building India\'s EV charging ecosystem. Success stories, alumni community, and career outcomes.",
    url: "/academy/graduates",
  },
  twitter: {
    title: "Graduate Network & Success Stories",
    description: "Meet HowElectric Academy graduates who are building India\'s EV charging ecosystem. Success stories, alumni community, and career outcomes.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
