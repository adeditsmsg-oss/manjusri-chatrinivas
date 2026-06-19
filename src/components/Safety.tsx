'use client';

import React from 'react';
import { ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

export default function Safety() {
  return (
    <section id="safety" className="py-24 bg-[#FAF8F5] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C26D55] font-sans block">05 / Security</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1B4332] font-serif leading-none">The Parental Assurance</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: High-contrast quotation block */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-[3rem] p-8 sm:p-12 border border-[#748E7A]/25 shadow-xl relative text-left">
            <span className="text-[#C26D55]/10 text-9xl font-serif absolute top-4 left-6 pointer-events-none select-none">“</span>
            
            <div className="space-y-6 relative z-10 pt-4">
              <p className="text-xl sm:text-2xl font-serif text-[#1B4332] italic leading-relaxed">
                মেয়ের সুরক্ষার কথা ভেবে মঞ্জুশ্রী ছাত্রীনিবাসে রেখেছিলাম। ওখানকার খাওয়া-দাওয়া এবং ওনারদের দায়িত্বশীল ব্যবহার আমাদের নিশ্চিন্ত রেখেছে।
              </p>
              
              <div className="pt-4 border-t border-[#748E7A]/20">
                <h4 className="font-bold text-[#1B4332] font-serif text-base">Kakali Dey</h4>
                <p className="text-xs text-[#1C1917]/60 font-sans mt-0.5">Satisfied Mother of Boarder</p>
              </div>
            </div>
          </div>

          {/* Right Column: Safe checkpoints */}
          <div className="lg:col-span-5 text-left space-y-8 font-sans">
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#1B4332]/5 text-[#1B4332] rounded-xl flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#1B4332]">100% Women-Friendly PG</h4>
                <p className="text-xs text-[#382F2D]/85 leading-relaxed">
                  Strict guest restriction guidelines ensure a comfortable and secure living setup for all girls.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#1B4332]/5 text-[#1B4332] rounded-xl flex-shrink-0">
                <Eye size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#1B4332]">Continuous CCTV Monitoring</h4>
                <p className="text-xs text-[#382F2D]/85 leading-relaxed">
                  External boundaries and entry points are under video coverage to monitor visitor logs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#1B4332]/5 text-[#1B4332] rounded-xl flex-shrink-0">
                <HeartHandshake size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#1B4332]">Responsible Caretaker support</h4>
                <p className="text-xs text-[#382F2D]/85 leading-relaxed">
                  Property wardens live close by and are immediately available to handle any medical emergencies or daily requests.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
