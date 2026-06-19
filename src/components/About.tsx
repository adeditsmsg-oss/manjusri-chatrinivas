'use client';

import React from 'react';
import { ShieldCheck, Heart, Coffee } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const values = [
    {
      title: 'Premium Security First',
      description: 'Gated facility with external CCTV cameras, strict guest registers, and verified house rules.',
      icon: ShieldCheck,
    },
    {
      title: 'Hygienic Home Dining',
      description: 'Serving hot, delicious home-cooked meals prepared under high sanitation levels.',
      icon: Coffee,
    },
    {
      title: 'Parent-Like Guardianship',
      description: 'Helpful property owners resides nearby to ensure immediate assistance in case of emergencies.',
      icon: Heart,
    }
  ];

  return (
    <section id="about" className="py-24 bg-creamCard relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Grid Column */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md border-4 border-whitePure transform hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    className="object-cover"
                    src="/manjusri-chatrinivas/images/bedroom_yellow.jpg"
                    alt="Comfortable Marble Bedroom"
                    fill
                  />
                </div>
                <div className="bg-primaryGreen p-6 rounded-3xl text-whitePure shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-3xl font-extrabold text-goldBrand block">August</span>
                  <span className="text-xs uppercase tracking-wider font-semibold font-bengali">নতুন ভর্তি চলছে (Admission Open)</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-whitePure p-6 rounded-3xl shadow-lg border border-greyBorder text-center transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-3xl font-extrabold text-accentRose block">24/7</span>
                  <span className="text-xs text-charcoalText/60 uppercase tracking-wider font-semibold">Active Care Support</span>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md border-4 border-whitePure transform hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    className="object-cover"
                    src="/manjusri-chatrinivas/images/bathroom.jpg"
                    alt="Sanitized Tiled Bathroom"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="space-y-8 text-left">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">আমাদের লক্ষ্য (About Us)</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 leading-tight">
                Safe, Friendly & Comfortable Living for Female Boarders
              </h2>
              <p className="text-charcoalText/85 mt-4 leading-relaxed">
                Manjusri Chatrinivas Ladies Mess has established itself as a leading student residency option in Midnapore. Strategically located near Bidla Traffic Point in Tantigeria, our facility supports academics and personal safety. We prioritize responsive maintenance and comfortable environment.
              </p>
            </div>

            <div className="space-y-4">
              {values.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-whitePure hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-primaryGreen/10 text-primaryGreen rounded-xl flex-shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primaryGreen text-base">{item.title}</h3>
                    <p className="text-sm text-charcoalText/75 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
