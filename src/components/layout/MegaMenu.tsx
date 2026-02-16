"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/lib/constants";
import { DURATION, EASE, STAGGER } from "@/lib/animations";
import { cn } from "@/lib/utils";

/* ─── Stagger variants for link columns ─── */

const columnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: EASE.out },
  },
};

interface MegaMenuProps {
  item: NavItem;
  isOpen: boolean;
}

export function MegaMenu({ item, isOpen }: MegaMenuProps) {
  if (!item.columns || !item.pillar) return null;

  const PillarIcon = item.pillarIcon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: DURATION.fast, ease: EASE.out }}
          className="absolute left-0 right-0 top-full z-50 border-t border-border bg-white shadow-xl"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-8 grid-cols-[220px_1fr]">
            {/* ── Left panel: Pillar intro ── */}
            <motion.div
              className="border-l-4 border-electric-blue pl-5"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: DURATION.normal, ease: EASE.out }}
            >
              {PillarIcon && (
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-electric-blue/10">
                  <PillarIcon className="size-5 text-electric-blue" />
                </div>
              )}
              <h3 className="mb-2 text-lg font-bold text-navy">
                {item.label}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-mid-gray">
                {item.description}
              </p>
              {item.cta && (
                <Button
                  asChild
                  size="sm"
                  className="bg-electric-blue text-white hover:bg-electric-blue/90"
                >
                  <Link href={item.cta.href}>
                    {item.cta.label}
                    <ArrowRight className="ml-1 size-3.5" />
                  </Link>
                </Button>
              )}
            </motion.div>

            {/* ── Right panel: Link columns ── */}
            <div
              className={cn(
                "grid gap-8",
                item.columns.length === 2 && "grid-cols-2",
                item.columns.length >= 3 && "grid-cols-3"
              )}
            >
              {item.columns.map((col, colIdx) => (
                <motion.div
                  key={col.title}
                  variants={columnVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: colIdx * 0.06 }}
                >
                  <h4 className="mb-3 border-b border-border pb-2 text-[11px] font-semibold uppercase tracking-wider text-mid-gray">
                    {col.title}
                  </h4>
                  <div className="space-y-0.5">
                    {col.links.map((link) => {
                      const LinkIcon = link.icon;
                      return (
                        <motion.div key={link.label} variants={linkVariants}>
                          <Link
                            href={link.href}
                            className="group flex items-start gap-3 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-electric-blue/5"
                          >
                            {LinkIcon && (
                              <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-electric-blue/8 transition-all duration-200 group-hover:bg-electric-blue/15 group-hover:scale-110 group-hover:-rotate-3">
                                <LinkIcon className="size-4 text-electric-blue transition-transform duration-200" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-dark-gray transition-colors group-hover:text-electric-blue">
                                {link.label}
                              </p>
                              {link.description && (
                                <p className="mt-0.5 text-xs leading-relaxed text-mid-gray">
                                  {link.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
