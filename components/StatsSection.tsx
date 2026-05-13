const stats = [
  { num: "2+", label: "Years Serving", sub: "Est. at UNN" },
  { num: "5★", label: "Top Review", sub: "Verified customer" },
  { num: "#1", label: "Sharwama in Nsukka", sub: "Campus favourite" },
  { num: "3PM", label: "Opens Daily", sub: "Mon – Sun" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#1a0a00] dark:bg-[#0f0700] py-16 px-4">
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-[#221005] dark:bg-[#1a0a00] py-10 px-4 text-center"
          >
            <div className="font-display text-5xl text-[#ff5500] leading-none mb-1">
              {s.num}
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/70 mt-1 mb-1">
              {s.label}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-white/25">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
