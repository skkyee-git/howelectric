import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed EV Consulting",
  description:
    "Dedicated EV charging consultant for your project. End-to-end support from feasibility to deployment with a named expert by your side.",
  keywords: ["managed consulting", "EV consultant", "dedicated expert", "end-to-end EV support", "charging project management"],
  openGraph: {
    title: "Managed EV Consulting",
    description: "Dedicated EV charging consultant for your project. End-to-end support from feasibility to deployment with a named expert by your side.",
    url: "/consulting/managed",
  },
  twitter: {
    title: "Managed EV Consulting",
    description: "Dedicated EV charging consultant for your project. End-to-end support from feasibility to deployment with a named expert by your side.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
