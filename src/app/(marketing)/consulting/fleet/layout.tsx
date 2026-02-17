import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Electrification Consulting",
  description:
    "Transition your vehicle fleet to electric. Depot charging design, route analysis, TCO modelling, and phased electrification roadmaps.",
  keywords: ["fleet electrification", "EV fleet", "depot charging", "TCO analysis", "electric fleet transition"],
  openGraph: {
    title: "Fleet Electrification Consulting",
    description: "Transition your vehicle fleet to electric. Depot charging design, route analysis, TCO modelling, and phased electrification roadmaps.",
    url: "/consulting/fleet",
  },
  twitter: {
    title: "Fleet Electrification Consulting",
    description: "Transition your vehicle fleet to electric. Depot charging design, route analysis, TCO modelling, and phased electrification roadmaps.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
