"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Mic2,
  Handshake,
  WrenchIcon,
  Clock,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DURATION } from "@/lib/animations";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";

const UPCOMING_EVENTS = [
  {
    title: "EV Infrastructure Summit 2025",
    date: "Mar 22-23, 2025",
    location: "New Delhi",
    description:
      "India's premier EV charging conference. 500+ attendees, 30+ speakers.",
    badge: "Conference",
    badgeIcon: Mic2,
    cta: "Register",
  },
  {
    title: "Hands-On Installation Workshop",
    date: "Apr 5, 2025",
    location: "Mumbai",
    description:
      "2-day practical workshop with live charger installation.",
    badge: "Workshop",
    badgeIcon: WrenchIcon,
    cta: "Register",
  },
  {
    title: "CPO Networking Meetup",
    date: "Monthly",
    location: "Bangalore, Delhi, Mumbai",
    description:
      "Monthly informal meetups for station operators.",
    badge: "Meetup",
    badgeIcon: Handshake,
    cta: "Join",
  },
];

const PAST_EVENTS = [
  {
    title: "EV Charging Conclave 2024",
    date: "Dec 2024",
    attendees: "400 attendees",
  },
  {
    title: "Installer Bootcamp",
    date: "Nov 2024",
    attendees: "60 participants",
  },
  {
    title: "State Policy Roundtable",
    date: "Oct 2024",
    attendees: "100 attendees",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050d18] pb-24 pt-32 lg:pb-32 lg:pt-40">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Aurora blobs */}
        <motion.div
          className="pointer-events-none absolute left-1/3 top-0 size-[600px] rounded-full bg-green/8 blur-[150px]"
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-1/4 size-[400px] rounded-full bg-green/5 blur-[120px]"
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 50, -60, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
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
              <span className="flex size-5 items-center justify-center rounded-full bg-green/20">
                <Calendar className="size-3 text-green" />
              </span>
              Events
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            EV charging{" "}
            <span className="bg-gradient-to-r from-green via-emerald-400 to-green bg-clip-text text-transparent">
              conferences, meetups & workshops
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Learn, connect, and grow at our in-person and virtual events across
            India.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Upcoming Events */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Upcoming events"
            subtitle="Register for our next events and be part of India's EV charging transformation."
            badge="Upcoming"
          />

          <StaggerGrid className="mt-12 grid gap-6 md:grid-cols-3">
            {UPCOMING_EVENTS.map((event) => (
              <StaggerItem key={event.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-green/10 text-green"
                    >
                      <event.badgeIcon className="mr-1 size-3" />
                      {event.badge}
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-xl font-bold">{event.title}</h3>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="size-4 text-green" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-4 text-green" />
                      {event.location}
                    </div>
                  </div>

                  <p className="mt-4 flex-1 text-sm text-muted-foreground">
                    {event.description}
                  </p>

                  <Button
                    asChild
                    className="mt-6 w-full bg-green font-semibold text-white hover:bg-green/90"
                  >
                    <Link href="https://howacademy.in/courses/ev-infrastructure/" target="_blank" rel="noopener noreferrer">
                      {event.cta}
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Past Events */}
      <section className="border-y border-border/50 bg-green/5 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Past events"
            subtitle="See what you missed and get a preview of what's to come."
            badge="Archive"
          />

          <StaggerGrid className="mt-12 grid gap-6 md:grid-cols-3">
            {PAST_EVENTS.map((event) => (
              <StaggerItem key={event.title}>
                <div className="group flex flex-col rounded-xl border border-border/50 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-muted-foreground">
                      {event.date}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="size-3" />
                      {event.attendees}
                    </div>
                  </div>

                  <h3 className="mt-3 text-base font-bold">{event.title}</h3>

                  <Link
                    href="/academy/events"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green transition-colors hover:text-green/80"
                  >
                    <Eye className="size-4" />
                    View Highlights
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-border/50 bg-white p-8 shadow-card md:flex md:items-center md:gap-8 md:p-12">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-green/10">
                <Mic2 className="size-8 text-green" />
              </div>

              <div className="mt-6 flex-1 md:mt-0">
                <h3 className="text-2xl font-bold">Host an event with us</h3>
                <p className="mt-2 text-muted-foreground">
                  Want to host an EV charging event with HowElectric? We provide
                  speakers, content, and sponsorship.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="mt-6 bg-green font-semibold text-white hover:bg-green/90 md:mt-0"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Never miss an event"
            description="Subscribe to our newsletter and get event announcements, early-bird registration, and exclusive content delivered to your inbox."
            primaryLabel="Stay Updated"
            primaryHref="/academy/newsletter"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
