"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  GraduationCap,
  Megaphone,
  HeadphonesIcon,
  Gift,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Steady Lead Flow",
    description:
      "Receive a consistent stream of qualified installation leads in your service area. No more chasing customers.",
  },
  {
    icon: DollarSign,
    title: "Premium Pricing",
    description:
      "Earn competitive rates for every job. Our standardised pricing ensures you are fairly compensated for quality work.",
  },
  {
    icon: GraduationCap,
    title: "Free Certification Training",
    description:
      "Access our comprehensive training program at no cost. Learn to install every major EV charger brand.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Get featured on our platform, receive branded materials, and benefit from our nationwide marketing campaigns.",
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Helpdesk",
    description:
      "24/7 technical support for complex installations. Our engineers are always available to help you on-site.",
  },
  {
    icon: Gift,
    title: "Quarterly Bonuses",
    description:
      "Earn performance bonuses based on job volume, customer ratings, and quality scores every quarter.",
  },
];

const HOW_TO_JOIN = [
  {
    step: 1,
    title: "Apply Online",
    description:
      "Fill out the partner application form with your qualifications, experience, and service area details.",
  },
  {
    step: 2,
    title: "Screening & Verification",
    description:
      "We verify your credentials, insurance, and background. This typically takes 3-5 business days.",
  },
  {
    step: 3,
    title: "Training & Certification",
    description:
      "Complete the HowElectric certification program — a mix of online modules and hands-on practical sessions.",
  },
  {
    step: 4,
    title: "Start Getting Jobs",
    description:
      "Once certified, you go live on our platform and start receiving installation leads in your area.",
  },
];

const REQUIREMENTS = [
  "Licensed electrician or electrical contractor",
  "Minimum 2 years experience",
  "Valid insurance",
  "Basic tools & equipment",
  "Willingness to complete HowElectric certification",
];

const TIERS = [
  {
    name: "Silver",
    range: "1-5 jobs/month",
    icon: Award,
    color: "border-gray-300",
    features: [
      "Standard lead allocation",
      "Base commission rates",
      "Online training access",
      "Email support",
    ],
  },
  {
    name: "Gold",
    range: "5-15 jobs/month",
    icon: Zap,
    color: "border-yellow-400",
    popular: true,
    features: [
      "Priority lead allocation",
      "Enhanced commission rates",
      "Advanced training modules",
      "Phone & chat support",
      "Marketing co-branding",
      "Quarterly bonus eligibility",
    ],
  },
  {
    name: "Platinum",
    range: "15+ jobs/month",
    icon: Shield,
    color: "border-purple",
    features: [
      "Exclusive territory assignment",
      "Highest commission tier",
      "All training & certifications",
      "Dedicated account manager",
      "Co-branded marketing campaigns",
      "Premium quarterly bonuses",
      "Early access to new products",
    ],
  },
];

/* ─── Page ─── */

export default function PartnerPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-purple/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-purple/10 text-purple border-purple/20">
              Partner Program
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Join India&apos;s largest{" "}
            <span className="text-purple">EV charging installer network</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Grow your electrical business with HowElectric. Get certified, get
            leads, get paid.
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
              <Link href="/services/partner">
                <Briefcase className="size-4" />
                Apply to Join
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/academy">
                Learn About Academy
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Benefits"
            title="Benefits of joining"
            subtitle="Everything you need to grow your electrical business with EV charger installations."
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

      {/* ── How to Join ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="How to join"
            subtitle="A simple four-step process to become a HowElectric certified installer."
          />

          <div className="mx-auto max-w-3xl">
            {HOW_TO_JOIN.map(({ step, title, description }, index) => (
              <ScrollReveal key={step} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {index < HOW_TO_JOIN.length - 1 && (
                    <div className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-purple/20" />
                  )}

                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-purple text-lg font-bold text-white">
                    {step}
                  </div>

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

      {/* ── Requirements ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Requirements"
            title="What you need to apply"
            subtitle="Make sure you meet these basic requirements before applying to join the network."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-8 shadow-card">
              <ul className="space-y-4">
                {REQUIREMENTS.map((requirement) => (
                  <li
                    key={requirement}
                    className="flex items-start gap-3 text-base"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-purple" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Partner Tiers ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Partner Tiers"
            title="Grow with the program"
            subtitle="The more you install, the more you earn. Advance through tiers to unlock exclusive benefits."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TIERS.map(
              ({ name, range, icon: Icon, color, popular, features }) => (
                <StaggerItem key={name}>
                  <motion.div
                    className={`group relative rounded-2xl border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover ${
                      popular
                        ? "border-purple ring-2 ring-purple/20"
                        : color
                    }`}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 24 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: DURATION.normal, ease: EASE.out }}
                  >
                    {popular && (
                      <div className="absolute -top-3 left-6">
                        <Badge className="bg-purple text-white">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-purple/10 text-purple">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="mt-1 text-sm font-medium text-purple">
                      {range}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-purple" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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
          headline="Ready to grow your business?"
          description="Join the HowElectric installer network and start receiving qualified EV charger installation leads today."
          primaryLabel="Apply to Join"
          primaryHref="/services/partner"
          secondaryLabel="Learn About Academy"
          secondaryHref="/academy"
          variant="dark"
        />
      </div>
    </>
  );
}
