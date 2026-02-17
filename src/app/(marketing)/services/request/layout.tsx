import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request EV Charger Installation",
  description:
    "Submit a request for EV charger installation. Get a free site survey and customised quote for residential, commercial, or public charging.",
  keywords: ["request installation", "EV charger quote", "free site survey", "installation enquiry", "get quote"],
  openGraph: {
    title: "Request EV Charger Installation",
    description: "Submit a request for EV charger installation. Get a free site survey and customised quote for residential, commercial, or public charging.",
    url: "/services/request",
  },
  twitter: {
    title: "Request EV Charger Installation",
    description: "Submit a request for EV charger installation. Get a free site survey and customised quote for residential, commercial, or public charging.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
