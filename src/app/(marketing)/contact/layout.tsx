import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact HowElectric",
  description:
    "Get in touch with HowElectric. Reach our team for consulting enquiries, installation requests, CMS demos, partnership opportunities, and support.",
  keywords: ["contact HowElectric", "get in touch", "enquiry", "support", "partnership"],
  openGraph: {
    title: "Contact HowElectric",
    description: "Get in touch with HowElectric. Reach our team for consulting enquiries, installation requests, CMS demos, partnership opportunities, and support.",
    url: "/contact",
  },
  twitter: {
    title: "Contact HowElectric",
    description: "Get in touch with HowElectric. Reach our team for consulting enquiries, installation requests, CMS demos, partnership opportunities, and support.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
