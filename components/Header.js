"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

function NavLink({ href, label, isActive, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block text-sm font-medium transition-colors md:text-base ${
        isActive ? "text-sd-600" : "text-slate-600 hover:text-sd-600"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4rem] py-3">
          <Link
            href="/"
            className="flex items-center shrink-0 text-slate-800 hover:text-sd-600 transition-colors font-bold text-lg"
          >
            San Diego Amazing Homes
          </Link>

          <nav
            className="header-desktop-nav items-center gap-8"
            aria-label="Main"
          >
            {navLinks.map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                label={label}
                isActive={pathname === href || (href !== "/" && pathname.startsWith(href))}
              />
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="header-mobile-trigger p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`header-mobile-panel overflow-hidden transition-all duration-200 ${mobileOpen ? "open max-h-48 opacity-100" : "closed max-h-0 opacity-0"}`}
          aria-hidden={!mobileOpen}
        >
          <nav className="pb-4 pt-2 border-t border-slate-200" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NavLink
                    href={href}
                    label={label}
                    isActive={pathname === href || (href !== "/" && pathname.startsWith(href))}
                    onClick={() => setMobileOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
