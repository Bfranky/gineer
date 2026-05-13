"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";
import { isOpen } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const open = isOpen();

  const links = [
    { href: "/menu", label: "Menu" },
    { href: "/order", label: "Order" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b-2 border-[#e8450a] bg-[#1a0a00]/97 dark:bg-[#0f0700]/97">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl text-[#ff5500] tracking-wide"
        >
          GINEER <span className="text-[#ffd600]">TASTY</span> GRILLS
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#ff8844] text-sm font-semibold uppercase tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Open/Closed badge */}
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                open ? "bg-green-400 animate-pulse-slow" : "bg-[#ff8844]"
              }`}
            />
            <span
              className={`text-xs font-bold ${
                open ? "text-green-400" : "text-[#ff8844]"
              }`}
            >
              {open ? "OPEN" : "OPENS 3PM"}
            </span>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-base transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            📞 {BUSINESS.phone}
          </a>
          <Link
            href="/order"
            className="bg-[#e8450a] hover:bg-[#ff5500] text-white text-sm font-bold px-5 py-2 rounded-full transition-all hover:scale-105"
          >
            Order Now 🔥
          </Link>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#221005] dark:bg-[#1a0a00] border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#ff8844] font-semibold uppercase tracking-wide text-sm py-2"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="mt-2 bg-[#e8450a] text-white text-center font-bold py-3 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Order Now 🔥
          </Link>
        </div>
      )}
    </nav>
  );
}
