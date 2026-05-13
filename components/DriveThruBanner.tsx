import Image from "next/image";
import Link from "next/link";
import { DRIVE_THRU_STEPS, BUSINESS, IMAGES } from "@/lib/constants";

export default function DriveThruBanner() {
  return (
    <section className="py-20 px-4 bg-[#fff8f4] dark:bg-[#1a0a00] relative overflow-hidden">
      {/* Background image accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none">
        <Image
          src={IMAGES.drivethru}
          alt=""
          fill
          className="object-cover opacity-10 dark:opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f4] dark:from-[#1a0a00] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#ffd600] text-[#1a0a00] text-xs font-extrabold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">
            ✨ Unique in Nsukka!
          </span>
          <h2 className="font-display text-[clamp(36px,6vw,64px)] text-[#1a0a00] dark:text-white leading-none mb-3">
            Drive-Through Available
          </h2>
          <p className="text-[#7a5540] dark:text-white/50 text-lg max-w-xl mx-auto">
            No parking stress. Order, pull up, collect, and go — hot and fresh
            every time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {DRIVE_THRU_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-white dark:bg-[#221005] border border-[#ffe0cc] dark:border-white/6 rounded-2xl p-6 hover:border-[#e8450a] hover:-translate-y-1 transition-all duration-200"
            >
              {/* Connector arrow */}
              {idx < DRIVE_THRU_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#e8450a] text-xl font-black">
                  →
                </div>
              )}
              <div className="w-9 h-9 rounded-full bg-[#e8450a] flex items-center justify-center font-display text-xl text-white mb-4">
                {step.step}
              </div>
              <div className="text-3xl mb-3">{step.emoji}</div>
              <h3 className="font-bold text-[#1a0a00] dark:text-white text-lg mb-1">
                {step.title}
              </h3>
              <p className="text-[#7a5540] dark:text-white/40 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="inline-flex items-center gap-2 bg-[#e8450a] hover:bg-[#ff5500] text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8450a]/30"
          >
            🚗 Call for Drive-Through: {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
