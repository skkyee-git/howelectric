"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package,
  Check,
  ArrowRight,
  Sparkles,
  Building2,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const BUNDLES = [
  {
    name: "Starter Bundle",
    tagline: "Perfect for homes & small businesses",
    price: "₹3–5 Lakhs",
    savings: "Save up to ₹45,000",
    icon: Sparkles,
    items: [
      "1–2 AC Chargers (7.4 kW)",
      "HowElectric CMS (3-month trial)",
      "Basic Installation",
      "1-Year AMC Included",
    ],
    gradient: "from-teal/10 via-teal/5 to-transparent",
    border: "border-teal/20",
    accentClass: "text-teal",
    btnClass: "bg-teal text-navy hover:bg-teal/90",
  },
  {
    name: "Business Bundle",
    tagline: "For commercial & residential complexes",
    price: "₹8–15 Lakhs",
    savings: "Save up to ₹1.5 Lakhs",
    icon: Building2,
    popular: true,
    items: [
      "4–6 Mixed Chargers (AC + DC)",
      "HowElectric CMS (12-month sub)",
      "Full Installation + Consultation",
      "3-Year AMC Included",
    ],
    gradient: "from-electric-blue/10 via-electric-blue/5 to-transparent",
    border: "border-electric-blue/20",
    accentClass: "text-electric-blue",
    btnClass: "bg-electric-blue text-white hover:bg-electric-blue/90",
  },
  {
    name: "Premium Bundle",
    tagline: "For fleets & highway corridors",
    price: "₹25–50 Lakhs",
    savings: "Save up to ₹5 Lakhs",
    icon: Trophy,
    items: [
      "8–12 Mixed Chargers (up to 150kW)",
      "HowElectric CMS (24-month sub)",
      "White-Glove Installation",
      "5-Year AMC + Priority Support",
    ],
    gradient: "from-orange/10 via-orange/5 to-transparent",
    border: "border-orange/20",
    accentClass: "text-orange",
    btnClass: "bg-orange text-white hover:bg-orange/90",
  },
];

export function FeaturedBundles() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">
            Complete Station Packages
          </p>
          <h2 className="mt-3">Buy everything together & save</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Charger + CMS + Installation + AMC in one package. Pre-configured
            bundles designed for every scale.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {BUNDLES.map((bundle, i) => (
            <motion.div
              key={bundle.name}
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
              {bundle.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <Badge className="border-0 bg-electric-blue px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-electric-blue/25">
                    Best Value
                  </Badge>
                </div>
              )}

              <div
                className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover ${bundle.border}`}
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-br ${bundle.gradient} p-6`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white shadow-sm">
                      <bundle.icon
                        className={`size-5 ${bundle.accentClass}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{bundle.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {bundle.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-foreground">
                      {bundle.price}
                    </p>
                    <p
                      className={`mt-1 text-xs font-semibold ${bundle.accentClass}`}
                    >
                      {bundle.savings}
                    </p>
                  </div>
                </div>

                {/* Items */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    What&apos;s Included
                  </p>
                  <ul className="flex flex-1 flex-col gap-3">
                    {bundle.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-green" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-3">
                    <Button
                      asChild
                      size="lg"
                      className={`flex-1 font-semibold ${bundle.btnClass}`}
                    >
                      <Link href="/marketplace/bundles">
                        View Bundle
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Need a custom configuration?{" "}
            <Link
              href="/consulting/book"
              className="font-semibold text-electric-blue underline-offset-4 hover:underline"
            >
              Talk to a specialist
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
