import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceRibbon from "@/components/ServiceRibbon";
import StatsSection from "@/components/StatsSection";
import DriveThruBanner from "@/components/DriveThruBanner";
import MenuShowcase from "@/components/MenuShowcase";
import ReviewsSection from "@/components/ReviewsSection";
import OpeningHours from "@/components/OpeningHours";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServiceRibbon />
      <StatsSection />
      <DriveThruBanner />
      <MenuShowcase />
      <ReviewsSection />

      {/* Info + Order section */}
      <section className="py-16 px-4 bg-[#1a0a00]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Hours + Contact */}
            <div className="space-y-5">
              <OpeningHours />

              {/* Address */}
              <div className="bg-[#221005] border border-white/6 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📍</span>
                  <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                    Location
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">Address</div>
                    <div className="text-white text-sm font-medium">
                      {BUSINESS.address.street}, {BUSINESS.address.area},{" "}
                      {BUSINESS.address.postalCode}, {BUSINESS.address.state}
                    </div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">Plus Code</div>
                    <div className="text-[#ff8844] text-sm font-semibold">
                      {BUSINESS.address.plusCode}
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.coordinates.lat},${BUSINESS.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 bg-[#e8450a] hover:bg-[#ff5500] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
                  >
                    🗺️ Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-[#221005] border border-white/6 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📱</span>
                  <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                    Get in Touch
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: "📞", label: "Phone / WhatsApp", value: BUSINESS.phone },
                    { icon: "🚗", label: "Drive-Through", value: "Available from 3 PM" },
                    { icon: "🏍️", label: "Delivery", value: "Within UNN campus" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#e8450a]/15 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                        {row.icon}
                      </div>
                      <div>
                        <div className="text-white/40 text-xs">{row.label}</div>
                        <div className="text-white text-sm font-semibold">
                          {row.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Order form */}
            <div>
              <h2 className="font-display text-[clamp(32px,5vw,52px)] text-white leading-none mb-2">
                Place Your Order
              </h2>
              <p className="text-white/50 text-base mb-6">
                Drive-through or delivery — your choice!
              </p>
              <OrderForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
