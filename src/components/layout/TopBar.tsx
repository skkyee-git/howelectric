import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const topLinks = [
  { label: "Station Locator", href: "/station-locator", icon: MapPin },
  { label: "For Manufacturers", href: "/manufacturers" },
  { label: "For Installers", href: "/installers" },
  { label: "Contact", href: "/contact" },
];

export function TopBar() {
  return (
    <div className="hidden bg-navy text-white/90 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
        {/* Left links */}
        <nav className="flex items-center gap-4 text-xs">
          {topLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 transition-colors hover:text-white"
            >
              {link.icon && <link.icon className="size-3" />}
              {link.label}
              {i < topLinks.length - 1 && (
                <span className="ml-4 text-white/30">|</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right contact */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-1 transition-colors hover:text-white"
          >
            <Mail className="size-3" />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
