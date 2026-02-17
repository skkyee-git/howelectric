import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the leadership and key people behind HowElectric. A team of EV industry veterans, technologists, and entrepreneurs building India\'s charging future.",
  keywords: ["HowElectric team", "leadership", "founders", "EV veterans", "team members"],
  openGraph: {
    title: "Our Team",
    description: "Meet the leadership and key people behind HowElectric. A team of EV industry veterans, technologists, and entrepreneurs building India\'s charging future.",
    url: "/about/team",
  },
  twitter: {
    title: "Our Team",
    description: "Meet the leadership and key people behind HowElectric. A team of EV industry veterans, technologists, and entrepreneurs building India\'s charging future.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
