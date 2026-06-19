'use client';

import React from 'react';
import { Wifi, Droplets, BatteryCharging, ShieldAlert, Sparkles, UserCheck, Trash2, Bike } from 'lucide-react';
import { TulipLeft, TulipRight } from './FlowerAccent';

export default function WhyChooseUs() {
  const amenities = [
    {
      title: 'Free Hi-Speed Wi-Fi',
      desc: 'Stay connected for online studies and examinations with stable high-bandwidth internet.',
      icon: Wifi,
    },
    {
      title: 'Purified RO & Submersible Water',
      desc: 'Continuous supply of pure, safe drinking water and running submersible water.',
      icon: Droplets,
    },
    {
      title: 'Hot Water Geyser System',
      desc: 'Fitted bathrooms offering running hot water for comfort during cold winter mornings.',
      icon: Sparkles,
    },
    {
      title: 'Emergency Power Lights',
      desc: 'Automatic emergency power backup systems to ensure uninterrupted study sessions.',
      icon: BatteryCharging,
    },
    {
      title: 'Daily Washroom Sanitation',
      desc: 'Regular cleaning and disinfection of bathrooms to preserve hygiene benchmarks.',
      icon: Trash2,
    },
    {
      title: 'Regular House Maid Service',
      desc: 'Daily sweeping and maintenance of shared lobbies, balconies, and corridors.',
      icon: UserCheck,
    },
    {
      title: 'Outside CCTV Security',
      desc: 'Continuous surveillance of entryways and parking bays to keep boarders protected.',
      icon: ShieldAlert,
    },
    {
      title: 'Safe Cycle Parking Stand',
      desc: 'Spacious ground floor cycle storage area protected inside lockable gates.',
      icon: Bike,
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-creamCard relative overflow-hidden">
      
      {/* Elegant margin flower accents */}
      <TulipLeft />
      <TulipRight />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">সুযোগ-সুবিধা (Amenities)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Comprehensive Included Facilities</h2>
          <p className="text-charcoalText/80 mt-4 leading-relaxed text-sm sm:text-base">
            We provide everything standard a modern student needs to live stress-free, with zero extra charges for utility services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-whitePure p-6 rounded-3xl border border-greyBorder/50 shadow-sm hover:border-primaryGreen hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3.5 bg-primaryGreen/5 text-primaryGreen rounded-2xl w-fit">
                  <item.icon size={22} />
                </div>
                <h3 className="font-bold text-primaryGreen text-base font-serif">{item.title}</h3>
                <p className="text-xs text-charcoalText/75 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
