"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  ShoppingCart,
  MessageSquare,
  Monitor,
  GraduationCap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  BarChart3,
  Shield,
  Truck,
  BookOpen,
  Award,
  Users,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const JOURNEYS = [
  {
    id: "start",
    icon: Rocket,
    label: "Start a Business",
    title: "Launch your EV charging business",
    subtitle: "with confidence",
    description:
      "From site selection to go-live — we handle every step so you can focus on growth.",
    features: [
      {
        icon: BarChart3,
        title: "Site Feasibility & DPR",
        desc: "Data-driven location analysis",
      },
      {
        icon: ShoppingCart,
        title: "Charger Sourcing",
        desc: "Best prices from 50+ brands",
      },
      {
        icon: Settings,
        title: "Installation & Commissioning",
        desc: "Certified technicians",
      },
      {
        icon: Monitor,
        title: "CMS Setup & Go-Live",
        desc: "Launch in days, not months",
      },
    ],
    href: "/consulting",
    cta: "Start My Business",
    bg: "bg-[#FF6B35]",
    arrowBg: "bg-[#FF6B35]/80",
    iconBg: "bg-[#FF6B35]/10",
    iconColor: "text-[#FF6B35]",
  },
  {
    id: "buy",
    icon: ShoppingCart,
    label: "Buy Chargers",
    title: "Marketplace coming",
    subtitle: "in 2027",
    description:
      "India's largest EV charger marketplace is under construction. 50+ brands, 500+ products — launching 2027.",
    features: [
      {
        icon: Zap,
        title: "50+ Brands",
        desc: "Top manufacturers lined up",
      },
      {
        icon: BarChart3,
        title: "Compare & Review",
        desc: "Side-by-side spec comparison",
      },
      {
        icon: Users,
        title: "Bulk Pricing",
        desc: "Enterprise & volume discounts",
      },
      {
        icon: Truck,
        title: "Pan-India Delivery",
        desc: "Doorstep delivery nationwide",
      },
    ],
    href: "/marketplace",
    cta: "Learn More",
    bg: "bg-[#4ECDC4]",
    arrowBg: "bg-[#4ECDC4]/80",
    iconBg: "bg-[#4ECDC4]/10",
    iconColor: "text-[#4ECDC4]",
  },
  {
    id: "consult",
    icon: MessageSquare,
    label: "Get Consulting",
    title: "Expert guidance for",
    subtitle: "every decision",
    description:
      "Navigate regulations, optimize ROI, and avoid costly mistakes with our specialist team.",
    features: [
      {
        icon: BookOpen,
        title: "Feasibility Studies",
        desc: "Detailed project reports",
      },
      {
        icon: Shield,
        title: "Regulatory Compliance",
        desc: "DISCOM & CEA approvals",
      },
      {
        icon: BarChart3,
        title: "Financial Modelling",
        desc: "ROI & payback analysis",
      },
      {
        icon: Settings,
        title: "Technology Advisory",
        desc: "Right charger, right location",
      },
    ],
    href: "/consulting",
    cta: "Book Consultation",
    bg: "bg-[#2E86AB]",
    arrowBg: "bg-[#2E86AB]/80",
    iconBg: "bg-[#2E86AB]/10",
    iconColor: "text-[#2E86AB]",
  },
  {
    id: "manage",
    icon: Monitor,
    label: "Manage Stations",
    title: "One dashboard to rule",
    subtitle: "your entire network",
    description:
      "Cloud CMS with real-time monitoring, automated billing, and smart analytics.",
    features: [
      {
        icon: Monitor,
        title: "Real-Time Monitoring",
        desc: "Live charger status & alerts",
      },
      {
        icon: Zap,
        title: "UPI & GST Billing",
        desc: "Automated payment collection",
      },
      {
        icon: Users,
        title: "Driver App",
        desc: "Live availability & booking",
      },
      {
        icon: BarChart3,
        title: "Revenue Analytics",
        desc: "Insights that drive growth",
      },
    ],
    href: "/cms",
    cta: "Explore CMS",
    bg: "bg-[#E8B931]",
    arrowBg: "bg-[#E8B931]/80",
    iconBg: "bg-[#E8B931]/10",
    iconColor: "text-[#E8B931]",
  },
  {
    id: "certify",
    icon: GraduationCap,
    label: "Get Certified",
    title: "Industry-recognized EV",
    subtitle: "certifications",
    description:
      "Upskill with hands-on courses. Get certified and join India's fastest-growing workforce.",
    features: [
      {
        icon: BookOpen,
        title: "Practical Training",
        desc: "Learn by building real stations",
      },
      {
        icon: Award,
        title: "Industry Certificates",
        desc: "Recognized by top employers",
      },
      {
        icon: Users,
        title: "Placement Assistance",
        desc: "Connect with hiring partners",
      },
      {
        icon: Monitor,
        title: "Flexible Learning",
        desc: "Self-paced & live batches",
      },
    ],
    href: "https://howacademy.in/courses/ev-infrastructure/",
    cta: "Browse Courses",
    bg: "bg-[#2ECC71]",
    arrowBg: "bg-[#2ECC71]/80",
    iconBg: "bg-[#2ECC71]/10",
    iconColor: "text-[#2ECC71]",
  },
];

export function JourneySelector() {
  const [active, setActive] = useState(JOURNEYS[0].id);
  const current = JOURNEYS.find((j) => j.id === active)!;
  const activeIdx = JOURNEYS.findIndex((j) => j.id === active);

  const goPrev = () => {
    const prev = (activeIdx - 1 + JOURNEYS.length) % JOURNEYS.length;
    setActive(JOURNEYS[prev].id);
  };
  const goNext = () => {
    const next = (activeIdx + 1) % JOURNEYS.length;
    setActive(JOURNEYS[next].id);
  };

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Your Journey
          </p>
          <h2 className="mt-3 text-center">I want to...</h2>
        </ScrollReveal>

        {/* Pill Tab Bar */}
        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2 rounded-2xl bg-light-gray p-2">
            {JOURNEYS.map((j) => (
              <button
                key={j.id}
                onClick={() => setActive(j.id)}
                className="relative rounded-xl px-5 py-3 text-sm font-medium transition-colors"
              >
                {active === j.id && (
                  <motion.div
                    layoutId="journey-pill"
                    className="absolute inset-0 rounded-xl bg-white shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span
                  className={`relative z-10 flex items-center gap-2 ${
                    active === j.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <j.icon className="size-4" />
                  {j.label}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content Panel with nav arrows */}
        <div className="relative mt-12">
          {/* Left arrow — HOW Academy style: colored bg + white ring */}
          <button
            onClick={goPrev}
            className={`absolute -left-2 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-xl ${current.arrowBg} ring-[3px] ring-white transition-all hover:scale-105 lg:-left-5`}
          >
            <ChevronLeft className="size-5 text-white" />
          </button>

          {/* Right arrow — HOW Academy style: colored bg + white ring */}
          <button
            onClick={goNext}
            className={`absolute -right-2 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-xl ${current.arrowBg} ring-[3px] ring-white transition-all hover:scale-105 lg:-right-5`}
          >
            <ChevronRight className="size-5 text-white" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-[2rem] ${current.bg} min-h-[480px] p-8 sm:p-10 lg:min-h-[520px] lg:p-14`}
            >
              <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
                {/* Left: Bold typography */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm"
                  >
                    <current.icon className="size-4 text-white" />
                    <span className="text-sm font-semibold text-white">
                      {current.label}
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
                  >
                    {current.title}
                    <br />
                    <span className="text-white/80">{current.subtitle}</span>
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-5 max-w-md text-base leading-relaxed text-white/70 lg:text-lg"
                  >
                    {current.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="mt-8 bg-white font-semibold text-foreground shadow-lg hover:bg-white/90"
                    >
                      <Link
                        href={current.href}
                        {...(current.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {current.cta}
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Right: Feature cards grid — equal height */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {current.features.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 0.15 + i * 0.07,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex h-[140px] flex-col justify-between rounded-2xl bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                    >
                      <div
                        className={`flex size-10 items-center justify-center rounded-xl ${current.iconBg}`}
                      >
                        <feature.icon
                          className={`size-5 ${current.iconColor}`}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">
                          {feature.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="mt-8 flex items-center justify-center gap-2">
                {JOURNEYS.map((j, i) => (
                  <button
                    key={j.id}
                    onClick={() => setActive(j.id)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIdx
                        ? "w-6 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
