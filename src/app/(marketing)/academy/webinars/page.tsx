"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Play,
  Radio,
  Users,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const UPCOMING_WEBINARS = [
  {
    title: "EV Charging Business Masterclass 2025",
    date: "Feb 28, 2025",
    time: "4 PM IST",
    speaker: "HowElectric Team",
    price: "Free",
    href: "https://howacademy.in/courses/ev-infrastructure/",
  },
  {
    title: "Understanding OCPP 2.0.1 for CPOs",
    date: "Mar 15, 2025",
    time: "3 PM IST",
    speaker: "Technical Team",
    price: "Free",
    href: "https://howacademy.in/courses/ev-infrastructure/",
  },
];

const PAST_WEBINARS = [
  {
    title: "Starting Your First Charging Station",
    date: "Dec 2024",
    views: "1,200",
    href: "/academy/webinars",
  },
  {
    title: "Subsidy Landscape for EV Charging",
    date: "Nov 2024",
    views: "980",
    href: "/academy/webinars",
  },
  {
    title: "CMS Platform Deep Dive",
    date: "Oct 2024",
    views: "750",
    href: "/academy/webinars",
  },
  {
    title: "Fleet Electrification Strategies",
    date: "Sep 2024",
    views: "620",
    href: "/academy/webinars",
  },
];

/* ─── Page ─── */

export default function AcademyWebinarsPage() {
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
              <Video className="mr-1.5 size-3" />
              Webinars
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Live & recorded{" "}
            <span className="text-green">expert sessions</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Learn directly from industry experts through live masterclasses and
            on-demand recordings covering every aspect of EV charging.
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
              <Link href="#upcoming">
                <Radio className="size-4" />
                View Upcoming
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#past">
                <Play className="size-4" />
                Watch Recordings
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Upcoming Webinars ── */}
      <section id="upcoming" className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Upcoming"
            title="Register for upcoming sessions"
            subtitle="Secure your spot in our next live webinar. All sessions include Q&A with our experts."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-2">
            {UPCOMING_WEBINARS.map(
              ({ title, date, time, speaker, price, href }) => (
                <StaggerItem key={title}>
                  <motion.div
                    className="relative overflow-hidden rounded-2xl border-2 border-green/20 bg-white shadow-card"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring" as const, stiffness: 300 }}
                  >
                    {/* Live indicator */}
                    <div className="absolute right-4 top-4">
                      <span className="flex items-center gap-1.5 rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">
                        <span className="size-2 animate-pulse rounded-full bg-green" />
                        Upcoming
                      </span>
                    </div>

                    {/* Gradient header */}
                    <div className="h-3 bg-gradient-to-r from-green via-green/80 to-teal" />

                    <div className="p-8">
                      <h3 className="text-xl font-bold text-foreground md:text-2xl">
                        {title}
                      </h3>

                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Calendar className="size-4 shrink-0 text-green" />
                          <span>
                            {date} at {time}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Users className="size-4 shrink-0 text-green" />
                          <span>Speaker: {speaker}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Badge className="bg-green/10 text-green border-green/20">
                            {price}
                          </Badge>
                        </div>
                      </div>

                      <Button
                        asChild
                        size="lg"
                        className="mt-8 w-full bg-green font-semibold text-white hover:bg-green/90"
                      >
                        <Link href={href} target="_blank" rel="noopener noreferrer">
                          Register Now
                          <ArrowRight className="size-4" />
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

      {/* ── Past Webinars ── */}
      <section id="past" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="On Demand"
            title="Past recordings"
            subtitle="Catch up on sessions you missed. All recordings are available on demand."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PAST_WEBINARS.map(({ title, date, views, href }) => (
              <StaggerItem key={title}>
                <Link href={href} className="group block h-full">
                  <motion.div
                    className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-shadow group-hover:shadow-card-hover"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring" as const, stiffness: 300 }}
                  >
                    {/* Thumbnail placeholder */}
                    <div className="relative h-40 bg-gradient-to-br from-green/15 via-teal/10 to-electric-blue/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex size-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                          <Play className="size-6 text-green ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="flex-1 text-base font-semibold text-foreground leading-snug">
                        {title}
                      </h4>
                      <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="size-3.5" />
                          {date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Eye className="size-3.5" />
                          {views} views
                        </span>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-green">
                        Watch Recording
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Get notified about webinars"
          description="Subscribe to be the first to know about upcoming live sessions, new recordings, and exclusive masterclasses."
          primaryLabel="Get Notified"
          primaryHref="/academy/newsletter"
          secondaryLabel="Browse All Webinars"
          secondaryHref="/academy/webinars"
          variant="dark"
        />
      </div>
    </>
  );
}
