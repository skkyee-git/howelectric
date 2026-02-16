"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-32 top-0 size-[500px] rounded-full bg-teal/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-[400px] rounded-full bg-electric-blue/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <motion.div
              className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-teal/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring" as const,
                stiffness: 200,
                damping: 20,
              }}
            >
              <Mail className="size-7 text-teal" />
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Stay ahead of the EV curve
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
              Get weekly insights on EV charging trends, new products, subsidy
              updates, and business opportunities — delivered straight to your
              inbox.
            </p>
          </ScrollReveal>

          {/* Form */}
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 flex-1 rounded-xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/30 focus-visible:border-teal/50 focus-visible:ring-teal/20"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 bg-teal px-8 font-semibold text-navy hover:bg-teal/90"
            >
              Subscribe
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.form>

          {/* Social proof */}
          <motion.div
            className="mt-6 flex items-center justify-center gap-2 text-sm text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Users className="size-4" />
            <span>Join 5,000+ subscribers</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
