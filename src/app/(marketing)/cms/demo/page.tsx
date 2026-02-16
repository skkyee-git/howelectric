"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  LayoutDashboard,
  CreditCard,
  Cable,
  Smartphone,
  BarChart3,
  MessageCircle,
  Building2,
  Activity,
  Clock,
  IndianRupee,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";

const FREE_TRIAL_FEATURES = [
  "14-day full access",
  "Up to 3 chargers",
  "All features included",
  "Setup in minutes",
] as const;

const GUIDED_DEMO_FEATURES = [
  "Personalized to your use case",
  "Live Q&A",
  "Custom pricing discussion",
  "No obligation",
] as const;

const DEMO_HIGHLIGHTS = [
  { icon: LayoutDashboard, label: "Dashboard walkthrough" },
  { icon: CreditCard, label: "Billing & payment setup" },
  { icon: Cable, label: "OCPP charger connection" },
  { icon: Smartphone, label: "Driver app preview" },
  { icon: BarChart3, label: "Analytics & reports" },
  { icon: MessageCircle, label: "Q&A session" },
] as const;

const TRUST_STATS = [
  { value: "200+", label: "Stations", icon: Building2 },
  { value: "48,000+", label: "Sessions/month", icon: Activity },
  { value: "99.5%", label: "Uptime", icon: Clock },
  { value: "\u20B92Cr+", label: "Processed/month", icon: IndianRupee },
] as const;

export default function CMSDemoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" as const, bounce: 0.3 }}
          >
            <Badge
              variant="secondary"
              className="mb-5 bg-gold/10 text-gold border border-gold/20"
            >
              Free Trial
            </Badge>
            <h1>See HowElectric CMS in action</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Start your 14-day free trial or book a personalized demo with our
              team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Two Paths ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Choose your path"
            subtitle="Start instantly on your own or get a guided walkthrough from our team."
            badge="Get Started"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Free Trial Card */}
            <ScrollReveal>
              <div className="flex h-full flex-col rounded-2xl border-2 border-gold/20 bg-white p-8 shadow-card lg:p-10">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                  <Zap className="size-6 text-gold" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">Free Trial</h3>
                <p className="mt-2 text-muted-foreground">
                  Start instantly, no credit card required
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {FREE_TRIAL_FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-full bg-gold text-navy font-semibold hover:bg-gold/90"
                >
                  <Link href="/cms/demo">
                    Start Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Guided Demo Card */}
            <ScrollReveal delay={0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-white p-8 shadow-card lg:p-10">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                  <Users className="size-6 text-gold" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">Guided Demo</h3>
                <p className="mt-2 text-muted-foreground">
                  30-min walkthrough with our team
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {GUIDED_DEMO_FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="mt-8 w-full border-gold/30 text-gold hover:bg-gold/10"
                >
                  <Link href="/consulting/book">
                    Book a Demo
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── What You'll See ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="What you'll see in the demo"
            subtitle="A comprehensive look at every part of the HowElectric CMS platform."
            badge="Demo Preview"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-white p-5 shadow-card">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-5 text-gold" />
                  </div>
                  <p className="font-semibold">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <Badge
              variant="secondary"
              className="mb-5 bg-gold/10 text-gold border border-gold/20"
            >
              Trusted Platform
            </Badge>
            <h2 className="font-display">
              Used by 200+ charging stations across India
            </h2>
          </ScrollReveal>

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_STATS.map(({ value, label, icon: Icon }) => (
              <StaggerItem key={label}>
                <div className="rounded-2xl border border-border/50 bg-white p-6 text-center shadow-card">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-6 text-gold" />
                  </div>
                  <p className="mt-4 text-2xl font-bold text-gold">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Start your free trial now"
            description="No credit card required. Get your first charger online in under 15 minutes. Full access for 14 days."
            primaryLabel="Start Free Trial Now"
            primaryHref="/cms/demo"
            secondaryLabel="Talk to Sales"
            secondaryHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
