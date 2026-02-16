"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  Plug,
  ShieldCheck,
  Smartphone,
  TestTube,
  CheckCircle2,
  ArrowRight,
  Zap,
  Star,
  Settings,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const INCLUDED = [
  {
    icon: Search,
    title: "Site Survey & Electrical Assessment",
    description:
      "Our certified electricians inspect your home's wiring, panel capacity, and optimal charger placement before any work begins.",
  },
  {
    icon: Plug,
    title: "Charger Mounting & Wiring",
    description:
      "Professional wall-box installation with concealed or surface wiring, routed cleanly to your parking spot.",
  },
  {
    icon: Zap,
    title: "Dedicated Circuit Installation",
    description:
      "A new dedicated circuit from your distribution board ensures safe, reliable power delivery to your charger.",
  },
  {
    icon: ShieldCheck,
    title: "Earth Leakage Protection",
    description:
      "RCCB/ELCB protection installed per IS standards to safeguard against electrical faults and ensure user safety.",
  },
  {
    icon: Smartphone,
    title: "Smart Charger Configuration",
    description:
      "Wi-Fi setup, app pairing, scheduled charging, and energy monitoring configured and tested on your device.",
  },
  {
    icon: TestTube,
    title: "Post-Installation Testing & Handover",
    description:
      "Full electrical testing, safety certification, and a walkthrough so you're confident using your charger from day one.",
  },
];

const PROCESS = [
  {
    step: 1,
    title: "Book Survey",
    description:
      "Schedule a free site survey online or by phone. Pick a date and time that works for you.",
  },
  {
    step: 2,
    title: "Site Visit & Quote",
    description:
      "Our electrician assesses your home and provides a detailed, transparent quote within 24 hours.",
  },
  {
    step: 3,
    title: "Installation Day",
    description:
      "Professional installation completed in 3-5 hours. Clean, tidy work with minimal disruption.",
  },
  {
    step: 4,
    title: "Testing & Handover",
    description:
      "Full electrical testing, safety certification, and a hands-on walkthrough of your new charger.",
  },
];

const PACKAGES = [
  {
    name: "Basic",
    price: "\u20B98,000 \u2013 \u20B915,000",
    description: "Wall-box + standard wiring",
    icon: Plug,
    features: [
      "Wall-box charger installation",
      "Standard surface wiring (up to 10m)",
      "MCB & RCCB protection",
      "Basic testing & handover",
      "1-year workmanship warranty",
    ],
  },
  {
    name: "Premium",
    price: "\u20B915,000 \u2013 \u20B930,000",
    description: "Dedicated circuit + smart charger setup + load balancing",
    icon: Star,
    popular: true,
    features: [
      "Everything in Basic",
      "Dedicated circuit from DB",
      "Concealed wiring option",
      "Smart charger app configuration",
      "Load balancing setup",
      "Energy monitoring activation",
      "2-year workmanship warranty",
    ],
  },
  {
    name: "Custom",
    price: "Custom Quote",
    description: "Multi-car garage, solar integration, and more",
    icon: Settings,
    features: [
      "Everything in Premium",
      "Multi-charger installations",
      "Solar/inverter integration",
      "Panel upgrade if required",
      "Custom cable routing",
      "Priority scheduling",
      "3-year workmanship warranty",
    ],
  },
];

/* ─── Page ─── */

export default function ResidentialInstallationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-purple/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-purple/10 text-purple border-purple/20">
              Residential
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            EV charging{" "}
            <span className="text-purple">for your home</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Professional home charger installation — from wall-box to dedicated
            circuit, done right the first time.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: DURATION.slow, ease: EASE.out }}
          >
            <Button
              asChild
              size="lg"
              className="bg-purple px-6 font-semibold text-white hover:bg-purple/90"
            >
              <Link href="/services/request">
                <Home className="size-4" />
                Book Home Installation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What's Included"
            title="Everything in your installation"
            subtitle="A complete, professional home charger installation covering every detail from assessment to handover."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-purple/10 text-purple transition-colors group-hover:bg-purple group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="Simple 4-step process"
            subtitle="From booking to charging — we make home EV charger installation straightforward and hassle-free."
          />

          <div className="mx-auto max-w-3xl">
            {PROCESS.map(({ step, title, description }, index) => (
              <ScrollReveal key={step} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Connector line */}
                  {index < PROCESS.length - 1 && (
                    <div className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-purple/20" />
                  )}

                  {/* Step number */}
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-purple text-lg font-bold text-white">
                    {step}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-muted-foreground">{description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Packages"
            title="Choose your installation package"
            subtitle="Transparent pricing with no hidden costs. Every package includes professional installation by certified electricians."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map(
              ({ name, price, description, icon: Icon, popular, features }) => (
                <StaggerItem key={name}>
                  <motion.div
                    className={`group relative rounded-2xl border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover ${
                      popular
                        ? "border-purple ring-2 ring-purple/20"
                        : "border-border"
                    }`}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 24 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: DURATION.normal, ease: EASE.out }}
                  >
                    {popular && (
                      <div className="absolute -top-3 left-6">
                        <Badge className="bg-purple text-white">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-purple/10 text-purple">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {description}
                    </p>

                    <div className="mt-4 text-2xl font-bold text-purple">
                      {price}
                    </div>

                    <ul className="mt-6 space-y-3">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-purple" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      size="lg"
                      className={`mt-8 w-full font-semibold ${
                        popular
                          ? "bg-purple text-white hover:bg-purple/90"
                          : "bg-purple/10 text-purple hover:bg-purple/20"
                      }`}
                    >
                      <Link href="/services/request">
                        {name === "Custom" ? "Get Custom Quote" : "Get Started"}
                      </Link>
                    </Button>
                  </motion.div>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Book Home Installation"
          description="Schedule a free site survey and get a detailed installation quote within 24 hours. Professional, certified, hassle-free."
          primaryLabel="Book Home Installation"
          primaryHref="/services/request"
          secondaryLabel="Explore All Services"
          secondaryHref="/services"
          variant="dark"
        />
      </div>
    </>
  );
}
