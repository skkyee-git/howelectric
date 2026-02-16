"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  LayoutDashboard,
  CreditCard,
  Cable,
  Code,
  Puzzle,
  ArrowRight,
  PlayCircle,
  MessageSquare,
  Headphones,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";

const DOC_CATEGORIES = [
  {
    icon: Rocket,
    title: "Quick Start Guide",
    description: "Get your first charger online in 15 minutes",
    href: "/cms/docs",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Guide",
    description: "Navigate the CMS dashboard like a pro",
    href: "/cms/docs",
  },
  {
    icon: CreditCard,
    title: "Billing Setup",
    description: "Configure payments, pricing & GST invoicing",
    href: "/cms/docs",
  },
  {
    icon: Cable,
    title: "OCPP Configuration",
    description: "Connect any OCPP-compatible charger",
    href: "/cms/docs",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "RESTful API docs for developers",
    href: "/cms/api",
  },
  {
    icon: Puzzle,
    title: "Integration Guides",
    description: "Connect with payment gateways, fleet systems & more",
    href: "/cms/guides",
  },
] as const;

const GETTING_STARTED_STEPS = [
  { step: 1, label: "Create account" },
  { step: 2, label: "Add your first site" },
  { step: 3, label: "Connect a charger" },
  { step: 4, label: "Start billing" },
] as const;

const RESOURCES = [
  {
    icon: PlayCircle,
    title: "Video Tutorials",
    description: "Watch step-by-step video walkthroughs of every feature.",
    status: "Coming Soon",
  },
  {
    icon: MessageSquare,
    title: "Community Forum",
    description: "Connect with other CPOs and share best practices.",
    status: "Coming Soon",
  },
  {
    icon: Headphones,
    title: "Support Contact",
    description: "Reach our support team via email, chat, or phone.",
    status: "Available",
  },
] as const;

export default function CMSDocsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" as const, bounce: 0.3 }}
          >
            <Badge
              variant="secondary"
              className="mb-5 bg-gold/10 text-gold border border-gold/20"
            >
              Documentation
            </Badge>
            <h1>Everything you need to get started</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Guides, tutorials, and reference docs for the HowElectric CMS
              platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Documentation Categories ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Browse documentation"
            subtitle="Find the guide you need to get up and running quickly."
            badge="Categories"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOC_CATEGORIES.map(({ icon: Icon, title, description, href }) => (
              <StaggerItem key={title}>
                <Link
                  href={href}
                  className="group relative flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover lg:p-8"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Read guide <ArrowRight className="size-3.5" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Getting Started Steps ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Get started in 4 steps"
            subtitle="From sign-up to your first billing session in under 15 minutes."
            badge="Quick Start"
          />

          <ScrollReveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {GETTING_STARTED_STEPS.map(({ step, label }, i) => (
                <div key={step} className="relative text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gold/10">
                    <span className="text-xl font-bold text-gold">{step}</span>
                  </div>
                  <p className="mt-4 text-base font-semibold">{label}</p>
                  {i < GETTING_STARTED_STEPS.length - 1 && (
                    <div className="absolute right-0 top-7 hidden w-full translate-x-1/2 lg:block">
                      <ArrowRight className="mx-auto size-5 text-gold/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Additional resources"
            subtitle="Videos, community, and direct support to help you succeed."
            badge="Resources"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-3">
            {RESOURCES.map(({ icon: Icon, title, description, status }) => (
              <StaggerItem key={title}>
                <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-card lg:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                      <Icon className="size-6 text-gold" />
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        status === "Available"
                          ? "bg-green/10 text-green"
                          : "bg-gold/10 text-gold"
                      }
                    >
                      {status}
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Ready to get started?"
            description="Start your free trial today and follow our quick start guide to get your first charger online in minutes."
            primaryLabel="Start Free Trial"
            primaryHref="/cms/demo"
            secondaryLabel="Talk to Sales"
            secondaryHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
