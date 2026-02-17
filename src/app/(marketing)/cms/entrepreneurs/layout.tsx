import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS for Entrepreneurs",
  description:
    "Start your EV charging business with HowElectric CMS. Easy setup, built-in billing, driver app, and everything to launch your first station.",
  keywords: ["EV entrepreneur", "start charging business", "EV startup", "first charging station", "business launch"],
  openGraph: {
    title: "CMS for Entrepreneurs",
    description: "Start your EV charging business with HowElectric CMS. Easy setup, built-in billing, driver app, and everything to launch your first station.",
    url: "/cms/entrepreneurs",
  },
  twitter: {
    title: "CMS for Entrepreneurs",
    description: "Start your EV charging business with HowElectric CMS. Easy setup, built-in billing, driver app, and everything to launch your first station.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
