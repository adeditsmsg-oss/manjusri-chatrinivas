'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-whitePure pt-20 pb-8 relative overflow-hidden border-t border-[#C58B97]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 text-left font-sans text-xs">
        
        {/* Imprint Column 1: Publisher Stamp */}
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#C58B97] flex items-center justify-center text-whitePure text-sm font-serif font-black shadow-xs">
              ম
            </div>
            <div>
              <h3 className="font-bengali text-sm sm:text-base font-bold leading-none">মঞ্জুশ্রী ছাত্রীনিবাস</h3>
              <p className="text-[7.5px] text-[#F0A699] uppercase tracking-widest font-bold mt-1">Manjusri Chatrinivas</p>
            </div>
          </div>
          
          <p className="text-whitePure/70 text-xs leading-relaxed max-w-sm">
            Designed as a high-end ladies co-living environment in Tantigeria, Midnapore. Providing safety, comfort, and nutritious food plans for student boarders since launch.
          </p>

          <p className="text-[9px] text-whitePure/45">
            © {new Date().getFullYear()} Manjusri Chatrinivas. Imprint and catalog details.
          </p>
        </div>

        {/* Imprint Column 2: Index list */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#F0A699]">Index</h4>
          <ul className="space-y-2.5 text-whitePure/70">
            <li><a href="#home" className="hover:text-[#F0A699] transition-colors">01 / Cover</a></li>
            <li><a href="#philosophy" className="hover:text-[#F0A699] transition-colors">02 / Philosophy</a></li>
            <li><a href="#gallery" className="hover:text-[#F0A699] transition-colors">03 / Portraits</a></li>
            <li><a href="#residence" className="hover:text-[#F0A699] transition-colors">04 / Residence</a></li>
            <li><a href="#pricing" className="hover:text-[#F0A699] transition-colors">05 / Investment</a></li>
          </ul>
        </div>

        {/* Imprint Column 3: Catalog Stamp */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#F0A699]">Catalog Stamps</h4>
          <ul className="space-y-3.5 text-whitePure/70">
            <li>
              <span className="text-[9px] uppercase font-bold text-[#F0A699] block">Address</span>
              <span className="block mt-0.5">Ramayanpara, Tantigeria, Midnapore, WB 721102</span>
            </li>
            <li>
              <span className="text-[9px] uppercase font-bold text-[#F0A699] block">Enquiry Desk</span>
              <span className="block mt-0.5">Call: +91 80168 01695</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-12 pt-8 border-t border-whitePure/10 flex flex-col sm:flex-row items-center justify-between text-[9px] text-whitePure/45 gap-4">
        <p>SEO optimized namespace for girls PG, student rooms, and ladies mess in Midnapore.</p>
        <p>Designed by Senior Creative Direction.</p>
      </div>
    </footer>
  );
}
