"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  ArrowRight,
  MapPin,
  Video,
  BookOpen,
  Zap,
  Wrench,
  LayoutDashboard,
  ShieldCheck,
  HeadphonesIcon,
  Truck,
  Fuel,
  Landmark,
  Hotel,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const TRAINING_FORMATS = [
  {
    icon: MapPin,
    title: "On-site Workshops",
    duration: "1-3 days at your location",
    description:
      "Hands-on training delivered at your office or site by our certified trainers. Customized to your infrastructure and team needs.",
    features: [
      "Custom curriculum for your setup",
      "Hands-on with your equipment",
      "Team exercises and role-plays",
      "Printed training materials",
    ],
  },
  {
    icon: Video,
    title: "Virtual Instructor-led",
    duration: "Flexible scheduling",
    description:
      "Live online sessions with interactive Q&A, screen sharing, and breakout rooms. Perfect for distributed teams.",
    features: [
      "Live interactive sessions",
      "Flexible scheduling",
      "Recorded for future reference",
      "Works for distributed teams",
    ],
  },
  {
    icon: BookOpen,
    title: "Self-paced E-learning",
    duration: "Access for 12 months",
    description:
      "Comprehensive online modules with videos, quizzes, and certifications. Your team learns at their own pace.",
    features: [
      "12-month platform access",
      "Progress tracking dashboard",
      "Quizzes and assessments",
      "Completion certificates",
    ],
  },
];

const TRAINING_TOPICS = [
  {
    icon: Zap,
    title: "EV Fundamentals for Executives",
    description:
      "Strategic overview of EV charging for decision-makers — market trends, business models, and ROI frameworks.",
  },
  {
    icon: Wrench,
    title: "Technical Training for Operations",
    description:
      "Hands-on training for field teams covering installation, maintenance, and troubleshooting procedures.",
  },
  {
    icon: LayoutDashboard,
    title: "CMS Platform Training",
    description:
      "Master your charging management system — dashboards, billing, analytics, and remote management.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description:
      "Electrical safety standards, regulatory compliance, audit preparation, and incident response protocols.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Experience",
    description:
      "Train frontline staff on driver support, issue resolution, and delivering a premium charging experience.",
  },
  {
    icon: Truck,
    title: "Fleet Electrification",
    description:
      "Comprehensive training for fleet operators — depot charging, route planning, TCO modeling, and driver training.",
  },
];

const CLIENTS = [
  { icon: Building2, label: "Real estate developers" },
  { icon: Truck, label: "Fleet operators" },
  { icon: Fuel, label: "Oil marketing companies" },
  { icon: Landmark, label: "Government agencies" },
  { icon: Hotel, label: "Hospitality chains" },
  { icon: ShoppingBag, label: "Retail groups" },
];

/* ─── Page ─── */

export default function CorporateTrainingPage() {
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
              Corporate Training
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            EV charging training{" "}
            <span className="text-green">for your team</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Customized training programs for organizations deploying or managing
            EV charging infrastructure.
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
              <Link href="/consulting/book">
                <Building2 className="size-4" />
                Request Corporate Training
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

      {/* ── Training Formats ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Training Formats"
            title="Choose your delivery method"
            subtitle="Flexible training formats designed to fit your organization's schedule and learning preferences."
          />

          <StaggerGrid className="grid gap-6 lg:grid-cols-3">
            {TRAINING_FORMATS.map(
              ({ icon: Icon, title, duration, description, features }) => (
                <StaggerItem key={title}>
                  <motion.div
                    className="group h-full rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-8"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 24 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: DURATION.normal, ease: EASE.out }}
                  >
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-1 text-sm font-medium text-green">
                      {duration}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
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

      {/* ── Training Topics ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Training Topics"
            title="What we cover"
            subtitle="Modular training topics that can be combined and customized for your team's specific needs."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRAINING_TOPICS.map(({ icon: Icon, title, description }) => (
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

      {/* ── Clients We've Trained ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Clients"
            title="Organizations we've trained"
            subtitle="We've delivered customized EV charging training to teams across industries."
          />

          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENTS.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <motion.div
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-base font-semibold">{label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Pricing"
            title="Custom pricing for your team"
            subtitle="Pricing is based on team size, format, and training scope. Volume discounts available."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-green/20 bg-gradient-to-br from-green/5 to-transparent p-8 text-center shadow-card">
              <p className="text-lg text-muted-foreground">
                Custom based on team size and format
              </p>
              <p className="mt-4 text-2xl font-bold text-foreground">
                Volume discounts for 20+ participants
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-green px-8 font-semibold text-white hover:bg-green/90"
                >
                  <Link href="/consulting/book">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Train your team on EV charging"
          description="Get a customized training proposal for your organization. Contact us to discuss your team's needs and timeline."
          primaryLabel="Request Corporate Training"
          primaryHref="/consulting/book"
          secondaryLabel="View All Tracks"
          secondaryHref="/academy"
          variant="dark"
        />
      </div>
    </>
  );
}
