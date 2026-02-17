import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Operator Certification",
  description:
    "Learn to operate and manage EV charging networks. Training on CMS platforms, billing, customer support, and network optimisation.",
  keywords: ["operator certification", "CPO training", "charging network management", "operator course", "network operations"],
  openGraph: {
    title: "EV Charging Operator Certification",
    description: "Learn to operate and manage EV charging networks. Training on CMS platforms, billing, customer support, and network optimisation.",
    url: "/academy/operator",
  },
  twitter: {
    title: "EV Charging Operator Certification",
    description: "Learn to operate and manage EV charging networks. Training on CMS platforms, billing, customer support, and network optimisation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
