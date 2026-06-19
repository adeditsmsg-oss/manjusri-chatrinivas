'use client';

import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-creamBg/95 backdrop-blur-md border-b border-greyBorder/30 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo (Elegant Floral Accent / M Initials) */}
          <a href="#home" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primaryGreen flex items-center justify-center text-whitePure font-serif font-extrabold text-xl shadow-md border border-accentCoral/30">
              ম
            </div>
            <div>
              <span className="font-bengali text-lg sm:text-xl font-bold text-primaryGreen block leading-none">মঞ্জুশ্রী ছাত্রীনিবাস</span>
              <span className="text-[9px] text-accentOrange font-bold uppercase tracking-widest block mt-1">Manjusri Chatrinivas</span>
            </div>
          </a>

          {/* Search Bar (Center) */}
          <div className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-sm relative">
            <Search className="absolute left-4 text-charcoalText/40 w-4 h-4" />
            <input
              type="text"
              placeholder="Search rooms, meal plans..."
              className="w-full pl-11 pr-4 py-2.5 bg-whitePure border border-greyBorder/50 rounded-full text-xs text-charcoalText placeholder-charcoalText/40 outline-none focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen transition-colors"
            />
          </div>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">Home</a>
            <a href="#about" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">About Us</a>
            <a href="#rooms" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">Rooms</a>
            <a href="#pricing" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">Pricing</a>
            <a href="#why-us" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">Amenities</a>
            <a href="#gallery" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">Gallery</a>
            
            <a
              href="#contact"
              className="bg-primaryGreen hover:bg-accentOrange text-whitePure px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-primaryGreen/10"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primaryGreen hover:text-accentOrange focus:outline-none p-1 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-creamBg border-b border-greyBorder/50 shadow-xl py-6 px-6 space-y-4 animate-fadeIn">
          <div className="flex items-center relative">
            <Search className="absolute left-4 text-charcoalText/45 w-4 h-4" />
            <input
              type="text"
              placeholder="Search accommodation..."
              className="w-full pl-11 pr-4 py-2.5 bg-whitePure border border-greyBorder/50 rounded-full text-xs text-charcoalText outline-none"
            />
          </div>
          <div className="flex flex-col space-y-3.5 text-left">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">About Us</a>
            <a href="#rooms" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">Rooms</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">Pricing</a>
            <a href="#why-us" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">Amenities</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">Gallery</a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-primaryGreen text-whitePure text-center py-3 rounded-full font-bold text-xs uppercase tracking-widest block transition-colors hover:bg-accentOrange"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
