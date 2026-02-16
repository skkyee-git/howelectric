"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Star,
  BadgeCheck,
  Plug,
  BatteryCharging,
  Zap,
  CircuitBoard,
  Cable,
  Cpu,
  Radio,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const PRODUCTS = [
  {
    name: "Tata Power EZ Home 7.4kW",
    brand: "Tata Power",
    power: "7.4 kW",
    price: "₹45,000",
    rating: 4.8,
    reviews: 124,
    category: "AC Charger",
    cmsCompatible: true,
    icon: Plug,
    gradient: "from-[#4ECDC4]/20 via-[#2E86AB]/10 to-transparent",
    accentHex: "78,205,196",
  },
  {
    name: "Ather Grid Fast 7.4kW",
    brand: "Ather Energy",
    power: "7.4 kW",
    price: "₹38,000",
    rating: 4.7,
    reviews: 89,
    category: "AC Charger",
    cmsCompatible: true,
    icon: BatteryCharging,
    gradient: "from-[#10B981]/20 via-[#4ECDC4]/10 to-transparent",
    accentHex: "16,185,129",
  },
  {
    name: "Delta 30kW DC Fast Charger",
    brand: "Delta Electronics",
    power: "30 kW",
    price: "₹4,50,000",
    rating: 4.9,
    reviews: 56,
    category: "DC Fast",
    cmsCompatible: true,
    icon: Zap,
    gradient: "from-[#2E86AB]/20 via-[#A855F7]/10 to-transparent",
    accentHex: "46,134,171",
  },
  {
    name: "Exicom 60kW CCS2 Duo",
    brand: "Exicom",
    power: "60 kW",
    price: "₹8,75,000",
    rating: 4.6,
    reviews: 42,
    category: "DC Fast",
    cmsCompatible: true,
    icon: CircuitBoard,
    gradient: "from-[#FF6B35]/20 via-[#FBBF24]/10 to-transparent",
    accentHex: "255,107,53",
  },
  {
    name: "ChargePoint Home Flex",
    brand: "ChargePoint",
    power: "22 kW",
    price: "₹65,000",
    rating: 4.8,
    reviews: 203,
    category: "AC Charger",
    cmsCompatible: false,
    icon: Cable,
    gradient: "from-[#A855F7]/20 via-[#2E86AB]/10 to-transparent",
    accentHex: "168,85,247",
  },
  {
    name: "ABB Terra 180kW Ultra-Fast",
    brand: "ABB",
    power: "180 kW",
    price: "₹28,00,000",
    rating: 4.9,
    reviews: 31,
    category: "Ultra-Fast",
    cmsCompatible: true,
    icon: Cpu,
    gradient: "from-[#FBBF24]/20 via-[#FF6B35]/10 to-transparent",
    accentHex: "251,191,36",
  },
  {
    name: "Siemens VersiCharge 11kW",
    brand: "Siemens",
    power: "11 kW",
    price: "₹72,000",
    rating: 4.7,
    reviews: 67,
    category: "AC Charger",
    cmsCompatible: true,
    icon: Radio,
    gradient: "from-[#4ECDC4]/20 via-[#10B981]/10 to-transparent",
    accentHex: "78,205,196",
  },
  {
    name: "Loom Solar 10kW EV Kit",
    brand: "Loom Solar",
    power: "10 kW",
    price: "₹1,20,000",
    rating: 4.5,
    reviews: 38,
    category: "Solar Kit",
    cmsCompatible: false,
    icon: Sun,
    gradient: "from-[#FBBF24]/20 via-[#10B981]/10 to-transparent",
    accentHex: "251,191,36",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof PRODUCTS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 250, damping: 25 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  const lightX = useTransform(smoothX, [-0.5, 0.5], [0, 100]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], [0, 100]);

  const lightReflection = useTransform(
    [lightX, lightY],
    ([x, y]) =>
      `radial-gradient(500px circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
    >
      <motion.a
        ref={cardRef}
        href="/marketplace/products"
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-white"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Light reflection overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: lightReflection }}
        />

        {/* Image area */}
        <div
          className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${product.gradient}`}
        >
          <motion.div
            className="flex size-20 items-center justify-center rounded-3xl bg-white/90 shadow-lg backdrop-blur-sm"
            whileHover={{ rotate: 5, scale: 1.08 }}
            transition={{ type: "spring" as const, stiffness: 300 }}
          >
            <Icon className="size-9 text-navy/70" />
          </motion.div>

          <div className="absolute right-3 top-3 flex flex-col gap-1.5">
            <Badge className="border-0 bg-navy/90 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm">
              {product.category}
            </Badge>
            {product.cmsCompatible && (
              <Badge className="border-0 bg-teal/90 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm">
                <BadgeCheck className="mr-1 size-3" />
                CMS Ready
              </Badge>
            )}
          </div>

          <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-navy shadow-sm backdrop-blur-sm">
            {product.power}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {product.brand}
          </p>
          <h3 className="mt-1 text-[15px] font-bold leading-snug text-foreground transition-colors group-hover:text-electric-blue">
            {product.name}
          </h3>

          <div className="mt-2.5 flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-3 ${
                    i < Math.floor(product.rating)
                      ? "fill-gold text-gold"
                      : "fill-border text-border"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-foreground">
              {product.rating}
            </span>
            <span className="text-[11px] text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          <div className="mt-auto flex items-end justify-between pt-4">
            <p className="text-xl font-bold text-foreground">{product.price}</p>
            <div className="flex size-8 items-center justify-center rounded-full bg-electric-blue/10 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <ArrowRight className="size-3.5 text-electric-blue" />
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

export function PopularProducts() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">
              Popular Products
            </p>
            <h2 className="mt-3">Best sellers across India</h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Hand-picked, tested, and verified. Every charger ready to deploy
              with CMS integration.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="hidden sm:block">
            <Button asChild variant="outline" size="lg">
              <Link href="/marketplace/products">
                View All Products
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/marketplace/products">
              View All Products
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
