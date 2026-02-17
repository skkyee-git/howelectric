import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a CMS Demo",
  description:
    "See HowElectric CMS in action. Book a guided demo or start a free trial to explore dashboard, billing, OCPP management, and analytics.",
  keywords: ["CMS demo", "free trial", "product demo", "guided tour", "try CMS"],
  openGraph: {
    title: "Request a CMS Demo",
    description: "See HowElectric CMS in action. Book a guided demo or start a free trial to explore dashboard, billing, OCPP management, and analytics.",
    url: "/cms/demo",
  },
  twitter: {
    title: "Request a CMS Demo",
    description: "See HowElectric CMS in action. Book a guided demo or start a free trial to explore dashboard, billing, OCPP management, and analytics.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
