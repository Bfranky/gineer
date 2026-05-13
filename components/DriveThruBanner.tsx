import Link from "next/link";
import { DRIVE_THRU_STEPS, BUSINESS, IMAGES } from "@/lib/constants";

export default function DriveThruBanner() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={IMAGES.drivethru} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-[#faf6ee]/95" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#c9972b] text-white text-xs font-extrabold uppercase tracking-widest rounded-full px-5 py-2 mb-5">
            ✦ Unique in Nsukka!
          </span>
          <h2 className="font-display text-[clamp(36px,6vw,60px)] text-[#1b3a2d] leading-tight font-bold mb-3">
            Drive-Through Available
          </h2>
          <p className="text-[#1b3a2d]/50 font-accent text-xl italic max-w-xl mx-auto">
            No parking stress. Order, pull up, collect, and go — hot and fresh every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {DRIVE_THRU_STEPS.map((step, idx) => (
            <div key={step.step} className="relative bg-white border border-[#e8d9bb] rounded-2xl p-6 hover:border-[#c9972b] hover:-translate-y-1 transition-all duration-200 shadow-sm">
              {idx < DRIVE_THRU_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-[#c9972b] text-xl font-black">→</div>
              )}
              <div className="w-9 h-9 rounded-full bg-[#1b3a2d] flex items-center justify-center font-display text-xl text-[#f0c060] font-bold mb-4">{step.step}</div>
              <div className="text-3xl mb-3">{step.emoji}</div>
              <h3 className="font-display font-bold text-[#1b3a2d] text-lg mb-1">{step.title}</h3>
              <p className="text-[#1b3a2d]/50 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={`tel:${BUSINESS.phoneTel}`} className="inline-flex items-center gap-2 bg-[#1b3a2d] hover:bg-[#2d5a42] text-[#f0c060] font-bold text-base px-9 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-[#1b3a2d]/20">
            🚗 Call for Drive-Through: {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
