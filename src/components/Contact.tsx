'use client';

import React from 'react';
import { Phone, MapPin, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  const nearby = [
    { name: 'Vidyasagar University', time: '5 mins ride' },
    { name: 'Midnapore College', time: '6 mins ride' },
    { name: 'Raja N.L. Khan Women\'s College', time: '8 mins ride' },
    { name: 'Bidla Traffic Point', time: '1 min walk' }
  ];

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left mb-16 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C26D55] font-sans block">08 / Location</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1B4332] font-serif leading-none">The Spread</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Typography Spread */}
          <div className="lg:col-span-6 text-left space-y-8 flex flex-col justify-between">
            
            {/* Phone blocks */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-extrabold text-[#1C1917]/50 tracking-widest block font-sans">Enquiries</span>
              <a href="tel:+918016801695" className="text-3xl sm:text-4.5xl font-extrabold text-[#1B4332] font-serif block hover:text-[#C26D55] transition-colors leading-none">
                +91 80168 01695
              </a>
              <a href="tel:+919126836422" className="text-xl sm:text-2xl font-bold text-[#748E7A] font-serif block hover:text-[#C26D55] transition-colors leading-none">
                +91 91268 36422
              </a>
            </div>

            {/* Address */}
            <div className="space-y-2 pt-4 border-t border-[#748E7A]/20">
              <span className="text-[9px] uppercase font-bold text-[#C58B97] tracking-widest font-sans block">Physical Desk</span>
              <p className="text-sm font-bold text-[#1B4332] font-serif leading-relaxed">
                Manjusri Chatrinivas (Ladies Mess),<br />
                Ramayanpara, Near Bidla Traffic Point,<br />
                Tantigeria, Midnapore, West Bengal - 721102
              </p>
            </div>

            {/* Landmarks */}
            <div className="space-y-3 pt-4 border-t border-[#748E7A]/20">
              <span className="text-[9px] uppercase font-bold text-[#C58B97] tracking-widest font-sans block">Distance Grid</span>
              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                {nearby.map((place, idx) => (
                  <div key={idx} className="bg-[#FFFDF9] p-3 rounded-xl border border-[#748E7A]/20">
                    <span className="font-bold text-[#1B4332] font-serif block">{place.name}</span>
                    <span className="text-[10px] text-[#1C1917]/60 mt-1 block">{place.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Full-Height Minimal Map */}
          <div className="lg:col-span-6 rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-[#FFFDF9] min-h-[350px] relative group">
            <iframe
              title="Manjusri Chatrinivas Location Map"
              src="https://maps.google.com/maps?q=Manjusri%20Chatrinivas%20(Ladies%20Mess),%20Tantigeria,%20Midnapore&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a
              href="https://maps.app.goo.gl/rsw1iBtf1YVwS1uP6"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 bg-[#1B4332] text-whitePure font-bold px-5 py-3 rounded-full text-[9px] uppercase tracking-widest hover:bg-[#C26D55] transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <ExternalLink size={12} />
              <span>Google Maps</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
