'use client';

import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const images = [
    { title: 'The Gated Campus', url: '/manjusri-chatrinivas/images/building.jpg', ratio: 'col-span-12 md:col-span-8 aspect-video' },
    { title: 'Orange Room Single Config', url: '/manjusri-chatrinivas/images/bedroom_orange.jpg', ratio: 'col-span-6 md:col-span-4 aspect-square' },
    { title: 'Western Sanitation Setup', url: '/manjusri-chatrinivas/images/bathroom.jpg', ratio: 'col-span-6 md:col-span-4 aspect-[3/4]' },
    { title: 'Homely Dining Hall', url: '/manjusri-chatrinivas/images/dining.jpg', ratio: 'col-span-12 md:col-span-8 aspect-video' },
    { title: 'Fresh Sanitized Kitchen', url: '/manjusri-chatrinivas/images/kitchen.jpg', ratio: 'col-span-12 md:col-span-6 aspect-video' },
    { title: 'Common Balcony Sight', url: '/manjusri-chatrinivas/images/balcony.jpg', ratio: 'col-span-12 md:col-span-6 aspect-video' }
  ];

  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#FFFDF9] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C26D55] font-sans block">02 / Portraits</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1B4332] font-serif leading-none">The Visual Grid</h2>
          <p className="text-xs text-[#382F2D]/80 font-sans leading-relaxed pt-1">
            An art-directed photography collection showing actual campus details and rooms.
          </p>
        </div>

        {/* Asymmetrical Layout Collage Grid */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImg(img.url)}
              className={`relative rounded-[2.5rem] overflow-hidden shadow-md group border border-[#748E7A]/25 cursor-pointer bg-[#FAF8F5] ${img.ratio}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750"
              />
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-[#1B4332]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-whitePure text-left">
                <div className="absolute top-6 right-6 p-2 bg-whitePure/15 rounded-full text-whitePure">
                  <Maximize2 size={14} />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-[#F0A699] font-bold block mb-1">Manjusri Chatrinivas</span>
                <h4 className="text-lg font-bold font-serif">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImg && (
          <div className="fixed inset-0 z-50 bg-[#1C1917]/95 flex items-center justify-center p-4 backdrop-blur-md">
            <button
              onClick={() => setActiveImg(null)}
              className="absolute top-6 right-6 text-whitePure hover:text-[#C26D55] p-2 bg-whitePure/10 rounded-full transition-colors"
              aria-label="Close photo"
            >
              <X size={24} />
            </button>
            <div className="relative w-full max-w-4xl h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={activeImg}
                alt="Enlarged campus view"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
