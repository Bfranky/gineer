"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import type { MenuCategory } from "@/types";

function SpicyIndicator({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span className="text-xs" title={`Spicy level ${level}`}>
      {"🌶".repeat(level)}
    </span>
  );
}

export default function MenuShowcase() {
  const [active, setActive] = useState<MenuCategory>("sharwama");

  const items = MENU_ITEMS.filter((i) => i.category === active);

  return (
    <section className="py-20 px-4 bg-[#1a0a00] dark:bg-[#0f0700]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-display text-[clamp(36px,6vw,64px)] text-white leading-none mb-2">
            Our Menu
          </h2>
          <p className="text-white/50 text-lg">
            From "top notch" sharwama to flame-grilled perfection
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                active === cat.id
                  ? "bg-[#e8450a] text-white"
                  : "bg-white/8 border border-white/15 text-white/70 hover:text-white hover:bg-white/12"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#221005] dark:bg-[#1a0a00] border border-white/6 rounded-2xl overflow-hidden hover:border-[#e8450a]/50 hover:-translate-y-1 transition-all duration-200 group"
            >
              {/* Real image */}
              <div className="h-44 relative overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center bg-gradient-to-br from-[#3d1200] to-[#5a2500]">
                    <span className="text-5xl">{item.emoji}</span>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#221005]/80 via-transparent to-transparent" />
                {item.popular && (
                  <span className="absolute top-2 right-2 bg-[#ffd600] text-[#1a0a00] text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                    ★ POPULAR
                  </span>
                )}
                {item.spicyLevel && (
                  <span className="absolute top-2 left-2 bg-black/50 text-white text-[11px] rounded-full px-2 py-0.5">
                    {"🌶".repeat(item.spicyLevel)}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-4">
                <h3 className="text-white font-bold text-base leading-tight mb-1">
                  {item.name}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-[#ff5500]">
                    {formatPrice(item.price)}
                  </span>
                  <button className="bg-[#e8450a] hover:bg-[#ff5500] text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors">
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price note */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white/7 border border-white/12 rounded-full px-6 py-3 text-white/60 text-sm">
            Student-friendly pricing:{" "}
            <strong className="text-[#ff5500]">₦2,000 – ₦4,000</strong> per
            person
          </div>
        </div>
      </div>
    </section>
  );
}
