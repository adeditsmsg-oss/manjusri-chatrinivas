'use client';

import React from 'react';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  const allInclusivePlans = [
    { sharing: 'Single Room', price: '4,299' },
    { sharing: '2 Sharing Room', price: '3,499' },
    { sharing: '3 Sharing Room', price: '3,299' },
    { sharing: '4 Sharing Room', price: '2,799' }
  ];

  const flexiblePlans = [
    { sharing: 'Single Bed', price: '2,299' },
    { sharing: '2 Sharing Bed', price: '1,599' },
    { sharing: '3 Sharing Bed', price: '1,399' },
    { sharing: '4 Sharing Bed', price: '899' }
  ];

  const inTexts = [
    'Daily Gated Security & Caretaker Support',
    'High-Speed Wi-Fi connectivity in rooms',
    'RO purified & submersible drinking water',
    'Room cleaning & daily common area sanitization',
    'Locked secure cycle stand parking access'
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FFFDF9] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C58B97] block">Affordable Living</span>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-[#1B4332] font-serif">Comparison Brochure</h2>
          <p className="font-bengali text-[#C26D55] text-xs font-semibold">আপনার প্রয়োজন অনুযায়ী সঠিক প্যাকেজ বেছে নিন</p>
        </div>

        {/* Layout: Split-Panel comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Brochure Column 1: All Inclusive Package */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-[2.5rem] p-8 border-2 border-[#1B4332]/85 shadow-lg relative flex flex-col justify-between group">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#1B4332] text-[#F0A699] text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
              Most Value for Students
            </div>

            <div>
              <div className="pb-6 border-b border-[#748E7A]/25">
                <span className="text-[9px] uppercase font-bold text-[#C58B97] tracking-widest">Everything Covered</span>
                <h3 className="text-2xl font-bold text-[#1B4332] font-serif mt-1">All-Inclusive Plan</h3>
                <p className="text-xs text-[#382F2D]/85 leading-relaxed mt-2">Rent + Daily Homely Food + Electricity charges included.</p>
              </div>

              {/* Price list */}
              <div className="py-6 space-y-3">
                {allInclusivePlans.map((p, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 px-3 hover:bg-[#FAF8F5] rounded-xl transition-colors">
                    <span className="text-xs font-bold text-[#1C1917]/90">{p.sharing}</span>
                    <span className="text-base font-bold text-[#1B4332] font-serif">₹{p.price} <span className="text-[9px] text-[#1C1917]/50 font-normal">/ mo</span></span>
                  </div>
                ))}
              </div>

              {/* Features inclusions */}
              <div className="pb-6 border-t border-[#748E7A]/15 pt-6 space-y-3">
                <p className="text-[10px] uppercase font-extrabold tracking-widest text-[#1C1917]/50">Package Inclusions:</p>
                {inTexts.map((txt, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-[#1C1917]/90 font-sans">
                    <Check size={14} className="text-[#1B4332] flex-shrink-0" />
                    <span>{txt}</span>
                  </div>
                ))}
                <div className="flex items-center space-x-2.5 text-xs text-[#1C1917]/90 font-sans font-bold">
                  <Check size={14} className="text-[#1B4332] flex-shrink-0" />
                  <span>3 Daily Fresh Bengali Meals (On-site Mess)</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full text-center bg-[#1B4332] hover:bg-[#C26D55] text-whitePure py-4 rounded-full font-bold uppercase text-[9px] tracking-widest transition-colors shadow-md mt-4"
            >
              Book All-Inclusive Package
            </a>
          </div>

          {/* Brochure Column 2: Flexible Separate Plan */}
          <div className="lg:col-span-6 bg-[#FAF8F5] rounded-[2.5rem] p-8 border border-[#748E7A]/25 flex flex-col justify-between">
            <div>
              <div className="pb-6 border-b border-[#748E7A]/25">
                <span className="text-[9px] uppercase font-bold text-[#1C1917]/55 tracking-widest">Customizable Choice</span>
                <h3 className="text-2xl font-bold text-[#1B4332] font-serif mt-1">Flexible Separate Plan</h3>
                <p className="text-xs text-[#382F2D]/85 leading-relaxed mt-2">Perfect for boarders who cook or stay intermittently.</p>
              </div>

              {/* Price list */}
              <div className="py-6 space-y-3">
                {flexiblePlans.map((p, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 px-3 border-b border-[#748E7A]/15">
                    <span className="text-xs font-semibold text-[#1C1917]/85">{p.sharing}</span>
                    <span className="text-base font-bold text-[#1B4332] font-serif">₹{p.price} <span className="text-[9px] text-[#1C1917]/50 font-normal">/ mo</span></span>
                  </div>
                ))}
              </div>

              {/* Extras board */}
              <div className="p-4 bg-[#FFFDF9] rounded-2xl border border-[#748E7A]/25 space-y-2.5 mb-6">
                <div className="flex items-center space-x-1.5 text-[9px] uppercase font-bold text-[#C26D55] tracking-widest">
                  <Info size={11} />
                  <span>Metered Bills & Addons</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-[#1C1917]/90">
                  <span>Electricity Consumption</span>
                  <span className="text-[#1B4332]">₹10 Per Unit</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-[#1C1917]/90">
                  <span>Optional Kitchen Access</span>
                  <span className="text-[#1B4332]">₹599 / month</span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="pb-6 space-y-3">
                <p className="text-[10px] uppercase font-extrabold tracking-widest text-[#1C1917]/55">Included Amenities:</p>
                {inTexts.map((txt, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-[#1C1917]/85">
                    <Check size={14} className="text-[#748E7A] flex-shrink-0" />
                    <span>{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="w-full text-center bg-[#FFFDF9] hover:bg-[#1B4332] hover:text-whitePure text-[#1C1917] py-4 rounded-full font-bold uppercase text-[9px] tracking-widest transition-all border border-[#748E7A]/60 mt-4"
            >
              Choose Flexible Plan
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
