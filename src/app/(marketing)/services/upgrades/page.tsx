"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  HardDrive,
  BatteryCharging,
  ArrowLeftRight,
  CheckCircle2,
  ArrowRight,
  ArrowUpCircle,
  Timer,
  Smartphone,
  ShieldCheck,
  Smile,
  TrendingUp,
  Scale,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const UPGRADE_TYPES = [
  {
    icon: Download,
    title: "Firmware Updates",
    description:
      "Stay current with the latest OCPP compliance, security patches, bug fixes, new payment methods, and improved user experience.",
    features: [
      "Latest OCPP compliance",
      "Bug fixes & security patches",
      "New payment methods",
      "Improved UX",
    ],
  },
  {
    icon: HardDrive,
    title: "Hardware Upgrades",
    description:
      "Replace aging components, upgrade connectors to newer standards, and add features like RFID readers or displays.",
    features: [
      "Replace aging components",
      "Upgrade connectors",
      "Add RFID / NFC readers",
      "Display upgrades",
    ],
  },
  {
    icon: BatteryCharging,
    title: "Capacity Expansion",
    description:
      "Scale your infrastructure by adding more chargers, upgrading power capacity, or adding DC fast charging capabilities.",
    features: [
      "Add more chargers",
      "Upgrade power capacity",
      "Add DC fast charging",
      "Load management setup",
    ],
  },
  {
    icon: ArrowLeftRight,
    title: "Technology Migration",
    description:
      "Move from legacy dumb chargers to smart, connected units with full CMS integration and remote management.",
    features: [
      "Legacy to smart chargers",
      "Add connectivity (4G/Wi-Fi)",
      "CMS integration",
      "Remote management",
    ],
  },
];

const WHY_UPGRADE = [
  {
    icon: Timer,
    title: "Better Uptime & Reliability",
    description:
      "Updated firmware and fresh hardware mean fewer failures and more consistent charging sessions.",
  },
  {
    icon: Smartphone,
    title: "New Payment Methods (UPI, RFID)",
    description:
      "Support the latest payment options your users expect, from UPI QR codes to contactless RFID cards.",
  },
  {
    icon: ShieldCheck,
    title: "OCPP 2.0.1 Compliance",
    description:
      "Meet the latest open charge point protocol standards for interoperability and future-readiness.",
  },
  {
    icon: Smile,
    title: "Improved User Experience",
    description:
      "Faster session starts, clearer displays, better error handling, and smoother payment flows.",
  },
  {
    icon: TrendingUp,
    title: "Higher Revenue Per Session",
    description:
      "Faster charging speeds, dynamic pricing support, and fewer failed sessions mean more revenue per charger.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "Stay ahead of evolving government regulations and industry standards with timely updates.",
  },
];

/* ─── Page ─── */

export default function UpgradesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-purple/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-purple/10 text-purple border-purple/20">
              Upgrades
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Upgrade your charging{" "}
            <span className="text-purple">infrastructure</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Keep your chargers current with hardware upgrades, firmware updates,
            and capacity expansions. Future-proof your network without replacing
            everything.
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
                <ArrowUpCircle className="size-4" />
                Plan Your Upgrade
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                All Services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Upgrade Types ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Upgrade Types"
            title="Four ways to upgrade your chargers"
            subtitle="Whether it's a simple firmware patch or a full technology migration, we have the expertise to keep your infrastructure current."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-2">
            {UPGRADE_TYPES.map(
              ({ icon: Icon, title, description, features }) => (
                <StaggerItem key={title}>
                  <motion.div
                    className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 24 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: DURATION.normal, ease: EASE.out }}
                  >
                    <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-purple/10 text-purple transition-colors group-hover:bg-purple group-hover:text-white">
                      <Icon className="size-7" />
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-purple" />
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Why Upgrade ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Why Upgrade"
            title="The business case for upgrading"
            subtitle="Upgrading your chargers isn't just maintenance — it's a strategic investment that pays for itself."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_UPGRADE.map(({ icon: Icon, title, description }) => (
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

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Ready to future-proof your chargers?"
          description="Tell us about your current setup and we'll recommend the right upgrade path. Our team will assess your infrastructure and deliver a detailed upgrade plan."
          primaryLabel="Plan Your Upgrade"
          primaryHref="/services/request"
          secondaryLabel="Explore All Services"
          secondaryHref="/services"
          variant="dark"
        />
      </div>
    </>
  );
}
