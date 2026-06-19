'use client';

import React from 'react';
import { Wifi, Droplet, BookOpen, Lightbulb, Sparkles, Thermometer, Bike, ChefHat, ShieldCheck, Zap, Bath, Heart } from 'lucide-react';
import { TulipLeft, TulipRight } from './FlowerAccent';

export default function WhyChooseUs() {
  const facilities = [
    { name: 'Free High-Speed WiFi', icon: Wifi, desc: 'Stay connected for studies, work, and social needs.' },
    { name: 'Purified Water', icon: Droplet, desc: 'RO filtered clean and safe drinking water.' },
    { name: 'Submersible Water', icon: Droplet, desc: 'Uninterrupted 24/7 water supply throughout the day.' },
    { name: 'Individual Bookshelf', icon: BookOpen, desc: 'Keep your academic and study materials neatly organized.' },
    { name: 'Emergency Backup Light', icon: Lightbulb, desc: 'Immediate backup lights during power failures.' },
    { name: 'House Maid Services', icon: Sparkles, desc: 'Daily cleaning of corridors, washrooms, and common spaces.' },
    { name: 'Geyser Facility', icon: Thermometer, desc: 'Hot water availability for refreshing baths in winter.' },
    { name: 'Cycle Stand Parking', icon: Bike, desc: 'Safe locked parking space for your bicycles.' },
    { name: 'Separate Kitchen Access', icon: ChefHat, desc: 'Independent cooking facility option for boarders.' },
    { name: 'Separate Washroom', icon: Bath, desc: 'Modern hygienic toilet fixtures and setup.' },
    { name: 'Outside CCTV Safety', icon: ShieldCheck, desc: 'Security coverage monitoring the gates & boundary.' },
    { name: 'Flexible Meal Plans', icon: ChefHat, desc: 'Customizable dining subscriptions for healthy Bengali meals.' },
    { name: 'Electric Meter System', icon: Zap, desc: 'Pay exactly what you consume under flexible plans.' },
    { name: 'Clean Environment', icon: Sparkles, desc: 'Tidy, fresh surroundings for peaceful living.' },
    { name: 'Safe Girls PG Community', icon: Heart, desc: 'Trustworthy community of college boarders & workers.' }
  ];

  return (
    <section id="why-us" className="py-24 bg-creamBg relative overflow-hidden">
      
      {/* Decorative floral elements */}
      <TulipLeft />
      <TulipRight />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali block">সুযোগ-সুবিধা (Facilities & Amenities)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Premium Amenities For Modern Co-Living</h2>
          <p className="text-darkBrown/80 mt-4 leading-relaxed text-sm sm:text-base font-sans">
            We provide everything needed for a safe, comfortable, and independent student/working-woman lifestyle in Midnapore.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-whitePure p-5 rounded-2xl border border-greyBorder/40 shadow-xs hover:border-accentOrange hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-2.5 bg-primaryGreen/5 text-primaryGreen rounded-xl w-fit">
                  <item.icon size={20} strokeWidth={2} />
                </div>
                <h3 className="font-bold text-primaryGreen text-xs font-serif">{item.name}</h3>
                <p className="text-[10px] text-charcoalText/75 leading-relaxed font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
