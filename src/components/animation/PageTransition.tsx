"use client";

import { motion } from "framer-motion";
import { DURATION, EASE } from "@/lib/animations";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{
        duration: DURATION.normal,
        ease: EASE.out,
      }}
    >
      {children}
    </motion.div>
  );
}
