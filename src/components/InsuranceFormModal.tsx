"use client";
import React, { useEffect, useMemo, useState } from "react";

type AddOns = {
  medicalEvacuation: boolean;
  baggageLoss: boolean;
  flightDelay: boolean;
  adventureSports: boolean;
  cancellation: boolean;
};

type Props = {
  country: { name: string; basePrice: number; code?: string };
  onClose: () => void;
  phone?: string; // whatsapp phone
  primary?: string;
  accent?: string;
};

export default function InsuranceFormModal({
  country,
  onClose,
  phone = "919899753663",
  primary = "#002C5F",
  accent = "#CFA449",
}: Props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travellers, setTravellers] = useState<number>(1);
  const [ages, setAges] = useState<string[]>([""]);
  const [plan, setPlan] = useState<"Basic" | "Standard" | "Premium">("Standard");
  const [addons, setAddons] = useState<AddOns>({
    medicalEvacuation: false,
    baggageLoss: false,
    flightDelay: false,
    adventureSports: false,
    cancellation: false,
  });
  const [notes, setNotes] = useState("");
  const [passportValidity, setPassportValidity] = useState("");

  // keep ages array in sync
  useEffect(() => {
    setAges((prev) => {
      const next = Array.from({ length: travellers }).map((_, i) => prev[i] ?? "");
      return next;
    });
  }, [travellers]);

  const planMultiplier = useMemo(() => {
    switch (plan) {
      case "Basic":
        return 1;
      case "Standard":
        return 1.45;
      case "Premium":
        return 2.1;
      default:
        return 1;
    }
  }, [plan]);

  // age multiplier (if any traveller >60 -> surcharge)
  const ageMultiplier = useMemo(() => {
    const agesNum = ages.map((a) => Number(a || 0));
    if (agesNum.some((v) => v >= 75)) return 2.0;
    if (agesNum.some((v) => v >= 61)) return 1.6;
    if (agesNum.some((v) => v >= 41)) return 1.2;
    return 1;
  }, [ages]);

  const addonsFee = useMemo(() => {
    // flat fees — you can customize per-country or dynamic later
    let sum = 0;
    if (addons.medicalEvacuation) sum += 149;
    if (addons.baggageLoss) sum += 39;
    if (addons.flightDelay) sum += 29;
    if (addons.adventureSports) sum += 79;
    if (addons.cancellation) sum += 99;
    return sum;
  }, [addons]);

  const estimatedPremium = useMemo(() => {
    const base = country.basePrice ?? 250; // fallback
    const est = Math.round((base * planMultiplier * ageMultiplier + addonsFee) * travellers);
    return est;
  }, [country.basePrice, planMultiplier, ageMultiplier, addonsFee, travellers]);

  function toggleAddon<K extends keyof AddOns>(k: K) {
    setAddons((p) => ({ ...p, [k]: !p[k] }));
  }

  function allValid() {
    if (!name.trim() || !mobile.trim() || !startDate || !endDate) return false;
    if (travellers < 1) return false;
    if (ages.some((a) => !a || Number(a) <= 0)) return false;
    return true;
  }

  function buildWhatsAppMessage() {
    const lines: string[] = [];
    lines.push(`Aerofly Travels - Travel Insurance Request`);
    lines.push(`Country: ${country.name}`);
    lines.push(`Plan: ${plan}`);
    lines.push(`Estimated Premium: ₹${estimatedPremium}`);
    lines.push(`Name: ${name}`);
    lines.push(`Mobile: ${mobile}`);
    if (email) lines.push(`Email: ${email}`);
    lines.push(`Travel Dates: ${startDate} → ${endDate}`);
    lines.push(`Travellers: ${travellers}`);
    ages.forEach((a, i) => lines.push(`Traveller ${i + 1} Age: ${a}`));
    lines.push(`Passport Validity: ${passportValidity || "N/A"}`);
    const enabledAddons = Object.entries(addons).filter(([_, v]) => v).map(([k]) => k);
    lines.push(`Add-ons: ${enabledAddons.length ? enabledAddons.join(", ") : "None"}`);
    if (notes) lines.push(`Notes: ${notes}`);
    return encodeURIComponent(lines.join("%0A"));
  }

  function handleSend() {
    if (!allValid()) {
      alert("Please fill required fields and ages for all travellers.");
      return;
    }
    const msg = buildWhatsAppMessage();
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${msg}`;
    window.open(url, "_blank");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-auto max-h-[90vh]">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold">Request Quote — {country.name}</h3>
              <p className="text-sm text-gray-600 mt-1">Estimated premium updates live as you change options.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-gray-500">Estimated</div>
                <div className="text-lg font-semibold">₹ {estimatedPremium}</div>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-black p-2 rounded-md">✕</button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left */}
            <div className="space-y-3">
              <label className="text-xs font-medium text-gray-600">Full name *</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded-lg" placeholder="Your full name" />

              <label className="text-xs font-medium text-gray-600">Mobile number *</label>
              <input value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full p-3 border rounded-lg" placeholder="e.g. 9198xxxxxxx" />

              <label className="text-xs font-medium text-gray-600">Email (optional)</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-lg" placeholder="you@example.com" />

              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <label className="text-xs font-medium text-gray-600">Start date *</label>
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600">Return date *</label>
                  <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-3 border rounded-lg" />
                </div>
              </div>

              <label className="text-xs font-medium text-gray-600">Number of travellers *</label>
              <select value={travellers} onChange={(e) => setTravellers(Number(e.target.value))} className="w-full p-3 border rounded-lg">
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
              </select>

              <div>
                <label className="text-xs font-medium text-gray-600">Ages (one per traveller) *</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {ages.map((age, i) => (
                    <input key={i} value={age} onChange={(e) => {
                      const v = e.target.value;
                      setAges(prev => {
                        const next = [...prev];
                        next[i] = v;
                        return next;
                      });
                    }} placeholder={`Traveller ${i+1} age`} className="p-2 border rounded-lg" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-3">
              <label className="text-xs font-medium text-gray-600">Select Plan</label>
              <div className="flex gap-2">
                {(["Basic","Standard","Premium"] as const).map(p => (
                  <button key={p} onClick={() => setPlan(p)} className={`flex-1 p-3 rounded-lg border ${plan === p ? "bg-[var(--primary)] text-white" : "bg-white"}`}>
                    <div className="font-semibold">{p}</div>
                    <div className="text-xs text-gray-500">{p === "Basic" ? "Essential cover" : p === "Standard" ? "Balanced cover" : "Maximum cover"}</div>
                  </button>
                ))}
              </div>

              <label className="text-xs font-medium text-gray-600 mt-3">Add-ons</label>
              <div className="grid grid-cols-2 gap-2">
                <button type="button" onClick={() => toggleAddon("medicalEvacuation")} className={`p-3 rounded-lg border text-left ${addons.medicalEvacuation ? "bg-[var(--accent)]/10" : "bg-white"}`}>Medical Evacuation</button>
                <button type="button" onClick={() => toggleAddon("baggageLoss")} className={`p-3 rounded-lg border text-left ${addons.baggageLoss ? "bg-[var(--accent)]/10" : "bg-white"}`}>Baggage Loss</button>
                <button type="button" onClick={() => toggleAddon("flightDelay")} className={`p-3 rounded-lg border text-left ${addons.flightDelay ? "bg-[var(--accent)]/10" : "bg-white"}`}>Flight Delay</button>
                <button type="button" onClick={() => toggleAddon("adventureSports")} className={`p-3 rounded-lg border text-left ${addons.adventureSports ? "bg-[var(--accent)]/10" : "bg-white"}`}>Adventure Sports</button>
                <button type="button" onClick={() => toggleAddon("cancellation")} className={`p-3 rounded-lg border text-left ${addons.cancellation ? "bg-[var(--accent)]/10" : "bg-white"}`}>Trip Cancellation</button>
              </div>

              <label className="text-xs font-medium text-gray-600">Passport validity (expiry)</label>
              <input value={passportValidity} onChange={(e)=> setPassportValidity(e.target.value)} placeholder="e.g. 2027-12-31" className="w-full p-3 border rounded-lg" />

              <label className="text-xs font-medium text-gray-600">Notes (optional)</label>
              <textarea value={notes} onChange={(e)=> setNotes(e.target.value)} className="w-full p-3 border rounded-lg" rows={4} />

              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500">Estimated total</div>
                    <div className="text-2xl font-bold">₹ {estimatedPremium}</div>
                    <div className="text-xs text-gray-500">Approximate — final price may vary</div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button disabled={!allValid()} onClick={handleSend} className={`px-4 py-3 rounded-lg text-white font-semibold ${allValid() ? "bg-[#25D366]" : "bg-gray-300"}`}>
                      Send via WhatsApp
                    </button>
                    <button onClick={() => {
                      // quick demo fill
                      setName("Demo User"); setMobile("919876543210"); setEmail("demo@aerofly.com");
                      setStartDate(new Date().toISOString().slice(0,10));
                      setEndDate(new Date(Date.now()+5*24*3600*1000).toISOString().slice(0,10));
                      setTravellers(2); setAges(["32","30"]);
                    }} className="px-3 py-2 rounded-lg border text-sm">Fill Demo</button>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* grid */}
        </div>
      </div>

      <style>{`
        :root { --primary: ${primary}; --accent: ${accent}; }
      `}</style>
    </div>
  );
}
