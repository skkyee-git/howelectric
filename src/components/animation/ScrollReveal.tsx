"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  DURATION,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const variantMap = {
  fadeUp: fadeInUp,
  fadeIn: fadeIn,
  scaleIn: scaleIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
};

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: keyof typeof variantMap;
  delay?: number;
  once?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const variants = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay, duration: DURATION.normal }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
