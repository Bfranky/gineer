import Navbar from "@/components/Navbar";
import MenuShowcase from "@/components/MenuShowcase";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Gineer Tasty Grills",
  description:
    "Sharwama, grills, sides and drinks. Student-friendly pricing ₦2,000–₦4,000. University of Nigeria, Nsukka.",
};

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <div className="bg-[#1a0a00] pt-10 pb-2 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-[clamp(48px,8vw,80px)] text-white leading-none mb-2">
            Full Menu
          </h1>
          <p className="text-white/50 text-lg mb-2">
            Everything we serve — all made fresh from 3 PM daily.
          </p>
        </div>
      </div>
      <MenuShowcase />
      <Footer />
    </main>
  );
}
