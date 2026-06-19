'use client';

import React from 'react';
import { CircleCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function Pricing() {
  const allInclusive = [
    { name: 'Single Room', price: '4,299' },
    { name: '2 Sharing Room', price: '3,499' },
    { name: '3 Sharing Room', price: '3,299' },
    { name: '4 Sharing Room', price: '2,799' }
  ];

  const flexible = [
    { name: 'Single Bed Space', price: '2,299' },
    { name: '2 Sharing Space', price: '1,599' },
    { name: '3 Sharing Space', price: '1,399' },
    { name: '4 Sharing Space', price: '899' }
  ];

  const meals = [
    { count: '55 Meals', price: '2,099' },
    { count: '50 Meals', price: '1,999' },
    { count: '40 Meals', price: '1,799' },
    { count: '30 Meals', price: '1,499' },
    { count: '20 Meals', price: '1,199' },
    { count: '15 Meals', price: '999' }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAF8F5] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C26D55] font-sans block">05 / Investment</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1B4332] font-serif leading-none">Brochure & Rates</h2>
          <p className="font-bengali text-[#C58B97] text-xs font-semibold">আপনার প্রয়োজন অনুযায়ী সাশ্রয়ী প্যাকেজ বেছে নিন</p>
        </div>

        {/* Double-Page Spread Layout */}
        <div className="bg-[#FFFDF9] rounded-[3rem] border border-[#748E7A]/25 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#748E7A]/20">
          
          {/* Page Left: All-Inclusive Catalog */}
          <div className="p-8 sm:p-12 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#748E7A]/20 pb-4">
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#C58B97] tracking-widest block font-sans">Option 01</span>
                  <h3 className="text-2xl font-bold text-[#1B4332] font-serif">All-Inclusive Student Package</h3>
                </div>
                <div className="bg-[#1B4332]/10 text-[#1B4332] px-3.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest">
                  Popular
                </div>
              </div>

              <p className="text-xs text-[#382F2D]/85 leading-relaxed font-sans">
                Best value for university boarders. Includes Bed space, all healthy daily mess meals, and standard utility electricity.
              </p>

              {/* Price list styled like a high-end restaurant menu card */}
              <div className="space-y-4 pt-2">
                {allInclusive.map((p, idx) => (
                  <div key={idx} className="flex justify-between items-end">
                    <span className="text-xs font-bold text-[#1C1917]/95 font-sans leading-none">{p.name}</span>
                    <div className="flex-1 border-b border-dotted border-[#748E7A]/35 mx-3 mb-1" />
                    <span className="text-lg font-bold text-[#1B4332] font-serif leading-none">₹{p.price}/mo</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#748E7A]/15 space-y-4">
              <p className="text-[10px] uppercase font-extrabold text-[#1C1917]/50 tracking-widest">Inclusions:</p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#1C1917]/90 font-sans">
                <div className="flex items-center space-x-2"><CircleCheck size={12} className="text-[#1B4332]" /> <span>Daily Bengali Food</span></div>
                <div className="flex items-center space-x-2"><CircleCheck size={12} className="text-[#1B4332]" /> <span>Emergency Light</span></div>
                <div className="flex items-center space-x-2"><CircleCheck size={12} className="text-[#1B4332]" /> <span>Free Fiber WiFi</span></div>
                <div className="flex items-center space-x-2"><CircleCheck size={12} className="text-[#1B4332]" /> <span>Washing & Cleaning</span></div>
                <div className="flex items-center space-x-2"><CircleCheck size={12} className="text-[#1B4332]" /> <span>Geyser Water</span></div>
                <div className="flex items-center space-x-2"><CircleCheck size={12} className="text-[#1B4332]" /> <span>Cycle Parking</span></div>
              </div>
            </div>
          </div>

          {/* Page Right: Flexible Separate Catalog */}
          <div className="p-8 sm:p-12 space-y-8 flex flex-col justify-between bg-[#FAF8F5]/35">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#748E7A]/20 pb-4">
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#C58B97] tracking-widest block font-sans">Option 02</span>
                  <h3 className="text-2xl font-bold text-[#1B4332] font-serif">Flexible Separate Plan</h3>
                </div>
              </div>

              <p className="text-xs text-[#382F2D]/85 leading-relaxed font-sans">
                Pay only for bed space rent. Ideal for working candidates or independent cooking requirements.
              </p>

              {/* Price list */}
              <div className="space-y-4 pt-2">
                {flexible.map((p, idx) => (
                  <div key={idx} className="flex justify-between items-end">
                    <span className="text-xs font-bold text-[#1C1917]/95 font-sans leading-none">{p.name}</span>
                    <div className="flex-1 border-b border-dotted border-[#748E7A]/35 mx-3 mb-1" />
                    <span className="text-lg font-bold text-[#1B4332] font-serif leading-none">₹{p.price}/mo</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Utility and Addon tables */}
            <div className="pt-6 border-t border-[#748E7A]/15 space-y-4">
              <div className="flex items-center space-x-2 text-[10px] uppercase font-extrabold text-[#C26D55] tracking-widest">
                <AlertCircle size={12} />
                <span>Separate Addons</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#748E7A]/20">
                  <span className="text-[9px] uppercase font-bold text-[#1C1917]/50 block">Electricity</span>
                  <span className="text-sm font-bold text-[#1B4332] block mt-1">₹10 / Unit</span>
                </div>
                <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#748E7A]/20">
                  <span className="text-[9px] uppercase font-bold text-[#1C1917]/50 block">Kitchen access</span>
                  <span className="text-sm font-bold text-[#1B4332] block mt-1">₹599 / Mo</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Meal Plans Strip Layout */}
        <div className="mt-12 bg-[#FFFDF9] rounded-[2.5rem] p-8 border border-[#748E7A]/25 text-left space-y-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-[9px] uppercase font-bold text-[#C58B97] tracking-widest block font-sans">Addon Tokens</span>
            <h4 className="text-xl font-bold text-[#1B4332] font-serif">Daily Mess Meal Packages</h4>
            <p className="text-xs text-[#382F2D]/80 font-sans leading-relaxed">
              Order customized lunch and dinner token packages if you choose the Flexible Plan. Cooked fresh daily.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
            {meals.map((m, idx) => (
              <div key={idx} className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#748E7A]/15 text-center">
                <span className="text-[10px] uppercase font-bold text-[#1C1917]/55 block font-sans">{m.count}</span>
                <span className="text-lg font-bold text-[#1B4332] font-serif block mt-1">₹{m.price}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
