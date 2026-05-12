import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gineer Tasty Grills",
  description:
    "Learn about Gineer Tasty Grills — the top notch sharwama and grills specialist at UNN Nsukka.",
};

const usps = [
  {
    emoji: "🚗",
    title: "Drive-Through Service",
    desc: "Rare in Nigerian university areas — order, pull up, collect, and go.",
  },
  {
    emoji: "🌯",
    title: '"Top Notch" Sharwama',
    desc: 'Verified by customers as "compared to none here in Nsukka."',
  },
  {
    emoji: "🏫",
    title: "University Location",
    desc: "Sitting right at UNN campus — steps from hostels, faculties, and the main gate.",
  },
  {
    emoji: "🏍️",
    title: "Delivery Available",
    desc: "We bring the grill to you — delivery within UNN campus.",
  },
  {
    emoji: "💰",
    title: "Student-Friendly Pricing",
    desc: `${BUSINESS.priceRange} per person — designed for campus life.`,
  },
  {
    emoji: "📅",
    title: "2+ Years Established",
    desc: "Trusted by students and staff at UNN for over two years.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="bg-grill-hero py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-display text-[clamp(52px,10vw,100px)] text-white leading-none mb-4">
            GINEER
            <br />
            <span className="text-[#ff5500]">TASTY</span>
            <br />
            GRILLS
          </div>
          <p className="text-[#ffd600] font-bold text-xl max-w-xl mx-auto">
            The home of top notch sharwama and grills at the University of
            Nigeria, Nsukka.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-[#fff8f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[clamp(32px,5vw,52px)] text-[#1a0a00] leading-none mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-[#3d1a00] text-base leading-relaxed">
            <p>
              Gineer Tasty Grills was born from a simple mission: bring
              world-class sharwama and grilled food to the heart of UNN campus.
              Located at University of Nigeria, Ihe, Nsukka, we&apos;ve been
              serving hungry students, faculty, and Nsukka residents for over
              two years — and the love keeps growing.
            </p>
            <p>
              Our signature is our sharwama. Customers have called it{" "}
              <strong className="text-[#e8450a]">
                "top notch and compared to none in Nsukka"
              </strong>{" "}
              — and we intend to keep earning that title every single day.
            </p>
            <p>
              We introduced one of the first{" "}
              <strong>drive-through services</strong> in a Nigerian university
              setting — because we know students are busy. Order ahead, pull up,
              collect your food, and go. No fuss.
            </p>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 px-4 bg-[#1a0a00]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-[clamp(32px,5vw,52px)] text-white leading-none mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {usps.map((u) => (
              <div
                key={u.title}
                className="bg-[#221005] border border-white/6 rounded-2xl p-6 hover:border-[#e8450a]/40 transition-colors"
              >
                <div className="text-3xl mb-3">{u.emoji}</div>
                <h3 className="text-white font-bold text-base mb-2">
                  {u.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
