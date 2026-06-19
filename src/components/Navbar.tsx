'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF9]/90 backdrop-blur-md border-b border-[#748E7A]/20 py-5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Minimalism Estate Style Brand Header */}
          <a href="#home" className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center text-whitePure font-serif font-extrabold text-xl shadow-xs">
              ম
            </div>
            <div className="text-left">
              <span className="font-bengali text-lg sm:text-xl font-bold tracking-tight text-[#1C1917] block leading-none">মঞ্জুশ্রী ছাত্রীনিবাস</span>
              <span className="text-[8.5px] text-[#C26D55] font-bold uppercase tracking-widest block mt-1">Manjusri Chatrinivas</span>
            </div>
          </a>

          {/* Minimalist Navigation Links (Exactly like the reference image menu structure) */}
          <div className="hidden lg:flex items-center space-x-9">
            <a href="#home" className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Home</a>
            <a href="#about" className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">About Us</a>
            <a href="#rooms" className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Room Types</a>
            <a href="#pricing" className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Packages</a>
            <a href="#why-us" className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Amenities</a>
            
            <a
              href="#contact"
              className="bg-[#C26D55] hover:bg-[#1B4332] text-whitePure px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-xs"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1B4332] hover:text-[#C26D55] focus:outline-none p-1 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FFFDF9] border-b border-[#748E7A]/20 shadow-xl py-6 px-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-4 text-left">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">About Us</a>
            <a href="#rooms" onClick={() => setIsOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">Room Types</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">Packages</a>
            <a href="#why-us" onClick={() => setIsOpen(false)} className="text-[11px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">Amenities</a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#C26D55] text-whitePure text-center py-3 rounded-full font-bold text-[10px] uppercase tracking-widest block transition-colors hover:bg-[#1B4332]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
