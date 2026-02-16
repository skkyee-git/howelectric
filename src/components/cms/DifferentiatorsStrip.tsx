"use client";

import { motion } from "framer-motion";
import { Radio, Globe, IndianRupee, Package } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const DIFFERENTIATORS = [
  {
    icon: Radio,
    title: "Hardware Agnostic OCPP",
    description:
      "Connect any OCPP 1.6 or 2.0 charger from any manufacturer. No vendor lock-in, ever.",
  },
  {
    icon: Globe,
    title: "India-First UPI & GST",
    description:
      "Native UPI QR payments, automatic GST invoicing, and rupee-first billing built for India.",
  },
  {
    icon: IndianRupee,
    title: "₹500/charger/month",
    description:
      "Start managing your network from just ₹500 per charger per month. No setup fees.",
  },
  {
    icon: Package,
    title: "Bundled with Ecosystem",
    description:
      "Get CMS included free when you buy chargers through our marketplace. Complete solution.",
  },
];

export function DifferentiatorsStrip() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold">
            Why HowElectric CMS
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Built different for the Indian market
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                <Icon className="size-6 text-gold" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
