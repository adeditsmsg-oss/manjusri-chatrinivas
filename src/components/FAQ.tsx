'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: 'Is WiFi available?', a: 'Yes! High-speed WiFi is available throughout the hostel building and is completely free under all packages.' },
    { q: 'How does electricity billing work?', a: 'For our All-Inclusive plan, standard electricity consumption is included. For the Flexible Separate Plan, electricity is metered individually at an affordable rate of ₹10 per unit.' },
    { q: 'Can I choose meal packages?', a: 'Yes, we offer monthly food subscriptions ranging from 15 meals (₹999) up to 55 meals (₹2,099). Meals are fresh, hot, and prepared with home-style Bengali recipes.' },
    { q: 'Is kitchen access available?', a: 'Yes! For boarders who prefer to cook their own food, independent kitchen access is available under our Flexible Separate Plan for a small monthly access fee of ₹599.' },
    { q: 'Is CCTV available?', a: 'Absolutely. The gates, main pathways, and exterior boundaries are monitored by 24/7 CCTV surveillance to ensure complete safety.' },
    { q: 'Can working women stay here?', a: 'Yes. Manjusri Chatrinivas accommodates both university students and working professionals looking for a safe, peaceful co-living environment.' },
    { q: 'How far is it from colleges?', a: 'We are located near Bidla Traffic Point in Tantigeria, which is close to Vidyasagar University, Midnapore College, Raja N.L. Khan Women\'s College, and local coaching centres.' }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#FFFDF9] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left mb-16 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C26D55] font-sans block">07 / FAQs</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1B4332] font-serif leading-none">The Queries</h2>
        </div>

        {/* Minimal inline stack */}
        <div className="divide-y divide-[#748E7A]/20">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 text-left space-y-3">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-base sm:text-lg font-serif font-bold text-[#1B4332] hover:text-[#C26D55] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={16} className="text-[#C26D55]" /> : <ChevronDown size={16} />}
                </button>
                {isOpen && (
                  <p className="text-xs sm:text-sm text-[#382F2D]/85 leading-relaxed font-sans animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
