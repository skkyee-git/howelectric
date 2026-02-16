"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Network,
  Landmark,
  MonitorSmartphone,
  PackageCheck,
  HardHat,
  GraduationCap,
  HeadphonesIcon,
  ChevronDown,
  ArrowRight,
  Presentation,
  PenTool,
  ListChecks,
  Rocket as RocketIcon,
  RefreshCcw,
  Building2,
  Globe,
  Factory,
  Fuel,
  Crown,
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
    icon: Briefcase,
    title: "End-to-End Project Management",
    description:
      "A dedicated project manager owns your engagement from strategy through go-live, coordinating every workstream.",
  },
  {
    icon: Network,
    title: "Multi-Site Network Planning",
    description:
      "Optimal site selection, hub-and-spoke design, load balancing, and phased rollout strategy across locations.",
  },
  {
    icon: Landmark,
    title: "Government Liaison & Subsidies",
    description:
      "We handle applications for FAME-III, state EV policies, DISCOM approvals, and liaise with municipal authorities on your behalf.",
  },
  {
    icon: MonitorSmartphone,
    title: "CMS Platform Integration & Training",
    description:
      "Selection, procurement, and integration of a charge management system, plus comprehensive operator training.",
  },
  {
    icon: PackageCheck,
    title: "Vendor Management & Procurement",
    description:
      "RFP management, vendor evaluation scorecards, contract negotiation, and procurement oversight for chargers and components.",
  },
  {
    icon: HardHat,
    title: "Construction Oversight",
    description:
      "On-site supervision of civil, electrical, and networking work to ensure quality, safety, and timeline adherence.",
  },
  {
    icon: GraduationCap,
    title: "Staff Training & SOPs",
    description:
      "Custom standard operating procedures, safety protocols, and hands-on training for your station operators and support teams.",
  },
  {
    icon: HeadphonesIcon,
    title: "6-Month Post-Launch Support",
    description:
      "Extended support covering performance optimization, troubleshooting, vendor escalations, and quarterly business reviews.",
  },
];

const STEPS = [
  {
    number: "01",
    icon: Presentation,
    title: "Strategic Workshop",
    description:
      "An intensive session with your leadership team to define vision, goals, constraints, and success metrics for the network.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Network Design",
    description:
      "Detailed site-by-site planning including location scoring, charger mix, power requirements, and CMS architecture.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Execution Plan",
    description:
      "A comprehensive implementation roadmap with procurement timelines, construction schedules, and regulatory milestones.",
  },
  {
    number: "04",
    icon: RocketIcon,
    title: "Managed Rollout",
    description:
      "We manage procurement, construction, CMS setup, testing, and commissioning — station by station.",
  },
  {
    number: "05",
    icon: RefreshCcw,
    title: "Ongoing Optimization",
    description:
      "Post-launch performance monitoring, utilization analytics, pricing optimization, and quarterly strategy reviews.",
  },
];

const PERSONAS = [
  {
    icon: Network,
    title: "CPOs Deploying 10+ Stations",
    description:
      "Charge Point Operators building or expanding a professional network need coordinated planning and execution at scale.",
  },
  {
    icon: Building2,
    title: "Real Estate Groups with Portfolio Rollout",
    description:
      "Property developers adding EV charging across malls, offices, and residential complexes need a unified strategy.",
  },
  {
    icon: Globe,
    title: "Government Agencies & PSUs",
    description:
      "Public sector organizations deploying EV infrastructure for smart cities, bus depots, or public transit electrification.",
  },
  {
    icon: Fuel,
    title: "Oil Marketing Companies Diversifying",
    description:
      "OMCs and fuel retail networks adding EV charging to existing petrol stations need integration expertise and speed.",
  },
];

const FAQS = [
  {
    question: "What's the minimum project size?",
    answer:
      "Enterprise engagements are designed for organizations planning 10 or more charging stations or projects with a total investment exceeding ₹5 crore. For smaller projects, our Managed Consulting tier provides excellent value. If you are unsure which tier fits, reach out and we will recommend the right level.",
  },
  {
    question: "Do you handle procurement?",
    answer:
      "Yes. We manage the full procurement lifecycle — from writing RFPs and evaluating vendor proposals to negotiating contracts and overseeing delivery. We work with all major charger OEMs in India and globally, ensuring you get the best technology at competitive pricing.",
  },
  {
    question: "Can you work with our existing vendors?",
    answer:
      "Absolutely. If you have preferred vendors or existing supplier agreements, we integrate them into the project plan. We provide independent quality assurance and performance benchmarking regardless of which vendors are involved.",
  },
  {
    question: "What about ongoing support?",
    answer:
      "Enterprise engagements include 6 months of post-launch support covering performance optimization, vendor escalations, staff re-training, and quarterly business reviews. Extended annual support contracts are available for organizations that want continuous advisory.",
  },
  {
    question: "How do you handle multi-state deployments?",
    answer:
      "We have a network of on-ground partners across all major Indian states. Our team manages state-specific regulatory requirements, DISCOM approvals, and municipal permits in parallel, ensuring your rollout is not bottlenecked by geography. We have successfully managed deployments spanning 12+ states.",
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

export default function EnterpriseConsultingPage() {
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
              <Crown className="mr-1 size-3" />
              Enterprise
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Scale your EV charging network{" "}
              <span className="text-orange">with confidence</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              End-to-end project management for multi-site deployments. From
              strategy to go-live and beyond — we handle everything so you can
              focus on growth.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-orange px-8 font-semibold text-white hover:bg-orange/90"
              >
                <Link href="/consulting/book">
                  Contact Enterprise Sales
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/consulting/case-studies">See Case Studies</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-sm text-muted-foreground">
              Starting at &#8377;5,00,000+ &middot; Custom pricing
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What's Included"
            title="Full-service, end-to-end delivery"
            subtitle="Everything from network strategy to construction oversight and post-launch optimization — under one roof."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-orange/10">
                    <feature.icon className="size-6 text-orange" />
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
            badge="Our Process"
            title="From strategy to scale"
            subtitle="A proven methodology refined across 200+ projects, designed for enterprise-grade deployments."
          />

          <div className="mx-auto max-w-4xl">
            <StaggerGrid className="relative space-y-0">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-orange/20 md:block" />

              {STEPS.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="relative flex gap-6 py-6 md:py-8">
                    {/* Step circle */}
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-orange/30 bg-white">
                      <step.icon className="size-5 text-orange" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange">
                        Phase {step.number}
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
            title="Built for organizations deploying at scale"
            subtitle="If you are planning a multi-site network or a high-investment EV infrastructure project, this is your tier."
          />

          <StaggerGrid className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                Enterprise Consulting
              </Badge>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold tracking-tight">
                  &#8377;5,00,000+
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">
                Custom pricing based on scope &middot; Flexible payment
                milestones
              </p>
              <div className="mx-auto mt-8 max-w-md text-left">
                <ul className="space-y-3">
                  {FEATURES.map((feature) => (
                    <li
                      key={feature.title}
                      className="flex items-start gap-3 text-sm"
                    >
                      <feature.icon className="mt-0.5 size-4 shrink-0 text-orange" />
                      <span>{feature.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange px-8 font-semibold text-white hover:bg-orange/90"
                >
                  <Link href="/consulting/book">
                    Contact Enterprise Sales
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/consulting/case-studies">See Case Studies</Link>
                </Button>
              </div>
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
            subtitle="Common questions about our enterprise consulting engagements."
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
          headline="Contact Enterprise Sales"
          description="Let us design and deliver your EV charging network. Start with a strategic workshop to define your vision, then leave the execution to us."
          primaryLabel="Contact Enterprise Sales"
          primaryHref="/consulting/book"
          secondaryLabel="See Case Studies"
          secondaryHref="/consulting/case-studies"
          variant="dark"
        />
      </section>
    </>
  );
}
