"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  ShieldCheck,
  UserCheck,
  Star,
  IndianRupee,
  Headphones,
  Award,
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

const POPULAR_CITIES = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad",
];

const WHY_US = [
  {
    icon: Award,
    title: "Certified & Trained by HowElectric",
    description:
      "Every installer completes our rigorous certification program covering EV charger brands, safety protocols, and best practices.",
  },
  {
    icon: ShieldCheck,
    title: "Background Verified",
    description:
      "All installers undergo thorough background verification including identity, address, and criminal record checks.",
  },
  {
    icon: UserCheck,
    title: "Insured for Liability",
    description:
      "Every installation is covered by comprehensive liability insurance, protecting you against accidental damage.",
  },
  {
    icon: Star,
    title: "Rated by Customers",
    description:
      "Real ratings and reviews from verified customers help you choose the best installer for your needs.",
  },
  {
    icon: IndianRupee,
    title: "Standard Pricing (No Surprises)",
    description:
      "Transparent, standardised pricing across our network. The quote you receive is the price you pay.",
  },
  {
    icon: Headphones,
    title: "Post-Installation Support",
    description:
      "Ongoing technical support after installation. If anything goes wrong, we have you covered.",
  },
];

const STATS = [
  { value: "500+", label: "Certified Installers" },
  { value: "150+", label: "Cities Covered" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "10,000+", label: "Installations Completed" },
];

/* ─── Page ─── */

export default function FindInstallerPage() {
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
              Installer Network
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Find a certified installer{" "}
            <span className="text-purple">near you</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Our nationwide network of certified EV charging installers covers
            150+ cities across India.
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
                <Search className="size-4" />
                Request Installation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services/partner">
                Become an Installer
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Search Teaser ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Search Installers"
            title="Find installers in your city"
            subtitle="Enter your city to discover certified EV charging installers near you."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-8 shadow-card">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by city..."
                    className="h-12 w-full rounded-lg border border-border bg-light-gray pl-11 pr-4 text-sm outline-none focus:border-purple focus:ring-2 focus:ring-purple/20"
                    readOnly
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-purple px-8 font-semibold text-white hover:bg-purple/90"
                >
                  <Search className="size-4" />
                  Search
                </Button>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  Popular cities
                </p>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_CITIES.map((city) => (
                    <Link
                      key={city}
                      href="/services/find-installer"
                      className="rounded-full border border-border bg-light-gray px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-purple hover:bg-purple/10 hover:text-purple"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Choose Our Installers ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Why Us"
            title="Why choose our installers"
            subtitle="Every installer in the HowElectric network meets our rigorous standards for quality, safety, and customer service."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map(({ icon: Icon, title, description }) => (
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

      {/* ── Stats ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Network"
            title="Numbers that speak for themselves"
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <StaggerItem key={label}>
                <motion.div
                  className="rounded-2xl border border-border bg-white p-8 text-center shadow-card"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <p className="text-4xl font-bold text-purple">{value}</p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {label}
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
          headline="Ready to get your charger installed?"
          description="Request an installation and we'll match you with the best certified installer in your area."
          primaryLabel="Request Installation"
          primaryHref="/services/request"
          secondaryLabel="Become an Installer"
          secondaryHref="/services/partner"
          variant="dark"
        />
      </div>
    </>
  );
}
