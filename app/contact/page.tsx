import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OpeningHours from "@/components/OpeningHours";
import { BUSINESS, IMAGES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Gineer Tasty Grills",
  description:
    "Contact Gineer Tasty Grills — phone, WhatsApp, and location details. UNN Nsukka.",
};

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.coordinates.lat},${BUSINESS.coordinates.lng}`;

  return (
    <main>
      <Navbar />

      <section className="bg-[#1a0a00] dark:bg-[#0f0700] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-[clamp(44px,8vw,72px)] text-white leading-none mb-2">
            Contact Us
          </h1>
          <p className="text-white/50 text-lg mb-10">
            We&apos;re open from 3 PM daily. Call, WhatsApp, or just drive in!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left */}
            <div className="space-y-5">
              <OpeningHours />

              <div className="bg-[#221005] dark:bg-[#1a0a00] border border-white/6 rounded-2xl p-6 space-y-4">
                <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  📱 Get in Touch
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e8450a]/15 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">Phone</div>
                    <a
                      href={`tel:${BUSINESS.phoneTel}`}
                      className="text-white font-bold text-sm hover:text-[#ff8844] transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#25d366]/15 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">WhatsApp</div>
                    <a
                      href={`https://wa.me/${BUSINESS.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25d366] font-bold text-sm hover:text-[#4ade80] transition-colors"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#221005] dark:bg-[#1a0a00] border border-white/6 rounded-2xl p-6 space-y-4">
                <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  📍 Address
                </h3>
                <div className="text-white text-sm font-medium leading-relaxed">
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.area}, {BUSINESS.address.postalCode}
                  <br />
                  {BUSINESS.address.state} State
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Plus Code</div>
                  <div className="text-[#ff8844] font-semibold text-sm">
                    {BUSINESS.address.plusCode}
                  </div>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#e8450a] hover:bg-[#ff5500] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
                >
                  🗺️ Open in Google Maps
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-5">
              {/* Real location image instead of broken maps embed */}
              <div className="bg-[#221005] dark:bg-[#1a0a00] border border-white/6 rounded-2xl overflow-hidden h-64 relative">
                <Image
                  src={IMAGES.campus}
                  alt="University of Nigeria, Nsukka"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2">
                    <p className="text-white text-xs font-semibold">
                      📍 University of Nigeria, Ihe, Nsukka
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex items-center gap-4 bg-[#e8450a] hover:bg-[#ff5500] text-white rounded-2xl p-5 transition-all hover:-translate-y-0.5 group"
              >
                <span className="text-3xl">📞</span>
                <div>
                  <div className="font-bold text-lg">Call to Order</div>
                  <div className="text-white/80 text-sm">{BUSINESS.phone}</div>
                </div>
                <span className="ml-auto text-white/50 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-2xl p-5 transition-all hover:-translate-y-0.5 group"
              >
                <span className="text-3xl">💬</span>
                <div>
                  <div className="font-bold text-lg">WhatsApp Us</div>
                  <div className="text-white/80 text-sm">
                    Chat to place your order
                  </div>
                </div>
                <span className="ml-auto text-white/50 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
