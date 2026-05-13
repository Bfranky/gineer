const services = [
  { emoji: "🚗", label: "Drive-Through" },
  { emoji: "🏍️", label: "Delivery" },
  { emoji: "🌯", label: "Sharwama" },
  { emoji: "🔥", label: "Grills" },
  { emoji: "🍟", label: "French Fries" },
  { emoji: "📞", label: "Call to Order" },
  { emoji: "⭐", label: "Top Rated" },
  { emoji: "💯", label: "Fresh Daily" },
];

export default function ServiceRibbon() {
  return (
    <div className="bg-[#1b3a2d] border-y border-[#c9972b]/30 overflow-hidden">
      <div className="flex flex-wrap justify-center">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 py-4 text-[#f0c060] text-xs font-bold uppercase tracking-widest border-r border-[#c9972b]/20 last:border-r-0"
          >
            <span className="text-sm">{s.emoji}</span>
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}
