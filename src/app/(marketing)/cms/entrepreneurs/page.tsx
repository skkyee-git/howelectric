"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  IndianRupee,
  Activity,
  Smartphone,
  BarChart3,
  BadgeCheck,
  ArrowRight,
  TrendingUp,
  Zap,
  Star,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FEATURES = [
  {
    icon: Rocket,
    title: "Easy Setup",
    description:
      "Go live in 1 day. No complex onboarding or lengthy integration cycles. Connect your chargers and start earning immediately.",
  },
  {
    icon: IndianRupee,
    title: "Automated Billing",
    description:
      "Collect revenue while you sleep. UPI, cards, and wallets with GST-compliant invoicing handled automatically.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Know instantly if a charger goes down. Live status dashboards and proactive alerts keep your network healthy.",
  },
  {
    icon: Smartphone,
    title: "Driver App Listing",
    description:
      "Get discovered by EV drivers across India. Your stations appear on the HowElectric driver app from day one.",
  },
  {
    icon: BarChart3,
    title: "Revenue Reports",
    description:
      "Track your business growth with detailed analytics. Revenue, utilization, and session data at your fingertips.",
  },
  {
    icon: BadgeCheck,
    title: "Low Cost",
    description:
      "Start free, scale as you grow. No upfront software costs — pay only when your business succeeds.",
  },
];

export default function EntrepreneursPage() {
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
                For Entrepreneurs
              </Badge>
            </motion.div>

            <motion.h1
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Launch your charging business with the{" "}
              <span className="text-gold">right software</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              HowElectric CMS gives first-time charge point operators everything
              they need to manage, monitor, and monetize their EV charging
              stations from day one.
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
                <Link href="/consulting">Get Consulting First</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Entrepreneurs Need CMS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                The Challenge
              </p>
              <h2 className="mt-3">
                Why entrepreneurs need a CMS
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                You can&apos;t manage chargers manually once you scale beyond
                2-3 stations. A CMS automates billing, monitoring, and customer
                management so you can focus on growing your business instead of
                fighting operational fires.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Manual monitoring becomes impossible at scale",
                  "Revenue leakage from untracked sessions",
                  "No visibility into charger health or uptime",
                  "Drivers can't discover your stations",
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
                    { label: "Without CMS", value: "2-3", unit: "stations max", negative: true },
                    { label: "With CMS", value: "50+", unit: "stations easy", negative: false },
                    { label: "Manual billing", value: "40%", unit: "revenue lost", negative: true },
                    { label: "Auto billing", value: "99%", unit: "collected", negative: false },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <p className="text-xs font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                      <p
                        className={`mt-1 text-2xl font-bold ${
                          stat.negative ? "text-destructive" : "text-gold"
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.unit}
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
            title="Everything you need to launch and grow"
            subtitle="Purpose-built tools for first-time charge point operators who want to move fast."
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

      {/* Success Story */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-dark-gray p-8 md:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gold/15 blur-[80px]" />

              <div className="relative">
                <div className="flex items-center gap-2">
                  <Star className="size-5 text-gold" />
                  <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                    Success Story
                  </p>
                </div>
                <blockquote className="mt-6 max-w-3xl text-xl font-medium leading-relaxed text-white md:text-2xl">
                  &ldquo;First-time CPO launched 5 stations with HowElectric
                  CMS — achieved 85% uptime and ₹3.2L monthly revenue within 6
                  months.&rdquo;
                </blockquote>
                <div className="mt-8 flex flex-wrap gap-6">
                  {[
                    { value: "5", label: "Stations" },
                    { value: "85%", label: "Uptime" },
                    { value: "₹3.2L", label: "Monthly Revenue" },
                    { value: "6", label: "Months" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-gold">
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recommended Plan */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Recommended Plan"
            title="Start with Single-Site"
            subtitle="The perfect plan for entrepreneurs launching their first charging stations."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl">
              <div className="overflow-hidden rounded-3xl border-2 border-gold/30 bg-white shadow-lg">
                <div className="bg-gold/5 px-8 py-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <Badge className="mb-2 bg-gold/10 text-gold">
                        Most Popular
                      </Badge>
                      <h3 className="text-2xl font-bold">Single-Site Plan</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gold">₹2,999</p>
                      <p className="text-sm text-muted-foreground">/month</p>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-6">
                  <div className="space-y-3">
                    {[
                      "Unlimited charger connections at one site",
                      "Automated billing with UPI & card support",
                      "Real-time monitoring dashboard",
                      "Driver app listing included",
                      "GST-compliant invoicing",
                      "Email & chat support",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                          <BadgeCheck className="size-3 text-gold" />
                        </div>
                        <p className="text-sm text-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 rounded-xl bg-light-gray p-4">
                    <TrendingUp className="size-5 text-gold" />
                    <p className="text-sm text-muted-foreground">
                      Upgrade to <span className="font-semibold text-foreground">Multi-Site</span> when
                      you&apos;re ready to expand to multiple locations.
                    </p>
                  </div>
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
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Ready to launch your charging business?"
            description="Join hundreds of entrepreneurs who chose HowElectric CMS to power their EV charging stations. Start free, scale with confidence."
            primaryLabel="Start Free Trial"
            primaryHref="/cms/demo"
            secondaryLabel="Get Consulting First"
            secondaryHref="/consulting"
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
}
