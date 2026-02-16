"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Data ─── */

interface PricingTier {
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description:
      "Get started with up to 3 chargers. Perfect for testing the platform before you commit.",
    features: [
      "Up to 3 chargers",
      "Basic dashboard",
      "Session monitoring",
      "Email support",
      "Driver app listing",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/cms/demo",
  },
  {
    name: "Single-Site",
    price: "\u20B92,999",
    period: "/mo",
    description:
      "Everything you need to operate a single charging station professionally.",
    features: [
      "Up to 20 chargers",
      "Full real-time dashboard",
      "Billing & payments",
      "Basic analytics & reports",
      "Email support (24hr SLA)",
      "Driver app listing",
    ],
    ctaLabel: "Start Trial",
    ctaHref: "/cms/demo",
  },
  {
    name: "Multi-Site",
    badge: "Most Popular",
    price: "\u20B97,999",
    period: "/mo",
    description:
      "Unified control across all your locations with advanced features.",
    features: [
      "Unlimited chargers",
      "Multi-location dashboard",
      "Advanced analytics & reports",
      "Dynamic pricing",
      "RFID management",
      "Priority support (4hr SLA)",
      "API access",
      "Custom branding (basic)",
    ],
    ctaLabel: "Start Trial",
    ctaHref: "/cms/demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "Dedicated infrastructure, custom SLAs, SSO, and 24/7 support for large-scale operations.",
    features: [
      "Everything in Multi-Site",
      "Dedicated infrastructure",
      "Custom SLAs (99.9% uptime)",
      "Dedicated account manager",
      "Custom integrations",
      "On-premise deployment option",
      "Advanced security (SSO)",
      "24/7 phone support",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/consulting/book",
  },
];

interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  singleSite: string | boolean;
  multiSite: string | boolean;
  enterprise: string | boolean;
}

const COMPARISON: ComparisonRow[] = [
  {
    feature: "Chargers",
    starter: "Up to 3",
    singleSite: "Up to 20",
    multiSite: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Locations",
    starter: "1",
    singleSite: "1",
    multiSite: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Dashboard",
    starter: "Basic",
    singleSite: "Full",
    multiSite: "Multi-location",
    enterprise: "Multi-location",
  },
  {
    feature: "Billing & Payments",
    starter: false,
    singleSite: true,
    multiSite: true,
    enterprise: true,
  },
  {
    feature: "Analytics",
    starter: false,
    singleSite: "Basic",
    multiSite: "Advanced",
    enterprise: "Advanced + Custom",
  },
  {
    feature: "API Access",
    starter: false,
    singleSite: false,
    multiSite: true,
    enterprise: true,
  },
  {
    feature: "Support Level",
    starter: "Email",
    singleSite: "Email (24hr)",
    multiSite: "Priority (4hr)",
    enterprise: "24/7 Phone",
  },
  {
    feature: "Custom Branding",
    starter: false,
    singleSite: false,
    multiSite: "Basic",
    enterprise: "Full White-Label",
  },
  {
    feature: "SLA",
    starter: false,
    singleSite: false,
    multiSite: "99.5%",
    enterprise: "99.9% Custom",
  },
  {
    feature: "Deployment",
    starter: "Cloud",
    singleSite: "Cloud",
    multiSite: "Cloud",
    enterprise: "Cloud or On-Premise",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. All paid plans include a 14-day free trial with full access to all features. No credit card required to start. At the end of the trial, you can choose to subscribe or downgrade to the free Starter plan.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to the new features and we prorate the billing. When downgrading, the change takes effect at the end of your current billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, UPI, net banking, and wire transfers. Enterprise customers can also pay via purchase orders with NET-30 payment terms. All payments are processed securely through our PCI-DSS compliant payment partner.",
  },
  {
    question: "Do you offer annual discounts?",
    answer:
      "Yes. Both the Single-Site and Multi-Site plans offer a 17% discount when you choose annual billing. Single-Site is \u20B929,999/year (vs \u20B935,988 monthly) and Multi-Site is \u20B979,999/year (vs \u20B995,988 monthly). Enterprise plans have custom billing arrangements.",
  },
  {
    question: "What about setup fees?",
    answer:
      "There are no setup fees for Starter, Single-Site, or Multi-Site plans. You can sign up and start using the platform immediately. Enterprise plans may include a one-time implementation fee depending on the scope of custom integrations, on-premise deployment, or data migration required.",
  },
];

/* ─── FAQ Accordion Item ─── */

function FAQAccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-medium text-foreground sm:text-lg">
          {question}
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-gold transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, type: "spring" as const }}
          >
            <div className="pb-5 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Comparison Cell ─── */

function ComparisonCell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto size-5 text-gold" />
    ) : (
      <X className="mx-auto size-5 text-gray-300" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

/* ─── Page ─── */

export default function CMSPricingPage() {
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
              CMS Pricing
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Simple, transparent{" "}
              <span className="text-gold">pricing</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Start free, scale as you grow. No hidden fees, no surprise
              charges. Annual billing saves you 17% on all paid plans.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pricing Tiers ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerGrid className="grid gap-6 lg:grid-cols-4">
            {TIERS.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border-2 bg-white p-6 sm:p-8 ${
                    tier.popular
                      ? "border-gold shadow-lg shadow-gold/10"
                      : "border-gray-200"
                  }`}
                >
                  {/* Popular badge */}
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gold text-white">
                        <Sparkles className="mr-1 size-3" />
                        {tier.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Tier header */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-muted-foreground">
                          {tier.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    size="lg"
                    className={`w-full font-semibold ${
                      tier.popular
                        ? "bg-gold text-white hover:bg-gold/90"
                        : ""
                    }`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    <Link href={tier.ctaHref}>
                      {tier.ctaLabel}
                      <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Compare Plans"
            title="Feature comparison"
            subtitle="A detailed look at what is included in each plan to help you choose the right one."
          />

          <ScrollReveal>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-light-gray">
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      Feature
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">
                      Starter
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">
                      Single-Site
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">
                      <span className="text-gold">Multi-Site</span>
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-gray-100 ${
                        idx % 2 === 0 ? "bg-white" : "bg-light-gray/50"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium">
                        {row.feature}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <ComparisonCell value={row.starter} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <ComparisonCell value={row.singleSite} />
                      </td>
                      <td className="px-4 py-4 text-center bg-gold/5">
                        <ComparisonCell value={row.multiSite} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <ComparisonCell value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Frequently asked questions"
            subtitle="Everything you need to know about our CMS pricing and plans."
          />

          <ScrollReveal>
            <div className="rounded-2xl border border-gray-200 bg-white px-6 sm:px-8">
              {FAQS.map((faq) => (
                <FAQAccordionItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Start your free trial today"
          description="14 days of full access. No credit card required. Upgrade, downgrade, or cancel anytime."
          primaryLabel="Start Your Free Trial"
          primaryHref="/cms/demo"
          secondaryLabel="Contact Sales"
          secondaryHref="/consulting/book"
          variant="dark"
        />
      </section>
    </>
  );
}
