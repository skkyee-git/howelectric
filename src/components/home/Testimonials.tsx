"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const TESTIMONIALS_ROW_1 = [
  {
    quote:
      "HowElectric helped us set up 12 charging stations across Hyderabad in just 3 months. Their marketplace made sourcing chargers effortless.",
    name: "Rajesh Kumar",
    role: "Founder, GreenCharge India",
    segment: "Entrepreneur",
    avatar: "RK",
  },
  {
    quote:
      "The consulting team's feasibility study saved us from a costly mistake. They recommended a completely different site layout that increased our utilization by 40%.",
    name: "Priya Sharma",
    role: "Director, Urban EV Solutions",
    segment: "Builder",
    avatar: "PS",
  },
  {
    quote:
      "Managing 50+ fleet vehicles was a nightmare before HowElectric CMS. Now we have real-time monitoring, automated billing, and our drivers love the app.",
    name: "Amit Patel",
    role: "Fleet Manager, LogiGreen",
    segment: "Fleet",
    avatar: "AP",
  },
  {
    quote:
      "The EV Academy certification gave me the confidence and credibility to start my own installation business. Best investment I've made.",
    name: "Suresh Reddy",
    role: "Certified EV Installer",
    segment: "Entrepreneur",
    avatar: "SR",
  },
];

const TESTIMONIALS_ROW_2 = [
  {
    quote:
      "We compared 15 brands on HowElectric before making our purchase. The comparison tool and expert recommendations saved us lakhs.",
    name: "Meera Joshi",
    role: "CEO, ChargeZone Delhi",
    segment: "Builder",
    avatar: "MJ",
  },
  {
    quote:
      "From a single station to a 25-station network in 8 months. HowElectric's end-to-end support made scaling feel effortless.",
    name: "Vikram Singh",
    role: "Founder, EVCharge Pro",
    segment: "Entrepreneur",
    avatar: "VS",
  },
  {
    quote:
      "The installation team was professional and finished 2 days ahead of schedule. AMC support has been exceptional — zero downtime in 6 months.",
    name: "Ananya Rao",
    role: "Operations Head, GreenFleet",
    segment: "Fleet",
    avatar: "AR",
  },
  {
    quote:
      "HowElectric's CMS dashboard gives us everything we need. Revenue tracking, session analytics, and the driver app integration is seamless.",
    name: "Karthik Nair",
    role: "CTO, PowerCharge Solutions",
    segment: "Builder",
    avatar: "KN",
  },
];

const segmentColors: Record<string, string> = {
  Entrepreneur: "bg-orange/10 text-orange",
  Builder: "bg-teal/10 text-teal",
  Fleet: "bg-purple/10 text-purple",
};

function TestimonialCard({
  quote,
  name,
  role,
  segment,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  segment: string;
  avatar: string;
}) {
  return (
    <div className="w-[380px] shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.07]">
      <Quote className="mb-3 size-6 text-electric-blue/30" />
      <p className="text-sm leading-relaxed text-white/70">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
        <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-electric-blue/30 to-teal/30 text-xs font-bold text-white">
          {avatar}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/40">{role}</p>
        </div>
        <Badge className={`text-[10px] ${segmentColors[segment] || ""}`}>
          {segment}
        </Badge>
      </div>
    </div>
  );
}

export function Testimonials() {
  const row1 = [...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1];
  const row2 = [...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2];

  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal">
            Testimonials
          </p>
          <h2 className="mt-3 text-center text-white">
            Loved by businesses across India
          </h2>
        </ScrollReveal>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mt-14">
        <motion.div
          className="flex gap-5"
          animate={{ x: [0, -380 * TESTIMONIALS_ROW_1.length] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} {...t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative mt-5">
        <motion.div
          className="flex gap-5"
          animate={{ x: [-380 * TESTIMONIALS_ROW_2.length, 0] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} {...t} />
          ))}
        </motion.div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent" />
    </section>
  );
}
