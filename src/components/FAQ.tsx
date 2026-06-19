'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Is WiFi available?',
      a: 'Yes! High-speed WiFi is available throughout the hostel building and is completely free under all packages.'
    },
    {
      q: 'How does electricity billing work?',
      a: 'For our All-Inclusive plan, standard electricity consumption is included. For the Flexible Separate Plan, electricity is metered individually at an affordable rate of ₹10 per unit.'
    },
    {
      q: 'Can I choose meal packages?',
      a: 'Yes, we offer monthly food subscriptions ranging from 15 meals (₹999) up to 55 meals (₹2,099). Meals are fresh, hot, and prepared with home-style Bengali recipes.'
    },
    {
      q: 'Is kitchen access available?',
      a: 'Yes! For boarders who prefer to cook their own food, independent kitchen access is available under our Flexible Separate Plan for a small monthly access fee of ₹599.'
    },
    {
      q: 'Is CCTV available?',
      a: 'Absolutely. The gates, main pathways, and exterior boundaries are monitored by 24/7 CCTV surveillance to ensure complete safety.'
    },
    {
      q: 'Can working women stay here?',
      a: 'Yes. Manjusri Chatrinivas accommodates both university students and working professionals looking for a safe, peaceful co-living environment.'
    },
    {
      q: 'How far is it from colleges?',
      a: 'We are located near Bidla Traffic Point in Tantigeria, which is close to Vidyasagar University, Midnapore College, Raja N.L. Khan Women\'s College, and local coaching centres.'
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
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali block">জিজ্ঞাসাবাদ (FAQ)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Frequently Asked Questions</h2>
          <p className="text-darkBrown/80 mt-4 leading-relaxed text-sm sm:text-base font-sans">
            Have questions about room rent, kitchen access, safety, or location? Find quick answers below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-whitePure rounded-3xl border border-greyBorder/50 overflow-hidden transition-all duration-300 shadow-xs"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 flex justify-between items-center text-primaryGreen hover:text-accentOrange transition-colors font-bold font-serif"
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
                <p className="text-xs sm:text-sm text-charcoalText/90 leading-relaxed text-left font-sans">
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
