'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Services() {
  const rooms = [
    {
      id: 'single',
      name: 'Single Room',
      banglaName: 'সিঙ্গেল বেডরুম (সম্পূর্ণ প্রাইভেসি)',
      price: '₹2,299',
      desc: 'Ideal for working women and senior students seeking absolute privacy and uninterrupted study hours. Features individual wardrobe, study desk, and excellent ventilation.',
      image: '/images/bedroom_orange.jpg',
      alignLeft: true
    },
    {
      id: 'double',
      name: '2 Sharing Room',
      banglaName: 'ডাবল বেডরুম (জনপ্রিয় ডাবল)',
      price: '₹1,599',
      desc: 'Our most popular sharing configuration, offering balanced privacy, spacious layouts, and shared wardrobes. Perfect for close friends and classmates.',
      image: '/images/bedroom_blue.jpg',
      alignLeft: false
    },
    {
      id: 'triple',
      name: '3 Sharing Room',
      banglaName: 'ট্রিপল বেডরুম (সাশ্রয়ী ট্রিপল)',
      price: '₹1,399',
      desc: '经济-friendly student-centric rooms featuring three separate beds, individual study desks, and plenty of lighting for collective studies.',
      image: '/images/bedroom_yellow.jpg',
      alignLeft: true
    },
    {
      id: 'quad',
      name: '4 Sharing Room',
      banglaName: 'ফোর বেডরুম (সর্বোচ্চ সাশ্রয়)',
      price: '₹899',
      desc: 'Highly budget-friendly option providing comfortable beds, separate lockers, study tables, and regular common area sanitization.',
      image: '/images/bedroom_green.jpg',
      alignLeft: false
    }
  ];

  return (
    <section id="residence" className="py-24 bg-[#FAF8F5] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left max-w-2xl mb-20 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C26D55] font-sans block">03 / Room Types</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1B4332] font-serif leading-none">The Residence Options</h2>
          <p className="text-xs sm:text-sm text-[#382F2D]/85 leading-relaxed font-sans max-w-md pt-2">
            Beautifully designed residential rooms featuring clean marble floors, ventilation, and study spaces.
          </p>
        </div>

        {/* Alternating Horizontal Room Strips */}
        <div className="space-y-24">
          {rooms.map((room, idx) => (
            <div
              key={room.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                room.alignLeft ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image box */}
              <div className={`lg:col-span-6 w-full ${room.alignLeft ? '' : 'lg:order-last'}`}>
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-[#FFFDF9]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Text box */}
              <div className="lg:col-span-6 text-left space-y-5">
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#C26D55] tracking-widest font-sans block">{room.banglaName}</span>
                  <h3 className="text-2xl sm:text-3.5xl font-extrabold text-[#1B4332] font-serif tracking-tight mt-1">{room.name}</h3>
                  <div className="flex items-center space-x-0.5 text-[#C26D55] mt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-[#C26D55] text-[#C26D55]" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#382F2D]/85 leading-relaxed font-sans max-w-lg">
                  {room.desc}
                </p>

                <div className="pt-4 flex items-center space-x-8">
                  <div>
                    <span className="text-2xl font-bold text-[#1B4332] font-serif block">{room.price}</span>
                    <span className="text-[8px] uppercase tracking-widest text-[#1C1917]/55 font-bold block">Rent / month</span>
                  </div>
                  <a
                    href="#contact"
                    className="bg-[#1B4332] hover:bg-[#C26D55] text-whitePure px-6 py-3 rounded-full font-bold uppercase text-[9px] tracking-widest transition-colors shadow-xs"
                  >
                    Select Plan
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
