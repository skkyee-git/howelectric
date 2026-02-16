"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  UserCheck,
  Star,
  GraduationCap,
  ClipboardCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const TRUST_SIGNALS = [
  {
    icon: Award,
    title: "HowElectric Certified",
    description:
      "Every installer passes a rigorous certification covering all major EV charger brands and installation standards.",
  },
  {
    icon: ShieldCheck,
    title: "Background Verified",
    description:
      "Comprehensive identity, address, and criminal background checks ensure only trusted professionals join our network.",
  },
  {
    icon: UserCheck,
    title: "Liability Insured",
    description:
      "All installations carry liability insurance, protecting you and your property throughout the process.",
  },
  {
    icon: Star,
    title: "Customer Rated",
    description:
      "Real ratings and reviews from verified customers after every job help maintain accountability and quality.",
  },
  {
    icon: GraduationCap,
    title: "Ongoing Training",
    description:
      "Installers receive regular training updates on new charger models, safety protocols, and industry best practices.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Audited",
    description:
      "Random quality audits on completed installations ensure every job meets HowElectric's high standards.",
  },
];

const CITIES = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Kochi",
];

const QUALITY_MEASURES = [
  "Mandatory certification program",
  "Regular skill assessments",
  "Customer feedback monitoring",
  "Quality audits",
  "Continuous training updates",
];

/* ─── Page ─── */

export default function InstallersPage() {
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
              Our Network
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            India&apos;s most trusted{" "}
            <span className="text-purple">EV charging installers</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Every installer in our network is certified, insured, and rated by
            real customers.
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
              <Link href="/services/find-installer">
                <Search className="size-4" />
                Find an Installer
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services/partner">
                Join Our Network
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Signals ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Trust & Quality"
            title="Why our installers are trusted"
            subtitle="We go beyond basic vetting. Every installer in the HowElectric network meets the highest standards of professionalism and skill."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_SIGNALS.map(({ icon: Icon, title, description }) => (
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

      {/* ── Coverage ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Coverage"
            title="We're in 150+ cities"
            subtitle="From metro hubs to emerging tier-2 cities, our installer network is expanding rapidly across India."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {CITIES.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 rounded-xl border border-border bg-light-gray px-4 py-3"
                  >
                    <MapPin className="size-4 shrink-0 text-purple" />
                    <span className="text-sm font-medium">{city}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                ...and 138+ more cities across India
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── How We Maintain Quality ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Quality Assurance"
            title="How we maintain quality"
            subtitle="A multi-layered quality framework ensures every installation meets our rigorous standards."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-8 shadow-card">
              <ul className="space-y-4">
                {QUALITY_MEASURES.map((measure) => (
                  <li
                    key={measure}
                    className="flex items-start gap-3 text-base"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-purple" />
                    <span>{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Ready to find a trusted installer?"
          description="Search our network of certified, insured, and customer-rated EV charging installers near you."
          primaryLabel="Find an Installer"
          primaryHref="/services/find-installer"
          secondaryLabel="Join Our Network"
          secondaryHref="/services/partner"
          variant="dark"
        />
      </div>
    </>
  );
}
