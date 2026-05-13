import MenuShowcase from "@/components/MenuShowcase";
import { IMAGES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Gineer Tasty Grills",
  description: "Sharwama, grills, sides and drinks. Student-friendly pricing ₦2,000–₦4,000.",
};

export default function MenuPage() {
  return (
    <main>
      <div className="relative py-20 px-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMAGES.heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-[#1b3a2d]/92" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="inline-block text-[#c9972b] text-xs uppercase tracking-[0.3em] font-bold border-b border-[#c9972b]/40 pb-1 mb-4">
            Our Offerings
          </span>
          <h1 className="font-display text-[clamp(48px,8vw,80px)] text-white leading-tight font-bold mb-2">
            Full Menu
          </h1>
          <p className="font-accent text-white/50 text-xl italic">
            Everything we serve — all made fresh from 3 PM daily.
          </p>
        </div>
      </div>
      <MenuShowcase />
    </main>
  );
}
