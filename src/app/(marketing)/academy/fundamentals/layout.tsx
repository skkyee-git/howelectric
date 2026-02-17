import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free EV Charging Fundamentals Course",
  description:
    "Learn EV charging basics for free. Covers charging levels, connector types, grid integration, business models, and Indian EV market overview.",
  keywords: ["free EV course", "EV fundamentals", "charging basics", "EV 101", "beginner course"],
  openGraph: {
    title: "Free EV Charging Fundamentals Course",
    description: "Learn EV charging basics for free. Covers charging levels, connector types, grid integration, business models, and Indian EV market overview.",
    url: "/academy/fundamentals",
  },
  twitter: {
    title: "Free EV Charging Fundamentals Course",
    description: "Learn EV charging basics for free. Covers charging levels, connector types, grid integration, business models, and Indian EV market overview.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
