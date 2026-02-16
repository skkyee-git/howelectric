"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Newspaper,
  ArrowRight,
  Calendar,
  Download,
  Mail,
  ExternalLink,
  Image,
  FileText,
  Palette,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const PRESS_RELEASES = [
  {
    date: "January 2026",
    title: "HowElectric Crosses 200+ Consulting Projects Milestone",
    description:
      "India's leading EV charging platform announces completion of 200+ consulting engagements across 15+ states.",
    tag: "Milestone",
  },
  {
    date: "November 2025",
    title: "HowElectric Launches Academy Certification Program",
    description:
      "New industry-recognized certification program aims to train 10,000 EV charging professionals by 2027.",
    tag: "Product Launch",
  },
  {
    date: "August 2025",
    title: "HowElectric CMS Manages 200+ Charging Stations",
    description:
      "Cloud-based charging management system now powers operations for CPOs across India.",
    tag: "Growth",
  },
  {
    date: "May 2025",
    title: "HowElectric Expands Installation Services to 150 Cities",
    description:
      "National rollout brings professional EV charger installation to tier-2 and tier-3 cities.",
    tag: "Expansion",
  },
];

const MEDIA_KIT_ITEMS = [
  {
    icon: Image,
    title: "Logo Pack",
    description: "HowElectric logos in SVG, PNG, and EPS formats for light and dark backgrounds.",
  },
  {
    icon: FileText,
    title: "Fact Sheet",
    description: "Company overview, key metrics, leadership bios, and mission statement.",
  },
  {
    icon: Palette,
    title: "Brand Guidelines",
    description: "Colors, typography, imagery standards, and usage guidelines for HowElectric brand.",
  },
];

/* ─── Page ─── */

export default function PressPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-electric-blue/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-electric-blue/10 text-electric-blue border-electric-blue/20">
              Press
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            <span className="text-electric-blue">HowElectric</span> in the news
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Read the latest announcements, press releases, and media coverage
            about HowElectric and India&apos;s EV charging revolution.
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
              className="bg-electric-blue px-6 font-semibold text-white hover:bg-electric-blue/90"
            >
              <a href="#media-kit">
                <Download className="size-4" />
                Media Kit
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                <Mail className="size-4" />
                Press Inquiries
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Press Releases ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Press Releases"
            title="Latest announcements"
            subtitle="Stay up to date with HowElectric's milestones, product launches, and company news."
          />

          <StaggerGrid className="grid gap-6 md:grid-cols-2">
            {PRESS_RELEASES.map(({ date, title, description, tag }) => (
              <StaggerItem key={title}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="size-3.5" />
                      {date}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-electric-blue/10 text-electric-blue text-xs"
                    >
                      {tag}
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>

                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-electric-blue">
                      Read More
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Media Kit ── */}
      <section id="media-kit" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Media Kit"
            title="Brand assets & resources"
            subtitle="Download logos, brand guidelines, and company fact sheets for editorial use."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-3">
            {MEDIA_KIT_ITEMS.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-card transition-shadow hover:shadow-card-hover">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-electric-blue/10">
                    <Icon className="size-8 text-electric-blue" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-5 gap-1"
                    disabled
                  >
                    <Download className="size-3.5" />
                    Download
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Press Contact ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Press Contact"
            title="Get in touch with our press team"
            subtitle="For media inquiries, interview requests, and press coverage opportunities."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8 text-center shadow-card">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-electric-blue/10">
                <Newspaper className="size-8 text-electric-blue" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Press & Media</h3>
              <p className="mt-2 text-muted-foreground">
                For all press and media inquiries, please reach out to our
                communications team.
              </p>
              <a
                href="mailto:press@howelectric.com"
                className="mt-3 inline-flex items-center gap-1 font-medium text-electric-blue hover:underline"
              >
                press@howelectric.com
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Contact Press Team"
          description="Have a story about EV charging in India? We'd love to hear from you. Reach out to our press team for interviews, data, and commentary."
          primaryLabel="Contact Press Team"
          primaryHref="/contact"
          secondaryLabel="About HowElectric"
          secondaryHref="/about"
          variant="dark"
        />
      </div>
    </>
  );
}
