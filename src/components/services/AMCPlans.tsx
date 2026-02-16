"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const PLANS = [
  {
    name: "Basic",
    price: "₹8,000",
    priceNote: "per station / year",
    features: [
      { text: "2 Preventive Visits / Year", included: true },
      { text: "Remote CMS Monitoring", included: true },
      { text: "48-Hour On-Site SLA", included: true },
      { text: "Parts Coverage", included: false },
      { text: "Priority Support", included: false },
      { text: "Dedicated Account Manager", included: false },
    ],
    popular: false,
    btnClass: "bg-navy text-white hover:bg-navy/90",
  },
  {
    name: "Standard",
    price: "₹15,000",
    priceNote: "per station / year",
    features: [
      { text: "4 Preventive Visits / Year", included: true },
      { text: "Remote CMS Monitoring", included: true },
      { text: "12-Hour On-Site SLA", included: true },
      { text: "Parts Coverage (up to ₹10K)", included: true },
      { text: "Priority Support", included: true },
      { text: "Dedicated Account Manager", included: false },
    ],
    popular: true,
    btnClass: "bg-purple text-white hover:bg-purple/90",
  },
  {
    name: "Premium",
    price: "₹25,000",
    priceNote: "per station / year",
    features: [
      { text: "Unlimited Preventive Visits", included: true },
      { text: "Remote CMS Monitoring", included: true },
      { text: "4-Hour On-Site SLA", included: true },
      { text: "Full Parts Coverage", included: true },
      { text: "Priority Support + 24/7 Helpline", included: true },
      { text: "Dedicated Account Manager", included: true },
    ],
    popular: false,
    btnClass: "bg-navy text-white hover:bg-navy/90",
  },
];

export function AMCPlans() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple">
            AMC Plans
          </p>
          <h2 className="mt-3">Keep your stations running at peak</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            CMS-powered remote monitoring reduces physical visits by 60%.
            Choose a plan that fits your scale.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <Badge className="border-0 bg-purple px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-purple/25">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div
                className={`flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover lg:p-8 ${
                  plan.popular
                    ? "ring-2 ring-purple/30"
                    : "ring-1 ring-border/50"
                }`}
              >
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 border-t border-border/50 pt-4">
                  <p className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {plan.priceNote}
                  </p>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className={`flex items-start gap-2.5 text-sm ${
                        f.included
                          ? "text-foreground"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      {f.included ? (
                        <Check className="mt-0.5 size-4 shrink-0 text-green" />
                      ) : (
                        <X className="mt-0.5 size-4 shrink-0 text-border" />
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full font-semibold ${plan.btnClass}`}
                  >
                    <Link href="/services/amc">
                      Choose {plan.name}
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
