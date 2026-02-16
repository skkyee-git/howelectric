"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Newspaper,
  Calendar,
  ArrowRight,
  Download,
  Image,
  FileText,
  Palette,
  Mail,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DURATION, STAGGER } from "@/lib/animations";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const PRESS_RELEASES = [
  {
    date: "January 2025",
    headline:
      "HowElectric Crosses 200 Charging Stations on Its CMS Platform",
    summary:
      "A major milestone as our cloud-based Charging Management System now powers 200+ stations across India with real-time monitoring and OCPP 2.0.1 support.",
  },
  {
    date: "November 2024",
    headline:
      "HowElectric Launches Academy for EV Charging Professionals",
    summary:
      "India's first comprehensive certification program for EV charging installers, operators, and consultants goes live with 500+ enrolled students.",
  },
  {
    date: "September 2024",
    headline:
      "HowElectric Expands to 150+ Cities Across India",
    summary:
      "Our nationwide installer network now covers 150+ cities, enabling pan-India EV charging installations with consistent quality standards.",
  },
  {
    date: "June 2024",
    headline:
      "HowElectric Raises Seed Funding for EV Infrastructure Platform",
    summary:
      "Seed round secured to accelerate product development across consulting, CMS, marketplace, and academy verticals.",
  },
];

const MEDIA_KIT_ITEMS = [
  { icon: Image, label: "High-res logos & images" },
  { icon: Palette, label: "Brand guidelines" },
  { icon: FileText, label: "Company fact sheet" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.2,
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PressPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050d18] py-28 sm:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/3 top-0 size-[600px] rounded-full bg-electric-blue/10 blur-[150px]"
          animate={{ x: [0, 50, -40, 0], y: [0, -50, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-electric-blue/20">
                <Newspaper className="size-3 text-electric-blue" />
              </span>
              Press
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
          >
            HowElectric{" "}
            <span className="bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent">
              in the news
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: DURATION.slow }}
          >
            The latest announcements, milestones, and media coverage from
            HowElectric.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Press Releases ───────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Press Releases"
            title="Latest announcements"
            subtitle="Key milestones and updates from HowElectric."
          />

          <motion.div
            className="mt-14 grid gap-8 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {PRESS_RELEASES.map(({ date, headline, summary }) => (
              <motion.article
                key={headline}
                variants={cardVariants}
                className="group flex flex-col rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="size-4 text-electric-blue" />
                  {date}
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">
                  {headline}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {summary}
                </p>
                <Link
                  href="/press"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-electric-blue transition-colors hover:text-electric-blue/80"
                >
                  Read More
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Media Kit ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              badge="Media Kit"
              title="Download our brand assets"
              subtitle="Everything you need for press coverage and media features."
            />

            <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-3">
              {MEDIA_KIT_ITEMS.map(({ icon: Icon, label }) => (
                <StaggerItem key={label}>
                  <div className="flex flex-col items-center rounded-2xl border border-border/50 bg-white p-8 shadow-sm">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-electric-blue/10">
                      <Icon className="size-6 text-electric-blue" />
                    </div>
                    <p className="mt-4 text-sm font-medium">{label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <ScrollReveal className="mt-10">
              <Button asChild size="lg" className="bg-electric-blue text-white hover:bg-electric-blue/90">
                <Link href="/press">
                  <Download className="mr-2 size-4" />
                  Download Media Kit
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Press Contact ────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-electric-blue/10">
              <Mail className="size-8 text-electric-blue" />
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
              Press Contact
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              For media inquiries, reach us at{" "}
              <a
                href="mailto:press@howelectric.com"
                className="font-medium text-electric-blue underline-offset-4 hover:underline"
              >
                press@howelectric.com
              </a>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We typically respond within 24 hours on business days.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Have a media inquiry?"
          description="Our press team is happy to assist with interviews, quotes, and company information."
          primaryLabel="Contact Press Team"
          primaryHref="/contact"
          secondaryLabel="Download Media Kit"
          secondaryHref="/press"
          variant="dark"
        />
      </div>
    </>
  );
}
