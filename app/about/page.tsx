import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, IMAGES } from "@/lib/constants";
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

      {/* Header with real background */}
      <section className="bg-[#1a0a00] py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.restaurant}
            alt="Gineer Tasty Grills restaurant"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a00]/60 to-[#1a0a00]/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="font-display text-[clamp(52px,10vw,108px)] text-white leading-[0.9] mb-4">
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
      <section className="py-20 px-4 bg-[#fff8f4] dark:bg-[#1a0a00]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-[clamp(32px,5vw,56px)] text-[#1a0a00] dark:text-white leading-none mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-[#3d1a00] dark:text-white/65 text-base leading-relaxed">
              <p>
                Gineer Tasty Grills was born from a simple mission: bring
                world-class sharwama and grilled food to the heart of UNN
                campus. We&apos;ve been serving hungry students, faculty, and
                Nsukka residents for over two years — and the love keeps
                growing.
              </p>
              <p>
                Our signature is our sharwama. Customers have called it{" "}
                <strong className="text-[#e8450a]">
                  &quot;top notch and compared to none in Nsukka&quot;
                </strong>{" "}
                — and we intend to keep earning that title every single day.
              </p>
              <p>
                We introduced one of the first{" "}
                <strong>drive-through services</strong> in a Nigerian university
                setting — because we know students are busy.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
            <Image
              src={IMAGES.campus}
              alt="UNN campus"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-20 px-4 bg-[#1a0a00] dark:bg-[#0f0700]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-[clamp(32px,5vw,56px)] text-white leading-none mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {usps.map((u) => (
              <div
                key={u.title}
                className="bg-[#221005] dark:bg-[#1a0a00] border border-white/6 rounded-2xl p-6 hover:border-[#e8450a]/40 transition-colors"
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
