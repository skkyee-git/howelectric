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
    title: "Browse the Marketplace",
    description:
      "Source from 50+ verified charger brands with CMS compatibility filters, price comparisons, and expert reviews.",
    href: "/marketplace",
  },
  {
    pillar: "services" as const,
    title: "Installation & AMC",
    description:
      "Professional installation, commissioning, and annual maintenance contracts for every charger in our ecosystem.",
    href: "/services",
  },
  {
    pillar: "cms" as const,
    title: "CMS Platform",
    description:
      "Monitor, bill, and manage your charging stations from a single dashboard with OCPP 1.6/2.0.1 support.",
    href: "/cms",
  },
];

export function CrossPillarSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Complete Ecosystem
          </p>
          <h2 className="mt-3">Consulting is just the beginning</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            HowElectric supports your journey across every stage — from planning
            to procurement, installation, and ongoing management.
          </p>
        </ScrollReveal>

        <StaggerGrid className="mt-12 grid gap-5 sm:grid-cols-3">
          {CROSS_LINKS.map((link) => (
            <StaggerItem key={link.pillar}>
              <PillarCrossLink
                pillar={link.pillar}
                title={link.title}
                description={link.description}
                href={link.href}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
