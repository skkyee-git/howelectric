"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  MapPin,
  Zap,
  FileText,
  BarChart3,
  Shield,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Rocket,
  Building2,
  Truck,
  Gift,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Data ─── */

const TOOLS = [
  {
    icon: Calculator,
    title: "ROI Calculator",
    description:
      "Estimate your return on investment for an EV charging station with customizable inputs for location, footfall, and pricing.",
    href: "/consulting/tools/roi-calculator",
  },
  {
    icon: Shield,
    title: "Subsidy Navigator",
    description:
      "Discover state and central government subsidies, FAME incentives, and DISCOM benefits applicable to your project.",
    href: "/consulting/tools/subsidy-navigator",
  },
  {
    icon: Zap,
    title: "Charger Recommendation Quiz",
    description:
      "Answer a few questions about your use-case and get a tailored charger recommendation — AC, DC, or a mix.",
    href: "/consulting/tools/charger-quiz",
  },
  {
    icon: MapPin,
    title: "Location Viability Check",
    description:
      "Evaluate whether your proposed site meets the key criteria for a profitable EV charging station.",
    href: "/consulting/tools/location-check",
  },
  {
    icon: BarChart3,
    title: "Power Requirement Calculator",
    description:
      "Calculate the electrical load, transformer capacity, and infrastructure upgrades needed for your station.",
    href: "/consulting/tools/power-calculator",
  },
  {
    icon: FileText,
    title: "Business Plan Template",
    description:
      "Download an editable business plan template specifically designed for EV charging station ventures in India.",
    href: "/consulting/tools/business-plan",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Choose a Tool",
    description:
      "Browse our suite of free tools and pick the one that addresses your immediate question.",
  },
  {
    number: "02",
    title: "Enter Your Details",
    description:
      "Fill in a simple form with your project specifics — no login or credit card needed.",
  },
  {
    number: "03",
    title: "Get Instant Results",
    description:
      "Receive actionable insights, estimates, and recommendations in seconds.",
  },
  {
    number: "04",
    title: "Take Action",
    description:
      "Use the outputs to make informed decisions or upgrade to Managed Consulting for expert help.",
  },
];

const PERSONAS = [
  {
    icon: Rocket,
    title: "First-Time Entrepreneurs",
    description:
      "You are exploring the EV charging space for the first time and want to validate your idea before investing money or time.",
  },
  {
    icon: Building2,
    title: "Real Estate Developers",
    description:
      "You are evaluating whether adding EV charging amenities to your property portfolio creates a viable revenue stream.",
  },
  {
    icon: Truck,
    title: "Fleet Managers",
    description:
      "You are assessing the feasibility and cost of electrifying your commercial fleet with dedicated charging infrastructure.",
  },
];

const FAQS = [
  {
    question: "Is it really free?",
    answer:
      "Yes, 100%. All self-serve tools are completely free with no hidden costs, no trial periods, and no credit card required. We believe in empowering entrepreneurs with data before they commit to a paid engagement.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No account is required to use any of the free tools. However, creating a free account lets you save your results, compare scenarios over time, and pick up where you left off.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. If you find that you need deeper analysis, a custom feasibility report, or hands-on expert guidance, you can upgrade to our Managed or Enterprise consulting tiers at any time. Your self-serve data carries forward.",
  },
  {
    question: "How accurate are the tools?",
    answer:
      "Our tools use real market data, DISCOM tariff databases, and government subsidy records updated quarterly. While results are estimates intended for planning purposes, clients consistently report that final actuals fall within 10-15% of our projections.",
  },
  {
    question: "What if I need help?",
    answer:
      "If you get stuck or want an expert to review your results, you can book a free 15-minute orientation call or upgrade to our Managed Consulting tier where a dedicated consultant works with you one-on-one.",
  },
];

/* ─── FAQ Accordion Item ─── */

function FAQItem({
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
          className={`size-5 shrink-0 text-orange transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

/* ─── Page ─── */

export default function SelfServePage() {
  return (
    <>
      {/* ── Mini Hero ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 text-center lg:px-8 lg:pb-20 lg:pt-32">
          <ScrollReveal>
            <Badge
              variant="secondary"
              className="mb-6 bg-orange/10 text-orange"
            >
              <Gift className="mr-1 size-3" />
              Self-Serve
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Start planning your EV business{" "}
              <span className="text-orange">— for free</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Access powerful planning tools — no account, no credit card, no
              strings attached. Explore the opportunity before you invest a
              single rupee.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-orange px-8 font-semibold text-white hover:bg-orange/90"
              >
                <Link href="/consulting/tools">
                  Start Using Free Tools
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-sm text-muted-foreground">
              Free forever &middot; No credit card required
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Free Tools"
            title="Everything you need to start planning"
            subtitle="Six powerful tools designed to answer your biggest questions about entering the EV charging market."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((tool) => (
              <StaggerItem key={tool.title}>
                <Link
                  href={tool.href}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-orange/10">
                    <tool.icon className="size-6 text-orange" />
                  </div>
                  <h3 className="text-lg font-semibold">{tool.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-orange opacity-0 transition-opacity group-hover:opacity-100">
                    Open tool
                    <ChevronRight className="ml-1 size-4" />
                  </span>
                </Link>
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
            title="From zero to insight in minutes"
            subtitle="No onboarding, no waiting. Just pick a tool and get answers."
          />

          <StaggerGrid className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative rounded-2xl border border-gray-100 bg-light-gray p-6">
                  <span className="text-3xl font-bold text-orange/20">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Who It's For"
            title="Built for explorers and evaluators"
            subtitle="Whether you are testing the waters or doing initial due diligence, these tools are designed for you."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-3">
            {PERSONAS.map((persona) => (
              <StaggerItem key={persona.title}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-orange/10">
                    <persona.icon className="size-6 text-orange" />
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

      {/* ── Pricing Details ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border-2 border-orange/20 bg-gradient-to-br from-orange/5 to-transparent p-8 text-center sm:p-12">
              <Badge
                variant="secondary"
                className="mb-4 bg-orange/10 text-orange"
              >
                Self-Serve Tier
              </Badge>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold tracking-tight">Free</span>
              </div>
              <p className="mt-2 text-muted-foreground">
                No credit card &middot; No expiry &middot; Unlimited usage
              </p>
              <div className="mx-auto mt-8 max-w-md text-left">
                <ul className="space-y-3">
                  {TOOLS.map((tool) => (
                    <li
                      key={tool.title}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Zap className="mt-0.5 size-4 shrink-0 text-orange" />
                      <span>{tool.title}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3 text-sm">
                    <Zap className="mt-0.5 size-4 shrink-0 text-orange" />
                    <span>Email export of results</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Zap className="mt-0.5 size-4 shrink-0 text-orange" />
                    <span>Unlimited re-runs and scenario comparisons</span>
                  </li>
                </ul>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-orange px-8 font-semibold text-white hover:bg-orange/90"
              >
                <Link href="/consulting/tools">
                  Start Using Free Tools
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
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
            subtitle="Everything you need to know about our free self-serve tools."
          />

          <ScrollReveal>
            <div className="rounded-2xl border border-gray-200 bg-white px-6 sm:px-8">
              {FAQS.map((faq) => (
                <FAQItem
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
          headline="Start Using Free Tools"
          description="No account needed. Explore ROI projections, subsidy eligibility, charger recommendations, and more — completely free."
          primaryLabel="Start Using Free Tools"
          primaryHref="/consulting/tools"
          secondaryLabel="Compare All Plans"
          secondaryHref="/consulting"
          variant="dark"
        />
      </section>
    </>
  );
}
