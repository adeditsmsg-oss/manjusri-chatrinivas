'use client';

import React from 'react';
import { Calendar, Check } from 'lucide-react';
import Image from 'next/image';
import { TulipLeft, TulipRight } from './FlowerAccent';

export default function Hero() {
  const trustBadges = [
    '✓ CCTV Security',
    '✓ High-Speed WiFi',
    '✓ Homely Food',
    '✓ Geyser Facility',
    '✓ Purified Water',
    '✓ Safe Ladies Environment'
  ];

  return (
    <section id="home" className="relative min-h-screen pt-36 pb-24 flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Dynamic Floral Borders framing borders like a botanical invite */}
      <TulipLeft />
      <TulipRight />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Editorial Content */}
          <div className="lg:col-span-6 text-left space-y-8 animate-fadeIn">
            
            {/* Elegant upper sub-header */}
            <div className="inline-flex items-center space-x-2.5 bg-[#C58B97]/10 border border-[#C58B97]/30 px-5 py-2 rounded-full text-[#C58B97] text-[10px] font-bold uppercase tracking-widest shadow-xs">
              <Calendar size={14} />
              <span>Session 2026 Admissions Open</span>
            </div>

            {/* Main Editorial Title: Playfair Display */}
            <div className="space-y-4">
              <span className="font-bengali text-2xl sm:text-3xl text-[#C26D55] font-semibold block leading-tight">
                নিরাপদ আবাসন, ঘরোয়া পরিবেশের নিশ্চয়তা
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold text-[#1B4332] leading-tight tracking-tight font-serif">
                Premium Ladies <br />
                Hostel & PG <br />
                Accommodation
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#382F2D]/90 leading-relaxed max-w-xl font-sans">
              Safe, affordable and comfortable accommodation for students, job holders and working women. Experience a boutique residence situated in Ramayanpara, near Bidla Traffic Point, Tantigeria, Midnapore.
            </p>

            {/* Minimalist Trust Badges list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-[#FFFDF9]/80 py-2 px-4 rounded-xl border border-[#748E7A]/25">
                  <span className="text-[11px] font-bold text-[#1C1917]/90 font-sans">{badge}</span>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#rooms"
                className="flex items-center justify-center bg-[#1B4332] text-whitePure px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#C26D55] transition-all duration-300 shadow-lg text-[10px]"
              >
                <span>Book Your Room</span>
              </a>
              
              <a
                href="https://wa.me/918016801695?text=Hi!%20I%20am%20interested%20in%20Manjusri%20Chatrinivas.%20Please%2520share%2520room%2520availability."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#FFFDF9] text-[#1C1917] border border-[#E5E0D8] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#FAF8F5] transition-all duration-300 shadow-xs text-[10px]"
              >
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium building display frame - Replicating reference image styling */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] z-10">
              
              {/* Background gradient shadow box */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C58B97] to-[#F0A699] rounded-[3rem] opacity-10 blur-2xl -z-10" />

              {/* Main building display frame */}
              <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-[#FFFDF9] relative transform hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/building.jpg"
                  alt="Manjusri Chatrinivas Gated Property"
                  fill
                  priority
                  className="object-cover"
                />
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/70 via-transparent to-transparent" />
                
                {/* Floating labels */}
                <div className="absolute bottom-8 left-8 right-8 text-whitePure text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#F0A699]">Luxury Ladies PG</p>
                  <h3 className="text-2xl font-bold mt-1.5 text-whitePure font-serif">Ramayanpara Property</h3>
                </div>
              </div>

              {/* Overlapping cozy room badge at the bottom-left */}
              <div className="absolute -bottom-6 -left-10 bg-[#FFFDF9] p-3.5 rounded-2xl shadow-xl border border-[#E5E0D8] flex items-center space-x-3.5 max-w-[200px] transform rotate-3 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl overflow-hidden relative flex-shrink-0">
                  <Image
                    src="/images/bedroom_orange.jpg"
                    alt="Premium Interiors"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left font-sans">
                  <p className="text-[9px] uppercase font-bold text-[#C58B97]">Fully Sanitized</p>
                  <p className="text-[11px] font-bold text-[#1B4332]">Marble Flooring</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
