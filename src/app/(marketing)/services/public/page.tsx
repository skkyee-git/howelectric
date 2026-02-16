"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Zap,
  Plug,
  HardHat,
  CreditCard,
  Monitor,
  Power,
  ArrowRight,
  Milestone,
  Building2,
  MapPinned,
  Fuel,
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
    icon: MapPin,
    title: "Location Selection Support",
    description:
      "Data-driven site selection based on traffic patterns, EV density, grid proximity, and commercial viability analysis.",
  },
  {
    icon: Power,
    title: "Power Infrastructure",
    description:
      "Complete power setup — transformer installation, HT/LT panels, cabling, earthing, and metering for your station.",
  },
  {
    icon: Plug,
    title: "Charger Installation (AC + DC Fast)",
    description:
      "Professional installation of AC slow chargers and DC fast chargers with all necessary connectors and safety systems.",
  },
  {
    icon: HardHat,
    title: "Canopy & Civil Works Coordination",
    description:
      "Coordination of canopy structures, flooring, drainage, lighting, and all civil works for a professional station.",
  },
  {
    icon: CreditCard,
    title: "Payment Kiosk & Signage",
    description:
      "Payment terminals, QR-based UPI, RFID readers, highway-visible signage, and wayfinding for driver convenience.",
  },
  {
    icon: Monitor,
    title: "CMS Setup with Driver App",
    description:
      "Full charging management platform with real-time station monitoring, driver-facing app, and revenue analytics.",
  },
];

const PROCESS = [
  {
    step: 1,
    title: "Site Finalization",
    description:
      "Select and finalize the station location based on feasibility study, land agreements, and traffic analysis.",
  },
  {
    step: 2,
    title: "Permits & Power",
    description:
      "Obtain all required permits, electricity connection approvals, and regulatory clearances for your station.",
  },
  {
    step: 3,
    title: "Civil Works",
    description:
      "Foundation, canopy, flooring, drainage, electrical room, and all civil infrastructure construction.",
  },
  {
    step: 4,
    title: "Charger Installation",
    description:
      "Install and commission all AC and DC chargers, payment systems, signage, and safety equipment.",
  },
  {
    step: 5,
    title: "Testing & Launch",
    description:
      "End-to-end testing, CMS go-live, driver app activation, and public launch of your charging station.",
  },
];

const STATION_TYPES = [
  {
    icon: Milestone,
    title: "Highway Fast-Charging",
    power: "DC 60\u2013360kW",
    description:
      "High-power DC fast chargers along national and state highways for long-distance EV travel. 15-45 minute charging stops.",
  },
  {
    icon: Building2,
    title: "Urban Charging Hubs",
    power: "Mixed AC + DC",
    description:
      "Multi-charger hubs in urban centers combining AC destination charging with DC fast chargers for quick top-ups.",
  },
  {
    icon: MapPinned,
    title: "Destination Charging",
    power: "AC 7\u201322kW",
    description:
      "AC chargers at malls, hotels, restaurants, and leisure destinations where vehicles are parked for extended periods.",
  },
  {
    icon: Fuel,
    title: "Petrol Pump Conversions",
    power: "DC 30\u2013150kW",
    description:
      "Transform existing petrol stations into hybrid fuel + EV charging stations. Leverage existing locations and footfall.",
  },
];

/* ─── Page ─── */

export default function PublicChargingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-purple/5 blur-[100px]" />
        <div className="pointer-events-none absolute -left-60 bottom-0 size-[400px] rounded-full bg-purple/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-purple/10 text-purple border-purple/20">
              Public Charging
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Build public{" "}
            <span className="text-purple">EV charging stations</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Turnkey public charging station installations — from highway
            corridors to urban locations. Complete infrastructure, permits,
            and CMS included.
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
                <Zap className="size-4" />
                Start Your Public Station
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consulting">
                Get Consulting First
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
            title="Turnkey station delivery"
            subtitle="Everything from site selection to CMS launch — a complete public charging station delivered ready to operate."
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
            title="From site to station"
            subtitle="A structured process covering every phase of public charging station development and launch."
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

      {/* ── Station Types ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Station Types"
            title="Every type of public station"
            subtitle="We design and build public charging stations tailored to the location, use case, and revenue model."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2">
            {STATION_TYPES.map(({ icon: Icon, title, power, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple transition-colors group-hover:bg-purple group-hover:text-white">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <Badge
                        variant="secondary"
                        className="mt-1 bg-purple/10 text-purple text-xs"
                      >
                        {power}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
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
          headline="Start Your Public Station"
          description="From site selection to station launch — our team will guide you through every step of building a profitable public EV charging station."
          primaryLabel="Start Your Public Station"
          primaryHref="/services/request"
          secondaryLabel="Get Consulting First"
          secondaryHref="/consulting"
          variant="dark"
        />
      </div>
    </>
  );
}
