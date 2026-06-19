'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const images = [
    {
      title: 'Ladies Mess Building Exterior',
      desc: 'The daylight front view of the Manjusri Chatrinivas property in Ramayanpara.',
      url: '/images/building.jpg',
      category: 'building'
    },
    {
      title: 'Orange Bed Room (Single Setup)',
      desc: 'Bright single room configuration with marble flooring, window, and cozy setup.',
      url: '/images/bedroom_orange.jpg',
      category: 'rooms'
    },
    {
      title: 'Blue Bed Room (2 Sharing Setup)',
      desc: 'Clean study room with turquoise and lavender accent walls, marble floor, and windows.',
      url: '/images/bedroom_blue.jpg',
      category: 'rooms'
    },
    {
      title: 'Yellow Bed Room (3 Sharing Setup)',
      desc: 'Balanced double study room config with solid metal beds and study lighting.',
      url: '/images/bedroom_yellow.jpg',
      category: 'rooms'
    },
    {
      title: 'Green Bed Room (4 Sharing Setup)',
      desc: 'Highly economical study space with high ceilings and spacious layouts.',
      url: '/images/bedroom_green.jpg',
      category: 'rooms'
    },
    {
      title: 'Cozy Balcony View',
      desc: 'Scenic balcony overlooking quiet, green residential fields of Ramayanpara.',
      url: '/images/balcony.jpg',
      category: 'amenities'
    },
    {
      title: 'Hygienic Modern Washroom',
      desc: 'Sanitized Western-style bathroom featuring light-blue tiles and premium shower.',
      url: '/images/bathroom.jpg',
      category: 'amenities'
    },
    {
      title: 'Hygienic Kitchen Space',
      desc: 'Sanitized kitchen setup with granite countertops, exhaust, and clean utensils.',
      url: '/images/kitchen.jpg',
      category: 'food'
    },
    {
      title: 'Dining Room Lobby',
      desc: 'Spacious dining setup serving healthy Bengali home-cooked meals daily.',
      url: '/images/dining.jpg',
      category: 'food'
    },
    {
      title: 'Sanitized Common Lobby',
      desc: 'Common passage area near the basin with safe ventilation and locks.',
      url: '/images/lobby.jpg',
      category: 'amenities'
    }
  ];

  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-creamBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali block">ছবি গ্যালারি (Gallery)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Explore Manjusri Chatrinivas</h2>
          <p className="text-darkBrown/80 mt-4 leading-relaxed text-sm sm:text-base font-sans">
            Take a visual tour of our building exterior, bedrooms, kitchen, common balcony, and modern washroom facilities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {['all', 'rooms', 'food', 'amenities', 'building'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-primaryGreen text-whitePure shadow-md'
                  : 'bg-whitePure text-charcoalText hover:bg-creamBg border border-greyBorder/50'
              }`}
            >
              {cat === 'all' ? 'All Photos' : cat === 'rooms' ? 'Bedrooms' : cat === 'food' ? 'Kitchen & Dining' : cat === 'amenities' ? 'Washrooms & Balcony' : 'Building'}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImg(img.url)}
              className="relative group rounded-[2rem] overflow-hidden shadow-md bg-whitePure border border-greyBorder/40 aspect-video sm:aspect-square transform hover:scale-[1.01] transition-all duration-500 cursor-pointer"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-750"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primaryGreen/95 via-primaryGreen/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-whitePure text-left">
                <div className="absolute top-4 right-4 p-2 bg-whitePure/15 backdrop-blur-md rounded-full text-whitePure">
                  <ZoomIn size={16} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-accentCoral font-bold mb-1">
                  {img.category === 'rooms' ? 'Rooms & Comfort' : img.category === 'food' ? 'Kitchen & Dining' : 'General Campus'}
                </span>
                <h4 className="text-base sm:text-lg font-bold font-serif">{img.title}</h4>
                <p className="text-xs text-whitePure/80 mt-1 leading-relaxed font-sans">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="fixed inset-0 z-50 bg-charcoalText/90 flex items-center justify-center p-4 backdrop-blur-md">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-whitePure hover:text-accentOrange p-2 bg-whitePure/10 rounded-full transition-colors"
              aria-label="Close image lightbox"
            >
              <X size={24} />
            </button>
            <div className="relative w-full max-w-4xl h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImg}
                alt="Enlarged view"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
