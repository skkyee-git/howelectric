import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS for Fleet Operators",
  description:
    "Manage depot and fleet charging operations. Driver assignment, scheduled charging, energy optimisation, and fleet-wide reporting.",
  keywords: ["fleet CMS", "depot management", "fleet charging", "driver assignment", "energy optimisation"],
  openGraph: {
    title: "CMS for Fleet Operators",
    description: "Manage depot and fleet charging operations. Driver assignment, scheduled charging, energy optimisation, and fleet-wide reporting.",
    url: "/cms/fleet",
  },
  twitter: {
    title: "CMS for Fleet Operators",
    description: "Manage depot and fleet charging operations. Driver assignment, scheduled charging, energy optimisation, and fleet-wide reporting.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
