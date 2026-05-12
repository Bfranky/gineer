import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { isOpen } from "@/lib/utils";

export default function Hero() {
  const open = isOpen();

  return (
    <section className="relative min-h-[580px] flex items-center bg-grill-hero overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(255,80,0,0.04) 0px, rgba(255,80,0,0.04) 2px, transparent 2px, transparent 40px),
            repeating-linear-gradient(-45deg, rgba(255,200,0,0.03) 0px, rgba(255,200,0,0.03) 2px, transparent 2px, transparent 40px)
          `,
        }}
      />
      {/* Glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,69,10,0.25) 0%, transparent 70%)",
          top: -150,
          right: -100,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,214,0,0.12) 0%, transparent 70%)",
          bottom: -80,
          left: "10%",
        }}
      />

      {/* Decorative emoji */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[160px] opacity-[0.07] animate-sway select-none pointer-events-none">
        🔥
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span
              className={`w-2 h-2 rounded-full ${open ? "bg-green-400 animate-pulse" : "bg-[#ff8844]"}`}
            />
            <span className="text-white font-semibold text-sm">
              {open ? "Open Now" : "Opens at 3:00 PM Daily"} ·{" "}
              {BUSINESS.address.area}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(52px,10vw,96px)] text-white leading-[0.92] mb-4 tracking-wide">
            GINEER
            <br />
            <span className="text-[#ff5500]">TASTY</span>
            <br />
            GRILLS
          </h1>

          {/* Tagline */}
          <p className="text-[#ffd600] font-bold text-lg md:text-xl mb-6">
            🔥 {BUSINESS.tagline}
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-semibold">
              ★★★★ {BUSINESS.rating}/5
            </div>
            <div className="flex items-center gap-1.5 bg-[#e8450a]/40 border border-[#e8450a]/60 rounded-full px-4 py-2 text-white text-sm font-semibold">
              🚗 Drive-Through
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-semibold">
              🏍️ Delivery
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-semibold">
              {BUSINESS.priceRange}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="bg-[#e8450a] hover:bg-[#ff5500] text-white font-bold text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-[#e8450a]/30"
            >
              View Menu 🌯
            </Link>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="border-2 border-white/30 hover:border-[#ff5500] text-white hover:text-[#ff8844] font-bold text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
            >
              📞 Call to Order
            </a>
            <Link
              href="/order"
              className="bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>WhatsApp Order</span>
            </Link>
          </div>

          {/* Location */}
          <p className="mt-6 text-white/60 text-sm flex items-center gap-1.5">
            📍 University of Nigeria, Nsukka, Enugu State
          </p>
        </div>
      </div>
    </section>
  );
}
