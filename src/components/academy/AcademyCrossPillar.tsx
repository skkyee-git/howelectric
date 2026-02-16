"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PillarCrossLink } from "@/components/shared/PillarCrossLink";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animation/StaggerGrid";

const CROSS_LINKS = [
  {
    pillar: "services" as const,
    title: "Join the Installer Network",
    description:
      "Graduate from the Installer track and join our verified network of certified EV charger installers across India.",
    href: "/services",
  },
  {
    pillar: "cms" as const,
    title: "Master the CMS Platform",
    description:
      "Operator track graduates get hands-on CMS training — learn to monitor, bill, and manage charging stations from day one.",
    href: "/cms",
  },
  {
    pillar: "consulting" as const,
    title: "Become a Consultant Partner",
    description:
      "Consultant track alumni can join our advisory network and help businesses plan, fund, and deploy EV infrastructure.",
    href: "/consulting",
  },
];

export function AcademyCrossPillar() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Complete Ecosystem
          </p>
          <h2 className="mt-3">Your career starts here</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            HOW Academy graduates unlock pathways across the entire HowElectric
            ecosystem — from installation to advisory.
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
