import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging Glossary",
  description:
    "Comprehensive glossary of EV charging terms and definitions. From AC charging to zero-emission vehicles — every term explained clearly.",
  keywords: ["EV glossary", "charging terms", "EVSE definitions", "EV terminology", "industry glossary"],
  openGraph: {
    title: "EV Charging Glossary",
    description: "Comprehensive glossary of EV charging terms and definitions. From AC charging to zero-emission vehicles — every term explained clearly.",
    url: "/academy/glossary",
  },
  twitter: {
    title: "EV Charging Glossary",
    description: "Comprehensive glossary of EV charging terms and definitions. From AC charging to zero-emission vehicles — every term explained clearly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
