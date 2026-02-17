import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at HowElectric. We\'re hiring engineers, consultants, sales professionals, and operations specialists across India.",
  keywords: ["careers", "jobs HowElectric", "hiring", "open roles", "work at HowElectric"],
  openGraph: {
    title: "Careers",
    description: "Explore career opportunities at HowElectric. We\'re hiring engineers, consultants, sales professionals, and operations specialists across India.",
    url: "/careers",
  },
  twitter: {
    title: "Careers",
    description: "Explore career opportunities at HowElectric. We\'re hiring engineers, consultants, sales professionals, and operations specialists across India.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
