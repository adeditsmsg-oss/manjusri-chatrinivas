'use client';

import React from 'react';
import { ShieldCheck, Heart, Coffee, Leaf, Home, Smile } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const values = [
    {
      title: 'Comfortable Living Spaces',
      description: 'Well-ventilated rooms with marble flooring, quality beds, shelves, and elegant curtains.',
      icon: Home,
    },
    {
      title: 'Healthy Homely Meals',
      description: 'Nutritious, high-quality daily food packages prepared with utmost hygiene, feeling like home.',
      icon: Coffee,
    },
    {
      title: 'Gated Security System',
      description: 'Peace of mind with gated entrance, outside CCTV monitoring, and safe ladies environment.',
      icon: ShieldCheck,
    },
    {
      title: 'Peaceful Study Environment',
      description: 'Designed strategically to foster focus and quietness, perfect for students and job aspirants.',
      icon: Leaf,
    }
  ];

  return (
    <section id="about" className="py-24 bg-creamCard relative overflow-hidden">
      {/* Delicate Leaf Background Accent */}
      <div className="absolute right-0 bottom-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-primaryGreen w-full h-full">
          <path d="M10 80 C 40 80, 70 50, 80 10 C 50 20, 20 50, 10 80 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Grid Column */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md border-4 border-whitePure transform hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    className="object-cover"
                    src="/images/dining.jpg"
                    alt="Manjusri Chatrinivas Dining Area"
                    fill
                  />
                </div>
                <div className="bg-primaryGreen p-6 rounded-3xl text-whitePure shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-300 border border-accentCoral/20">
                  <span className="text-3xl font-extrabold text-accentCoral block">100%</span>
                  <span className="text-xs uppercase tracking-wider font-semibold font-bengali">নিরাপদ ও ঘরোয়া পরিবেশ</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-whitePure p-6 rounded-3xl shadow-lg border border-greyBorder text-center transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-3xl font-extrabold text-accentRose block font-serif">Safe & Calm</span>
                  <span className="text-xs text-charcoalText/60 uppercase tracking-wider font-bold">Premium PG Standards</span>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md border-4 border-whitePure transform hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    className="object-cover"
                    src="/images/bedroom_yellow.jpg"
                    alt="Bright study space"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="space-y-8 text-left">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali block">আপনার দ্বিতীয় বাড়ি (About Us)</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 leading-tight font-serif">
                Your Home Away From Home in Ramayanpara
              </h2>
              <p className="text-darkBrown/85 mt-4 leading-relaxed font-sans">
                Manjusri Chatrinivas (Ladies Mess) is premier accommodation in Midnapore Town, offering a luxury co-living vibe for girls and student boarders. Designed to feel like a high-end estate, we bring together high safety standards, delicious meals, clean facilities, and a supportive environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3.5 p-4 bg-whitePure/55 rounded-2xl border border-greyBorder/35 hover:shadow-md transition-all duration-300">
                  <div className="p-2.5 bg-primaryGreen/10 text-primaryGreen rounded-xl flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primaryGreen text-sm font-serif">{item.title}</h3>
                    <p className="text-xs text-charcoalText/75 mt-1 leading-relaxed">{item.description}</p>
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
