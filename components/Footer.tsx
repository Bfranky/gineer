import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2318] border-t border-[#c9972b]/20 py-14 px-4 text-center">
      <div className="font-display text-3xl font-bold text-white mb-1 tracking-tight">
        GINEER <span className="text-[#c9972b]">TASTY</span> GRILLS
      </div>
      <p className="text-white/30 text-sm mb-8 font-accent italic text-base">
        Top Notch Sharwama · University of Nigeria, Nsukka · Opens 3 PM Daily
      </p>

      {/* Gold divider */}
      <div className="w-16 h-px bg-[#c9972b]/40 mx-auto mb-8" />

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-white/40 hover:text-[#f0c060] text-sm uppercase tracking-widest transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="text-white/40 hover:text-white transition-colors flex items-center gap-1.5"
        >
          📞 {BUSINESS.phone}
        </a>
        <span className="text-white/20">·</span>
        <span className="text-white/40">
          📍 {BUSINESS.address.street}, {BUSINESS.address.area}, {BUSINESS.address.state}
        </span>
      </div>

      <p className="text-white/15 text-xs tracking-wider">
        © {new Date().getFullYear()} Gineer Tasty Grills · UNN, Nsukka, Enugu State
      </p>
    </footer>
  );
}
