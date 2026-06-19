'use client';

import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

export default function Services() {
  const rooms = [
    {
      id: 'single',
      name: 'Single Room',
      banglaName: 'সিঙ্গেল রুম (সম্পূর্ণ প্রাইভেসি)',
      price: '2,299',
      period: 'Rent Only / Month',
      popular: false,
      description: 'Ideal choice for working women and students seeking absolute privacy and quiet study space.',
      features: ['Personal Bed & Study Desk', 'Quiet Editorial Environment', 'Individual Wardrobe & Storage', 'Full Light & Ventilation'],
      image: '/images/bedroom_orange.jpg'
    },
    {
      id: 'double',
      name: '2 Sharing Room',
      banglaName: '২-শেয়ারিং রুম (জনপ্রিয় ডাবল)',
      price: '1,599',
      period: 'Rent Only / Month',
      popular: true,
      description: 'Our most balanced package offering ample privacy and comfortable shared study environments.',
      features: ['Two Beds & Study Desks', 'Spacious Room Layout', 'Shared Wardrobe Space', 'Optimal Natural Lighting'],
      image: '/images/bedroom_blue.jpg'
    },
    {
      id: 'triple',
      name: '3 Sharing Room',
      banglaName: '৩-শেয়ারিং রুম (সাশ্রয়ী ট্রিপল)',
      price: '1,399',
      period: 'Rent Only / Month',
      popular: false,
      description: 'Budget-friendly community living, perfect for close friends and first-year university students.',
      features: ['Three Separate Beds', 'Shared Study Desks', 'Spacious Cupboards', 'Regular Housekeeping Access'],
      image: '/images/bedroom_yellow.jpg'
    },
    {
      id: 'quad',
      name: '4 Sharing Room',
      banglaName: '৪-শেয়ারিং রুম (সর্বোচ্চ সাশ্রয়)',
      price: '899',
      period: 'Rent Only / Month',
      popular: false,
      description: 'Highly economical option providing active social circles, security, and standard facilities.',
      features: ['Four Dedicated Beds', 'Large Study Table Setup', 'Separate Lockers', 'Well-Ventilated Windows'],
      image: '/images/bedroom_green.jpg'
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-creamBg text-charcoalText relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali block">রুম ক্যাটাগরি (Choose Your Room)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Choose Your Perfect Room</h2>
          <p className="text-darkBrown/80 mt-4 leading-relaxed text-sm sm:text-base font-sans">
            Select from our range of beautifully designed room sharing options. All spaces feature marble flooring, elegant color themes, and safe gated access.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`bg-whitePure rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                room.popular
                  ? 'border-accentOrange ring-1 ring-accentOrange relative scale-[1.02] lg:scale-105 z-10 shadow-lg'
                  : 'border-greyBorder/50 shadow-xs'
              }`}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 bg-accentOrange text-whitePure text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                  Most Popular
                </div>
              )}

              {/* Card Header & Visual */}
              <div>
                <div className="h-48 overflow-hidden bg-creamCard relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-4 text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-accentRose font-bold font-bengali block">{room.banglaName}</span>
                    <h3 className="text-lg font-bold text-primaryGreen mt-1 font-serif">{room.name}</h3>
                    
                    {/* Stars Rating under title */}
                    <div className="flex items-center space-x-0.5 text-accentOrange mt-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} className="fill-accentOrange text-accentOrange" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-charcoalText/75 leading-relaxed font-sans">{room.description}</p>

                  <div className="pt-3 border-t border-greyBorder/30 space-y-2">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-charcoalText/85">
                        <Check size={13} className="text-primaryGreen mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-greyBorder/10 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-xl font-bold text-primaryGreen font-serif">₹{room.price}</span>
                  <span className="text-[9px] text-charcoalText/55 block font-semibold">{room.period}</span>
                </div>
                <a
                  href="#contact"
                  className={`px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    room.popular
                      ? 'bg-accentOrange text-whitePure hover:bg-accentOrange/90 shadow-xs'
                      : 'bg-creamCard text-charcoalText hover:bg-accentOrange hover:text-whitePure'
                  }`}
                >
                  <span>Book Room</span>
                  <ArrowRight size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
