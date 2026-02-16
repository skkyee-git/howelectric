"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Search,
  FileText,
  ShieldCheck,
  ArrowRight,
  Award,
  Quote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const STATS = [
  { value: "2,000+", label: "Graduates" },
  { value: "95%", label: "Employed" },
  { value: "150+", label: "Cities" },
  { value: "40%", label: "Avg Salary Increase" },
];

const GRADUATES = [
  {
    name: "Rahul Sharma",
    certification: "Certified Installer",
    city: "Mumbai",
    initials: "RS",
    gradient: "from-green to-teal",
    quote:
      "Now running a team of 8 installers covering all of Maharashtra",
  },
  {
    name: "Priya Menon",
    certification: "Certified Consultant",
    city: "Bangalore",
    initials: "PM",
    gradient: "from-teal to-electric-blue",
    quote:
      "Advising 3 real estate developers on EV charging strategy",
  },
  {
    name: "Amit Patel",
    certification: "Certified Operator",
    city: "Ahmedabad",
    initials: "AP",
    gradient: "from-electric-blue to-green",
    quote:
      "Managing a 12-station network with 99% uptime",
  },
  {
    name: "Sneha Reddy",
    certification: "Certified Installer",
    city: "Hyderabad",
    initials: "SR",
    gradient: "from-green to-electric-blue",
    quote:
      "Completed 200+ residential installations in first year",
  },
];

const EMPLOYER_FEATURES = [
  {
    icon: Search,
    title: "Searchable Directory",
    description: "Browse our graduate network — searchable directory coming soon.",
  },
  {
    icon: FileText,
    title: "Post Job Listings",
    description: "Reach certified EV professionals actively looking for opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Credentials",
    description: "Access verified certifications and training records for every graduate.",
  },
];

/* ─── Page ─── */

export default function GraduatesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-green/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-green/10 text-green border-green/20">
              Graduate Network
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Meet our{" "}
            <span className="text-green">certified professionals</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            2,000+ certified EV professionals across India — trained, verified,
            and ready to build the future.
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
              className="bg-green px-6 font-semibold text-white hover:bg-green/90"
            >
              <Link href="https://howacademy.in/courses/ev-infrastructure/" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="size-4" />
                Get Certified
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Hire Graduates
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-border bg-light-gray py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerGrid className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <StaggerItem key={label}>
                <motion.div
                  className="text-center"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 16 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <p className="font-display text-3xl font-bold text-green md:text-4xl">
                    {value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {label}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Featured Graduates ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Featured Graduates"
            title="Success stories from our network"
            subtitle="Real professionals making a real impact in India's EV charging ecosystem."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GRADUATES.map(
              ({ name, certification, city, initials, gradient, quote }) => (
                <StaggerItem key={name}>
                  <motion.div
                    className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring" as const, stiffness: 300 }}
                  >
                    {/* Photo placeholder */}
                    <div className="mb-5 flex justify-center">
                      <div
                        className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-2xl font-bold text-white shadow-lg`}
                      >
                        {initials}
                      </div>
                    </div>

                    {/* Name & details */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <Badge
                        variant="secondary"
                        className="mt-2 bg-green/10 text-green"
                      >
                        <Award className="size-3" />
                        {certification}
                      </Badge>
                      <p className="mt-2 flex items-center justify-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="size-3.5" />
                        {city}
                      </p>
                    </div>

                    {/* Quote */}
                    <div className="mt-4 flex flex-1 flex-col justify-end">
                      <div className="rounded-xl bg-light-gray p-4">
                        <Quote className="mb-1 size-4 text-green/40" />
                        <p className="text-sm italic leading-relaxed text-muted-foreground">
                          {quote}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── For Employers ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="For Employers"
            title="Hire verified EV professionals"
            subtitle="Access a curated pool of trained and certified talent ready to accelerate your EV charging operations."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-3">
            {EMPLOYER_FEATURES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
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
          headline="Join India's largest EV professional network"
          description="Get certified and connect with employers, peers, and opportunities across the EV charging industry."
          primaryLabel="Get Certified"
          primaryHref="https://howacademy.in/courses/ev-infrastructure/"
          secondaryLabel="Hire Graduates"
          secondaryHref="/contact"
          variant="dark"
        />
      </div>
    </>
  );
}
