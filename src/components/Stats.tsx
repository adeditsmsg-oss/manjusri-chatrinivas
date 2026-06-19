'use client';

import React from 'react';

export default function Stats() {
  const stats = [
    { value: '100%', label: 'Safe Environment', desc: 'Secure gated PG for girls.' },
    { value: '24×7', label: 'Water Supply', desc: 'Submersible water & backup supply.' },
    { value: 'FREE', label: 'High-speed WiFi', desc: 'High-speed internet in all rooms.' },
    { value: '₹899', label: 'Starts From', desc: 'Highly affordable packages for students.' }
  ];

  return (
    <section className="py-16 bg-primaryGreen text-whitePure relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 floral-backdrop" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 group">
              <span className="text-4xl sm:text-5xl font-black text-accentCoral block transition-transform duration-300 group-hover:scale-105 font-serif">
                {stat.value}
              </span>
              <h4 className="font-bold text-sm sm:text-base text-whitePure/90 uppercase tracking-widest font-sans">
                {stat.label}
              </h4>
              <p className="text-xs text-whitePure/60 max-w-[200px] mx-auto leading-relaxed font-sans">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
