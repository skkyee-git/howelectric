import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charger Recommendation Quiz",
  description:
    "Find the right EV charger for your needs. Answer a few questions about your use case, budget, and location to get personalised recommendations.",
  keywords: ["charger recommendation", "EV charger quiz", "which charger to buy", "charger comparison", "charger selector"],
  openGraph: {
    title: "EV Charger Recommendation Quiz",
    description: "Find the right EV charger for your needs. Answer a few questions about your use case, budget, and location to get personalised recommendations.",
    url: "/consulting/tools/charger-quiz",
  },
  twitter: {
    title: "EV Charger Recommendation Quiz",
    description: "Find the right EV charger for your needs. Answer a few questions about your use case, budget, and location to get personalised recommendations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
