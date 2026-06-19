'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'What is included in the all-inclusive monthly packages?',
      a: 'The all-inclusive package covers room rent (bed and bookshelf), 3 home-style cooked daily meals from the mess, water utility (purified drinking RO and submersible water), geyser warm water, cycles parking space, daily washroom sanitation, corridors sweeps, emergency lighting, and outside CCTV security. There are zero extra bill additions.'
    },
    {
      q: 'How does the separate custom pricing and meal tiers work?',
      a: 'If you select separate billing: (1) You pay only for your shared bed room rent (starts at ₹899/mo). (2) You pay for the exact number of monthly meals you choose (ranging from 15 meals at ₹999/mo to 55 meals at ₹2,099/mo, or just kitchen access for ₹599/mo). (3) Electricity is billed separately at ₹10 per unit based on your room sub-meter.'
    },
    {
      q: 'What are the main entry gates locking timings?',
      a: 'To guarantee maximum safety for our ladies boarders, the entrance gates are locked at 10:00 PM. Extension requests (for examinations, university events, or travel arrivals) are allowed with prior notification to the warden.'
    },
    {
      q: 'What is the security deposit and notice policy?',
      a: 'A 1-month security deposit along with the running month’s rent is required at the time of admission. To ensure deposit refunds, boarders must provide a 1-month advance notice before vacating the PG.'
    },
    {
      q: 'Can parents visit or stay at the hostel?',
      a: 'Parents and female family members are welcome to visit boarders in our designated visitor lobby. Overnight stays for mothers or female guardians are permitted with prior warden approval.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-creamCard border-t border-greyBorder/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">জিজ্ঞাসাবাদ (FAQ)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Frequently Asked Questions</h2>
          <p className="text-charcoalText/80 mt-4 leading-relaxed text-sm sm:text-base">
            Find immediate answers concerning security policies, deposit refunds, customizable dining counts, and submeter electrical bills.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-whitePure rounded-3xl border border-greyBorder/50 overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 flex justify-between items-center text-primaryGreen hover:text-accentRose transition-colors font-bold font-serif"
              >
                <span className="text-sm sm:text-base">{faq.q}</span>
                <span className="ml-4 p-1.5 bg-creamBg text-primaryGreen rounded-lg flex-shrink-0">
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] border-t border-greyBorder/20 p-6' : 'max-h-0 pointer-events-none'
                } overflow-hidden bg-creamBg/30`}
              >
                <p className="text-xs sm:text-sm text-charcoalText/90 leading-relaxed text-left">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
