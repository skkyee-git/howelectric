import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an EV Charger Installation Partner",
  description:
    "Join HowElectric\'s installation partner network. Access training, leads, tools, and support to grow your EV charging installation business.",
  keywords: ["installation partner", "EV partner program", "installer network", "join HowElectric", "partner benefits"],
  openGraph: {
    title: "Become an EV Charger Installation Partner",
    description: "Join HowElectric\'s installation partner network. Access training, leads, tools, and support to grow your EV charging installation business.",
    url: "/services/partner",
  },
  twitter: {
    title: "Become an EV Charger Installation Partner",
    description: "Join HowElectric\'s installation partner network. Access training, leads, tools, and support to grow your EV charging installation business.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
