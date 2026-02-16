"use client";

import Link from "next/link";
import {
  Infinity as InfinityIcon,
  LayoutDashboard,
  BarChart3,
  DollarSign,
  CreditCard,
  HeadphonesIcon,
  Code2,
  Palette,
  ArrowRight,
  MapPin,
  Building2,
  Network,
  CheckCircle2,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Data ─── */

const INCLUDED = [
  {
    icon: InfinityIcon,
    title: "Unlimited Chargers",
    description:
      "No cap on the number of chargers you can connect. Scale freely across all your locations.",
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Location Dashboard",
    description:
      "A single pane of glass for all your sites. Filter by location, compare performance, and drill into specifics.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Reports",
    description:
      "Custom reports, trend analysis, revenue forecasts, and exportable data for every location.",
  },
  {
    icon: DollarSign,
    title: "Dynamic Pricing",
    description:
      "Set time-of-use pricing, demand-based rates, and location-specific tariffs to maximize revenue.",
  },
  {
    icon: CreditCard,
    title: "RFID Management",
    description:
      "Issue and manage RFID cards for fleet drivers, employees, or priority customers with custom access groups.",
  },
  {
    icon: HeadphonesIcon,
    title: "Priority Support",
    description:
      "Dedicated support queue with 4-hour response SLA during business hours. Phone and email.",
  },
  {
    icon: Code2,
    title: "API Access",
    description:
      "RESTful APIs for integration with your ERP, fleet management, or custom applications.",
  },
  {
    icon: Palette,
    title: "Custom Branding (Basic)",
    description:
      "Add your logo to the driver-facing portal and receipts. Basic color theming included.",
  },
];

const BEST_FOR = [
  {
    icon: MapPin,
    title: "CPOs with 2-20 Locations",
    description:
      "Charge Point Operators managing a growing network who need centralized control and multi-site analytics.",
  },
  {
    icon: Building2,
    title: "Real Estate Groups",
    description:
      "Property developers deploying chargers across multiple malls, office parks, or residential complexes.",
  },
  {
    icon: Network,
    title: "Franchise Networks",
    description:
      "Franchise brands rolling out EV charging at franchisee locations with standardized operations and reporting.",
  },
];

/* ─── Page ─── */

export default function MultiSitePage() {
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
              Multi-Site
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Unified control across{" "}
              <span className="text-gold">all your locations</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              One dashboard for every charger, every location, every metric.
              Advanced analytics, dynamic pricing, API integrations, and
              priority support for growing networks.
            </p>
          </ScrollReveal>

          {/* ── Pricing Card ── */}
          <ScrollReveal delay={0.3}>
            <div className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold tracking-tight">
                  &#8377;7,999
                </span>
                <span className="text-lg text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                or &#8377;79,999/year{" "}
                <Badge variant="secondary" className="ml-1 bg-gold/10 text-gold">
                  Save 17%
                </Badge>
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold px-8 font-semibold text-white hover:bg-gold/90"
                >
                  <Link href="/cms/demo">
                    Start Free Trial
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                14-day free trial &middot; No credit card required
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What's Included"
            title="Everything for multi-location management"
            subtitle="Advanced features designed for operators managing multiple charging sites with diverse needs."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <item.icon className="size-6 text-gold" />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Best For ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Best For"
            title="Built for growing networks"
            subtitle="Multi-Site is designed for operators who have outgrown single-location tools and need centralized, scalable management."
          />

          <StaggerGrid className="grid gap-8 sm:grid-cols-3">
            {BEST_FOR.map((persona) => (
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

      {/* ── Comparison Callout ── */}
      <section className="bg-light-gray py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-gold/20 bg-white p-8 sm:flex-row sm:p-10">
              <div>
                <h3 className="text-xl font-semibold">
                  Need dedicated infrastructure?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Custom SLAs, dedicated account management, SSO, on-premise
                  deployment, and 24/7 support for large-scale operations.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="shrink-0 border-gold/30 text-gold hover:bg-gold/10"
              >
                <Link href="/cms/enterprise">
                  Check Enterprise
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Feature List ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeader
            badge="At a Glance"
            title="Multi-Site plan summary"
          />
          <ScrollReveal>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <ul className="space-y-4">
                {INCLUDED.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div>
                      <span className="font-medium">{item.title}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        &mdash; {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Take control of your entire network"
          description="Start with a 14-day free trial. No credit card required. Full access to all Multi-Site features."
          primaryLabel="Start Free Trial"
          primaryHref="/cms/demo"
          secondaryLabel="View All Plans"
          secondaryHref="/cms/pricing"
          variant="dark"
        />
      </section>
    </>
  );
}
