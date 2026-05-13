import Link from "next/link";
import Image from "next/image";
import { BUSINESS, IMAGES } from "@/lib/constants";
import { isOpen } from "@/lib/utils";

export default function Hero() {
  const open = isOpen();

  return (
    <section className="relative min-h-[680px] flex items-center overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroBg}
          alt="Grilled food background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Subtle gold grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(201,151,43,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201,151,43,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Floating food image — desktop only */}
      <div className="hidden lg:block absolute right-[6%] top-1/2 -translate-y-1/2">
        <div className="w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-[#c9972b]/50 shadow-[0_0_80px_rgba(201,151,43,0.25)] animate-float">
          <Image
            src={IMAGES.heroFood}
            alt="Gineer Tasty Grills food"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Gold ring decoration */}
        <div className="absolute -inset-4 rounded-full border border-[#c9972b]/20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-xl fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#c9972b]/50 bg-[#c9972b]/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className={`w-2 h-2 rounded-full ${open ? "bg-emerald-400 animate-pulse-slow" : "bg-[#f0c060]"}`} />
            <span className="text-[#f0c060] font-medium text-xs uppercase tracking-widest">
              {open ? "Open Now" : "Opens at 3:00 PM"} · {BUSINESS.address.area}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(48px,9vw,96px)] text-white leading-[0.92] mb-5 font-bold">
            Gineer
            <br />
            <span className="text-gradient-gold">Tasty</span>
            <br />
            Grills
          </h1>

          {/* Tagline */}
          <p className="font-accent text-[#e8d9bb] text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
            "{BUSINESS.tagline}"
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            <div className="flex items-center gap-1.5 bg-[#c9972b]/20 border border-[#c9972b]/40 rounded-full px-4 py-2 text-[#f0c060] text-sm font-semibold">
              ★ {BUSINESS.rating}/5 Rated
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm">
              🚗 Drive-Through
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm">
              🏍️ Delivery
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="bg-[#c9972b] hover:bg-[#f0c060] text-[#1b3a2d] font-bold text-base px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-[#c9972b]/30"
            >
              View Menu
            </Link>
            <Link
              href="/order"
              className="bg-[#1b3a2d] hover:bg-[#2d5a42] text-white font-bold text-base px-8 py-3.5 rounded-full border border-white/20 transition-all hover:-translate-y-0.5"
            >
              Order Now ✦
            </Link>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="border border-white/30 hover:border-[#c9972b] text-white hover:text-[#f0c060] font-semibold text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
            >
              📞 Call to Order
            </a>
          </div>

          <p className="mt-8 text-white/40 text-sm">
            📍 University of Nigeria, Nsukka, Enugu State
          </p>
        </div>
      </div>
    </section>
  );
}
