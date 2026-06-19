'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const rooms = [
    {
      id: 'single',
      name: 'Single Room',
      banglaName: 'সিঙ্গেল বেডরুম',
      desc: 'Complete privacy and quiet study configurations.',
      rating: 5,
      price: '₹2,299',
      image: '/images/bedroom_orange.jpg'
    },
    {
      id: 'double',
      name: '2 Sharing Room',
      banglaName: 'ডাবল শেয়ারিং',
      desc: 'Balanced study environment and cozy living layout.',
      rating: 5,
      price: '₹1,599',
      image: '/images/bedroom_blue.jpg'
    },
    {
      id: 'triple',
      name: '3 Sharing Room',
      banglaName: 'ট্রিপল শেয়ারিং',
      desc: 'Community rooms featuring individual study desks.',
      rating: 5,
      price: '₹1,399',
      image: '/images/bedroom_yellow.jpg'
    },
    {
      id: 'quad',
      name: '4 Sharing Room',
      banglaName: 'ফোর শেয়ারিং',
      desc: 'Economical spaces offering comfortable study frames.',
      rating: 5,
      price: '₹899',
      image: '/images/bedroom_green.jpg'
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-[#FFFDF9] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C58B97] block">Room Styles</span>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-[#1B4332] font-serif">Choose Your Perfect Room</h2>
          <p className="text-xs sm:text-sm text-[#382F2D]/85 leading-relaxed font-sans">
            Select from our range of beautifully designed student-friendly room styles. Clean, spacious, and safe.
          </p>
        </div>

        {/* Room cards layout - Replicating reference image exactly with stars immediately under the title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#FFFDF9] rounded-[2rem] overflow-hidden border border-[#748E7A]/25 p-4 flex flex-col justify-between hover:shadow-xl hover:border-[#C26D55] transition-all duration-300 group"
            >
              <div>
                {/* Image Frame */}
                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden relative mb-5 bg-[#FAF8F5]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info and Stars Immediately Under Title - Matches reference image */}
                <div className="text-left space-y-1.5 px-1">
                  <span className="text-[8px] uppercase tracking-widest text-[#C26D55] font-bold font-bengali block">{room.banglaName}</span>
                  <h3 className="text-lg font-bold text-[#1B4332] font-serif tracking-tight leading-none">{room.name}</h3>
                  
                  {/* Stars Rating System */}
                  <div className="flex items-center space-x-0.5 text-[#C26D55] pt-0.5 pb-2">
                    {[...Array(room.rating)].map((_, i) => (
                      <Star key={i} size={11} className="fill-[#C26D55] text-[#C26D55]" />
                    ))}
                  </div>

                  <p className="text-[11px] text-[#382F2D]/80 leading-relaxed font-sans pb-4">{room.desc}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#748E7A]/15 flex items-center justify-between px-1 mt-auto">
                <div>
                  <span className="text-lg font-extrabold text-[#1B4332] font-serif">{room.price}</span>
                  <span className="text-[8px] text-[#1C1917]/50 block uppercase font-bold font-sans">Rent / Mo</span>
                </div>
                <a
                  href="#contact"
                  className="p-2.5 bg-[#FAF8F5] group-hover:bg-[#C26D55] group-hover:text-whitePure rounded-full transition-colors"
                  aria-label={`Book ${room.name}`}
                >
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
