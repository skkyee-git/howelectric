import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS Pricing Plans",
  description:
    "Flexible pricing for every scale of EV charging operation. From single-site starter to enterprise plans with custom SLAs and API access.",
  keywords: ["CMS pricing", "charging software cost", "platform pricing", "SaaS plans", "EV software pricing"],
  openGraph: {
    title: "CMS Pricing Plans",
    description: "Flexible pricing for every scale of EV charging operation. From single-site starter to enterprise plans with custom SLAs and API access.",
    url: "/cms/pricing",
  },
  twitter: {
    title: "CMS Pricing Plans",
    description: "Flexible pricing for every scale of EV charging operation. From single-site starter to enterprise plans with custom SLAs and API access.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
