import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS for Franchise Networks",
  description:
    "Unified charging management across franchise locations. Centralised control with local flexibility, brand consistency, and franchise reporting.",
  keywords: ["franchise CMS", "franchise charging", "multi-franchise", "brand consistency", "franchise reporting"],
  openGraph: {
    title: "CMS for Franchise Networks",
    description: "Unified charging management across franchise locations. Centralised control with local flexibility, brand consistency, and franchise reporting.",
    url: "/cms/franchise",
  },
  twitter: {
    title: "CMS for Franchise Networks",
    description: "Unified charging management across franchise locations. Centralised control with local flexibility, brand consistency, and franchise reporting.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
