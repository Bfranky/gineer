import { REVIEWS, BUSINESS } from "@/lib/constants";

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? "text-[#c9972b]" : "text-[#e8d9bb]"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 px-4 bg-[#1b3a2d] relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9972b 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#c9972b] text-xs uppercase tracking-[0.3em] font-bold border-b border-[#c9972b]/40 pb-1 mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] text-white leading-tight font-bold mb-2">
            What Students Say
          </h2>
          <p className="font-accent text-white/40 text-lg italic">
            Real voices from UNN campus
          </p>
        </div>

        {/* Overall rating */}
        <div className="bg-white/5 border border-[#c9972b]/20 rounded-2xl p-8 text-center max-w-xs mx-auto mb-12 backdrop-blur-sm">
          <div className="font-display text-7xl font-bold text-gradient-gold leading-none">
            {BUSINESS.rating}
          </div>
          <div className="flex justify-center gap-0.5 mt-2 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={`text-xl ${i <= Math.round(BUSINESS.rating) ? "text-[#c9972b]" : "text-white/10"}`}>
                ★
              </span>
            ))}
          </div>
          <p className="text-white/40 text-sm">
            Based on {BUSINESS.reviewCount} Google reviews
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 relative border ${
                review.highlighted ? "border-[#c9972b]" : "border-white/10"
              }`}
            >
              {review.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c9972b] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full px-3 py-1 whitespace-nowrap">
                  ⭐ Top Review
                </div>
              )}
              <span className="block text-5xl text-white/10 font-serif leading-none mb-2">"</span>
              <StarRating rating={review.rating} />
              <p className="text-white/65 text-sm leading-relaxed my-3 italic font-accent text-base">
                {review.text}
              </p>
              <div>
                <div className="font-bold text-white text-sm">{review.author}</div>
                {review.role && <div className="text-[#c9972b]/70 text-xs">{review.role}</div>}
                <div className="text-white/30 text-xs">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="bg-[#c9972b]/15 border border-[#c9972b]/30 rounded-2xl p-6 flex items-center gap-5">
          <span className="text-4xl">✦</span>
          <p className="text-white/80 font-semibold text-base leading-relaxed">
            "Top Notch" Sharwama —{" "}
            <span className="text-[#f0c060]">"Compared to NONE here in Nsukka"</span>{" "}
            — Verified Customer
          </p>
        </div>
      </div>
    </section>
  );
}
