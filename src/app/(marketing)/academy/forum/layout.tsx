import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Community Forum",
  description:
    "Connect with EV charging professionals, installers, operators, and enthusiasts. Ask questions, share knowledge, and grow your network.",
  keywords: ["EV forum", "charging community", "professional network", "Q&A", "peer discussions"],
  openGraph: {
    title: "EV Charging Community Forum",
    description: "Connect with EV charging professionals, installers, operators, and enthusiasts. Ask questions, share knowledge, and grow your network.",
    url: "/academy/forum",
  },
  twitter: {
    title: "EV Charging Community Forum",
    description: "Connect with EV charging professionals, installers, operators, and enthusiasts. Ask questions, share knowledge, and grow your network.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
