"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Plug,
  Server,
  TestTube,
  Settings,
  Users,
  Briefcase,
  Clock,
  Monitor,
  Award,
  IndianRupee,
  Zap,
  Network,
  HeadphonesIcon,
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
  { icon: Clock, label: "Duration", value: "4 weeks (weekends)" },
  { icon: Monitor, label: "Format", value: "Online + practical" },
  { icon: Award, label: "Certificate", value: "HowElectric Certified Installer" },
  { icon: IndianRupee, label: "Fee", value: "\u20B915,000" },
];

const CURRICULUM = [
  {
    module: 1,
    title: "EV Charging Fundamentals",
    icon: BookOpen,
    description:
      "Understand EV battery technology, charging levels, connector types, and the Indian charging ecosystem.",
  },
  {
    module: 2,
    title: "Electrical Safety & Standards",
    icon: ShieldCheck,
    description:
      "IS/IEC standards for EV charging, safety protocols, PPE requirements, and regulatory compliance.",
  },
  {
    module: 3,
    title: "AC Charger Installation",
    icon: Plug,
    description:
      "Hands-on installation of Level 1 and Level 2 AC chargers, wiring, load balancing, and panel upgrades.",
  },
  {
    module: 4,
    title: "DC Charger Installation",
    icon: Zap,
    description:
      "DC fast charger site preparation, transformer coordination, and high-power circuit installation.",
  },
  {
    module: 5,
    title: "OCPP & CMS Configuration",
    icon: Server,
    description:
      "Configure chargers via OCPP 1.6/2.0, connect to CMS platforms, set up remote monitoring and billing.",
  },
  {
    module: 6,
    title: "Testing & Commissioning",
    icon: TestTube,
    description:
      "End-to-end testing procedures, commissioning checklists, safety certification, and handover protocols.",
  },
  {
    module: 7,
    title: "Troubleshooting & Maintenance",
    icon: Settings,
    description:
      "Diagnose common faults, preventive maintenance schedules, firmware updates, and field repair techniques.",
  },
  {
    module: 8,
    title: "Business Skills & Customer Management",
    icon: Users,
    description:
      "Quoting jobs, managing customer expectations, building your installer brand, and scaling your practice.",
  },
];

const WHO_ITS_FOR = [
  {
    title: "Licensed Electricians",
    description:
      "Add EV charger installation to your service portfolio and command premium rates.",
  },
  {
    title: "Electrical Contractors",
    description:
      "Train your team and win commercial EV infrastructure projects.",
  },
  {
    title: "Career Changers",
    description:
      "Transition into one of India's fastest-growing trades with hands-on certification.",
  },
  {
    title: "Engineering Graduates",
    description:
      "Kickstart your career with a practical, industry-recognized credential.",
  },
];

const WHAT_YOU_GET = [
  {
    icon: Award,
    title: "Industry-recognized certificate",
    description: "Verified credential accepted by top CPOs and OEMs across India.",
  },
  {
    icon: Briefcase,
    title: "Placement assistance",
    description: "Direct connections to hiring partners and active job opportunities.",
  },
  {
    icon: Network,
    title: "Access to HowElectric installer network",
    description: "Get listed on our platform and receive installation leads in your area.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing support community",
    description: "Join a private community of certified installers for peer support and updates.",
  },
];

/* ─── Page ─── */

export default function InstallerTrackPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-green/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 border-green/20 bg-green/10 text-green">
              Installer Track
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Become a certified{" "}
            <span className="text-green">EV charging installer</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Master EV charger installation from residential wall-boxes to
            commercial DC fast chargers. Get certified and start earning.
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
                <Wrench className="size-4" />
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
            subtitle="A comprehensive 4-week program blending online theory with hands-on practical sessions."
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
            title="8 comprehensive modules"
            subtitle="From fundamentals to business skills — everything you need to become a professional EV charger installer."
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
            subtitle="The Installer Track is designed for anyone looking to build a career in EV charger installation."
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

      {/* ── What You Get ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Benefits"
            title="What you get"
            subtitle="Beyond the curriculum — real career advantages that set you apart."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2">
            {WHAT_YOU_GET.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Ready to become a certified installer?"
          description="Enroll in the Installer Track and join India's growing network of certified EV charging professionals."
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
