"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Search,
  IndianRupee,
  MapPin,
  Cpu,
  ShieldCheck,
  Settings,
  Megaphone,
  Clock,
  Video,
  Award,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Building2,
  Home,
  Truck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const COURSE_DETAILS = [
  { icon: Clock, label: "Duration", value: "4 weeks (self-paced)" },
  {
    icon: Video,
    label: "Format",
    value: "Video + live workshops + templates",
  },
  { icon: Award, label: "Certificate", value: "Certificate of Completion" },
  { icon: IndianRupee, label: "Fee", value: "\u20B98,000" },
];

const MODULES = [
  {
    number: 1,
    title: "Business Model Design",
    description: "Choose your CPO model, revenue strategy",
    icon: Target,
  },
  {
    number: 2,
    title: "Market Research & Validation",
    description: "Demand analysis, competition mapping",
    icon: Search,
  },
  {
    number: 3,
    title: "Financial Planning",
    description: "CAPEX/OPEX, revenue projections, funding",
    icon: IndianRupee,
  },
  {
    number: 4,
    title: "Site Selection & Feasibility",
    description: "Location scoring, power requirements",
    icon: MapPin,
  },
  {
    number: 5,
    title: "Vendor & Technology Selection",
    description: "Charger brands, CMS platforms",
    icon: Cpu,
  },
  {
    number: 6,
    title: "Regulatory & Compliance",
    description: "Permits, subsidies, approvals",
    icon: ShieldCheck,
  },
  {
    number: 7,
    title: "Operations & Scaling",
    description: "Hiring, SOPs, growth strategy",
    icon: Settings,
  },
  {
    number: 8,
    title: "Marketing & Customer Acquisition",
    description: "Branding, driver acquisition, partnerships",
    icon: Megaphone,
  },
];

const INCLUDES = [
  "Business plan template",
  "Financial model spreadsheet",
  "Vendor comparison worksheet",
  "Regulatory checklist",
];

const WHO_ITS_FOR = [
  {
    icon: Briefcase,
    label: "Aspiring entrepreneurs",
  },
  {
    icon: Building2,
    label: "Existing business owners diversifying",
  },
  {
    icon: Home,
    label: "Real estate professionals",
  },
  {
    icon: Truck,
    label: "Fleet managers",
  },
];

/* ─── Page ─── */

export default function BusinessPage() {
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
              Business Course
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Build & scale your{" "}
            <span className="text-green">EV charging business</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Learn to create a business plan, secure funding, manage operations,
            and scale your EV charging venture.
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
                <Briefcase className="size-4" />
                Enroll Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/academy/fundamentals">
                Start with Fundamentals
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Course Details Card ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Course Details"
            title="What you're signing up for"
            subtitle="A structured, hands-on program to take you from idea to operational EV charging business."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-green/20 bg-white p-8 shadow-card md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                {COURSE_DETAILS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green/10">
                      <Icon className="size-5 text-green" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-0.5 font-semibold text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Course Outline ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Course Outline"
            title="8 modules to launch your business"
            subtitle="From business model design to marketing — a complete roadmap for your EV charging venture."
          />

          <div className="relative mx-auto max-w-4xl">
            {/* Connector line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-green/40 via-green/20 to-transparent md:left-8 lg:block" />

            <div className="space-y-10">
              {MODULES.map(
                ({ number, title, description, icon: Icon }, idx) => (
                  <ScrollReveal key={number} delay={idx * 0.07}>
                    <div className="flex gap-6 md:gap-8">
                      <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-green text-lg font-bold text-white shadow-lg shadow-green/20 md:size-16 md:text-xl">
                        {number}
                      </div>
                      <div className="pt-1 md:pt-3">
                        <div className="flex items-center gap-3">
                          <Icon className="size-5 text-green" />
                          <h3 className="text-xl font-semibold md:text-2xl">
                            {title}
                          </h3>
                        </div>
                        <p className="mt-2 text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What's Included"
            title="Tools to hit the ground running"
            subtitle="Every enrollment comes with practical templates and resources you can use immediately."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-green/20 bg-white p-8 shadow-card md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-green/10">
                  <FileSpreadsheet className="size-5 text-green" />
                </div>
                <h3 className="text-xl font-semibold">
                  Business Toolkit
                </h3>
              </div>
              <ul className="space-y-4">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Who It's For"
            title="Built for action-oriented professionals"
            subtitle="Whether you're starting fresh or expanding your existing business into EV charging."
          />

          <StaggerGrid className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {WHO_ITS_FOR.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <motion.div
                  className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green/10">
                    <Icon className="size-5 text-green" />
                  </div>
                  <span className="font-medium text-foreground">{label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Ready to build your EV charging business?"
          description="Enroll today and get access to expert-led modules, live workshops, and a complete business toolkit to launch and scale your venture."
          primaryLabel="Enroll Now"
          primaryHref="https://howacademy.in/courses/ev-infrastructure/"
          variant="dark"
        />
      </div>
    </>
  );
}
