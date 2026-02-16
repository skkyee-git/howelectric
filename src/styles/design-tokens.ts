export const COLORS = {
  primary: {
    navy: "#0A2647",
    electricBlue: "#2E86AB",
  },
  pillar: {
    teal: "#4ECDC4",
    orange: "#FF6B35",
    purple: "#A855F7",
    gold: "#FBBF24",
    green: "#10B981",
  },
  neutrals: {
    white: "#FFFFFF",
    lightGray: "#F8FAFC",
    midGray: "#94A3B8",
    darkGray: "#1E293B",
    black: "#0F172A",
  },
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    display: "var(--font-display-outfit)",
    body: "var(--font-body)",
    mono: "var(--font-mono-space)",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    none: 1,
    tight: 1.15,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
} as const;

export const SPACING = {
  section: {
    sm: "3rem",
    md: "5rem",
    lg: "7rem",
  },
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
  },
} as const;

export const SHADOWS = {
  card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
  cardHover:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
} as const;

export const BORDERS = {
  radius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.625rem",
    xl: "1rem",
    "2xl": "1.5rem",
  },
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

export const PILLAR_COLORS = {
  marketplace: COLORS.pillar.teal,
  consulting: COLORS.pillar.orange,
  services: COLORS.pillar.purple,
  cms: COLORS.pillar.gold,
  academy: COLORS.pillar.green,
} as const;

export type PillarName = keyof typeof PILLAR_COLORS;
