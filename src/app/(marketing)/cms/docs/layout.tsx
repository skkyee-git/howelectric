import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Documentation",
  description:
    "Complete developer documentation for HowElectric CMS. API guides, SDK references, webhooks, and integration tutorials to get started fast.",
  keywords: ["developer docs", "CMS documentation", "API guide", "SDK reference", "integration tutorial"],
  openGraph: {
    title: "Developer Documentation",
    description: "Complete developer documentation for HowElectric CMS. API guides, SDK references, webhooks, and integration tutorials to get started fast.",
    url: "/cms/docs",
  },
  twitter: {
    title: "Developer Documentation",
    description: "Complete developer documentation for HowElectric CMS. API guides, SDK references, webhooks, and integration tutorials to get started fast.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
