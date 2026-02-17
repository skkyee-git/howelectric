import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single-Site CMS Solution",
  description:
    "Manage a single EV charging location with ease. Perfect starter plan with full dashboard, billing, and user management capabilities.",
  keywords: ["single-site CMS", "one location", "starter plan", "small charging business", "single station management"],
  openGraph: {
    title: "Single-Site CMS Solution",
    description: "Manage a single EV charging location with ease. Perfect starter plan with full dashboard, billing, and user management capabilities.",
    url: "/cms/single-site",
  },
  twitter: {
    title: "Single-Site CMS Solution",
    description: "Manage a single EV charging location with ease. Perfect starter plan with full dashboard, billing, and user management capabilities.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
