'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      title: 'Hostel Building Exterior',
      desc: 'The modern 3-story white and wood-accent front building in Tantigeria.',
      url: '/manjusri-chatrinivas/images/building.jpg',
      category: 'building'
    },
    {
      title: 'Cozy Double Bedroom (Blue-Green Theme)',
      desc: 'Clean marble floor, large windows with white curtains, and corner storage shelves.',
      url: '/manjusri-chatrinivas/images/bedroom_blue.jpg',
      category: 'rooms'
    },
    {
      title: 'Single Bedroom (Orange Theme)',
      desc: 'Warm color layouts featuring metal single bed frame and curtain set.',
      url: '/manjusri-chatrinivas/images/bedroom_orange.jpg',
      category: 'rooms'
    },
    {
      title: 'Hygienic Kitchen Area',
      desc: 'L-shape modular counter with RO water purifier and gas stove layout.',
      url: '/manjusri-chatrinivas/images/kitchen.jpg',
      category: 'kitchen'
    },
    {
      title: 'Double Sharing Bedroom (Yellow Theme)',
      desc: 'Bright rooms with pristine marble flooring and natural light.',
      url: '/manjusri-chatrinivas/images/bedroom_yellow.jpg',
      category: 'rooms'
    },
    {
      title: 'Spacious Balcony',
      desc: 'Safe brown railings looking out to green tree lanes in Tantigeria.',
      url: '/manjusri-chatrinivas/images/balcony.jpg',
      category: 'exterior'
    },
    {
      title: 'Sanitized Bathroom & Washroom',
      desc: 'Modern tiles featuring swans theme, Western-style toilet, and shower curtains.',
      url: '/manjusri-chatrinivas/images/bathroom.jpg',
      category: 'amenities'
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-creamCard relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">ছবি গ্যালারি (Gallery)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Tour Manjusri Property</h2>
          <p className="text-charcoalText/80 mt-4 leading-relaxed text-sm sm:text-base">
            Browse through real, actual photos of bedrooms, sanitized washrooms, our kitchen layout, and balconies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {['all', 'rooms', 'kitchen', 'amenities', 'building'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-primaryGreen text-whitePure shadow-md'
                  : 'bg-whitePure text-charcoalText hover:bg-creamBg border border-greyBorder'
              }`}
            >
              {cat === 'all' ? 'All Photos' : cat === 'rooms' ? 'Bedrooms' : cat === 'kitchen' ? 'Kitchen & Meals' : cat === 'amenities' ? 'Washrooms' : 'Exterior'}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-[2rem] overflow-hidden shadow-md bg-whitePure border border-greyBorder/40 aspect-video sm:aspect-square transform hover:scale-[1.02] transition-all duration-500"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primaryGreen/95 via-primaryGreen/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-whitePure text-left">
                <span className="text-[10px] uppercase tracking-widest text-goldBrand font-extrabold mb-1">
                  {img.category === 'rooms' ? 'Rooms & Comfort' : img.category === 'kitchen' ? 'Kitchen & Sanitation' : 'General Campus'}
                </span>
                <h4 className="text-base sm:text-lg font-bold font-serif">{img.title}</h4>
                <p className="text-xs text-whitePure/80 mt-1 leading-relaxed">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
