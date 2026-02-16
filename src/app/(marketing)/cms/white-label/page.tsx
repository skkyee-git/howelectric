"use client";

import Link from "next/link";
import {
  Smartphone,
  Globe,
  Link2,
  FileText,
  Mail,
  Palette,
  ArrowRight,
  Upload,
  Settings,
  Eye,
  Rocket,
  Fuel,
  Network,
  Building2,
  Store,
  Landmark,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Data ─── */

const FEATURES = [
  {
    icon: Smartphone,
    title: "Custom Branded Driver App",
    description:
      "A fully branded mobile app for your drivers with your logo, colors, and app store listing under your brand name.",
  },
  {
    icon: Globe,
    title: "Branded Web Portal",
    description:
      "A driver-facing web portal hosted on your domain with complete visual customization to match your brand identity.",
  },
  {
    icon: Link2,
    title: "Custom Domain",
    description:
      "Host your charging portal on your own domain — e.g., charging.yourbrand.com — for a seamless brand experience.",
  },
  {
    icon: FileText,
    title: "Your Logo on Receipts & Invoices",
    description:
      "Every receipt, invoice, and financial document carries your brand identity, not ours.",
  },
  {
    icon: Mail,
    title: "Branded Email Notifications",
    description:
      "Session confirmations, payment receipts, and alerts sent from your domain with your branding and tone.",
  },
  {
    icon: Palette,
    title: "Custom Color Scheme",
    description:
      "Complete color theming across the driver app, web portal, and all customer-facing touchpoints.",
  },
];

const STEPS = [
  {
    number: "01",
    icon: Upload,
    title: "Share Brand Assets",
    description:
      "Send us your logo, brand colors, fonts, and any style guidelines. We handle the rest.",
  },
  {
    number: "02",
    icon: Settings,
    title: "We Configure Your Instance",
    description:
      "Our team sets up your fully branded CMS instance, driver app, web portal, and email templates.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Review & Approve",
    description:
      "Preview your branded experience across all touchpoints. Request revisions until it is perfect.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch Under Your Brand",
    description:
      "Go live with your own branded EV charging platform. Your customers see your brand at every step.",
  },
];

const WHO_ITS_FOR = [
  {
    icon: Fuel,
    title: "Oil Marketing Companies",
    description:
      "OMCs adding EV charging to their fuel retail network need a seamless brand experience at the pump.",
  },
  {
    icon: Network,
    title: "Large CPOs",
    description:
      "Charge Point Operators building a recognizable brand across a wide charging network.",
  },
  {
    icon: Building2,
    title: "Real Estate Groups",
    description:
      "Property developers offering branded EV charging as a premium amenity across their portfolio.",
  },
  {
    icon: Store,
    title: "Franchise Brands",
    description:
      "Franchise networks deploying chargers under a unified brand identity across all locations.",
  },
  {
    icon: Landmark,
    title: "Government Agencies",
    description:
      "Public sector organizations deploying EV infrastructure under government or city branding.",
  },
];

/* ─── Page ─── */

export default function WhiteLabelPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 text-center lg:px-8 lg:pb-20 lg:pt-32">
          <ScrollReveal>
            <Badge
              variant="secondary"
              className="mb-6 bg-gold/10 text-gold"
            >
              White-Label
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your brand, powered by{" "}
              <span className="text-gold">our platform</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Launch a fully branded EV charging experience — your logo, your
              colors, your domain. Every driver touchpoint looks and feels like
              your own product.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold px-8 font-semibold text-white hover:bg-gold/90"
              >
                <Link href="/consulting/book">
                  Get White-Label Quote
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cms/demo">See a Demo</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-sm text-muted-foreground">
              Add-on to Multi-Site or Enterprise plans &middot; Starting at
              &#8377;15,000/month
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What You Get"
            title="Complete brand ownership"
            subtitle="Every customer-facing touchpoint is fully branded — from the mobile app to email receipts."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <feature.icon className="size-6 text-gold" />
                  </div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="From brand assets to launch"
            subtitle="A streamlined process to get your branded charging platform live in weeks, not months."
          />

          <div className="mx-auto max-w-4xl">
            <StaggerGrid className="relative space-y-0">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-gold/20 md:block" />

              {STEPS.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="relative flex gap-6 py-6 md:py-8">
                    {/* Step circle */}
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-white">
                      <step.icon className="size-5 text-gold" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-gold">
                        Step {step.number}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Who It's For"
            title="Built for brands that own the experience"
            subtitle="If your customers should see your brand — not a third-party platform — White-Label is for you."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_ITS_FOR.map((persona) => (
              <StaggerItem key={persona.title}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <persona.icon className="size-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold">{persona.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {persona.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border-2 border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-8 text-center sm:p-12">
              <Badge
                variant="secondary"
                className="mb-4 bg-gold/10 text-gold"
              >
                White-Label Pricing
              </Badge>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-lg text-muted-foreground">
                  Starting at
                </span>
              </div>
              <div className="mt-1 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold tracking-tight">
                  &#8377;15,000
                </span>
                <span className="text-lg text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-muted-foreground">
                Add-on to Multi-Site or Enterprise plans &middot; Custom quotes
                available for larger deployments
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold px-8 font-semibold text-white hover:bg-gold/90"
                >
                  <Link href="/consulting/book">
                    Get White-Label Quote
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/cms/pricing">View All Plans</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Make it yours — from app to receipt"
          description="Get a white-label quote tailored to your brand and scale. Our team will walk you through the process."
          primaryLabel="Get White-Label Quote"
          primaryHref="/consulting/book"
          secondaryLabel="Book a Demo"
          secondaryHref="/cms/demo"
          variant="dark"
        />
      </section>
    </>
  );
}
