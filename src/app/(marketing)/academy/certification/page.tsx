"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
  Wrench,
  Monitor,
  Briefcase,
  CheckCircle2,
  BadgeCheck,
  BookOpen,
  Network,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const CERTIFICATIONS = [
  {
    title: "Certified Installer",
    duration: "4 weeks",
    fee: "\u20B915,000",
    tag: "Most hands-on",
    icon: Wrench,
    href: "https://howacademy.in/courses/ev-infrastructure/",
    description:
      "Master EV charger installation from residential wall-boxes to commercial DC fast chargers.",
    highlights: [
      "8 practical modules",
      "Weekend schedule",
      "Online + hands-on format",
      "Placement assistance included",
    ],
  },
  {
    title: "Certified Operator",
    duration: "3 weeks",
    fee: "\u20B912,000",
    tag: "Most practical",
    icon: Monitor,
    href: "https://howacademy.in/courses/ev-infrastructure/",
    description:
      "Learn to manage, maintain, and grow an EV charging business from day one.",
    highlights: [
      "8 operations modules",
      "Self-paced + live sessions",
      "CMS platform training",
      "Growth strategy frameworks",
    ],
  },
  {
    title: "Certified Consultant",
    duration: "6 weeks",
    fee: "\u20B925,000",
    tag: "Most strategic",
    icon: Briefcase,
    href: "https://howacademy.in/courses/ev-infrastructure/",
    description:
      "Advise businesses on EV charging strategy, feasibility, and regulatory compliance.",
    highlights: [
      "8 strategic modules",
      "Live classes + case studies",
      "Financial modeling skills",
      "Build your consulting practice",
    ],
  },
];

const BENEFITS = [
  {
    icon: BadgeCheck,
    title: "Recognized by 100+ employers",
    description:
      "Our certifications are accepted by leading CPOs, OEMs, and energy companies across India.",
  },
  {
    icon: Briefcase,
    title: "Access to job board",
    description:
      "Exclusive access to curated EV charging job opportunities from our hiring partners.",
  },
  {
    icon: BookOpen,
    title: "Continuing education credits",
    description:
      "Earn continuing education credits to stay current with evolving EV technology and standards.",
  },
  {
    icon: Network,
    title: "Alumni network access",
    description:
      "Join a growing community of certified professionals for networking and collaboration.",
  },
  {
    icon: RefreshCcw,
    title: "Annual renewal support",
    description:
      "Streamlined renewal process with refresher courses to keep your certification up to date.",
  },
];

const STATS = [
  { value: "2,000+", label: "Certified professionals" },
  { value: "95%", label: "Employment rate" },
  { value: "40%", label: "Average salary increase" },
];

/* ─── Page ─── */

export default function CertificationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-green/5 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 size-[400px] rounded-full bg-green/3 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 border-green/20 bg-green/10 text-green">
              Certifications
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Industry-recognized{" "}
            <span className="text-green">EV certifications</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Get certified and stand out in India&apos;s fastest-growing
            industry.
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
              <Link href="#certifications">
                <Award className="size-4" />
                Explore Certifications
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

      {/* ── Certification Cards ── */}
      <section id="certifications" className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Choose Your Certification"
            title="3 certification tracks"
            subtitle="Each certification is designed for a specific career path in the EV charging industry."
          />

          <StaggerGrid className="grid gap-6 lg:grid-cols-3">
            {CERTIFICATIONS.map(
              ({
                title,
                duration,
                fee,
                tag,
                icon: Icon,
                href,
                description,
                highlights,
              }) => (
                <StaggerItem key={title}>
                  <motion.div
                    className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-8"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 24 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: DURATION.normal, ease: EASE.out }}
                  >
                    {/* Tag */}
                    <div className="absolute -top-3 left-6">
                      <Badge className="border-0 bg-green px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-green/25">
                        {tag}
                      </Badge>
                    </div>

                    {/* Icon + Title */}
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-green/10 text-green">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {duration} &middot; {fee}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-6 flex flex-1 flex-col gap-3">
                      {highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-green font-semibold text-white hover:bg-green/90"
                      >
                        <Link href={href} target="_blank" rel="noopener noreferrer">
                          View Track Details
                          <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Certification Benefits ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Benefits"
            title="Why get certified?"
            subtitle="A HowElectric certification gives you more than knowledge — it opens doors."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                    <Icon className="size-5" />
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

      {/* ── Verification ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Verification"
            title="Employer-verifiable credentials"
            subtitle="Every certificate comes with a unique ID that employers can independently verify."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-green/20 bg-white p-8 text-center shadow-card">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-green/10 text-green">
                <ShieldCheck className="size-8" />
              </div>
              <p className="text-lg font-semibold text-foreground">
                Verify any HowElectric certificate
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every certificate has a unique ID that employers can verify at{" "}
                <span className="font-medium text-green">
                  howelectric.com/verify
                </span>
                . Our verification system confirms the holder&apos;s name,
                certification track, date of issue, and current validity status.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Impact"
            title="Certification by the numbers"
            subtitle="Our graduates are making an impact across India's EV charging industry."
          />

          <ScrollReveal>
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  className="rounded-2xl border border-green/20 bg-gradient-to-br from-green/5 to-transparent p-8 text-center shadow-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.1,
                    duration: DURATION.normal,
                    ease: EASE.out,
                  }}
                >
                  <p className="text-3xl font-bold text-green">{value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Choose your certification track"
          description="Join 2,000+ certified professionals and accelerate your career in India's fastest-growing energy sector."
          primaryLabel="Choose Your Track"
          primaryHref="https://howacademy.in/courses/ev-infrastructure/"
          variant="dark"
        />
      </div>
    </>
  );
}
