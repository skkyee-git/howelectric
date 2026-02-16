"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  ArrowRight,
  Settings,
  CreditCard,
  HeadphonesIcon,
  Wrench,
  BarChart3,
  Scale,
  TrendingUp,
  Clock,
  Award,
  IndianRupee,
  LayoutDashboard,
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
  { icon: Clock, label: "Duration", value: "3 weeks (online)" },
  { icon: Monitor, label: "Format", value: "Self-paced + live sessions" },
  { icon: Award, label: "Certificate", value: "HowElectric Certified Operator" },
  { icon: IndianRupee, label: "Fee", value: "\u20B912,000" },
];

const CURRICULUM = [
  {
    module: 1,
    title: "Charging Station Operations",
    icon: Settings,
    description:
      "Day-to-day station operations, shift management, SOPs, and operational checklists for seamless uptime.",
  },
  {
    module: 2,
    title: "CMS Dashboard Mastery",
    icon: LayoutDashboard,
    description:
      "Navigate CMS platforms confidently — monitor chargers, manage sessions, and configure settings remotely.",
  },
  {
    module: 3,
    title: "Billing & Revenue Management",
    icon: CreditCard,
    description:
      "Set tariff structures, manage payment gateways, generate invoices, and reconcile revenue reports.",
  },
  {
    module: 4,
    title: "Customer Service & Driver Support",
    icon: HeadphonesIcon,
    description:
      "Handle driver queries, resolve charging issues, manage complaints, and deliver excellent site experience.",
  },
  {
    module: 5,
    title: "Preventive Maintenance",
    icon: Wrench,
    description:
      "Scheduled maintenance routines, cleaning protocols, cable inspection, and component replacement guidelines.",
  },
  {
    module: 6,
    title: "Performance Monitoring & Analytics",
    icon: BarChart3,
    description:
      "Track utilization rates, energy consumption, revenue trends, and identify optimization opportunities.",
  },
  {
    module: 7,
    title: "Regulatory Compliance",
    icon: Scale,
    description:
      "DISCOM approvals, MNRE/state EV policy requirements, safety audits, and documentation standards.",
  },
  {
    module: 8,
    title: "Growth & Scaling Strategies",
    icon: TrendingUp,
    description:
      "Multi-site expansion, franchise models, partnerships, marketing strategies, and fleet deals.",
  },
];

const WHO_ITS_FOR = [
  {
    title: "Station Owners",
    description:
      "Learn to maximize revenue and efficiency from your EV charging investment.",
  },
  {
    title: "Site Managers",
    description:
      "Develop the skills to manage daily operations and team coordination at charging sites.",
  },
  {
    title: "Operations Staff",
    description:
      "Build expertise in CMS tools, maintenance workflows, and customer service protocols.",
  },
  {
    title: "Aspiring Entrepreneurs",
    description:
      "Get the complete playbook before launching your own EV charging business.",
  },
];

/* ─── Page ─── */

export default function OperatorTrackPage() {
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
            <Badge className="mb-6 border-green/20 bg-green/10 text-green">
              Operator Track
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Learn to run a{" "}
            <span className="text-green">profitable charging station</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Everything you need to manage, maintain, and grow an EV charging
            business.
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
                <Monitor className="size-4" />
                Enroll Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/academy">
                View All Tracks
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
            title="What to expect"
            subtitle="A 3-week self-paced program with live sessions, designed to fit your schedule."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-green/20 bg-white p-8 shadow-card">
              <div className="grid gap-6 sm:grid-cols-2">
                {COURSE_DETAILS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-base font-semibold text-foreground">
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

      {/* ── Curriculum ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Curriculum"
            title="8 practical modules"
            subtitle="From daily operations to growth strategies — master every aspect of running a charging station."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CURRICULUM.map(({ module, title, icon: Icon, description }) => (
              <StaggerItem key={module}>
                <motion.div
                  className="group h-full rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                    <Icon className="size-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-green">
                    Module {module}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Who It's For"
            title="Is this track right for you?"
            subtitle="The Operator Track is built for anyone involved in or planning to enter the EV charging business."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_ITS_FOR.map(({ title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
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
          headline="Ready to run a profitable station?"
          description="Enroll in the Operator Track and learn to manage, maintain, and scale your EV charging business."
          primaryLabel="Enroll Now"
          primaryHref="https://howacademy.in/courses/ev-infrastructure/"
          secondaryLabel="View All Tracks"
          secondaryHref="/academy"
          variant="dark"
        />
      </div>
    </>
  );
}
