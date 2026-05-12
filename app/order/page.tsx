import Navbar from "@/components/Navbar";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order | Gineer Tasty Grills",
  description:
    "Place a drive-through or delivery order at Gineer Tasty Grills, UNN Nsukka.",
};

export default function OrderPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#fff8f4] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-display text-[clamp(44px,8vw,72px)] text-[#1a0a00] leading-none mb-2">
              Place Your Order
            </h1>
            <p className="text-[#7a5540] text-lg">
              Drive-through or delivery — your order will be ready fresh and hot.
            </p>
          </div>

          <OrderForm />

          <div className="mt-8 bg-white border border-[#ffe0cc] rounded-2xl p-5 text-sm text-[#7a5540]">
            <p className="font-bold text-[#3d1a00] mb-2">💡 Order tips</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>We open at 3:00 PM daily — orders before then will be queued.</li>
              <li>Drive-through orders are usually ready in 10–15 minutes.</li>
              <li>Delivery is within UNN campus only.</li>
              <li>
                Call us directly:{" "}
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="text-[#e8450a] font-bold"
                >
                  {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
