"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CreditCard,
  Smartphone,
  Wallet,
  NfcIcon,
  Building2,
  Coins,
  FileText,
  SplitSquareVertical,
  TrendingUp as PricingIcon,
  Banknote,
  RotateCcw,
  BarChart3,
  Zap,
  ShieldCheck,
  Receipt,
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

/* ── Data ── */
const PAYMENT_METHODS = [
  {
    icon: Smartphone,
    title: "UPI",
    description: "PhonePe, GPay, Paytm — scan and pay instantly.",
  },
  {
    icon: CreditCard,
    title: "Credit/Debit Cards",
    description: "Visa, Mastercard, RuPay — all major cards accepted.",
  },
  {
    icon: Wallet,
    title: "Digital Wallets",
    description: "Paytm Wallet, Amazon Pay, and other popular wallets.",
  },
  {
    icon: NfcIcon,
    title: "RFID Cards",
    description: "Tap-to-charge for fleet drivers and regular users.",
  },
  {
    icon: Building2,
    title: "Fleet Accounts",
    description: "Centralized billing for corporate and fleet operators.",
  },
  {
    icon: Coins,
    title: "Prepaid Balance",
    description: "Top-up wallets for quick, cashless charging sessions.",
  },
] as const;

const BILLING_FEATURES = [
  {
    icon: FileText,
    title: "Auto GST Invoicing",
    description:
      "Every transaction generates a GST-compliant invoice automatically.",
  },
  {
    icon: SplitSquareVertical,
    title: "Split Billing",
    description:
      "Landlord/tenant revenue splits with configurable share ratios.",
  },
  {
    icon: PricingIcon,
    title: "Dynamic Pricing",
    description:
      "Time-of-day pricing, demand-based rates, and promotional offers.",
  },
  {
    icon: Banknote,
    title: "Revenue Settlement",
    description:
      "T+1 settlement to your bank account with full reconciliation.",
  },
  {
    icon: RotateCcw,
    title: "Refund Management",
    description:
      "One-click refund processing with driver notification and audit trail.",
  },
  {
    icon: BarChart3,
    title: "Revenue Dashboards",
    description:
      "Detailed revenue analytics with export, filter, and drill-down.",
  },
] as const;

const BILLING_STEPS = [
  {
    step: "01",
    icon: Zap,
    title: "Driver taps to charge",
    description:
      "Driver scans the QR code or taps their RFID card at the charging station.",
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Payment authorized",
    description:
      "Payment is pre-authorized via UPI, card, or wallet before the session begins.",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Session metered",
    description:
      "Energy consumed is metered in real time with kWh-level accuracy.",
  },
  {
    step: "04",
    icon: Receipt,
    title: "Invoice generated",
    description:
      "A GST-compliant invoice is generated and sent to the driver automatically.",
  },
] as const;

export default function CMSBillingPage() {
  return (
    <>
      {/* ── Mini Hero ── */}
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
              Billing & Payments
            </Badge>
            <h1>Automated billing that just works</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Accept every payment method your drivers prefer. Auto-generate GST
              invoices, split revenue, and settle to your bank — all without
              lifting a finger.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy font-semibold hover:bg-gold/90"
              >
                <Link href="/cms/demo">Start Collecting Revenue</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cms/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Payment Methods ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Payment methods supported"
            subtitle="Every way your drivers want to pay — from UPI to RFID cards and corporate fleet accounts."
            badge="Payments"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PAYMENT_METHODS.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-6 text-gold" />
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

      {/* ── Billing Features ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Billing features"
            subtitle="Comprehensive billing automation — from GST invoicing to dynamic pricing and revenue splits."
            badge="Automation"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BILLING_FEATURES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="rounded-2xl border border-border/50 bg-light-gray p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-8">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-5 text-gold" />
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

      {/* ── How Billing Works ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="How billing works"
            subtitle="A seamless 4-step flow from plug-in to invoice — fully automated, fully compliant."
            badge="Flow"
          />

          <div className="mx-auto mt-14 max-w-4xl">
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-0 hidden h-full w-px bg-gold/20 md:block" />

              <div className="space-y-8">
                {BILLING_STEPS.map(
                  ({ step, icon: Icon, title, description }, i) => (
                    <ScrollReveal key={step} delay={i * 0.1}>
                      <div className="flex gap-6">
                        {/* Step circle */}
                        <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                          <Icon className="size-5" />
                        </div>

                        {/* Content */}
                        <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-card flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gold">
                              STEP {step}
                            </span>
                          </div>
                          <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Start collecting revenue today"
            description="Set up payments in minutes. Accept UPI, cards, wallets, and RFID from day one."
            primaryLabel="Start Collecting Revenue"
            primaryHref="/cms/demo"
            secondaryLabel="View All Features"
            secondaryHref="/cms/features"
          />
        </div>
      </section>
    </>
  );
}
