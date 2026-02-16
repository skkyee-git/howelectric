import type { Variants, Transition } from "framer-motion";

export const DURATION = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  dramatic: 0.8,
  cinematic: 1.2,
} as const;

export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  outBack: [0.34, 1.56, 0.64, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  linear: [0, 0, 1, 1] as const,
};

export const EASE_GSAP = {
  out: "power3.out",
  outBack: "back.out(1.7)",
  inOut: "power2.inOut",
  linear: "none",
} as const;

export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.out,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.out,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.outBack,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.out,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.out,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1,
    } as Transition,
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.fast,
      delayChildren: 0.05,
    } as Transition,
  },
};
