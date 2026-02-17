import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OCPP Protocol Management",
  description:
    "Connect and manage any OCPP-compliant charger. Support for OCPP 1.6 and 2.0.1 with firmware updates, diagnostics, and configuration.",
  keywords: ["OCPP management", "OCPP 1.6", "OCPP 2.0", "charger protocol", "firmware management"],
  openGraph: {
    title: "OCPP Protocol Management",
    description: "Connect and manage any OCPP-compliant charger. Support for OCPP 1.6 and 2.0.1 with firmware updates, diagnostics, and configuration.",
    url: "/cms/ocpp",
  },
  twitter: {
    title: "OCPP Protocol Management",
    description: "Connect and manage any OCPP-compliant charger. Support for OCPP 1.6 and 2.0.1 with firmware updates, diagnostics, and configuration.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
