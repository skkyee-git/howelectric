import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "HowElectric\'s partner ecosystem — OEM manufacturers, installation partners, technology providers, and channel partners powering EV charging in India.",
  keywords: ["HowElectric partners", "OEM partners", "technology partners", "channel partners", "partner ecosystem"],
  openGraph: {
    title: "Our Partners",
    description: "HowElectric\'s partner ecosystem — OEM manufacturers, installation partners, technology providers, and channel partners powering EV charging in India.",
    url: "/about/partners",
  },
  twitter: {
    title: "Our Partners",
    description: "HowElectric\'s partner ecosystem — OEM manufacturers, installation partners, technology providers, and channel partners powering EV charging in India.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
