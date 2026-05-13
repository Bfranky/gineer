"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { isOpen } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = isOpen();

  const links = [
    { href: "/menu", label: "Menu" },
    { href: "/order", label: "Order" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-[#e8d9bb] bg-[#faf6ee]/97">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between" style={{height:"72px"}}>
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-[#1b3a2d] text-xl font-bold tracking-tight">
            GINEER <span className="text-[#c9972b]">TASTY</span> GRILLS
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9972b] font-medium">
            Est. at UNN · Nsukka
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#1b3a2d]/70 hover:text-[#c9972b] text-sm font-semibold uppercase tracking-widest transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#1b3a2d]/8 rounded-full px-3 py-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                open ? "bg-emerald-500 animate-pulse-slow" : "bg-[#c9972b]"
              }`}
            />
            <span className={`text-xs font-bold ${open ? "text-emerald-700" : "text-[#c9972b]"}`}>
              {open ? "OPEN NOW" : "OPENS 3PM"}
            </span>
          </div>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="text-[#1b3a2d]/60 hover:text-[#1b3a2d] text-sm font-medium transition-colors"
          >
            📞 {BUSINESS.phone}
          </a>
          <Link
            href="/order"
            className="bg-[#1b3a2d] hover:bg-[#2d5a42] text-[#f0c060] text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 tracking-wide"
          >
            Order Now ✦
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-[#1b3a2d] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#faf6ee] border-t border-[#e8d9bb] px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#1b3a2d] hover:text-[#c9972b] font-semibold uppercase tracking-wider text-sm py-2"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="mt-2 bg-[#1b3a2d] text-[#f0c060] text-center font-bold py-3 rounded-full tracking-wide"
            onClick={() => setMobileOpen(false)}
          >
            Order Now ✦
          </Link>
        </div>
      )}
    </nav>
  );
}
