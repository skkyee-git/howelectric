import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description:
    "HowElectric in the news. Press releases, media mentions, and company announcements covering India\'s EV charging infrastructure growth.",
  keywords: ["press", "news", "media mentions", "press releases", "announcements"],
  openGraph: {
    title: "Press",
    description: "HowElectric in the news. Press releases, media mentions, and company announcements covering India\'s EV charging infrastructure growth.",
    url: "/press",
  },
  twitter: {
    title: "Press",
    description: "HowElectric in the news. Press releases, media mentions, and company announcements covering India\'s EV charging infrastructure growth.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
