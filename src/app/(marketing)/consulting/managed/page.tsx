"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  FileSearch,
  MapPin,
  Handshake,
  TrendingUp,
  Scale,
  CalendarClock,
  HeadphonesIcon,
  ChevronDown,
  ArrowRight,
  Phone,
  ClipboardList,
  Search,
  FileText,
  ShieldCheck,
  Rocket,
  Building2,
  BadgeIndianRupee,
  Star,
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
    icon: Users,
    title: "Dedicated EV Consultant",
    description:
      "A named expert assigned to your project who understands your market, goals, and constraints from day one.",
  },
  {
    icon: FileSearch,
    title: "Custom Feasibility Report (DPR)",
    description:
      "A comprehensive Detailed Project Report covering market analysis, financial projections, and technical specifications.",
  },
  {
    icon: MapPin,
    title: "Site Survey & Power Audit",
    description:
      "On-ground assessment of your location including electrical infrastructure, accessibility, and zoning compliance.",
  },
  {
    icon: Handshake,
    title: "Vendor Shortlisting & Negotiation",
    description:
      "We identify, vet, and negotiate with charger OEMs and installation partners to get you the best deal.",
  },
  {
    icon: TrendingUp,
    title: "Financial Modeling & ROI Analysis",
    description:
      "Detailed cash-flow projections, break-even analysis, and sensitivity modeling for your specific project.",
  },
  {
    icon: Scale,
    title: "Regulatory & Subsidy Guidance",
    description:
      "Navigate FAME-III, state EV policies, DISCOM approvals, and municipal permissions with expert help.",
  },
  {
    icon: CalendarClock,
    title: "Project Timeline & Milestone Planning",
    description:
      "A clear Gantt-style roadmap with milestones, dependencies, and accountability checkpoints.",
  },
  {
    icon: HeadphonesIcon,
    title: "30-Day Post-Delivery Support",
    description:
      "After the report is delivered, your consultant remains available for questions, clarifications, and pivot advice.",
  },
];

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call (Free)",
    description:
      "A complimentary 30-minute call to understand your goals, location, budget, and timeline.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Scope & Proposal",
    description:
      "We define the engagement scope, deliverables, and timeline. You receive a transparent, fixed-price proposal.",
  },
  {
    number: "03",
    icon: Search,
    title: "Deep-Dive Analysis",
    description:
      "Our team conducts research, site visits, financial modeling, and vendor evaluations tailored to your project.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Report & Action Plan",
    description:
      "You receive a comprehensive report with clear, prioritized recommendations and an implementation roadmap.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "30-Day Support",
    description:
      "Post-delivery, your consultant is available for follow-up questions, vendor introductions, and refinements.",
  },
];

const PERSONAS = [
  {
    icon: Rocket,
    title: "Entrepreneurs Starting Their First Station",
    description:
      "You have decided to enter the EV charging space and need expert guidance to avoid costly mistakes and fast-track your launch.",
  },
  {
    icon: Building2,
    title: "Businesses Adding EV Charging",
    description:
      "You run a hotel, mall, office park, or parking facility and want to add EV charging as a revenue stream or amenity for visitors.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Investors Evaluating the Opportunity",
    description:
      "You are considering investing in EV charging infrastructure and need independent, data-driven analysis before committing capital.",
  },
];

const FAQS = [
  {
    question: "How long does it take?",
    answer:
      "Most managed consulting engagements are completed within 3-6 weeks depending on scope. A single-site feasibility study typically takes 3 weeks, while multi-site or complex projects may take up to 6 weeks. Your proposal will include a specific timeline.",
  },
  {
    question: "What's included in the price?",
    answer:
      "The price covers everything from the discovery call through the final report delivery, including site visits (within India), all research and analysis, the DPR document, financial models, vendor shortlists, and 30 days of post-delivery support. Travel for remote locations may incur additional costs, disclosed upfront.",
  },
  {
    question: "Can I choose specific services?",
    answer:
      "Yes. While our full-scope package delivers the most value, we offer modular engagements. You can commission only a feasibility study, only a vendor evaluation, or only a financial model. Pricing adjusts accordingly, and we will recommend the right scope during the discovery call.",
  },
  {
    question: "Do you help with implementation?",
    answer:
      "The Managed tier focuses on planning and strategy. If you need hands-on implementation support — procurement, construction oversight, CMS setup, or staff training — we recommend our Enterprise tier, which includes end-to-end project management.",
  },
  {
    question: "What's the success rate?",
    answer:
      "Over 95% of our managed consulting clients proceed to implementation, and those who do report an average ROI 20-30% higher than industry benchmarks. Our reports are designed to be actionable, not theoretical.",
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

export default function ManagedConsultingPage() {
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
              <Star className="mr-1 size-3" />
              Most Popular
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Expert guidance,{" "}
              <span className="text-orange">tailored to your project</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Get a dedicated EV consultant, a custom feasibility report, and
              actionable recommendations — so you launch with confidence, not
              guesswork.
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
                  Book Your Consultation
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/consulting">Compare Plans</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-sm text-muted-foreground">
              Starting at &#8377;25,000 &middot; Free discovery call
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What's Included"
            title="A full-spectrum consulting engagement"
            subtitle="Everything you need to go from idea to a bankable, actionable project plan."
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
            title="From discovery to delivery"
            subtitle="A structured, transparent process with clear milestones at every stage."
          />

          <div className="mx-auto max-w-4xl">
            <StaggerGrid className="relative space-y-0">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-orange/20 md:block" />

              {STEPS.map((step, i) => (
                <StaggerItem key={step.number}>
                  <div className="relative flex gap-6 py-6 md:py-8">
                    {/* Step circle */}
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-orange/30 bg-white">
                      <step.icon className="size-5 text-orange" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-orange">
                          Step {step.number}
                        </span>
                        {i === 0 && (
                          <Badge
                            variant="secondary"
                            className="bg-green/10 text-green text-[10px]"
                          >
                            Free
                          </Badge>
                        )}
                      </div>
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
            title="Ideal for serious builders"
            subtitle="If you have committed to building an EV charging business and need expert support, this tier is for you."
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
                Managed Consulting
              </Badge>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold tracking-tight">
                  &#8377;25,000
                </span>
                <span className="text-xl text-muted-foreground">
                  {" "}– &#8377;2,00,000
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">
                Based on scope &middot; Fixed-price proposals &middot; No hidden
                fees
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
                    Book Your Consultation
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/consulting">Compare Plans</Link>
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
            subtitle="Common questions about our managed consulting engagements."
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
          headline="Book Your Consultation"
          description="Start with a free discovery call. Our EV consultants will understand your goals and propose a tailored engagement — no commitment required."
          primaryLabel="Book Your Consultation"
          primaryHref="/consulting/book"
          secondaryLabel="Compare Plans"
          secondaryHref="/consulting"
          variant="dark"
        />
      </section>
    </>
  );
}
