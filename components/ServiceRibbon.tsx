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
    <div className="bg-[#e8450a] overflow-hidden">
      <div className="flex flex-wrap justify-center">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-3.5 text-white text-xs font-extrabold uppercase tracking-widest border-r border-white/20 last:border-r-0"
          >
            <span className="text-sm">{s.emoji}</span>
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}
