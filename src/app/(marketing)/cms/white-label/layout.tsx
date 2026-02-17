import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White-Label CMS Platform",
  description:
    "Launch your own branded EV charging platform. Custom branding, driver app, and management portal under your company identity.",
  keywords: ["white-label CMS", "branded platform", "custom EV app", "OEM charging platform", "private label"],
  openGraph: {
    title: "White-Label CMS Platform",
    description: "Launch your own branded EV charging platform. Custom branding, driver app, and management portal under your company identity.",
    url: "/cms/white-label",
  },
  twitter: {
    title: "White-Label CMS Platform",
    description: "Launch your own branded EV charging platform. Custom branding, driver app, and management portal under your company identity.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
