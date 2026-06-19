'use client';

import React from 'react';
import Image from 'next/image';
import { TulipLeft, TulipRight } from './FlowerAccent';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#FAF8F5] flex items-center justify-center overflow-hidden py-12">
      {/* Editorial flower accents */}
      <TulipLeft />
      <TulipRight />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Cover text panel */}
        <div className="lg:col-span-6 text-left space-y-6 sm:space-y-8 animate-fadeIn">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C26D55] font-sans block">Volume I — Midnapore</span>
            <span className="text-xl sm:text-2xl font-serif text-[#C58B97] italic block font-bengali">নিরাপদ আবাসন, ঘরোয়া পরিবেশের নিশ্চয়তা</span>
          </div>

          <h1 className="text-5xl sm:text-6.5xl lg:text-7.5xl font-extrabold text-[#1B4332] font-serif leading-[1.05] tracking-tight">
            মঞ্জুশ্রী <br />
            ছাত্রীনিবাস
          </h1>

          <div className="border-t border-[#748E7A]/30 pt-6 max-w-md space-y-4">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#1C1917]/50 font-sans">
              Safe PG & Ladies Accommodation
            </p>
            <p className="text-xs sm:text-sm text-[#382F2D]/90 leading-relaxed font-sans">
              Gated student & working women residency near Bidla Traffic Point, Tantigeria, Midnapore. Designed for comfort, study focus, and parental peace of mind.
            </p>
          </div>

          {/* Quick links styled like list index of a magazine */}
          <div className="pt-6 flex flex-wrap gap-4 font-sans text-[9px] font-bold uppercase tracking-widest text-[#1C1917]/60">
            <a href="#philosophy" className="hover:text-[#C26D55] transition-colors">01 / Philosophy</a>
            <a href="#gallery" className="hover:text-[#C26D55] transition-colors">02 / Portraits</a>
            <a href="#residence" className="hover:text-[#C26D55] transition-colors">03 / Room Types</a>
            <a href="#pricing" className="hover:text-[#C26D55] transition-colors">04 / Investment</a>
          </div>

          {/* Minimalist CTA */}
          <div className="pt-4 flex items-center space-x-6">
            <a
              href="#contact"
              className="bg-[#1B4332] hover:bg-[#C26D55] text-whitePure px-8 py-4 rounded-full font-bold uppercase text-[9px] tracking-widest transition-colors shadow-lg"
            >
              Enquire Residence
            </a>
            <a href="tel:+918016801695" className="text-[10px] font-extrabold text-[#1C1917] hover:text-[#C26D55] transition-colors font-sans uppercase tracking-widest border-b border-[#1C1917] pb-1">
              +91 80168 01695
            </a>
          </div>
        </div>

        {/* Large Vertical Cover Image Frame */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-[#FFFDF9] bg-[#FAF8F5]">
            <Image
              src="/images/building.jpg"
              alt="Manjusri Chatrinivas Editorial cover"
              fill
              priority
              className="object-cover"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 text-whitePure text-right font-serif">
              <span className="text-[8px] uppercase font-bold tracking-widest text-[#F0A699] font-sans block">Ramayanpara Gated Campus</span>
              <span className="text-sm font-semibold">Tantigeria Town</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
