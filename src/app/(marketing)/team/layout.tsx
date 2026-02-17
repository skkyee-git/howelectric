import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the people behind HowElectric — engineers, consultants, and industry experts building India\'s EV charging infrastructure platform.",
  keywords: ["team", "HowElectric people", "leadership team", "company team"],
  openGraph: {
    title: "Meet the Team",
    description: "Meet the people behind HowElectric — engineers, consultants, and industry experts building India\'s EV charging infrastructure platform.",
    url: "/team",
  },
  twitter: {
    title: "Meet the Team",
    description: "Meet the people behind HowElectric — engineers, consultants, and industry experts building India\'s EV charging infrastructure platform.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
