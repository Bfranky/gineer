import { IMAGES } from "@/lib/constants";
import Image from "next/image";

const stats = [
  { num: "2+", label: "Years Serving", sub: "Est. at UNN" },
  { num: "5★", label: "Top Review", sub: "Verified customer" },
  { num: "#1", label: "Sharwama in Nsukka", sub: "Campus favourite" },
  { num: "3PM", label: "Opens Daily", sub: "Mon – Sun" },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.restaurant}
          alt="Restaurant background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b3a2d]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#c9972b] text-xs uppercase tracking-[0.3em] font-bold border-b border-[#c9972b]/40 pb-1">
            Our Numbers
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#c9972b]/20 rounded-2xl overflow-hidden border border-[#c9972b]/20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#1b3a2d]/80 backdrop-blur-sm py-12 px-4 text-center hover:bg-[#2d5a42]/80 transition-colors"
            >
              <div className="font-display text-5xl font-bold text-gradient-gold leading-none mb-2">
                {s.num}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/80 mt-1 mb-1">
                {s.label}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-[#c9972b]/60">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
