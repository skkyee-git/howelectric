import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certified EV Charger Installer Network",
  description:
    "Browse HowElectric\'s network of certified EV charger installers across India. Trained, vetted, and rated professionals for every project type.",
  keywords: ["installer network", "certified installers", "EV installer directory", "rated installers", "vetted professionals"],
  openGraph: {
    title: "Certified EV Charger Installer Network",
    description: "Browse HowElectric\'s network of certified EV charger installers across India. Trained, vetted, and rated professionals for every project type.",
    url: "/services/installers",
  },
  twitter: {
    title: "Certified EV Charger Installer Network",
    description: "Browse HowElectric\'s network of certified EV charger installers across India. Trained, vetted, and rated professionals for every project type.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
