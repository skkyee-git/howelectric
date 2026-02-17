import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free EV Charging Tools",
  description:
    "Free calculators, quizzes, and navigators for EV charging planning. ROI calculator, subsidy navigator, charger quiz, and more.",
  keywords: ["free EV tools", "ROI calculator", "subsidy navigator", "charger quiz", "EV planning tools"],
  openGraph: {
    title: "Free EV Charging Tools",
    description: "Free calculators, quizzes, and navigators for EV charging planning. ROI calculator, subsidy navigator, charger quiz, and more.",
    url: "/consulting/tools",
  },
  twitter: {
    title: "Free EV Charging Tools",
    description: "Free calculators, quizzes, and navigators for EV charging planning. ROI calculator, subsidy navigator, charger quiz, and more.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
