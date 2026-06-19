'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#748E7A]/15 py-5 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo stamp */}
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-[#1B4332] flex items-center justify-center text-whitePure font-serif font-black text-lg">
              ম
            </div>
            <div className="text-left font-serif">
              <span className="font-bengali text-base sm:text-lg font-bold tracking-tight text-[#1C1917] block leading-none">মঞ্জুশ্রী ছাত্রীনিবাস</span>
              <span className="text-[7.5px] text-[#C26D55] font-bold uppercase tracking-widest block mt-1 font-sans">Manjusri Chatrinivas</span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10">
            <a href="#home" className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Cover</a>
            <a href="#philosophy" className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Philosophy</a>
            <a href="#gallery" className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Portraits</a>
            <a href="#residence" className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Residence</a>
            <a href="#amenities" className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Amenities</a>
            <a href="#pricing" className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55] transition-colors">Investment</a>
            
            <a
              href="#contact"
              className="bg-[#1B4332] hover:bg-[#C26D55] text-whitePure px-6 py-2.5 rounded-full font-bold text-[9px] uppercase tracking-widest transition-all duration-300 shadow-xs"
            >
              Book Desk
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FAF8F5] border-b border-[#748E7A]/15 shadow-2xl py-6 px-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-4 text-left font-sans">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">Cover</a>
            <a href="#philosophy" onClick={() => setIsOpen(false)} className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">Philosophy</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">Portraits</a>
            <a href="#residence" onClick={() => setIsOpen(false)} className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">Residence</a>
            <a href="#amenities" onClick={() => setIsOpen(false)} className="text-[10px] font-bold uppercase tracking-widest text-[#1C1917] hover:text-[#C26D55]">Amenities</a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#1B4332] text-whitePure text-center py-3 rounded-full font-bold text-[9px] uppercase tracking-widest block transition-colors hover:bg-[#C26D55]"
            >
              Book Desk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
