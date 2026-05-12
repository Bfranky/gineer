import { REVIEWS, BUSINESS } from "@/lib/constants";

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < rating ? "text-[#ffd600]" : "text-white/20"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-16 px-4 bg-[#fff8f4]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-[clamp(36px,6vw,60px)] text-[#1a0a00] leading-none mb-2">
            What Students Say
          </h2>
          <p className="text-[#7a5540] text-lg">Real voices from UNN campus</p>
        </div>

        {/* Overall rating card */}
        <div className="bg-white border border-[#ffe0cc] rounded-2xl p-8 text-center max-w-xs mx-auto mb-10">
          <div className="font-display text-7xl text-[#e8450a] leading-none">
            {BUSINESS.rating}
          </div>
          <div className="flex justify-center gap-0.5 mt-2 mb-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`text-xl ${i <= Math.round(BUSINESS.rating) ? "text-[#ffd600]" : "text-[#ffe0cc]"}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-[#7a5540] text-sm">
            Based on {BUSINESS.reviewCount} Google reviews
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className={`bg-white rounded-2xl p-6 relative ${
                review.highlighted
                  ? "border-2 border-[#ffd600]"
                  : "border border-[#ffe0cc]"
              }`}
            >
              {review.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ffd600] text-[#1a0a00] text-[10px] font-extrabold uppercase tracking-wider rounded-full px-3 py-1 whitespace-nowrap">
                  ⭐ Top Review
                </div>
              )}

              <span className="block text-5xl text-[#ffe0cc] font-serif leading-none mb-2">
                "
              </span>
              <StarRating rating={review.rating} />
              <p className="text-[#3d1a00] text-sm leading-relaxed my-3 italic">
                {review.text}
              </p>
              <div>
                <div className="font-bold text-[#1a0a00] text-sm">
                  {review.author}
                </div>
                {review.role && (
                  <div className="text-[#7a5540] text-xs">{review.role}</div>
                )}
                <div className="text-[#7a5540] text-xs">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div className="bg-gradient-to-r from-[#e8450a] to-[#c23200] rounded-2xl p-6 flex items-center gap-5">
          <span className="text-4xl">👍</span>
          <p className="text-white font-semibold text-base leading-relaxed">
            "Top Notch" Sharwama —{" "}
            <span className="text-[#ffd600]">
              "Compared to NONE here in Nsukka"
            </span>{" "}
            — Verified Customer
          </p>
        </div>
      </div>
    </section>
  );
}
