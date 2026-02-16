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
    title: "Browse Chargers",
    description:
      "Source from 50+ verified brands — every charger we install comes pre-tested and CMS-ready.",
    href: "/marketplace",
  },
  {
    pillar: "consulting" as const,
    title: "Plan Your Setup",
    description:
      "Not sure what you need? Our consultants design the optimal setup for your location and budget.",
    href: "/consulting",
  },
  {
    pillar: "academy" as const,
    title: "Become an Installer",
    description:
      "Get HOW Academy certified and join our installer network. Training, certification, and job pipeline.",
    href: "/academy",
  },
];

export function ServicesCrossPillar() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Complete Ecosystem
          </p>
          <h2 className="mt-3">Services work best with the full platform</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Installation is just one piece. Combine with marketplace, consulting,
            and training for maximum impact.
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
