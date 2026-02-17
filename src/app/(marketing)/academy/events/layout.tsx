import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Industry Events",
  description:
    "Upcoming and past EV charging industry events, meetups, and conferences. Network with professionals and stay ahead of industry trends.",
  keywords: ["EV events", "charging conference", "industry meetup", "networking event", "EV expo"],
  openGraph: {
    title: "EV Charging Industry Events",
    description: "Upcoming and past EV charging industry events, meetups, and conferences. Network with professionals and stay ahead of industry trends.",
    url: "/academy/events",
  },
  twitter: {
    title: "EV Charging Industry Events",
    description: "Upcoming and past EV charging industry events, meetups, and conferences. Network with professionals and stay ahead of industry trends.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
