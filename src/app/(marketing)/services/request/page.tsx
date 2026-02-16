"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
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
    icon: Phone,
    title: "Phone",
    detail: "+91 1800-XXX-XXXX",
    description: "Mon-Sat, 9 AM - 7 PM IST",
    href: "tel:+911800XXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "services@howelectric.com",
    description: "We respond within 24 hours",
    href: "mailto:services@howelectric.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "+91 98XXX XXXXX",
    description: "Quick chat with our team",
    href: "https://wa.me/919XXXXXXXXX",
  },
];

const WHAT_HAPPENS_NEXT = [
  {
    step: 1,
    title: "Submit Request",
    description:
      "Fill in your requirements and submit. It takes less than 2 minutes.",
  },
  {
    step: 2,
    title: "We Review & Contact You Within 24 Hrs",
    description:
      "Our team reviews your request and reaches out to confirm details and answer questions.",
  },
  {
    step: 3,
    title: "Site Survey Scheduled",
    description:
      "A certified technician visits your site to assess requirements and electrical infrastructure.",
  },
  {
    step: 4,
    title: "Detailed Quote Delivered",
    description:
      "You receive a transparent, itemised quote with timeline and installation scope.",
  },
];

/* ─── Page ─── */

export default function RequestPage() {
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
              Get Started
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Request a{" "}
            <span className="text-purple">service</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Tell us what you need and we&apos;ll get back to you within 24 hours
            with a detailed quote.
          </motion.p>
        </div>
      </section>

      {/* ── Form Teaser ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Service Request"
            title="Tell us about your needs"
            subtitle="Fill in the details below and our team will prepare a personalised quote for you."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-8 shadow-card">
              {/* Service Type */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Service Type
                </label>
                <div className="relative">
                  <select
                    className="h-12 w-full appearance-none rounded-lg border border-border bg-light-gray px-4 pr-10 text-sm text-muted-foreground outline-none focus:border-purple focus:ring-2 focus:ring-purple/20"
                    disabled
                  >
                    <option>Installation</option>
                    <option>AMC</option>
                    <option>Emergency Repair</option>
                    <option>Upgrade</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    className="h-12 w-full appearance-none rounded-lg border border-border bg-light-gray px-4 pr-10 text-sm text-muted-foreground outline-none focus:border-purple focus:ring-2 focus:ring-purple/20"
                    disabled
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Fleet</option>
                    <option>Public</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              {/* City / Location */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bangalore, Mumbai..."
                  className="h-12 w-full rounded-lg border border-border bg-light-gray px-4 text-sm outline-none focus:border-purple focus:ring-2 focus:ring-purple/20"
                  readOnly
                />
              </div>

              {/* Number of Chargers */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Number of Chargers
                </label>
                <div className="relative">
                  <select
                    className="h-12 w-full appearance-none rounded-lg border border-border bg-light-gray px-4 pr-10 text-sm text-muted-foreground outline-none focus:border-purple focus:ring-2 focus:ring-purple/20"
                    disabled
                  >
                    <option>1-5</option>
                    <option>5-20</option>
                    <option>20-50</option>
                    <option>50+</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Message / Details
                </label>
                <textarea
                  placeholder="Tell us more about your requirements..."
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-light-gray px-4 py-3 text-sm outline-none focus:border-purple focus:ring-2 focus:ring-purple/20"
                  readOnly
                />
              </div>

              {/* Submit Button */}
              <Button
                size="lg"
                disabled
                className="w-full bg-purple font-semibold text-white opacity-60"
              >
                <Send className="size-4" />
                Submit Request
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Coming Soon — Online form submission will be available shortly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Alternative Contact ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Contact Us"
            title="Prefer to talk directly?"
            subtitle="Reach out through any of these channels and we'll help you get started."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-3">
            {CONTACT_METHODS.map(
              ({ icon: Icon, title, detail, description, href }) => (
                <StaggerItem key={title}>
                  <motion.a
                    href={href}
                    className="group block rounded-2xl border border-border bg-white p-6 text-center shadow-card transition-shadow hover:shadow-card-hover"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 24 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: DURATION.normal, ease: EASE.out }}
                  >
                    <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-purple/10 text-purple transition-colors group-hover:bg-purple group-hover:text-white">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 font-medium text-purple">{detail}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {description}
                    </p>
                  </motion.a>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Next Steps"
            title="What happens next"
            subtitle="Once you reach out, here's how the process unfolds."
          />

          <div className="mx-auto max-w-3xl">
            {WHAT_HAPPENS_NEXT.map(({ step, title, description }, index) => (
              <ScrollReveal key={step} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {index < WHAT_HAPPENS_NEXT.length - 1 && (
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

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Need help deciding?"
          description="Book a free consultation with our EV charging experts and get personalised recommendations."
          primaryLabel="Talk to Us Now"
          primaryHref="/consulting/book"
          variant="dark"
        />
      </div>
    </>
  );
}
