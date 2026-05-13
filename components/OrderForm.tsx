"use client";

import { useState, FormEvent } from "react";
import { BUSINESS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

interface FormState {
  name: string;
  phone: string;
  orderType: "drive-through" | "delivery" | "";
  items: string;
  deliveryLocation: string;
  pickupTime: string;
}

const initial: FormState = {
  name: "",
  phone: "",
  orderType: "",
  items: "",
  deliveryLocation: "",
  pickupTime: "",
};

export default function OrderForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [orderTypeError, setOrderTypeError] = useState<string>("");

  const set = (key: keyof FormState, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    let otErr = "";
    if (form.name.trim().length < 2)
      errs.name = "Name must be at least 2 characters";
    if (!/^0\d{10}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Enter a valid Nigerian phone number (e.g. 08012345678)";
    if (!form.orderType) otErr = "Please select an order type";
    if (form.items.trim().length < 10)
      errs.items = "Please describe your order in more detail";
    setErrors(errs);
    setOrderTypeError(otErr);
    return Object.keys(errs).length === 0 && !otErr;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = [
      "🔥 NEW ORDER — Gineer Tasty Grills",
      "",
      `👤 Name: ${form.name}`,
      `📱 Phone: ${form.phone}`,
      `📦 Type: ${form.orderType.toUpperCase()}`,
      `🍔 Order: ${form.items}`,
      form.deliveryLocation ? `📍 Delivery to: ${form.deliveryLocation}` : "",
      form.pickupTime ? `⏰ Pickup time: ${form.pickupTime}` : "",
      "",
      "Please confirm this order!",
    ]
      .filter((l) => l !== "")
      .join("\n");

    window.open(buildWhatsAppUrl(msg), "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initial);
    }, 4000);
  };

  const inputClass =
    "w-full px-4 py-3 border-[1.5px] border-[#e8d9bb] focus:border-[#c9972b] rounded-xl outline-none text-[#1b3a2d] text-sm transition-colors bg-white placeholder:text-[#1b3a2d]/30";

  return (
    <div className="bg-white border border-[#e8d9bb] rounded-2xl p-6 md:p-8">
      {submitted ? (
        <div className="text-center py-10">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="font-bold text-xl text-[#1b3a2d] dark:text-white mb-2">
            WhatsApp opened!
          </h3>
          <p className="text-[#7a5540] dark:text-white/40 text-sm">
            Finish sending your order on WhatsApp and we'll confirm shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-[#3d1a00] dark:text-white/80 mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Enter your name"
              className={inputClass}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-bold text-[#3d1a00] dark:text-white/80 mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="08012345678"
              className={inputClass}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Order type */}
          <div>
            <label className="block text-sm font-bold text-[#3d1a00] dark:text-white/80 mb-1.5">
              Order Type *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  { val: "drive-through", emoji: "🚗", label: "Drive-Through" },
                  { val: "delivery", emoji: "🏍️", label: "Delivery" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => set("orderType", opt.val)}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${
                    form.orderType === opt.val
                      ? "border-[#c9972b] bg-[#fdf4e3]"
                      : "border-[#e8d9bb] hover:border-[#c9972b]/40"
                  }`}
                >
                  <div className="text-3xl mb-1">{opt.emoji}</div>
                  <div className="font-bold text-[#1b3a2d] dark:text-white text-sm">
                    {opt.label}
                  </div>
                </button>
              ))}
            </div>
            {orderTypeError && (
              <p className="text-red-400 text-xs mt-1">{orderTypeError}</p>
            )}
          </div>

          {/* Conditional fields */}
          {form.orderType === "delivery" && (
            <div>
              <label className="block text-sm font-bold text-[#3d1a00] dark:text-white/80 mb-1.5">
                Delivery Location (within UNN)
              </label>
              <input
                type="text"
                value={form.deliveryLocation}
                onChange={(e) => set("deliveryLocation", e.target.value)}
                placeholder="e.g. Aluta Hostel, Faculty of Engineering"
                className={inputClass}
              />
            </div>
          )}

          {form.orderType === "drive-through" && (
            <div>
              <label className="block text-sm font-bold text-[#3d1a00] dark:text-white/80 mb-1.5">
                Preferred Pickup Time (optional)
              </label>
              <input
                type="time"
                min="15:00"
                value={form.pickupTime}
                onChange={(e) => set("pickupTime", e.target.value)}
                className={inputClass}
              />
              <p className="text-[#7a5540] dark:text-white/30 text-xs mt-1">
                We open at 3:00 PM
              </p>
            </div>
          )}

          {/* Order details */}
          <div>
            <label className="block text-sm font-bold text-[#3d1a00] dark:text-white/80 mb-1.5">
              Your Order *
            </label>
            <textarea
              rows={4}
              value={form.items}
              onChange={(e) => set("items", e.target.value)}
              placeholder="e.g. 2× Top Notch Sharwama, 1× Loaded Fries, 2× Coke"
              className={`${inputClass} resize-none`}
            />
            {errors.items && (
              <p className="text-red-400 text-xs mt-1">{errors.items}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#1b3a2d] hover:bg-[#2d5a42] text-white font-bold text-base py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-[#e8450a]/30 flex items-center justify-center gap-2"
          >
            📲 Send Order via WhatsApp
          </button>

          <div className="text-center text-[#7a5540] dark:text-white/30 text-sm">
            — or —
          </div>

          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="flex items-center justify-center gap-2 w-full bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-base py-3.5 rounded-full transition-all hover:-translate-y-0.5"
          >
            📞 Call Us: {BUSINESS.phone}
          </a>
        </form>
      )}
    </div>
  );
}
