import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Regulatory Guidance",
  description:
    "Navigate EV charging permits, safety standards, and regulatory compliance in India. Expert guidance on BEVC, CEA, and state-level policies.",
  keywords: ["EV regulations India", "charging permits", "BEVC compliance", "CEA standards", "regulatory guidance"],
  openGraph: {
    title: "EV Charging Regulatory Guidance",
    description: "Navigate EV charging permits, safety standards, and regulatory compliance in India. Expert guidance on BEVC, CEA, and state-level policies.",
    url: "/consulting/regulatory",
  },
  twitter: {
    title: "EV Charging Regulatory Guidance",
    description: "Navigate EV charging permits, safety standards, and regulatory compliance in India. Expert guidance on BEVC, CEA, and state-level policies.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
