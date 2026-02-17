import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose HowElectric",
  description:
    "What makes HowElectric different — end-to-end platform, India-first approach, five integrated pillars, and a track record of successful deployments.",
  keywords: ["why HowElectric", "competitive advantage", "differentiators", "end-to-end platform", "India-first"],
  openGraph: {
    title: "Why Choose HowElectric",
    description: "What makes HowElectric different — end-to-end platform, India-first approach, five integrated pillars, and a track record of successful deployments.",
    url: "/about/why-us",
  },
  twitter: {
    title: "Why Choose HowElectric",
    description: "What makes HowElectric different — end-to-end platform, India-first approach, five integrated pillars, and a track record of successful deployments.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
