"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  MapPin,
  ShoppingBag,
  Truck,
  Landmark,
  TrendingUp,
  Clock,
  IndianRupee,
  BarChart3,
  Building2,
  BatteryCharging,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const CASE_STUDIES = [
  {
    icon: MapPin,
    gradient: "from-orange/80 to-orange/40",
    title: "Highway CPO Network",
    description:
      "How a first-time entrepreneur built a 12-station highway network in Maharashtra.",
    results: [
      { icon: Zap, label: "Stations", value: "12" },
      { icon: IndianRupee, label: "Revenue (Year 1)", value: "₹2.8Cr" },
      { icon: Clock, label: "Payback", value: "14 months" },
    ],
    tags: ["Highway", "DC Fast Charging"],
  },
  {
    icon: ShoppingBag,
    gradient: "from-electric-blue/80 to-electric-blue/40",
    title: "Mall Charging Hub",
    description:
      "India's largest mall added 40 chargers across 3 cities.",
    results: [
      { icon: BatteryCharging, label: "Chargers", value: "40" },
      { icon: BarChart3, label: "Utilization", value: "85%" },
      { icon: Users, label: "Daily Sessions", value: "400+" },
    ],
    tags: ["Commercial", "AC + DC"],
  },
  {
    icon: Truck,
    gradient: "from-teal/80 to-teal/40",
    title: "Fleet Depot Electrification",
    description:
      "A logistics company electrified 3 depots serving 200+ EVs.",
    results: [
      { icon: Building2, label: "Depots", value: "3" },
      { icon: Zap, label: "EVs Served", value: "200+" },
      { icon: TrendingUp, label: "Fuel Cost Cut", value: "35%" },
    ],
    tags: ["Fleet", "Depot Charging"],
  },
  {
    icon: Landmark,
    gradient: "from-purple/80 to-purple/40",
    title: "Government Smart City Project",
    description:
      "Deploying 50 public charging stations under smart city mission.",
    results: [
      { icon: Zap, label: "Stations", value: "50" },
      { icon: MapPin, label: "Cities", value: "15" },
      { icon: IndianRupee, label: "Project Value", value: "₹12Cr" },
    ],
    tags: ["Government", "Public Charging"],
  },
];

/* ─── Page ─── */

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              Case Studies
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Real results from{" "}
            <span className="text-orange">real clients</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            See how businesses across India have built successful EV charging
            operations with HowElectric.
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
                <Zap className="size-4" />
                Start Your Success Story
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

      {/* ── Case Study Cards ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Success Stories"
            title="Proven impact across industries"
            subtitle="From highway networks to government projects, our consulting has helped clients launch and scale profitable EV charging businesses."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-2">
            {CASE_STUDIES.map(
              ({ icon: Icon, gradient, title, description, results, tags }) => (
                <StaggerItem key={title}>
                  <motion.div
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 24 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: DURATION.normal, ease: EASE.out }}
                  >
                    {/* Image placeholder with gradient */}
                    <div
                      className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${gradient}`}
                    >
                      <div className="flex size-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                        <Icon className="size-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Tags */}
                      <div className="mb-3 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-orange/10 text-orange text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>

                      {/* Result Metrics */}
                      <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-light-gray p-4">
                        {results.map(({ icon: MetricIcon, label, value }) => (
                          <div key={label} className="text-center">
                            <MetricIcon className="mx-auto mb-1 size-4 text-orange" />
                            <p className="text-lg font-bold text-foreground">
                              {value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Read More Link */}
                      <div className="mt-auto pt-6">
                        <Link
                          href="/consulting/case-studies"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-orange transition-colors hover:text-orange/80"
                        >
                          Read Case Study
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
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
          headline="Start your success story"
          description="Join the growing list of businesses that have built profitable EV charging operations with HowElectric consulting. Let's plan yours."
          primaryLabel="Book a Consultation"
          primaryHref="/consulting/book"
          secondaryLabel="Explore All Services"
          secondaryHref="/consulting"
          variant="dark"
        />
      </div>
    </>
  );
}
