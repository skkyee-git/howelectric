import type { LucideIcon } from "lucide-react";
import {
  // Pillar icons
  ShoppingBag,
  Lightbulb,
  Wrench,
  Monitor,
  GraduationCap,
  // Marketplace
  Plug,
  Zap,
  BatteryCharging,
  Wifi,
  Home,
  Building2,
  Truck,
  MapPin,
  ArrowLeftRight,
  BookOpen,
  ShieldCheck,
  // Consulting
  ClipboardList,
  MapPinned,
  TrendingUp,
  Scale,
  User,
  Users,
  Building,
  Calculator,
  HelpCircle,
  FileText,
  // Services
  Settings,
  AlertCircle,
  ArrowUpCircle,
  Search,
  Handshake,
  // CMS
  LayoutDashboard,
  Cable,
  CreditCard,
  UserCog,
  Globe,
  Palette,
  Code,
  Puzzle,
  // Academy
  Briefcase,
  Award,
  PenLine,
  Video,
  BookMarked,
  MessageSquare,
  Calendar,
  Mail,
} from "lucide-react";

export const SITE = {
  name: "HowElectric",
  description:
    "India's first EV charging infrastructure marketplace & consultancy platform",
  tagline: "Powering India's Electric Future",
  domain: "howelectric.com",
  hq: "India",
} as const;

/* ─── Mega-menu column link ─── */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  pillar?: "marketplace" | "consulting" | "services" | "cms" | "academy" | "company";
  pillarIcon?: LucideIcon;
  description?: string;
  cta?: { label: string; href: string };
  columns?: NavColumn[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Consulting",
    href: "/consulting",
    pillar: "consulting",
    pillarIcon: Lightbulb,
    description:
      "Expert guidance to plan, validate, and launch your EV charging business — from feasibility to ROI.",
    cta: { label: "Get a Consultation", href: "/consulting" },
    columns: [
      {
        title: "Services",
        links: [
          {
            label: "Feasibility Study",
            href: "/consulting/feasibility",
            description: "Market viability & demand analysis",
            icon: ClipboardList,
          },
          {
            label: "Site Assessment",
            href: "/consulting/site-assessment",
            description: "Location scoring & infrastructure audit",
            icon: MapPinned,
          },
          {
            label: "ROI Analysis",
            href: "/consulting/roi",
            description: "Revenue projection & payback modeling",
            icon: TrendingUp,
          },
          {
            label: "Regulatory Guidance",
            href: "/consulting/regulatory",
            description: "Permits, subsidies & compliance help",
            icon: Scale,
          },
        ],
      },
      {
        title: "Plans",
        links: [
          {
            label: "Self-Serve",
            href: "/consulting/self-serve",
            description: "DIY tools & templates to get started",
            icon: User,
          },
          {
            label: "Managed",
            href: "/consulting/managed",
            description: "Dedicated consultant for your project",
            icon: Users,
          },
          {
            label: "Enterprise",
            href: "/consulting/enterprise",
            description: "Custom engagement for large networks",
            icon: Building,
          },
        ],
      },
      {
        title: "Tools",
        links: [
          {
            label: "ROI Calculator",
            href: "/consulting/roi-calculator",
            description: "Estimate returns on your investment",
            icon: Calculator,
          },
          {
            label: "Readiness Quiz",
            href: "/consulting/quiz",
            description: "Assess your EV business readiness",
            icon: HelpCircle,
          },
          {
            label: "Case Studies",
            href: "/consulting/case-studies",
            description: "Real success stories from our clients",
            icon: FileText,
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    pillar: "services",
    pillarIcon: Wrench,
    description:
      "End-to-end installation, maintenance, and support for EV charging infrastructure across India.",
    cta: { label: "View Services", href: "/services" },
    columns: [
      {
        title: "Installation",
        links: [
          {
            label: "Residential",
            href: "/services/residential",
            description: "Home charger setup & electrical work",
            icon: Home,
          },
          {
            label: "Commercial",
            href: "/services/commercial",
            description: "Office & retail charging deployment",
            icon: Building2,
          },
          {
            label: "Fleet Depots",
            href: "/services/fleet",
            description: "Multi-bay depot charging infrastructure",
            icon: Truck,
          },
          {
            label: "Public Charging",
            href: "/services/public",
            description: "Turnkey public station installations",
            icon: MapPin,
          },
        ],
      },
      {
        title: "Maintenance",
        links: [
          {
            label: "AMC Plans",
            href: "/services/amc",
            description: "Annual maintenance contracts & SLAs",
            icon: Settings,
          },
          {
            label: "Emergency Repair",
            href: "/services/emergency",
            description: "24/7 breakdown support across India",
            icon: AlertCircle,
          },
          {
            label: "Upgrades",
            href: "/services/upgrades",
            description: "Hardware & firmware upgrade services",
            icon: ArrowUpCircle,
          },
        ],
      },
      {
        title: "Network",
        links: [
          {
            label: "Find an Installer",
            href: "/services/find-installer",
            description: "Certified installers in your city",
            icon: Search,
          },
          {
            label: "Become a Partner",
            href: "/services/partner",
            description: "Join our nationwide installer network",
            icon: Handshake,
          },
        ],
      },
    ],
  },
  {
    label: "CMS",
    href: "/cms",
    pillar: "cms",
    pillarIcon: Monitor,
    description:
      "Powerful charge-point management software — monitor, bill, and scale your network from one dashboard.",
    cta: { label: "See the Platform", href: "/cms" },
    columns: [
      {
        title: "Features",
        links: [
          {
            label: "Dashboard",
            href: "/cms/dashboard",
            description: "Real-time network monitoring & analytics",
            icon: LayoutDashboard,
          },
          {
            label: "OCPP Integration",
            href: "/cms/ocpp",
            description: "Universal charger protocol support",
            icon: Cable,
          },
          {
            label: "Billing & Payments",
            href: "/cms/billing",
            description: "Automated invoicing & payment collection",
            icon: CreditCard,
          },
          {
            label: "User Management",
            href: "/cms/users",
            description: "Roles, access control & driver accounts",
            icon: UserCog,
          },
        ],
      },
      {
        title: "Solutions",
        links: [
          {
            label: "Single-Site",
            href: "/cms/single-site",
            description: "Manage one location with ease",
            icon: MapPin,
          },
          {
            label: "Multi-Site",
            href: "/cms/multi-site",
            description: "Unified control across all your sites",
            icon: Globe,
          },
          {
            label: "White-Label",
            href: "/cms/white-label",
            description: "Your brand, our platform engine",
            icon: Palette,
          },
          {
            label: "Enterprise",
            href: "/cms/enterprise",
            description: "Custom SLAs, dedicated infrastructure",
            icon: Building,
          },
        ],
      },
      {
        title: "Developers",
        links: [
          {
            label: "Documentation",
            href: "/cms/docs",
            description: "Guides, tutorials & quick-start docs",
            icon: FileText,
          },
          {
            label: "API Reference",
            href: "/cms/api",
            description: "RESTful API endpoints & SDKs",
            icon: Code,
          },
          {
            label: "Integration Guides",
            href: "/cms/guides",
            description: "Connect with OCPP, payment gateways & more",
            icon: Puzzle,
          },
        ],
      },
    ],
  },
  {
    label: "Academy",
    href: "/academy",
    pillar: "academy",
    pillarIcon: GraduationCap,
    description:
      "Learn everything about EV charging — courses, certifications, and a thriving community of professionals.",
    cta: { label: "Start Learning", href: "/academy" },
    columns: [
      {
        title: "Courses",
        links: [
          {
            label: "EV Fundamentals",
            href: "/academy/fundamentals",
            description: "Core concepts of EV charging technology",
            icon: BookOpen,
          },
          {
            label: "Business Planning",
            href: "/academy/business",
            description: "Build & scale your charging business",
            icon: Briefcase,
          },
          {
            label: "Certification Prep",
            href: "/academy/certification",
            description: "Prepare for industry certifications",
            icon: Award,
          },
        ],
      },
      {
        title: "Content",
        links: [
          {
            label: "Blog",
            href: "/academy/blog",
            description: "Latest insights & industry news",
            icon: PenLine,
          },
          {
            label: "Guides",
            href: "/academy/guides",
            description: "In-depth how-to guides & playbooks",
            icon: FileText,
          },
          {
            label: "Webinars",
            href: "/academy/webinars",
            description: "Live & recorded expert sessions",
            icon: Video,
          },
          {
            label: "Glossary",
            href: "/academy/glossary",
            description: "EV charging terminology explained",
            icon: BookMarked,
          },
        ],
      },
      {
        title: "Community",
        links: [
          {
            label: "Forum",
            href: "/academy/forum",
            description: "Discuss with fellow EV professionals",
            icon: MessageSquare,
          },
          {
            label: "Events",
            href: "/academy/events",
            description: "Conferences, meetups & workshops",
            icon: Calendar,
          },
          {
            label: "Newsletter",
            href: "/academy/newsletter",
            description: "Weekly EV charging industry digest",
            icon: Mail,
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    pillar: "company",
    pillarIcon: Building2,
    description:
      "Meet the team powering India's electric future — our story, mission, and the people behind HowElectric.",
    cta: { label: "About Us", href: "/about" },
    columns: [
      {
        title: "About",
        links: [
          {
            label: "Our Story",
            href: "/about",
            description: "How HowElectric started & where we're headed",
            icon: Building2,
          },
          {
            label: "Team",
            href: "/team",
            description: "The people building India's EV future",
            icon: Users,
          },
          {
            label: "Careers",
            href: "/careers",
            description: "Join us — we're hiring across India",
            icon: Briefcase,
          },
        ],
      },
      {
        title: "Connect",
        links: [
          {
            label: "Contact Us",
            href: "/contact",
            description: "Get in touch with our team",
            icon: Mail,
          },
          {
            label: "Partners",
            href: "/partners",
            description: "Collaborate with HowElectric",
            icon: Handshake,
          },
          {
            label: "Press",
            href: "/press",
            description: "Media kit, news & press releases",
            icon: FileText,
          },
        ],
      },
    ],
  },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Marketplace",
    links: [
      { label: "Coming in 2027", href: "/marketplace" },
      { label: "Buying Guide", href: "/marketplace/guide" },
      { label: "ROI Calculator", href: "/consulting/tools/roi-calculator" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Consulting", href: "/consulting" },
      { label: "Installation", href: "/services" },
      { label: "AMC", href: "/services/amc" },
      { label: "Enterprise", href: "/consulting/enterprise" },
      { label: "Find Installer", href: "/services/find-installer" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "CMS Software", href: "/cms" },
      { label: "API Access", href: "/cms/api" },
      { label: "Integrations", href: "/cms/guides" },
      { label: "Pricing", href: "/pricing" },
      { label: "Docs", href: "/cms/docs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/academy/blog" },
      { label: "Guides", href: "/academy/guides" },
      { label: "Academy", href: "/academy" },
      { label: "Webinars", href: "/academy/webinars" },
      { label: "Case Studies", href: "/consulting/case-studies" },
      { label: "Glossary", href: "/academy/glossary" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
] as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/howelectric",
  linkedin: "https://linkedin.com/company/howelectric",
  instagram: "https://instagram.com/howelectric",
  youtube: "https://youtube.com/@howelectric",
} as const;

export const CONTACT = {
  email: "hello@howelectric.com",
  phone: "+91-XXXXXXXXXX",
} as const;

export const PILLAR_COLORS = {
  marketplace: "teal",
  consulting: "orange",
  services: "purple",
  cms: "gold",
  academy: "green",
  company: "electric-blue",
} as const;
