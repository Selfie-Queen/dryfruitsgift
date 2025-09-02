import React, { useMemo, useState } from "react";

// Dry Fruits Gift Box - React component (JSX)
// Replaces previous raw HTML so the file is valid React/TSX and won't throw a parser error.

const WHATSAPP = "918126604601"; // your WhatsApp number

export default function DryFruitGiftBoxes() {
  const [qty250, setQty250] = useState(0);
  const [qty500, setQty500] = useState(0);
  const [customNote, setCustomNote] = useState("");

  const waLink = (message) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  const selectedMessage = useMemo(() => {
    const items = [];
    if (qty250 > 0) items.push(`${qty250} x 250g Classic Box`);
    if (qty500 > 0) items.push(`${qty500} x 500g Premium Box`);
    const base = items.length
      ? `Hi, I want to order: ${items.join(", ")}.`
      : "Hi, I want to order a Dry Fruit Gift Box.";
    return customNote ? `${base} Note: ${customNote}` : base;
  }, [qty250, qty500, customNote]);

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-yellow-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Premium Dry Fruit Gift Boxes</h1>
        <p className="mt-1 text-sm opacity-90">
          Healthy · Fresh · Perfect for gifting
        </p>
      </header>

      {/* Hero */}
      <section className="text-center py-10 px-4 bg-yellow-100">
        <h2 className="text-2xl font-semibold mb-2">Choose the perfect box</h2>
        <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
          Handpicked premium dry fruits packed hygienically. Fast ordering via
          WhatsApp — one click and we will confirm your order.
        </p>
        <a
          href={waLink("Hi, I want to order a Dry Fruit Gift Box")}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow"
        >
          Order Now via WhatsApp
        </a>
      </section>

      {/* Product Gallery */}
      <section className="py-12 px-4 md:px-12">
        <h3 className="text-2xl font-bold text-center mb-8">Our Gift Boxes</h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 500g Card */}
          <article className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/600x400/?dryfruits,almonds"
              alt="500g Premium Box"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg">500g Premium Box</h4>
            <p className="text-sm text-gray-600">
              6 portions of handpicked dry fruits — ideal for premium gifting.
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="font-bold text-lg">₹700</div>
              <a
                href={waLink("I want to order 1 x 500g Premium Box")}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Order
              </a>
            </div>
          </article>

          {/* 250g Card */}
          <article className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/600x400/?dryfruits,giftbox"
              alt="250g Classic Box"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg">250g Classic Box</h4>
            <p className="text-sm text-gray-600">
              4 portions of selected dry fruits — great value & presentation.
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="font-bold text-lg">₹400</div>
              <a
                href={waLink("I want to order 1 x 250g Classic Box")}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Order
              </a>
            </div>
          </article>

          {/* Luxury Card */}
          <article className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/600x400/?nuts,luxury"
              alt="Luxury Box"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg">Luxury / Custom Box</h4>
            <p className="text-sm text-gray-600">
              Mix exotic dry fruits & premium packaging. Tell us your
              requirements.
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="font-bold text-lg">Custom Pricing</div>
              <a
                href={waLink(
                  "I want to order a Custom/Luxury Box — please contact me"
                )}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Order
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Interactive Order Builder */}
      <section className="py-10 px-4 md:px-12 bg-white">
        <h3 className="text-2xl font-bold text-center mb-6">
          Quick Order (build & send on WhatsApp)
        </h3>
        <div className="max-w-3xl mx-auto grid gap-4">
          <div className="flex gap-3 items-center justify-center">
            <label className="flex items-center gap-2">
              <span className="text-sm">250g boxes</span>
              <input
                type="number"
                min={0}
                value={qty250}
                onChange={(e) => setQty250(Number(e.target.value || 0))}
                className="w-20 p-2 border rounded"
              />
            </label>

            <label className="flex items-center gap-2">
              <span className="text-sm">500g boxes</span>
              <input
                type="number"
                min={0}
                value={qty500}
                onChange={(e) => setQty500(Number(e.target.value || 0))}
                className="w-20 p-2 border rounded"
              />
            </label>
          </div>

          <textarea
            placeholder="Any note for us? (e.g., delivery date, packing preference)"
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            className="w-full p-3 border rounded h-24"
          />

          <div className="flex items-center justify-center gap-3">
            <a
              href={waLink(selectedMessage)}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Send Order on WhatsApp
            </a>

            <button
              type="button"
              onClick={() => {
                setQty250(0);
                setQty500(0);
                setCustomNote("");
              }}
              className="px-4 py-2 border rounded"
            >
              Reset
            </button>
          </div>

          <div className="text-center text-gray-600 text-sm">
            Preview message:{" "}
            <span className="font-medium">{selectedMessage}</span>
          </div>
        </div>
      </section>

      {/* Why choose us & testimonials */}
      <section className="py-10 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-100 p-6 rounded-2xl shadow">
            <h4 className="font-semibold text-lg mb-2">Why choose us?</h4>
            <ul className="text-gray-700 list-disc pl-5">
              <li>Premium, fresh and hygienically packed.</li>
              <li>Beautiful gifting boxes & custom corporate options.</li>
              <li>Direct WhatsApp ordering & fast confirmation.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold text-lg mb-2">What customers say</h4>
            <blockquote className="text-gray-700">
              “Loved the packaging and freshness — perfect corporate gift.” —
              Riya S.
            </blockquote>
            <blockquote className="text-gray-700 mt-3">
              “Excellent quality and quick delivery.” — Arjun K.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={waLink("I%20am%20interested%20in%20Dry%20Fruit%20Gift%20Boxes")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        style={{ position: "fixed", right: 20, bottom: 20 }}
      >
        <div className="bg-green-600 p-3 rounded-full shadow-lg hover:scale-105 transition-transform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-7 h-7"
          />
        </div>
      </a>

      <footer className="bg-yellow-600 text-white text-center py-4 mt-8">
        © 2025 Premium Dry Fruit Gift Boxes
      </footer>
    </div>
  );
}
