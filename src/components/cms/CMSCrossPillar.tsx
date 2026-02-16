"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PillarCrossLink } from "@/components/shared/PillarCrossLink";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animation/StaggerGrid";

const CROSS_LINKS = [
  {
    pillar: "marketplace" as const,
    title: "Browse CMS-Ready Chargers",
    description:
      "Find OCPP-compatible chargers that work seamlessly with our CMS platform. Get CMS included free with every purchase.",
    href: "/marketplace",
  },
  {
    pillar: "services" as const,
    title: "Get Professional Installation",
    description:
      "Our certified installers handle everything from site survey to commissioning, with CMS pre-configured on day one.",
    href: "/services",
  },
  {
    pillar: "consulting" as const,
    title: "Plan Your CMS Strategy",
    description:
      "Work with our EV charging consultants to design the optimal network architecture and CMS deployment plan.",
    href: "/consulting",
  },
];

export function CMSCrossPillar() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold">
            Complete Ecosystem
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            CMS is just the beginning
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted-foreground">
            Combine our CMS with other HowElectric services for a complete
            end-to-end charging solution.
          </p>
        </ScrollReveal>

        <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-3">
          {CROSS_LINKS.map(({ pillar, title, description, href }) => (
            <StaggerItem key={pillar}>
              <PillarCrossLink
                pillar={pillar}
                title={title}
                description={description}
                href={href}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
