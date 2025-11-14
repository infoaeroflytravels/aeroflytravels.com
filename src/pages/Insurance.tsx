"use client";
import React, { useMemo, useState } from "react";
import HeroB from "@/components/extra/HeroB";
import InsuranceFormModal from "@/components/InsuranceFormModal";

type Country = { name: string; flag: string; basePrice: number; region?: string; code?: string };

export function Insurance() {
  const COLORS = { primary: "#167686ff", accent: "#f0d870ff" };

  const ALL_COUNTRIES: Country[] = [
    { name: "United Arab Emirates", flag: "https://flagcdn.com/w320/ae.png", basePrice: 299, region: "Gulf", code: "UAE" },
    { name: "Singapore", flag: "https://flagcdn.com/w320/sg.png", basePrice: 349, region: "Asia", code: "SG" },
    { name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png", basePrice: 179, region: "Asia", code: "VN" },
    { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png", basePrice: 159, region: "Asia", code: "ID" },
    { name: "Thailand", flag: "https://flagcdn.com/w320/th.png", basePrice: 199, region: "Asia", code: "TH" },
    { name: "Malaysia", flag: "https://flagcdn.com/w320/my.png", basePrice: 169, region: "Asia", code: "MY" },
    { name: "United States", flag: "https://flagcdn.com/w320/us.png", basePrice: 899, region: "Americas", code: "US" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png", basePrice: 499, region: "Europe", code: "GB" },
    { name: "Germany", flag: "https://flagcdn.com/w320/de.png", basePrice: 479, region: "Europe", code: "DE" },
    { name: "France", flag: "https://flagcdn.com/w320/fr.png", basePrice: 459, region: "Europe", code: "FR" },
    { name: "Canada", flag: "https://flagcdn.com/w320/ca.png", basePrice: 799, region: "Americas", code: "CA" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png", basePrice: 699, region: "Oceania", code: "AU" },
  ];

  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<"All" | string>("All");
  const [selected, setSelected] = useState<Country | null>(null);
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);

  const regions = useMemo(() => ["All", ...Array.from(new Set(ALL_COUNTRIES.map(c => c.region)))], []);

  const filtered = useMemo(() => {
    return ALL_COUNTRIES.filter(c => {
      if (region !== "All" && c.region !== region) return false;
      if (query && !c.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (showPremiumOnly && c.basePrice < 300) return false;
      return true;
    });
  }, [query, region, showPremiumOnly]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroB primary={COLORS.primary} accent={COLORS.accent} />

      {/* Search / filters */}
      <section className="max-w-7xl mx-auto px-6 py-8 -mt-10">
        <div className="bg-white rounded-2xl p-5 shadow-md border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-2/3">
              <input
                placeholder="Search country, e.g. 'UAE' or 'United'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 p-3 border rounded-lg"
              />
              <select value={region} onChange={(e) => setRegion(e.target.value)} className="p-3 border rounded-lg">
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" checked={showPremiumOnly} onChange={(e) => setShowPremiumOnly(e.target.checked)} />
                Premium only
              </label>
            </div>

            <div className="text-sm text-gray-600">
              Showing <strong>{filtered.length}</strong> destinations
            </div>
          </div>
        </div>
      </section>

      {/* Country Grid */}
      <section id="countries" className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(c => (
            <article key={c.code} className="bg-white rounded-2xl shadow hover:shadow-xl border p-4 transition transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelected(c)}
              aria-label={`Open insurance form for ${c.name}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img src={c.flag} alt={c.name} className="w-16 h-12 object-cover rounded-md shadow-sm" />
                  <div>
                    <h3 className="text-md font-semibold">{c.name}</h3>
                    <p className="text-xs text-gray-500">{c.region}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-500">Starting at</div>
                  <div className="text-lg font-bold">₹{c.basePrice}</div>
                  <div className="mt-2">
                    
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button onClick={() => setSelected(c)} className="flex-1 px-3 py-2 rounded-lg bg-[var(--primary)] text-white font-semibold" style={{ background: COLORS.primary }}>
                  Get Quote
                </button>
                <button onClick={() => {
                  // quick WhatsApp prefill for quick inquiry
                  const quick = encodeURIComponent(`Hello Aerofly Travels,%0A I want insurance quote for ${c.name}.%0APlease assist.`);
                  window.open(`https://api.whatsapp.com/send?phone=919899753663&text=${quick}`, "_blank");
                }} className="px-3 py-2 rounded-lg border">Quick</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials & Badges */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-bold">Trusted by travellers</h4>
            <p className="text-sm text-gray-600 mt-2">10,000+ travellers insured with Aerofly</p>
            <div className="mt-4 flex gap-2">
              <span className="text-xs px-3 py-1 rounded-full" style={{ background: COLORS.accent, color: "#0b0b0b" }}>24/7 Support</span>
              <span className="text-xs px-3 py-1 rounded-full border">Global network</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-bold">What travellers say</h4>
            <div className="mt-3 space-y-3 text-sm text-gray-700">
              <blockquote className="italic">“Got a quote in minutes — perfect for my Singapore trip.” — Rahul</blockquote>
              <blockquote className="italic">“Fast and reliable support for passport issues.” — Meera</blockquote>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-bold">Why choose Aerofly</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>✅ Fast WhatsApp quoting</li>
              <li>✅ Multi-plan comparison</li>
              <li>✅ Country-wise pricing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp support */}
      <a href="https://api.whatsapp.com/send?phone=919899753663&text=Hi%20Aerofly%20Travels%20-%20I%20need%20help" target="_blank" rel="noreferrer"
        className="fixed right-6 bottom-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 2.011a11.939 11.939 0 00-8.485 3.515A11.939 11.939 0 009 3a11.939 11.939 0 00-8.485 3.515C-1.424 9.1-.017 13.6 3.5 17.116l-.3 3.2 3.36-.89C8.4 20.24 12.9 21.647 16.485 18.06A11.939 11.939 0 0021 9.575c0-3.215-1.257-6.255-3.707-8.144z" fill="currentColor"/></svg>
        Chat Support
      </a>

      {/* Modal root */}
      {selected && (
        <InsuranceFormModal country={selected} onClose={() => setSelected(null)} />
      )}

      <style>{`
        :root { --primary: ${COLORS.primary}; --accent: ${COLORS.accent}; }
      `}</style>
    </div>
  );
}
