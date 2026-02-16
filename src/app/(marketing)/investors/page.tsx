"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Car,
  MapPin,
  Percent,
  Lightbulb,
  Wrench,
  Monitor,
  GraduationCap,
  ShoppingBag,
  CheckCircle,
  Rocket,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const MARKET_STATS = [
  {
    icon: BarChart3,
    value: "$10B+",
    label: "India's EV charging market by 2030",
  },
  {
    icon: Car,
    value: "10M+",
    label: "EVs expected on Indian roads by 2030",
  },
  {
    icon: MapPin,
    value: "100K+",
    label: "Charging stations needed",
  },
  {
    icon: Percent,
    value: "30%+",
    label: "Annual market growth rate",
  },
];

const WHAT_WE_BUILT = [
  {
    icon: Lightbulb,
    title: "Consulting",
    stat: "200+ projects",
    description:
      "End-to-end EV charging consulting from feasibility to launch for entrepreneurs, enterprises, and government.",
    gradient: "from-electric-blue/80 to-electric-blue/40",
  },
  {
    icon: Wrench,
    title: "Services",
    stat: "150+ cities",
    description:
      "Professional charger installation, AMC, and emergency services with a certified pan-India installer network.",
    gradient: "from-teal/80 to-teal/40",
  },
  {
    icon: Monitor,
    title: "CMS",
    stat: "200+ stations",
    description:
      "Cloud-based charging management system with OCPP compliance, billing, fleet management, and analytics.",
    gradient: "from-orange/80 to-orange/40",
  },
  {
    icon: GraduationCap,
    title: "Academy",
    stat: "2,000+ certified",
    description:
      "Industry-recognized certification programs training the next generation of EV charging professionals.",
    gradient: "from-purple/80 to-purple/40",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    stat: "Launching 2027",
    description:
      "India's first dedicated B2B marketplace for EV chargers, components, and infrastructure equipment.",
    gradient: "from-rose-500/80 to-rose-500/40",
  },
];

const WHY_INVEST = [
  "India's largest full-stack EV charging platform",
  "Multiple revenue streams across consulting, services, SaaS, training, and marketplace",
  "Strong unit economics with proven customer demand",
  "Government tailwinds (FAME II, PM E-DRIVE)",
  "First-mover advantage in B2B EV infrastructure",
];

/* ─── Page ─── */

export default function InvestorsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-electric-blue/5 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 size-[400px] rounded-full bg-teal/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-electric-blue/10 text-electric-blue border-electric-blue/20">
              Investors
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Invest in India&apos;s{" "}
            <span className="text-electric-blue">EV charging future</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            HowElectric is building India&apos;s end-to-end EV charging
            infrastructure platform. From consulting and installation to SaaS
            and training — we power every layer of the value chain.
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
              className="bg-electric-blue px-6 font-semibold text-white hover:bg-electric-blue/90"
            >
              <Link href="/contact">
                <Mail className="size-4" />
                Contact Us
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">
                Learn About Us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Market Opportunity ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Market Opportunity"
            title="A massive market, still early"
            subtitle="India's EV charging infrastructure is in its infancy — and growing at an unprecedented rate."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {MARKET_STATS.map(({ icon: Icon, value, label }) => (
              <StaggerItem key={label}>
                <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-card">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-electric-blue/10">
                    <Icon className="size-7 text-electric-blue" />
                  </div>
                  <p className="mt-5 text-3xl font-bold text-foreground">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── What We've Built ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Platform"
            title="What we've built"
            subtitle="Five integrated pillars that cover the entire EV charging value chain — from idea to operation."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_BUILT.map(
              ({ icon: Icon, title, stat, description, gradient }) => (
                <StaggerItem key={title}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover">
                    {/* Gradient header */}
                    <div
                      className={`flex h-32 items-center justify-between bg-gradient-to-br px-6 ${gradient}`}
                    >
                      <div className="flex size-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                        <Icon className="size-7 text-white" />
                      </div>
                      <Badge className="border-white/20 bg-white/20 text-white backdrop-blur-sm">
                        {stat}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Why Invest ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Investment Thesis"
            title="Why invest in HowElectric"
            subtitle="We're positioned at the intersection of India's EV adoption curve and critical infrastructure demand."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl space-y-4">
              {WHY_INVEST.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-card"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-electric-blue/10">
                    <CheckCircle className="size-4 text-electric-blue" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Current Status ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-electric-blue/20 bg-electric-blue/5 p-10 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-electric-blue/10">
                <Rocket className="size-8 text-electric-blue" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">
                We&apos;re actively raising our next round
              </h2>
              <p className="mt-3 text-muted-foreground">
                Reach out to learn more about our traction, unit economics, and
                vision for building India&apos;s largest full-stack EV charging
                platform.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-electric-blue px-6 font-semibold text-white hover:bg-electric-blue/90"
                >
                  <Link href="/contact">
                    <Mail className="size-4" />
                    Get in Touch
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">
                    About HowElectric
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Contact Us"
          description="Interested in learning more about HowElectric's growth story and investment opportunity? We'd love to connect."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          secondaryLabel="View Our Services"
          secondaryHref="/services"
          variant="dark"
        />
      </div>
    </>
  );
}
