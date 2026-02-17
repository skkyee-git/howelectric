import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS API Reference",
  description:
    "RESTful API reference for HowElectric CMS. Authentication, charger management, session control, billing, and webhook endpoints documented.",
  keywords: ["CMS API", "REST API", "API reference", "charger API", "billing API", "webhook endpoints"],
  openGraph: {
    title: "CMS API Reference",
    description: "RESTful API reference for HowElectric CMS. Authentication, charger management, session control, billing, and webhook endpoints documented.",
    url: "/cms/api",
  },
  twitter: {
    title: "CMS API Reference",
    description: "RESTful API reference for HowElectric CMS. Authentication, charger management, session control, billing, and webhook endpoints documented.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
