const services = [
  { emoji: "🚗", label: "Drive-Through" },
  { emoji: "🏍️", label: "Delivery" },
  { emoji: "🌯", label: "Sharwama" },
  { emoji: "🔥", label: "Grills" },
  { emoji: "🍟", label: "French Fries" },
  { emoji: "📞", label: "Call to Order" },
];

export default function ServiceRibbon() {
  return (
    <div className="bg-[#e8450a] overflow-hidden">
      <div className="flex flex-wrap justify-center">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 py-3 text-white text-sm font-bold uppercase tracking-wide border-r border-white/20 last:border-r-0"
          >
            <span className="text-base">{s.emoji}</span>
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}
