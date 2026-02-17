import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Guides & Playbooks",
  description:
    "Comprehensive guides and playbooks for EV charging professionals. Installation manuals, business playbooks, and technical reference materials.",
  keywords: ["EV guides", "charging playbooks", "installation guide", "business playbook", "technical reference"],
  openGraph: {
    title: "EV Charging Guides & Playbooks",
    description: "Comprehensive guides and playbooks for EV charging professionals. Installation manuals, business playbooks, and technical reference materials.",
    url: "/academy/guides",
  },
  twitter: {
    title: "EV Charging Guides & Playbooks",
    description: "Comprehensive guides and playbooks for EV charging professionals. Installation manuals, business playbooks, and technical reference materials.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
