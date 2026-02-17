import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Consultant Certification",
  description:
    "Become a certified EV charging consultant. Master feasibility analysis, site assessment, ROI modelling, and regulatory compliance advisory.",
  keywords: ["consultant certification", "EV consulting course", "feasibility training", "advisory certification"],
  openGraph: {
    title: "EV Charging Consultant Certification",
    description: "Become a certified EV charging consultant. Master feasibility analysis, site assessment, ROI modelling, and regulatory compliance advisory.",
    url: "/academy/consultant",
  },
  twitter: {
    title: "EV Charging Consultant Certification",
    description: "Become a certified EV charging consultant. Master feasibility analysis, site assessment, ROI modelling, and regulatory compliance advisory.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
