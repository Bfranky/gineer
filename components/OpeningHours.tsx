import { BUSINESS } from "@/lib/constants";
import { isOpen } from "@/lib/utils";

export default function OpeningHours() {
  const open = isOpen();

  return (
    <div className="card-elegant p-6">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-2xl">🕒</span>
        <h3 className="text-[#1b3a2d]/50 text-xs font-semibold uppercase tracking-widest">
          Opening Hours
        </h3>
      </div>

      <div
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold mb-4 ${
          open ? "bg-emerald-50 text-emerald-700" : "bg-[#c9972b]/10 text-[#c9972b]"
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-emerald-500 animate-pulse-slow" : "bg-[#c9972b]"}`} />
        {open ? "Open Now" : `Closed · Opens at ${BUSINESS.openHour}:00`}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center py-2 border-b border-[#e8d9bb]">
          <span className="text-[#1b3a2d]/70 text-sm font-medium">Monday – Sunday</span>
          <span className="text-[#c9972b] text-sm font-bold">3:00 PM – Late</span>
        </div>
        <p className="text-[#1b3a2d]/30 text-xs pt-1">
          Perfect for late lunch, dinner & evening cravings 🌙
        </p>
      </div>
    </div>
  );
}
