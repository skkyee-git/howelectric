"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Truck,
  MapPin,
  ShieldCheck,
  Globe,
  Clock,
  Award,
  Settings,
  IndianRupee,
  ArrowRight,
  ClipboardList,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const INSTALLATION_TYPES = [
  {
    icon: Home,
    title: "Residential",
    description: "Home charger installation",
    href: "/services/residential",
    gradient: "from-purple/10 to-purple/5",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Office, mall & retail charging",
    href: "/services/commercial",
    gradient: "from-purple/10 to-purple/5",
  },
  {
    icon: Truck,
    title: "Fleet Depots",
    description: "Multi-bay depot infrastructure",
    href: "/services/fleet",
    gradient: "from-purple/10 to-purple/5",
  },
  {
    icon: MapPin,
    title: "Public Stations",
    description: "Highway & urban charging stations",
    href: "/services/public",
    gradient: "from-purple/10 to-purple/5",
  },
];

const WHY_HOWELECTRIC = [
  {
    icon: ShieldCheck,
    title: "Certified Technicians",
    description:
      "Every installer is trained and certified through the HowElectric Academy to handle all major charger brands.",
  },
  {
    icon: Globe,
    title: "Pan-India Coverage (150+ Cities)",
    description:
      "From metro cities to tier-2 towns, our installer network spans across India for convenient, local service.",
  },
  {
    icon: Clock,
    title: "48-Hour Quote Turnaround",
    description:
      "Submit a request and receive a detailed, transparent installation quote within 48 hours.",
  },
  {
    icon: Award,
    title: "1-Year Installation Warranty",
    description:
      "Every installation comes with a comprehensive one-year workmanship warranty for peace of mind.",
  },
  {
    icon: Settings,
    title: "Post-Install CMS Setup Included",
    description:
      "We configure your charging management system, including user access, billing, and monitoring dashboards.",
  },
  {
    icon: IndianRupee,
    title: "Fixed Transparent Pricing",
    description:
      "No hidden charges. The quote you receive is the price you pay, with every line item clearly explained.",
  },
];

const PROCESS = [
  {
    step: 1,
    title: "Request Quote",
    description:
      "Tell us about your installation needs — location, charger type, and number of units. It takes under 2 minutes.",
  },
  {
    step: 2,
    title: "Site Survey",
    description:
      "A certified technician visits your site to assess electrical infrastructure, placement, and any special requirements.",
  },
  {
    step: 3,
    title: "Installation",
    description:
      "Professional installation by our certified team, following manufacturer specifications and safety standards.",
  },
  {
    step: 4,
    title: "Testing & Handover",
    description:
      "Comprehensive electrical testing, CMS configuration, and a hands-on walkthrough before sign-off.",
  },
];

/* ─── Page ─── */

export default function InstallationPage() {
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
              Installation Services
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Professional EV charger installation{" "}
            <span className="text-purple">across India</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            From home wall-boxes to highway fast-chargers — our certified
            technicians handle every type of installation.
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
                <ClipboardList className="size-4" />
                Request Installation Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services/find-installer">
                Find an Installer
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Installation Types ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Installation Types"
            title="Every type of EV charger installation"
            subtitle="Whether it's a single home charger or a 50-bay fleet depot, we have the expertise and network to deliver."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2">
            {INSTALLATION_TYPES.map(
              ({ icon: Icon, title, description, href, gradient }) => (
                <StaggerItem key={title}>
                  <Link href={href} className="block">
                    <motion.div
                      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover"
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 24 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: DURATION.normal, ease: EASE.out }}
                    >
                      {/* Gradient accent */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                      />

                      <div className="relative z-10">
                        <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-purple/10 text-purple transition-colors group-hover:bg-purple group-hover:text-white">
                          <Icon className="size-7" />
                        </div>

                        <h3 className="text-2xl font-bold">{title}</h3>
                        <p className="mt-2 text-muted-foreground">
                          {description}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple">
                          Learn more
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Why HowElectric ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Why HowElectric"
            title="Why choose HowElectric installation"
            subtitle="Industry-leading standards, transparent pricing, and a network of certified professionals you can trust."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_HOWELECTRIC.map(({ icon: Icon, title, description }) => (
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
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Process"
            title="Simple 4-step process"
            subtitle="From your first request to a fully operational charger — we keep it straightforward and transparent."
          />

          <div className="mx-auto max-w-3xl">
            {PROCESS.map(({ step, title, description }, index) => (
              <ScrollReveal key={step} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {index < PROCESS.length - 1 && (
                    <div className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-purple/20" />
                  )}

                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-purple text-lg font-bold text-white">
                    {step}
                  </div>

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

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Ready to install your EV charger?"
          description="Submit an installation request and receive a detailed, transparent quote within 48 hours."
          primaryLabel="Request Installation Quote"
          primaryHref="/services/request"
          variant="dark"
        />
      </div>
    </>
  );
}
