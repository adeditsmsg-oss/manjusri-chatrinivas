'use client';

import React from 'react';
import { MessageSquare, Phone, ShieldCheck, MapPin, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';
import { TulipLeft, TulipRight } from './FlowerAccent';

export default function Hero() {
  const trustBadges = [
    'CCTV Security',
    'High-Speed WiFi',
    'Homely Food',
    'Geyser Facility',
    'Purified Water',
    'Safe Ladies Environment'
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-creamBg">
      {/* Editorial Floral Frame System */}
      <TulipLeft />
      <TulipRight />

      {/* Decorative Blur Backdrops */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primaryGreen/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-accentRose/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 text-left space-y-8">
          
          {/* Trust Alert Tag */}
          <div className="inline-flex items-center space-x-2 bg-accentRose/10 border border-accentRose/30 px-5 py-2 rounded-full text-accentRose text-xs font-bold uppercase tracking-wider shadow-xs">
            <ShieldCheck size={14} />
            <span>Admission Open for 2026 Session</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <span className="font-bengali text-2xl sm:text-3xl text-accentOrange font-medium block leading-tight">
              নিরাপদ আবাসন, ঘরোয়া পরিবেশের নিশ্চয়তা
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primaryGreen leading-tight tracking-tight font-serif">
              Premium Ladies Hostel & PG in Midnapore
            </h1>
          </div>

          <p className="text-base sm:text-lg text-darkBrown/85 leading-relaxed max-w-xl font-sans">
            Safe, affordable, and comfortable accommodation for students, job holders, and working women. Located near Bidla Traffic Point, Tantigeria, offering a premium and peaceful lifestyle.
          </p>

          {/* Trust Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-2 bg-whitePure/70 backdrop-blur-xs py-2 px-3.5 rounded-xl border border-greyBorder/40">
                <Check size={12} className="text-accentOrange flex-shrink-0" />
                <span className="text-[11px] font-bold text-charcoalText/90">{badge}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#rooms"
              className="flex items-center justify-center space-x-2 bg-primaryGreen text-whitePure px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-accentOrange transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primaryGreen/20 text-xs sm:text-sm"
            >
              <span>Book Your Room</span>
              <ChevronRight size={16} />
            </a>
            
            <a
              href="https://wa.me/918016801695?text=Hi!%20I%2520am%252520interested%252520in%252520booking%252520a%252520room%252520at%252520Manjusri%252520Chatrinivas.%252520Please%252520share%252520availability."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-whitePure text-charcoalText border border-greyBorder px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-creamBg transition-all duration-300 shadow-xs text-xs sm:text-sm"
            >
              <MessageSquare size={18} className="text-green-600 fill-green-600" />
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* Contact Numbers Display */}
          <div className="pt-6 border-t border-greyBorder/50 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 bg-primaryGreen/10 text-primaryGreen rounded-full">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-charcoalText/60">Call Inquiry</p>
                <a href="tel:+918016801695" className="text-sm font-bold text-primaryGreen hover:text-accentOrange transition-colors">+91 80168 01695</a>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 bg-primaryGreen/10 text-primaryGreen rounded-full">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-charcoalText/60">Backup Call</p>
                <a href="tel:+919126836422" className="text-sm font-bold text-primaryGreen hover:text-accentOrange transition-colors">+91 91268 36422</a>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 bg-accentOrange/10 text-accentOrange rounded-full">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-charcoalText/60">Location</p>
                <p className="text-sm font-bold text-charcoalText/85">Ramayanpara, Midnapore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Image Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] z-10">
            {/* Background Decorative Frame */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-accentRose to-accentCoral rounded-[2.5rem] opacity-10 blur-xl -z-10" />

            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-whitePure transform -rotate-1 hover:rotate-0 transition-transform duration-500 relative">
              <Image
                src="/images/building.jpg"
                alt="Manjusri Chatrinivas Building Exterior"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primaryGreen/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-whitePure text-left">
                <p className="text-xs uppercase font-extrabold tracking-widest text-accentCoral">Tantigeria Property</p>
                <h3 className="text-xl font-bold mt-1 text-whitePure font-serif">Main Building Front</h3>
              </div>
            </div>

            {/* Overlapping Small Float Card: Cozy Room */}
            <div className="absolute -bottom-6 -left-10 bg-whitePure p-3 rounded-2xl shadow-xl border border-greyBorder flex items-center space-x-3 max-w-[190px] transform rotate-3 hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl overflow-hidden relative flex-shrink-0">
                <Image
                  src="/images/bedroom_orange.jpg"
                  alt="Marble Room View"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left font-sans">
                <p className="text-[9px] uppercase font-bold text-accentRose">Clean Interiors</p>
                <p className="text-xs font-bold text-primaryGreen">Cozy Study Setup</p>
              </div>
            </div>

            {/* Overlapping Float Card: Rating */}
            <div className="absolute -top-6 -right-6 bg-primaryGreen text-whitePure p-4 rounded-2xl shadow-xl text-center transform rotate-6 hover:scale-105 transition-transform flex flex-col items-center">
              <span className="text-accentCoral font-black text-sm">★★★★★</span>
              <p className="text-[10px] text-whitePure/85 uppercase tracking-wider font-bold mt-1">Safety Rating</p>
              <p className="text-xs font-bold text-accentCoral">100% Secure PG</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
