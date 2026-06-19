'use client';

import React from 'react';
import { Phone, MapPin, Heart, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primaryGreen text-whitePure pt-16 pb-8 border-t border-accentRose/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 floral-backdrop" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Description & Branding */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-accentRose flex items-center justify-center text-whitePure text-base font-serif font-extrabold shadow-md">
              ম
            </div>
            <div>
              <h3 className="font-bengali text-base sm:text-lg font-bold leading-none">মঞ্জুশ্রী ছাত্রীনিবাস</h3>
              <p className="text-[9px] text-accentCoral uppercase tracking-widest font-bold mt-1">Manjusri Chatrinivas</p>
            </div>
          </div>
          
          <p className="text-whitePure/75 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
            A premium ladies hostel, girls PG, and student accommodation near Bidla Traffic Point, Tantigeria, Midnapore. Providing safe, modern, and high-quality spaces.
          </p>

          <p className="text-[10px] text-whitePure/45 font-sans">
            © {new Date().getFullYear()} Manjusri Chatrinivas (Ladies Mess). All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-accentCoral">Navigation</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-whitePure/75 font-sans">
            <li><a href="#home" className="hover:text-accentCoral transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-accentCoral transition-colors">About Us</a></li>
            <li><a href="#rooms" className="hover:text-accentCoral transition-colors">Room Categories</a></li>
            <li><a href="#pricing" className="hover:text-accentCoral transition-colors">Pricing & Plans</a></li>
            <li><a href="#why-us" className="hover:text-accentCoral transition-colors">Amenities</a></li>
            <li><a href="#gallery" className="hover:text-accentCoral transition-colors">Gallery</a></li>
          </ul>
        </div>

        {/* Contact details */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-accentCoral">Contact Details</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-whitePure/75 font-sans">
            <li className="flex items-start space-x-2">
              <MapPin size={16} className="text-accentCoral mt-0.5 flex-shrink-0" />
              <span>Ramayanpara, Near Bidla Traffic Point, Tantigeria, Midnapore, West Bengal - 721102</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-accentCoral flex-shrink-0" />
              <span>Call: +91 80168 01695, +91 91268 36422</span>
            </li>
            <li className="flex items-center space-x-2">
              <MessageSquare size={16} className="text-green-500 flex-shrink-0" />
              <span>WhatsApp Support: +91 80168 01695</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-12 pt-8 border-t border-whitePure/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-whitePure/40 gap-4 font-sans">
        <p>SEO optimized for: Ladies Hostel in Midnapore, Girls PG Near Bidla Traffic Point, Student Accommodation.</p>
        <p className="flex items-center">
          Created with <Heart size={12} className="text-accentRose mx-1 fill-accentRose" /> for Manjusri Chatrinivas.
        </p>
      </div>
    </footer>
  );
}
