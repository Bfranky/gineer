import Link from "next/link";
import Image from "next/image";
import { BUSINESS, IMAGES } from "@/lib/constants";
import { isOpen } from "@/lib/utils";

export default function Hero() {
  const open = isOpen();

  return (
    <section className="relative min-h-[620px] flex items-center bg-[#1a0a00] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroBg}
          alt="Grilled food background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a00]/95 via-[#3d1200]/70 to-[#1a0a00]/50" />
      </div>

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

      {/* Glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,69,10,0.3) 0%, transparent 70%)",
          top: -150,
          right: -100,
        }}
      />

      {/* Floating food image — desktop only */}
      <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full overflow-hidden border-2 border-[#e8450a]/40 shadow-[0_0_80px_rgba(232,69,10,0.3)] animate-float">
        <Image
          src={IMAGES.heroFood}
          alt="Gineer Tasty Grills food"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl fade-up">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span
              className={`w-2 h-2 rounded-full ${
                open ? "bg-green-400 animate-pulse-slow" : "bg-[#ff8844]"
              }`}
            />
            <span className="text-white font-semibold text-sm">
              {open ? "Open Now" : "Opens at 3:00 PM Daily"} ·{" "}
              {BUSINESS.address.area}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(52px,10vw,104px)] text-white leading-[0.9] mb-4 tracking-wide">
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
            <div className="flex items-center gap-1.5 bg-[#ffd600]/15 border border-[#ffd600]/30 rounded-full px-4 py-2 text-[#ffd600] text-sm font-bold">
              ★ {BUSINESS.rating}/5
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
              <span>WhatsApp Order 💬</span>
            </Link>
          </div>

          {/* Location */}
          <p className="mt-6 text-white/50 text-sm flex items-center gap-1.5">
            📍 University of Nigeria, Nsukka, Enugu State
          </p>
        </div>
      </div>
    </section>
  );
}
