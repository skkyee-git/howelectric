import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS Features — 12 Core Modules",
  description:
    "Explore 12 core modules of HowElectric CMS: dashboard, OCPP, billing, user management, analytics, remote diagnostics, and more.",
  keywords: ["CMS features", "OCPP management", "EV billing", "charger dashboard", "remote diagnostics", "EV analytics"],
  openGraph: {
    title: "CMS Features — 12 Core Modules",
    description: "Explore 12 core modules of HowElectric CMS: dashboard, OCPP, billing, user management, analytics, remote diagnostics, and more.",
    url: "/cms/features",
  },
  twitter: {
    title: "CMS Features — 12 Core Modules",
    description: "Explore 12 core modules of HowElectric CMS: dashboard, OCPP, billing, user management, analytics, remote diagnostics, and more.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
