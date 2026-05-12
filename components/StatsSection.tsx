const stats = [
  { num: "2+", label: "Years Serving" },
  { num: "5★", label: "Top Review" },
  { num: "#1", label: "Sharwama in Nsukka" },
  { num: "3PM", label: "Opens Daily" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#1a0a00] py-12 px-4">
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#221005] py-8 px-4 text-center">
            <div className="font-display text-5xl text-[#ff5500] leading-none mb-1">
              {s.num}
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
