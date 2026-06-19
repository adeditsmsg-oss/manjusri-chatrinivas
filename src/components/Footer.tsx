'use client';

import React from 'react';
import { Phone, MapPin, Heart, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primaryGreen text-whitePure pt-16 pb-8 border-t border-accentRose/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 floral-backdrop" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Description & Branding */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-accentRose flex items-center justify-center text-whitePure text-sm font-black">
              M
            </div>
            <div>
              <h3 className="font-bengali text-base sm:text-lg font-extrabold leading-none">মঞ্জুশ্রী ছাত্রীনিবাস</h3>
              <p className="text-[9px] text-goldBrand uppercase tracking-widest font-bold">Manjusri Chatrinivas</p>
            </div>
          </div>
          
          <p className="text-whitePure/70 text-xs sm:text-sm leading-relaxed max-w-sm">
            Tantigeria's premium ladies' hostel and paying guest option. Providing clean rooms with marble floors, daily mess meal configurations, security surveillance, and geyser facilities since 2020.
          </p>

          <p className="text-[10px] text-whitePure/45">
            © {new Date().getFullYear()} Manjusri Chatrinivas. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-goldBrand">Navigation</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-whitePure/75">
            <li><a href="#home" className="hover:text-goldBrand transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-goldBrand transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-goldBrand transition-colors">Pricing & Packages</a></li>
            <li><a href="#why-us" className="hover:text-goldBrand transition-colors">Hostel Amenities</a></li>
            <li><a href="#contact" className="hover:text-goldBrand transition-colors">Reservation Desk</a></li>
          </ul>
        </div>

        {/* Contact details */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-goldBrand">Contact details</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-whitePure/75">
            <li className="flex items-start space-x-2">
              <MapPin size={16} className="text-goldBrand mt-0.5 flex-shrink-0" />
              <span>Bidla Traffic Point, Ramayanpara, Tantigeria, Midnapore - 721102</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-goldBrand flex-shrink-0" />
              <span>Warden: +91 80168 01695</span>
            </li>
            <li className="flex items-center space-x-2">
              <ShieldAlert size={16} className="text-goldBrand flex-shrink-0" />
              <span>Security Desk: +91 91268 36422</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-12 pt-8 border-t border-whitePure/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-whitePure/40 gap-4">
        <p>Designed and optimized for local SEO in Tantigeria, Midnapore.</p>
        <p className="flex items-center">
          Created with <Heart size={12} className="text-accentRose mx-1 fill-accentRose" /> for Manjusri Chatrinivas Ladies Mess.
        </p>
      </div>
    </footer>
  );
}
