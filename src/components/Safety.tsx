'use client';

import React from 'react';
import Image from 'next/image';

export default function Safety() {
  const trustFeatures = [
    { title: 'Outside CCTV Safety', desc: 'All entrance gates and pathways are under 24/7 security surveillance.' },
    { title: 'Parent-Approved Locality', desc: 'Situated in Ramayanpara, near Bidla Traffic Point, which is safe and quiet.' },
    { title: 'Women-Friendly Environment', desc: 'Strict verification policies and residence helper available to support boarders.' }
  ];

  return (
    <section id="safety" className="py-24 bg-[#FAF8F5] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Replicating reference image text layout */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C58B97] block">Gated Community</span>
              <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-[#1B4332] font-serif leading-tight">
                Safe, Friendly & <br />
                Perfect Ladies Living
              </h2>
              <p className="text-sm text-[#382F2D]/90 leading-relaxed font-sans">
                Manjusri Chatrinivas is dedicated to keeping your daughter safe while fostering a homely, productive academic environment. Our gated property offers maximum reassurance for parents.
              </p>
            </div>

            {/* In-text feature points */}
            <div className="space-y-5 pt-2">
              {trustFeatures.map((feat, idx) => (
                <div key={idx} className="border-l-2 border-[#C26D55] pl-4 space-y-1">
                  <h4 className="text-sm font-bold text-[#1B4332] font-serif">{feat.title}</h4>
                  <p className="text-xs text-[#382F2D]/85 leading-relaxed font-sans">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Replicating the two side-by-side vertical cards layout at the bottom of the reference image */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 items-stretch">
            
            {/* Card 1: Balcony view */}
            <div className="bg-[#FFFDF9] rounded-[2rem] overflow-hidden border border-[#748E7A]/25 p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative mb-4">
                <Image
                  src="/images/balcony.jpg"
                  alt="Cozy Balcony space"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left px-1">
                <h4 className="text-sm font-bold text-[#1B4332] font-serif">Quiet Balconies</h4>
                <p className="text-[10px] text-[#382F2D]/75 leading-relaxed font-sans mt-1">Scenic field views for studying or relaxation.</p>
              </div>
            </div>

            {/* Card 2: Bathroom view */}
            <div className="bg-[#FFFDF9] rounded-[2rem] overflow-hidden border border-[#748E7A]/25 p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative mb-4">
                <Image
                  src="/images/bathroom.jpg"
                  alt="Hygienic Modern Washroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left px-1">
                <h4 className="text-sm font-bold text-[#1B4332] font-serif">Sanitized Washrooms</h4>
                <p className="text-[10px] text-[#382F2D]/75 leading-relaxed font-sans mt-1">Clean western fixtures sanitized daily.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
