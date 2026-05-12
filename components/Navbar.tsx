"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/menu", label: "Menu" },
    { href: "/order", label: "Order" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#1a0a00]/97 backdrop-blur-sm border-b-2 border-[#e8450a]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl text-[#ff5500] tracking-wide">
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

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#221005] border-t border-white/10 px-4 py-4 flex flex-col gap-3">
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
