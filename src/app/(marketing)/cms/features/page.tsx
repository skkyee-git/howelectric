"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Plug,
  CreditCard,
  Users,
  BarChart3,
  Clock,
  Radio,
  Palette,
  MapPin,
  Bell,
  TrendingUp,
  Code,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Real-Time Dashboard",
    description:
      "Live charger status, energy metrics, and instant alerts — all in one view.",
  },
  {
    icon: Plug,
    title: "OCPP 1.6J & 2.0.1",
    description:
      "Universal charger protocol support for hardware-agnostic flexibility.",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description:
      "UPI, cards, wallets, and auto-invoicing with GST compliance built in.",
  },
  {
    icon: Users,
    title: "User Management",
    description:
      "Roles, RFID cards, and driver accounts with granular access control.",
  },
  {
    icon: BarChart3,
    title: "Energy Analytics",
    description:
      "kWh tracking, load curves, and peak analysis to optimize energy usage.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description:
      "Off-peak charging, load balancing, and queue management for efficiency.",
  },
  {
    icon: Radio,
    title: "Remote Operations",
    description:
      "Start/stop, reboot, and firmware update — all remotely from your desk.",
  },
  {
    icon: Palette,
    title: "White-Label Ready",
    description:
      "Your branding on the driver app and management portal, fully customized.",
  },
  {
    icon: MapPin,
    title: "Multi-Site Control",
    description:
      "Manage all locations from one dashboard with site-level granularity.",
  },
  {
    icon: Bell,
    title: "Alerting & Notifications",
    description:
      "SMS, email, and push alerts for downtime, errors, and session events.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Reports",
    description:
      "Daily, weekly, and monthly revenue breakdowns with export options.",
  },
  {
    icon: Code,
    title: "API & Integrations",
    description:
      "REST API, webhooks, and third-party connectors for seamless automation.",
  },
] as const;

export default function CMSFeaturesPage() {
  return (
    <>
      {/* ── Mini Hero ── */}
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
              Platform Features
            </Badge>
            <h1>
              Every feature you need to run your charging network
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              From real-time monitoring to automated billing and analytics,
              HowElectric CMS gives you the complete toolkit to launch, manage,
              and scale your EV charging business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy font-semibold hover:bg-gold/90"
              >
                <Link href="/cms/demo">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cms/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Feature Grid (3x4) ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Everything in one platform"
            subtitle="12 core modules that cover every aspect of charging network operations — no bolt-ons, no hidden extras."
            badge="Core Modules"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="group relative rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all hover:shadow-card-hover lg:p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Ready to see it in action?"
            description="Start your free trial today. No credit card required. Set up your first charger in under 10 minutes."
            primaryLabel="Start Free Trial"
            primaryHref="/cms/demo"
            secondaryLabel="Talk to Sales"
            secondaryHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
