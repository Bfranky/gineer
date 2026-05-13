"use client";

import { useState } from "react";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import type { MenuCategory } from "@/types";

export default function MenuShowcase() {
  const [active, setActive] = useState<MenuCategory>("sharwama");

  const items = MENU_ITEMS.filter((i) => i.category === active);

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#faf6ee]">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-[#c9972b] text-xs uppercase tracking-[0.3em] font-bold border-b border-[#c9972b]/40 pb-1 mb-4">
            What We Serve
          </span>
          <h2 className="font-display text-[clamp(36px,6vw,60px)] text-[#1b3a2d] leading-tight font-bold">
            Our Menu
          </h2>
          <p className="font-accent text-[#1b3a2d]/50 text-lg italic mt-2">
            From "top notch" sharwama to flame-grilled perfection
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all uppercase tracking-wider ${
                active === cat.id
                  ? "bg-[#1b3a2d] text-[#f0c060]"
                  : "bg-white border border-[#e8d9bb] text-[#1b3a2d]/70 hover:text-[#1b3a2d] hover:border-[#c9972b]"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="card-elegant overflow-hidden hover:border-[#c9972b] hover:-translate-y-1.5 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              {/* Image — plain <img> so browser fetches directly, bypassing Vercel servers */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-[#e8d9bb] to-[#f0c060]/40">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <span className="text-5xl">{item.emoji}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                {item.popular && (
                  <span className="absolute top-3 right-3 bg-[#c9972b] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    ★ Popular
                  </span>
                )}
                {item.spicyLevel && (
                  <span className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[11px] rounded-full px-2 py-0.5">
                    {"🌶".repeat(item.spicyLevel)}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-display text-[#1b3a2d] font-bold text-base leading-tight mb-1">
                  {item.name}
                </h3>
                <p className="text-[#1b3a2d]/50 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-[#c9972b] font-bold">
                    {formatPrice(item.price)}
                  </span>
                  <button className="bg-[#1b3a2d] hover:bg-[#2d5a42] text-[#f0c060] text-xs font-bold px-4 py-1.5 rounded-full transition-colors uppercase tracking-wide">
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 flex justify-center">
          <div className="border border-[#e8d9bb] bg-white rounded-full px-7 py-3 text-[#1b3a2d]/60 text-sm font-medium">
            Student-friendly pricing:{" "}
            <strong className="text-[#c9972b]">₦2,000 – ₦4,000</strong> per person
          </div>
        </div>
      </div>
    </section>
  );
}
