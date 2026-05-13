import { BUSINESS } from "@/lib/constants";
import { isOpen } from "@/lib/utils";

export default function OpeningHours() {
  const open = isOpen();

  return (
    <div className="bg-[#221005] dark:bg-[#1a0a00] border border-white/6 dark:border-white/8 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-2xl">🕒</span>
        <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest">
          Opening Hours
        </h3>
      </div>

      <div
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold mb-4 ${
          open
            ? "bg-green-400/15 text-green-400"
            : "bg-[#ff8844]/15 text-[#ff8844]"
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            open ? "bg-green-400 animate-pulse-slow" : "bg-[#ff8844]"
          }`}
        />
        {open ? "Open Now" : `Closed · Opens at ${BUSINESS.openHour}:00`}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-white/70 text-sm font-medium">
            Monday – Sunday
          </span>
          <span className="text-[#ff8844] text-sm font-bold">
            3:00 PM – Late
          </span>
        </div>
        <p className="text-white/30 text-xs pt-1">
          Perfect for late lunch, dinner & evening cravings 🌙
        </p>
      </div>
    </div>
  );
}
