"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  Rocket,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const TIERS = [
  {
    name: "Self-Serve",
    tagline: "DIY with our tools",
    price: "Free",
    priceNote: "No credit card required",
    icon: Sparkles,
    features: [
      "ROI Calculator",
      "Subsidy Navigator",
      "Charger Recommendation Quiz",
      "Basic Business Plan Template",
    ],
    cta: "Start Free",
    href: "/consulting/tools",
    popular: false,
  },
  {
    name: "Managed",
    tagline: "Guided by experts",
    price: "₹25K – ₹2L",
    priceNote: "Based on project scope",
    icon: Rocket,
    features: [
      "Dedicated EV Consultant",
      "Custom Feasibility Report",
      "Site Survey & Power Audit",
      "Vendor Shortlisting & Negotiation",
    ],
    cta: "Book Consultation",
    href: "/consulting/book",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "Full-scale deployment",
    price: "₹5L+",
    priceNote: "Custom pricing for scale",
    icon: Building2,
    features: [
      "End-to-End Project Management",
      "Multi-Site Network Planning",
      "Government Liaison & Subsidies",
      "CMS Integration & Training",
    ],
    cta: "Contact Sales",
    href: "/consulting/enterprise",
    popular: false,
  },
];

export function TierCards() {
  return (
    <section className="overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            Consulting Tiers
          </p>
          <h2 className="mt-3">Choose your level of support</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From free tools for self-starters to enterprise-grade deployment
            planning — we scale with your ambition.
          </p>
        </ScrollReveal>

        {/* Tier cards container */}
        <div className="mt-16 rounded-[2rem] bg-gradient-to-br from-orange/10 via-orange/5 to-transparent p-4 sm:p-6 lg:p-8">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <Badge className="border-0 bg-orange px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-orange/25">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div
                  className={`flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover lg:p-8 ${
                    tier.popular
                      ? "ring-2 ring-orange/30"
                      : "ring-1 ring-border/50"
                  }`}
                >
                  {/* Icon + Name */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-10 items-center justify-center rounded-xl ${
                        tier.popular
                          ? "bg-orange/15"
                          : "bg-electric-blue/10"
                      }`}
                    >
                      <tier.icon
                        className={`size-5 ${
                          tier.popular
                            ? "text-orange"
                            : "text-electric-blue"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{tier.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {tier.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-6 border-t border-border/50 pt-6">
                    <p className="text-3xl font-bold text-foreground">
                      {tier.price}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {tier.priceNote}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Check
                          className={`mt-0.5 size-4 shrink-0 ${
                            tier.popular ? "text-orange" : "text-green"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8">
                    <Button
                      asChild
                      size="lg"
                      className={`w-full font-semibold ${
                        tier.popular
                          ? "bg-orange text-white hover:bg-orange/90"
                          : "bg-navy text-white hover:bg-navy/90"
                      }`}
                    >
                      <Link href={tier.href}>
                        {tier.cta}
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
