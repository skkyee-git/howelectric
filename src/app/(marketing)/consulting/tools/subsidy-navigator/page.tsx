"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  ChevronLeft,
  ChevronDown,
  IndianRupee,
  FileCheck,
  CalendarClock,
  ClipboardList,
  Check,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/shared/CTABanner";
import { DURATION } from "@/lib/animations";

/* ─── Sample subsidies ─── */
const CENTRAL_SUBSIDIES = [
  {
    name: "PM E-DRIVE Scheme",
    amount: "Up to ₹7,500 per kW for public charging",
    eligibility: "Registered CPOs with minimum 5 chargers",
    deadline: "March 2028",
    docs: "GST registration, DISCOM approval, site agreement",
  },
  {
    name: "FAME II (Extended)",
    amount: "Up to ₹15,000 per kW for fast chargers",
    eligibility: "DC chargers 50kW+ on highways",
    deadline: "December 2026",
    docs: "BIS certification, MoP guidelines compliance",
  },
];

const STATE_EXAMPLES = [
  {
    state: "Maharashtra",
    subsidy: "100% electricity duty waiver for 5 years + ₹5L per station",
    highlight: true,
  },
  {
    state: "Delhi",
    subsidy: "100% subsidy on charging equipment up to ₹6,000 per charging point",
    highlight: false,
  },
  {
    state: "Karnataka",
    subsidy: "25% capital subsidy for EV charging infrastructure",
    highlight: false,
  },
];

/* ─── States tracked ─── */
const TRACKED_STATES = [
  "Delhi",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Telangana",
  "Uttar Pradesh",
  "Rajasthan",
];

/* ─── Subsidy output field icons ─── */
const SUBSIDY_FIELDS = [
  { icon: IndianRupee, label: "Subsidy Amount" },
  { icon: FileCheck, label: "Eligibility Criteria" },
  { icon: CalendarClock, label: "Application Deadline" },
  { icon: ClipboardList, label: "Documentation Required" },
];

export default function SubsidyNavigatorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#050d18] py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <motion.div
          className="pointer-events-none absolute left-1/4 top-0 size-[500px] rounded-full bg-orange/10 blur-[140px]"
          animate={{ x: [0, 45, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ repeat: Infinity, duration: 17, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-1/3 size-[400px] rounded-full bg-electric-blue/8 blur-[120px]"
          animate={{ x: [0, -55, 25, 0], y: [0, 20, -35, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05, duration: DURATION.normal }}
            className="mb-8 flex justify-center"
          >
            <Link
              href="/consulting/tools"
              className="inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white/70"
            >
              <ChevronLeft className="size-4" />
              All Tools
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-orange/20">
                <FileText className="size-3 text-orange" />
              </span>
              Free Tool
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            EV Charging{" "}
            <span className="bg-gradient-to-r from-orange via-[#FBBF24] to-orange bg-clip-text text-transparent">
              Subsidy Navigator
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Find all available subsidies and incentives for your EV charging
            project.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Subsidy Navigator Mockup */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white shadow-card-hover">
              {/* Coming Soon overlay */}
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/60 backdrop-blur-[2px]">
                <div className="text-center">
                  <Badge className="border-0 bg-orange px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange/25">
                    Coming Soon
                  </Badge>
                  <p className="mt-3 text-sm text-muted-foreground">
                    This tool is under development
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* State selector mockup */}
                <div className="mx-auto max-w-md">
                  <label className="text-sm font-medium text-foreground">
                    Select your state
                  </label>
                  <div className="mt-2 flex items-center justify-between rounded-lg border border-border/50 bg-light-gray/50 px-4 py-3">
                    <span className="text-sm text-muted-foreground">
                      Maharashtra
                    </span>
                    <ChevronDown className="size-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Output fields indicator */}
                <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-3">
                  {SUBSIDY_FIELDS.map((field) => {
                    const Icon = field.icon;
                    return (
                      <div
                        key={field.label}
                        className="flex items-center gap-2 rounded-lg border border-border/50 bg-light-gray/30 px-3 py-2"
                      >
                        <Icon className="size-4 text-orange" />
                        <span className="text-xs text-muted-foreground">
                          {field.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Central subsidies */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-foreground">
                    Central Government Subsidies
                  </h3>
                  <div className="mt-4 space-y-4">
                    {CENTRAL_SUBSIDIES.map((subsidy) => (
                      <div
                        key={subsidy.name}
                        className="rounded-xl border border-border/50 bg-light-gray/30 p-5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex size-8 items-center justify-center rounded-lg bg-orange/10">
                            <IndianRupee className="size-4 text-orange" />
                          </div>
                          <h4 className="text-base font-bold text-foreground">
                            {subsidy.name}
                          </h4>
                        </div>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Subsidy Amount
                            </p>
                            <p className="mt-1 text-sm font-semibold text-foreground">
                              {subsidy.amount}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Eligibility
                            </p>
                            <p className="mt-1 text-sm text-foreground">
                              {subsidy.eligibility}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Deadline
                            </p>
                            <p className="mt-1 text-sm text-foreground">
                              {subsidy.deadline}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Documentation
                            </p>
                            <p className="mt-1 text-sm text-foreground">
                              {subsidy.docs}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* State subsidy examples */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-foreground">
                    State Subsidy Examples
                  </h3>
                  <div className="mt-4 space-y-3">
                    {STATE_EXAMPLES.map((example) => (
                      <div
                        key={example.state}
                        className={`flex items-start gap-3 rounded-xl border p-4 ${
                          example.highlight
                            ? "border-orange/30 bg-orange/5"
                            : "border-border/50 bg-light-gray/30"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${
                            example.highlight
                              ? "bg-orange/15"
                              : "bg-electric-blue/10"
                          }`}
                        >
                          <Check
                            className={`size-3.5 ${
                              example.highlight
                                ? "text-orange"
                                : "text-electric-blue"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {example.state}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {example.subsidy}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Subsidies We Track */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Coverage
            </p>
            <h2 className="mt-3">Subsidies we track</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We monitor EV charging subsidies and incentive programs across
              India&apos;s key states and union territories.
            </p>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {TRACKED_STATES.map((state) => (
              <StaggerItem key={state}>
                <div className="flex items-center justify-center rounded-2xl border border-border/50 bg-white px-4 py-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-xl bg-orange/10">
                      <FileText className="size-5 text-orange" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      {state}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <CTABanner
          headline="Get Expert Subsidy Guidance"
          description="Our regulatory team can identify every applicable subsidy for your project, handle documentation, and maximize your financial benefit."
          primaryLabel="Get Subsidy Guidance"
          primaryHref="/consulting/regulatory"
          secondaryLabel="Back to Tools"
          secondaryHref="/consulting/tools"
          variant="dark"
        />
      </div>
    </>
  );
}
