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
    <footer className="bg-[#110600] dark:bg-[#080400] border-t border-white/5 py-12 px-4 text-center">
      <div className="font-display text-3xl text-[#ff5500] mb-1 tracking-wide">
        GINEER <span className="text-[#ffd600]">TASTY</span> GRILLS
      </div>
      <p className="text-white/30 text-sm mb-6">
        Top Notch Sharwama · University of Nigeria, Nsukka · Opens 3 PM Daily
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-white/40 hover:text-[#ff8844] text-sm transition-colors"
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
          📍 {BUSINESS.address.street}, {BUSINESS.address.area},{" "}
          {BUSINESS.address.state}
        </span>
      </div>

      <p className="text-white/15 text-xs">
        © {new Date().getFullYear()} Gineer Tasty Grills · UNN, Nsukka, Enugu
        State
      </p>
    </footer>
  );
}
