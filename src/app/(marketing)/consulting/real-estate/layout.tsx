import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Charging for Real Estate",
  description:
    "Add EV charging to residential and commercial properties. Increase property value, attract tenants, and future-proof your real estate portfolio.",
  keywords: ["EV charging real estate", "property charging", "residential EV", "commercial property charging", "property value EV"],
  openGraph: {
    title: "EV Charging for Real Estate",
    description: "Add EV charging to residential and commercial properties. Increase property value, attract tenants, and future-proof your real estate portfolio.",
    url: "/consulting/real-estate",
  },
  twitter: {
    title: "EV Charging for Real Estate",
    description: "Add EV charging to residential and commercial properties. Increase property value, attract tenants, and future-proof your real estate portfolio.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
