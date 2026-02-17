import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at HowElectric",
  description:
    "Join HowElectric and help build India\'s EV charging future. View open positions in engineering, sales, operations, and more.",
  keywords: ["HowElectric careers", "EV jobs", "open positions", "join team", "EV career opportunities"],
  openGraph: {
    title: "Careers at HowElectric",
    description: "Join HowElectric and help build India\'s EV charging future. View open positions in engineering, sales, operations, and more.",
    url: "/about/careers",
  },
  twitter: {
    title: "Careers at HowElectric",
    description: "Join HowElectric and help build India\'s EV charging future. View open positions in engineering, sales, operations, and more.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
