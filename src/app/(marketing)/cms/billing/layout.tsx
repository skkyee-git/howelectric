import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Billing & Payments",
  description:
    "Automated billing for EV charging sessions. Flexible pricing models, payment gateway integration, invoicing, and revenue settlement.",
  keywords: ["EV billing", "charging payments", "automated invoicing", "pricing models", "payment gateway"],
  openGraph: {
    title: "EV Charging Billing & Payments",
    description: "Automated billing for EV charging sessions. Flexible pricing models, payment gateway integration, invoicing, and revenue settlement.",
    url: "/cms/billing",
  },
  twitter: {
    title: "EV Charging Billing & Payments",
    description: "Automated billing for EV charging sessions. Flexible pricing models, payment gateway integration, invoicing, and revenue settlement.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
