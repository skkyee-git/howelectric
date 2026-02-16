"use client";

import Link from "next/link";
import {
  Zap,
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Mail,
  Smartphone,
  ArrowRight,
  Store,
  Building,
  UserCheck,
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
    icon: Zap,
    title: "Up to 20 Chargers",
    description:
      "Connect and manage up to 20 chargers at a single location with OCPP 1.6J/2.0.1 support.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-Time Dashboard",
    description:
      "Monitor charger status, active sessions, energy consumption, and revenue from one screen.",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description:
      "Accept payments via UPI, cards, and wallets. Automated invoicing and GST-compliant receipts.",
  },
  {
    icon: BarChart3,
    title: "Basic Analytics",
    description:
      "Track daily sessions, revenue trends, peak hours, and charger utilization with pre-built reports.",
  },
  {
    icon: Mail,
    title: "Email Support",
    description:
      "Dedicated email support with guaranteed response within 24 business hours.",
  },
  {
    icon: Smartphone,
    title: "Driver App Listing",
    description:
      "Your station appears on the HowElectric driver app, bringing organic traffic and discoverability.",
  },
];

const BEST_FOR = [
  {
    icon: Store,
    title: "Individual Station Owners",
    description:
      "You own or are setting up a single EV charging station and need professional management software.",
  },
  {
    icon: Building,
    title: "Small Businesses Adding EV Charging",
    description:
      "Hotels, malls, offices, or parking operators adding chargers as an amenity or revenue stream.",
  },
  {
    icon: UserCheck,
    title: "First-Time CPOs",
    description:
      "Starting your journey as a Charge Point Operator? Single-Site gives you everything to launch and grow.",
  },
];

/* ─── Page ─── */

export default function SingleSitePage() {
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
              Single-Site
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Manage one location{" "}
              <span className="text-gold">with ease</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Everything you need to operate a single charging station
              professionally. Real-time monitoring, billing, analytics, and
              driver app visibility — all in one platform.
            </p>
          </ScrollReveal>

          {/* ── Pricing Card ── */}
          <ScrollReveal delay={0.3}>
            <div className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold tracking-tight">
                  &#8377;2,999
                </span>
                <span className="text-lg text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                or &#8377;29,999/year{" "}
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
            title="Everything for your single station"
            subtitle="A complete toolkit to monitor, monetize, and manage your EV charging station from day one."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            title="Built for single-location operators"
            subtitle="Whether you are launching your first station or adding chargers to your business, Single-Site is the perfect starting point."
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
                <h3 className="text-xl font-semibold">Need more locations?</h3>
                <p className="mt-2 text-muted-foreground">
                  Manage unlimited chargers across multiple locations with
                  advanced analytics, API access, and dynamic pricing.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="shrink-0 border-gold/30 text-gold hover:bg-gold/10"
              >
                <Link href="/cms/multi-site">
                  Check Multi-Site
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
            title="Single-Site plan summary"
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
          headline="Start managing your charging station today"
          description="Get started with a 14-day free trial. No credit card required. Full access to all Single-Site features."
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
