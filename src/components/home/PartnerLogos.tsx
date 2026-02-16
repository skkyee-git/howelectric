"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TrustBar } from "@/components/shared/TrustBar";

const PARTNER_LOGOS = [
  { src: "/images/logos/tata-power.svg", alt: "Tata Power" },
  { src: "/images/logos/adani-green.svg", alt: "Adani Green" },
  { src: "/images/logos/ather-energy.svg", alt: "Ather Energy" },
  { src: "/images/logos/mg-motor.svg", alt: "MG Motor" },
  { src: "/images/logos/delta-electronics.svg", alt: "Delta Electronics" },
  { src: "/images/logos/exicom.svg", alt: "Exicom" },
  { src: "/images/logos/fortum-charge.svg", alt: "Fortum Charge" },
  { src: "/images/logos/chargepoint.svg", alt: "ChargePoint" },
];

export function PartnerLogos() {
  return (
    <section className="border-y border-border/50 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by Leading Brands
          </p>
          <TrustBar logos={PARTNER_LOGOS} speed="normal" />
        </ScrollReveal>
      </div>
    </section>
  );
}
