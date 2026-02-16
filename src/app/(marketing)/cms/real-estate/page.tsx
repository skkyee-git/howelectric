"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  KeyRound,
  SplitSquareVertical,
  UserCheck,
  Gauge,
  CalendarClock,
  LayoutDashboard,
  Building2,
  Briefcase,
  Layers,
  Sofa,
  ShoppingBag,
  Hotel,
  ArrowRight,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FEATURES = [
  {
    icon: KeyRound,
    title: "Resident Access Control",
    description:
      "RFID cards and app-based authentication ensure only authorized residents and tenants can use the chargers.",
  },
  {
    icon: SplitSquareVertical,
    title: "Split Billing",
    description:
      "Property pays the base electricity cost, residents pay per-use. Configurable split ratios for any billing model.",
  },
  {
    icon: UserCheck,
    title: "Visitor Charging Management",
    description:
      "Enable guest charging with time-limited access codes. Track visitor sessions separately for easy reconciliation.",
  },
  {
    icon: Gauge,
    title: "Energy Cost Allocation",
    description:
      "Precise per-unit metering allocates energy costs to individual users. No more flat-rate guesswork or disputes.",
  },
  {
    icon: CalendarClock,
    title: "Occupancy-based Scheduling",
    description:
      "Smart scheduling ensures chargers are available during peak resident hours and open for visitors during off-peak.",
  },
  {
    icon: LayoutDashboard,
    title: "Property Management Dashboard",
    description:
      "A unified view for property managers — charger status, usage reports, billing summaries, and maintenance alerts.",
  },
];

const PROPERTY_TYPES = [
  {
    icon: Building2,
    title: "Residential Societies",
    description: "Gated communities, apartment complexes, and housing societies",
  },
  {
    icon: Briefcase,
    title: "Commercial Offices",
    description: "Corporate parks, IT campuses, and office buildings",
  },
  {
    icon: Layers,
    title: "Mixed-use Developments",
    description: "Integrated townships with residential and commercial spaces",
  },
  {
    icon: Sofa,
    title: "Co-working Spaces",
    description: "Shared office environments with member-based charging access",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Malls",
    description: "Retail destinations offering charging as a value-add amenity",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description: "Guest charging as a premium amenity for hotel and resort properties",
  },
];

export default function RealEstatePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-dark-gray py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-[300px] rounded-full bg-gold/5 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-gold/10 text-gold">
                For Real Estate
              </Badge>
            </motion.div>

            <motion.h1
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Smart EV charging management{" "}
              <span className="text-gold">for properties</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Manage charger access for residents and tenants, handle billing
              splits between property and users, and increase your property
              value with smart EV infrastructure.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy hover:bg-gold/90"
              >
                <Link href="/cms/demo">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/consulting/real-estate">
                  Real Estate Consulting
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Real Estate Needs CMS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                The Opportunity
              </p>
              <h2 className="mt-3">
                Why real estate needs a CMS
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                EV charging is no longer optional for modern properties. Manage
                charger access for residents and tenants, handle billing splits
                between property and users, and increase your property value —
                all from a single dashboard.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Residents expect EV charging as a standard amenity",
                  "Billing disputes arise without automated metering",
                  "Unauthorized usage drains property electricity budgets",
                  "Properties with EV charging command 5-10% higher rents",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <Zap className="size-3 text-gold" />
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.1}>
              <div className="rounded-3xl border border-border/50 bg-light-gray p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "5-10%", label: "Higher property value", highlight: true },
                    { value: "Zero", label: "Billing disputes", highlight: true },
                    { value: "100%", label: "Access controlled", highlight: true },
                    { value: "24/7", label: "Automated management", highlight: true },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <p className="text-2xl font-bold text-gold">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Key Features"
            title="Built for property management"
            subtitle="Everything a property manager needs to deploy, manage, and monetize EV charging across their portfolio."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="group h-full rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Property Types */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Property Types"
            title="For every kind of property"
            subtitle="HowElectric CMS adapts to your property type with purpose-built configurations."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROPERTY_TYPES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-light-gray p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-sm">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Recommended Plan */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Recommended Plans"
            title="Choose the right plan for your portfolio"
            subtitle="Single property or multi-site portfolio — we have you covered."
          />

          <ScrollReveal>
            <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
              {/* Single-Site */}
              <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Single-Site</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  For individual properties
                </p>
                <p className="mt-4 text-2xl font-bold text-gold">₹2,999<span className="text-base font-normal text-muted-foreground">/mo</span></p>
                <ul className="mt-4 space-y-2">
                  {[
                    "One property location",
                    "Resident access control",
                    "Split billing setup",
                    "Usage reports",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="size-3 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="mt-6 w-full"
                >
                  <Link href="/cms/demo">Get Started</Link>
                </Button>
              </div>

              {/* Multi-Site */}
              <div className="rounded-2xl border-2 border-gold/30 bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Multi-Site</h3>
                  <Badge className="bg-gold/10 text-gold">Recommended</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  For property portfolios
                </p>
                <p className="mt-4 text-2xl font-bold text-gold">₹7,999<span className="text-base font-normal text-muted-foreground">/mo</span></p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Unlimited property locations",
                    "Central portfolio dashboard",
                    "Cross-property analytics",
                    "Priority support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="size-3 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full bg-gold text-navy hover:bg-gold/90"
                >
                  <Link href="/cms/demo">
                    Start Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Make your property EV-ready"
            description="Join leading real estate developers who trust HowElectric CMS to manage EV charging across their properties. Start with a free trial today."
            primaryLabel="Start Free Trial"
            primaryHref="/cms/demo"
            secondaryLabel="Real Estate Consulting"
            secondaryHref="/consulting/real-estate"
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
}
