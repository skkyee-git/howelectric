import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Latest press releases, media coverage, and news about HowElectric. Download our media kit and connect with our communications team.",
  keywords: ["HowElectric press", "media coverage", "press releases", "media kit", "company news"],
  openGraph: {
    title: "Press & Media",
    description: "Latest press releases, media coverage, and news about HowElectric. Download our media kit and connect with our communications team.",
    url: "/about/press",
  },
  twitter: {
    title: "Press & Media",
    description: "Latest press releases, media coverage, and news about HowElectric. Download our media kit and connect with our communications team.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
