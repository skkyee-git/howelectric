"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  ShieldCheck,
  IndianRupee,
  Building2,
  Briefcase,
  ShoppingBag,
  Home,
  Fence,
  Laptop,
  Search,
  BarChart3,
  Handshake,
  Wrench,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const VALUE_PROPOSITIONS = [
  {
    icon: TrendingUp,
    title: "Increase Property Value",
    description:
      "EV-ready properties command a 5-10% premium in the market. Future buyers and investors actively seek properties with charging infrastructure.",
  },
  {
    icon: Users,
    title: "Attract Premium Tenants & Buyers",
    description:
      "EV owners are typically higher-income demographics. Offering charging amenities makes your property the preferred choice.",
  },
  {
    icon: ShieldCheck,
    title: "Future-Proof Against Regulations",
    description:
      "RERA EV mandates are coming. Be ahead of compliance requirements and avoid costly retrofitting later.",
  },
  {
    icon: IndianRupee,
    title: "Generate Additional Revenue",
    description:
      "Monetize parking spaces with pay-per-use charging. Create a new revenue stream from existing infrastructure.",
  },
];

const PROPERTY_TYPES = [
  { icon: Home, label: "Residential Complexes" },
  { icon: Briefcase, label: "Commercial Office Spaces" },
  { icon: ShoppingBag, label: "Shopping Malls & Retail" },
  { icon: Building2, label: "Mixed-Use Developments" },
  { icon: Fence, label: "Gated Communities" },
  { icon: Laptop, label: "Co-Working Spaces" },
];

const APPROACH_STEPS = [
  {
    step: 1,
    title: "Site Assessment",
    description:
      "We survey your property's electrical infrastructure, parking layout, and EV demand potential to design the right solution.",
    icon: Search,
  },
  {
    step: 2,
    title: "Demand Modeling",
    description:
      "Data-driven analysis of current and projected EV adoption in your area to determine optimal charger count and type.",
    icon: BarChart3,
  },
  {
    step: 3,
    title: "Vendor Selection",
    description:
      "We shortlist and evaluate hardware vendors, negotiate pricing, and recommend the best fit for your property type and budget.",
    icon: Handshake,
  },
  {
    step: 4,
    title: "Installation Oversight",
    description:
      "Our team manages the entire installation process — from civil work and electrical wiring to commissioning and testing.",
    icon: Wrench,
  },
  {
    step: 5,
    title: "CMS Setup",
    description:
      "We configure the charging management software for billing, user access, monitoring, and reporting — ready for day one.",
    icon: Monitor,
  },
];

/* ─── Page ─── */

export default function RealEstateConsultingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              Real Estate
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            EV charging for{" "}
            <span className="text-orange">real estate developers</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Add EV charging to your properties — increase value, attract
            tenants, and future-proof your portfolio.
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
              className="bg-orange px-6 font-semibold text-white hover:bg-orange/90"
            >
              <Link href="/consulting/book">
                <Building2 className="size-4" />
                Get a Real Estate Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consulting">
                Explore All Services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Why Real Estate Needs EV Charging ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Why EV Charging"
            title="Why real estate needs EV charging"
            subtitle="EV infrastructure is no longer optional. It's a competitive advantage that drives property value, tenant satisfaction, and revenue."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PROPOSITIONS.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
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

      {/* ── Property Types We Serve ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Property Types"
            title="Property types we serve"
            subtitle="Whether you manage a single residential complex or a portfolio of commercial spaces, we tailor our approach to your property type."
          />

          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROPERTY_TYPES.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <motion.div
                  className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-orange/10 text-orange">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-semibold text-foreground">{label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Approach"
            title="Our approach for real estate"
            subtitle="A proven 5-step process that takes you from assessment to a fully operational EV charging setup."
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-orange/40 via-orange/20 to-transparent md:left-8 lg:block" />

            <div className="space-y-12">
              {APPROACH_STEPS.map(({ step, title, description }, idx) => (
                <ScrollReveal key={step} delay={idx * 0.1}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-orange text-lg font-bold text-white shadow-lg shadow-orange/20 md:size-16 md:text-xl">
                      {step}
                    </div>
                    <div className="pt-1 md:pt-3">
                      <h3 className="text-xl font-semibold md:text-2xl">
                        {title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Get a Real Estate Consultation"
          description="Let our experts design a customized EV charging strategy for your property. We handle everything from planning to installation."
          primaryLabel="Get a Real Estate Consultation"
          primaryHref="/consulting/book"
          secondaryLabel="Explore All Services"
          secondaryHref="/consulting"
          variant="dark"
        />
      </div>
    </>
  );
}
