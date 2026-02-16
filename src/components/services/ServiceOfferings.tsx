"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  Shield,
  AlertTriangle,
  ArrowRight,
  Building2,
  Truck,
  Home,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const SERVICES = [
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    description:
      "End-to-end installation by certified professionals — site survey, electrical work, charger mounting, CMS setup, and final commissioning.",
    price: "₹10K – ₹50K",
    priceNote: "Based on complexity",
    href: "/services/installation",
    features: ["Site Survey", "Electrical Work", "CMS Pre-Configuration", "Testing & Handover"],
    gradient: "from-purple/15 to-purple/5",
    iconColor: "text-purple",
  },
  {
    icon: Shield,
    title: "Annual Maintenance (AMC)",
    description:
      "Preventive maintenance, remote monitoring via CMS, and priority on-site support to keep your stations running at peak performance.",
    price: "₹8K – ₹25K",
    priceNote: "Per station per year",
    href: "/services/amc",
    features: ["Preventive Visits", "Remote Monitoring", "Priority Response", "Parts Coverage"],
    gradient: "from-teal/15 to-teal/5",
    iconColor: "text-teal",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Support",
    description:
      "24/7 helpline with guaranteed response times. Remote diagnostics first, on-site dispatch when needed — minimizing downtime.",
    price: "Included",
    priceNote: "With AMC plans",
    href: "/services/emergency",
    features: ["24/7 Helpline", "Remote Diagnostics", "4-Hour SLA", "On-Site Dispatch"],
    gradient: "from-orange/15 to-orange/5",
    iconColor: "text-orange",
  },
];

const USE_CASES = [
  { icon: Home, title: "Residential", href: "/services/residential" },
  { icon: Building2, title: "Commercial", href: "/services/commercial" },
  { icon: Truck, title: "Fleet Depots", href: "/services/fleet" },
];

export function ServiceOfferings() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple">
            Our Services
          </p>
          <h2 className="mt-3">Everything after the purchase</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From installation to lifetime maintenance — we handle the field work
            so you can focus on growing your business.
          </p>
        </ScrollReveal>

        {/* Service cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:p-8"
              >
                <div
                  className={`mb-5 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}
                >
                  <service.icon className={`size-6 ${service.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold transition-colors group-hover:text-purple">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <div
                      key={f}
                      className="rounded-lg bg-light-gray px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {f}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mt-5 flex items-end justify-between border-t border-border/50 pt-5">
                  <div>
                    <p className="text-xl font-bold text-foreground">
                      {service.price}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {service.priceNote}
                    </p>
                  </div>
                  <div className="flex size-8 items-center justify-center rounded-full bg-purple/10 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowRight className="size-3.5 text-purple" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Use case pills */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            We service all property types:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {USE_CASES.map((uc) => (
              <Link
                key={uc.title}
                href={uc.href}
                className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <uc.icon className="size-4 text-purple" />
                {uc.title}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
