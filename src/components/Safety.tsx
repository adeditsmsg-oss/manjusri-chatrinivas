'use client';

import React from 'react';
import { ShieldAlert, MapPin, Award, Heart, CheckCircle2, Users } from 'lucide-react';
import { RoseCornerLeft, RoseCornerRight } from './FlowerAccent';

export default function Safety() {
  const points = [
    {
      title: 'Outside CCTV coverage',
      desc: 'All main gates and boundaries are under continuous video monitoring for absolute safety.',
      icon: ShieldAlert
    },
    {
      title: 'Safe Gated Locality',
      desc: 'Ramayanpara near Bidla Traffic Point is one of the most reliable and peaceful locations in Midnapore.',
      icon: MapPin
    },
    {
      title: 'Responsible Management',
      desc: 'Dedicated supervisor resides close to the premises to assist girls with any daily concerns or emergencies.',
      icon: Award
    },
    {
      title: '100% Women-Friendly PG',
      desc: 'Strict guest protocols and a gated perimeter ensure comfortable, worry-free accommodation.',
      icon: Heart
    },
    {
      title: 'Clean Modern Washrooms',
      desc: 'Sanitary fixtures cleaned daily to ensure a hygienic environment for all boarders.',
      icon: CheckCircle2
    },
    {
      title: 'Peaceful Student Community',
      desc: 'Ideal atmosphere for high focus, enabling students and job seekers to study without distractions.',
      icon: Users
    }
  ];

  return (
    <section id="safety" className="py-24 bg-creamCard relative overflow-hidden">
      {/* Decorative rose corners */}
      <RoseCornerLeft />
      <RoseCornerRight />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali block">নিরাপত্তা ও অভিভাবকের আস্থা (Safety Section)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Parents Trust Us for Genuinely Safe Living</h2>
          <p className="text-darkBrown/80 mt-4 leading-relaxed text-sm sm:text-base font-sans">
            We understand that safety is the top priority for families. Manjusri Chatrinivas is designed with multiple security systems to provide ultimate peace of mind.
          </p>
        </div>

        {/* Safety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="bg-whitePure p-6 sm:p-8 rounded-3xl border border-greyBorder/55 hover:border-accentOrange hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 bg-accentOrange/10 text-accentOrange rounded-xl w-fit">
                  <p.icon size={22} />
                </div>
                <h3 className="font-bold text-primaryGreen text-base font-serif">{p.title}</h3>
                <p className="text-xs text-charcoalText/80 leading-relaxed font-sans">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
