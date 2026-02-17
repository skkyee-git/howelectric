import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Certifications Overview",
  description:
    "Explore all EV charging certification tracks — installer, operator, and consultant. Industry-recognised credentials with hands-on assessments.",
  keywords: ["EV certifications", "certification tracks", "industry credentials", "professional certification"],
  openGraph: {
    title: "EV Charging Certifications Overview",
    description: "Explore all EV charging certification tracks — installer, operator, and consultant. Industry-recognised credentials with hands-on assessments.",
    url: "/academy/certification",
  },
  twitter: {
    title: "EV Charging Certifications Overview",
    description: "Explore all EV charging certification tracks — installer, operator, and consultant. Industry-recognised credentials with hands-on assessments.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
