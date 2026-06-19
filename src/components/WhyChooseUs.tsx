'use client';

import React from 'react';

export default function WhyChooseUs() {
  const amenities = [
    { num: '01', name: 'Free High-Speed WiFi', detail: 'Stay connected for studies, online classes, and daily work without limits.' },
    { num: '02', name: 'RO Purified & Submersible Water', detail: 'Consistent 24/7 water supply alongside clean drinking water.' },
    { num: '03', name: 'Emergency Backup Lights', detail: 'Instant backup lights installed in rooms and lobbies during power failures.' },
    { num: '04', name: 'Cycle Stand Parking', detail: 'Dedicated locked area inside the gates to park your bicycles safely.' },
    { num: '05', name: 'House Maid & Daily Sanitization', detail: 'Daily sweeping, corridor cleaning, and thorough sanitization of all washrooms.' },
    { num: '06', name: 'Separate Kitchen Access', detail: 'Independent cooking setup and utensils available under the Flexible Plan.' },
    { num: '07', name: 'Outside CCTV Safety', detail: 'Entrance paths, gates, and boundary perimeters monitored by 24/7 video recording.' },
    { num: '08', name: 'Electric Meter System', detail: 'Individual sub-meters allow flexible plan boarders to pay exactly what they consume.' }
  ];

  return (
    <section id="amenities" className="py-24 bg-[#FFFDF9] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-5 text-left space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C26D55] font-sans block">04 / Amenities</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1B4332] font-serif leading-none">Living Made Elegant</h2>
          </div>
          <div className="lg:col-span-7 text-left">
            <p className="text-xs sm:text-sm text-[#382F2D]/85 leading-relaxed font-sans max-w-xl">
              We focus on the essential comforts that enable a worry-free study environment. Every facility is curated to deliver safety, privacy, and absolute convenience.
            </p>
          </div>
        </div>

        {/* Minimalist Typography List with inline numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
          {amenities.map((item, idx) => (
            <div key={idx} className="luxury-num-item py-6 flex items-start space-x-6 text-left group">
              <span className="text-xl font-bold font-serif text-[#C26D55]/60 group-hover:text-[#C26D55] transition-colors pt-0.5">
                {item.num}
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#1B4332] font-serif group-hover:text-[#C26D55] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-[#382F2D]/80 leading-relaxed font-sans">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
