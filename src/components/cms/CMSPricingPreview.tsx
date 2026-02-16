"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TIERS = [
  {
    name: "Starter",
    price: "₹500",
    period: "/mo per charger",
    features: [
      "Up to 10 chargers",
      "Real-time monitoring",
      "Basic analytics dashboard",
    ],
    cta: "Start Free Trial",
    href: "/cms/pricing",
    highlighted: false,
  },
  {
    name: "Business",
    price: "₹1,500",
    period: "/mo per charger",
    features: [
      "Unlimited chargers",
      "UPI & card payments",
      "Revenue sharing & GST invoicing",
    ],
    cta: "Start Free Trial",
    href: "/cms/pricing",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "White-label branding",
      "Dedicated account manager",
      "Custom API integrations",
    ],
    cta: "Contact Sales",
    href: "/consulting/book",
    highlighted: false,
  },
  {
    name: "Bundled",
    price: "Included",
    period: "with marketplace",
    badge: "Best Value",
    features: [
      "Free with charger purchase",
      "All Business features",
      "Priority onboarding support",
    ],
    cta: "Explore Marketplace",
    href: "/marketplace",
    highlighted: true,
  },
];

export function CMSPricingPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold">
            Pricing
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted-foreground">
            No hidden fees, no long-term contracts. Start free and scale as you
            grow.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map(
            (
              { name, price, period, badge, features, cta, href, highlighted },
              i
            ) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover ${
                  highlighted
                    ? "border-gold ring-2 ring-gold/30"
                    : "border-border/50"
                }`}
              >
                {badge && (
                  <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gold text-navy">
                    {badge}
                  </Badge>
                )}

                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="mt-3">
                  <span className="text-3xl font-bold">{price}</span>
                  {period && (
                    <span className="ml-1 text-sm text-muted-foreground">
                      {period}
                    </span>
                  )}
                </div>

                <ul className="mt-5 flex-1 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className={`mt-6 w-full ${
                    highlighted
                      ? "bg-gold font-semibold text-navy hover:bg-gold/90"
                      : ""
                  }`}
                  variant={highlighted ? "default" : "outline"}
                >
                  <Link href={href}>{cta}</Link>
                </Button>
              </motion.div>
            )
          )}
        </div>

        {/* Full comparison link */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/cms/pricing"
            className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold/80"
          >
            See full comparison
            <ArrowRight className="size-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
