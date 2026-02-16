"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { DURATION, EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";

// ── FAQ data ────────────────────────────────────────────────────────

const FAQS = [
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! Our CMS platform comes with a 14-day free trial with full access to all features. No credit card required. You can also use our self-serve consulting tools completely free of charge.",
  },
  {
    question: "Is there an annual discount?",
    answer:
      "Yes, all CMS and AMC plans offer an annual billing option that saves you 2 months free compared to monthly billing. That is up to 17% savings on your subscription.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you will get instant access to new features. When downgrading, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, all major credit and debit cards, net banking, and direct bank transfer. For enterprise contracts, we also support purchase orders and invoice-based billing.",
  },
  {
    question: "Do bundles include installation?",
    answer:
      "Yes, all bundles include professional installation by our certified technicians. This covers site survey, electrical infrastructure, charger mounting, commissioning, and CMS onboarding.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all CMS subscriptions and AMC plans. For hardware purchases, returns are accepted within 30 days in original condition. Custom enterprise deployments are subject to individual contract terms.",
  },
];

// ── Component ───────────────────────────────────────────────────────

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="mb-12 text-center">
          <h2 className="font-display">Frequently Asked Questions</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Everything you need to know about our pricing and plans.
          </p>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: index * 0.05,
                duration: DURATION.normal,
                ease: EASE.out,
              }}
              className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-card"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-light-gray/50"
              >
                <span className="pr-4 text-base font-semibold text-foreground">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{
                    duration: DURATION.fast,
                    ease: EASE.out,
                  }}
                  className="shrink-0"
                >
                  <ChevronDown
                    className={cn(
                      "size-5 transition-colors",
                      openIndex === index
                        ? "text-electric-blue"
                        : "text-muted-foreground"
                    )}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: {
                        type: "spring" as const,
                        stiffness: 300,
                        damping: 30,
                      },
                      opacity: { duration: DURATION.fast },
                    }}
                  >
                    <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
