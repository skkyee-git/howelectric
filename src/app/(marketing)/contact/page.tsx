"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Headset,
  ArrowRight,
  MapPin,
  Calendar,
  Wrench,
  Monitor,
  Send,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@howelectric.com",
    description: "For general inquiries",
    href: "mailto:hello@howelectric.com",
  },
  {
    icon: Phone,
    title: "Sales",
    value: "sales@howelectric.com",
    description: "For consulting & enterprise",
    href: "mailto:sales@howelectric.com",
  },
  {
    icon: Headset,
    title: "Support",
    value: "support@howelectric.com",
    description: "For CMS & technical help",
    href: "mailto:support@howelectric.com",
  },
];

const QUICK_LINKS = [
  {
    icon: Calendar,
    title: "Book a Consultation",
    description: "Schedule a free strategy call with our EV charging experts.",
    href: "/consulting/book",
  },
  {
    icon: Wrench,
    title: "Request Installation",
    description: "Submit a request for professional charger installation.",
    href: "/services/request",
  },
  {
    icon: Monitor,
    title: "CMS Demo",
    description: "See our charging management platform in action.",
    href: "/cms/demo",
  },
];

/* ─── Page ─── */

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-electric-blue/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-electric-blue/10 text-electric-blue border-electric-blue/20">
              Contact
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Get in touch with{" "}
            <span className="text-electric-blue">HowElectric</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Whether you have a question about our services, need technical
            support, or want to explore a partnership — we&apos;re here to help.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Method Cards ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Reach Out"
            title="Choose how to connect"
            subtitle="Pick the channel that best fits your needs. We typically respond within 24 hours."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-3">
            {CONTACT_METHODS.map(
              ({ icon: Icon, title, value, description, href }) => (
                <StaggerItem key={title}>
                  <a
                    href={href}
                    className="group flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <div className="flex size-16 items-center justify-center rounded-2xl bg-electric-blue/10">
                      <Icon className="size-8 text-electric-blue" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                    <p className="mt-2 font-medium text-electric-blue">
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {description}
                    </p>
                    <ArrowRight className="mt-4 size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-electric-blue" />
                  </a>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Contact Form Teaser ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeader
            badge="Contact Form"
            title="Send us a message"
            subtitle="Our contact form is launching soon. In the meantime, reach out via email above."
          />

          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <div className="h-10 rounded-md border border-border bg-light-gray px-3" />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <div className="h-10 rounded-md border border-border bg-light-gray px-3" />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <div className="h-10 rounded-md border border-border bg-light-gray px-3" />
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <div className="flex h-10 items-center justify-between rounded-md border border-border bg-light-gray px-3">
                    <span className="text-sm text-muted-foreground">
                      General
                    </span>
                    <ChevronDown className="size-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <div className="h-32 rounded-md border border-border bg-light-gray px-3" />
              </div>

              {/* Submit */}
              <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-muted-foreground">
                  <Badge
                    variant="secondary"
                    className="mr-2 bg-electric-blue/10 text-electric-blue"
                  >
                    Coming Soon
                  </Badge>
                  Form submissions will be enabled shortly.
                </p>
                <Button disabled size="lg" className="gap-2">
                  <Send className="size-4" />
                  Send Message
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Office Section ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Office"
            title="HowElectric — Headquartered in India"
            subtitle="Building India's EV charging future from the ground up."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8 text-center shadow-card">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-electric-blue/10">
                <MapPin className="size-8 text-electric-blue" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                India-based, serving nationwide
              </h3>
              <p className="mt-2 text-muted-foreground">
                Our team operates across India, delivering EV charging
                consulting, installation, and CMS solutions to clients in 150+
                cities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Quick Actions"
            title="Get started faster"
            subtitle="Jump directly to what you need."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-3">
            {QUICK_LINKS.map(({ icon: Icon, title, description, href }) => (
              <StaggerItem key={title}>
                <Link
                  href={href}
                  className="group flex flex-col rounded-2xl border border-border bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-electric-blue/10">
                    <Icon className="size-6 text-electric-blue" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric-blue">
                    Get Started
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Book a Consultation"
          description="Ready to start your EV charging journey? Schedule a free consultation with our experts and get a custom roadmap."
          primaryLabel="Book a Consultation"
          primaryHref="/consulting/book"
          secondaryLabel="Explore Services"
          secondaryHref="/services"
          variant="dark"
        />
      </div>
    </>
  );
}
