'use client';

import React from 'react';

export default function About() {
  return (
    <section id="philosophy" className="py-24 bg-[#FFFDF9] text-[#1C1917] relative overflow-hidden">
      {/* Blurred decorative element */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-[#C58B97]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-12">
        
        {/* Story Index */}
        <div className="space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C26D55] font-sans block">01 / Philosophy</span>
          <h2 className="text-3xl sm:text-4.5xl font-extrabold text-[#1B4332] font-serif leading-tight">
            Your Home Away From Home
          </h2>
        </div>

        {/* Large, high-end editorial paragraph */}
        <p className="text-lg sm:text-2xl font-serif text-[#382F2D] leading-relaxed max-w-4xl mx-auto text-center italic">
          "আমরা বিশ্বাস করি একটি শান্ত, সুরক্ষিত এবং পরিচ্ছন্ন পরিবেশ ছাত্রীদের ভবিষ্যৎ গঠনে সাহায্য করে। Manjusri Chatrinivas is not just an accommodation; it is a supportive community created for college girls and working women to learn, focus, and thrive."
        </p>

        {/* Minimalist Grid Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#748E7A]/20 text-left font-sans">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold text-[#C26D55] tracking-widest">Peaceful Focus</span>
            <p className="text-xs text-[#1C1917]/80 leading-relaxed">
              Quiet study environments located near colleges and coaching centers, perfect for exam preparation.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold text-[#C26D55] tracking-widest">Homely Taste</span>
            <p className="text-xs text-[#1C1917]/80 leading-relaxed">
              Healthy meals cooked fresh in our on-site mess, giving you the authentic taste of Bengali home-cooked recipes.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold text-[#C26D55] tracking-widest">Parental Trust</span>
            <p className="text-xs text-[#1C1917]/80 leading-relaxed">
              Gated locks, outside CCTV coverage, and helpful management present to assist boarders 24/7.
            </p>
          </div>
        </div>

        {/* Dynamic Image Collage (Editorial-style Wide Strip) */}
        <div className="relative w-full h-[220px] sm:h-[320px] rounded-[2.5rem] overflow-hidden shadow-xl mt-12">
          <img
            src="/manjusri-chatrinivas/images/lobby.jpg"
            alt="Interior clean corridor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1B4332]/10" />
        </div>

      </div>
    </section>
  );
}
