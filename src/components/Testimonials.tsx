'use client';

import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Riya Sen',
      role: 'Student, Vidyasagar University',
      comment: 'খুবই নিরাপদ এবং পড়াশোনার চমৎকার পরিবেশ! The single room here is spacious and the food packages are a lifesaver. I highly recommend Manjusri Chatrinivas to anyone looking for a hostel in Midnapore.'
    },
    {
      name: 'Anjali Sharma',
      role: 'Working Professional, Midnapore Town',
      comment: 'As a working woman, security was my main concern. Outside CCTV and responsible owners make this place 100% safe. The washrooms are cleaned daily, and the environment is very peaceful.'
    },
    {
      name: 'Tanushree Roy',
      role: 'Competitive Exam Aspirant',
      comment: 'The homely Bengali lunch and dinners are outstanding. It is near Bidla Traffic Point, which makes transport and coaching centres easily accessible. Best ladies mess cum PG in Midnapore!'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#FAF8F5] text-[#1C1917] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left mb-16 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C26D55] font-sans block">06 / Feedbacks</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1B4332] font-serif leading-none">The Reviews</h2>
        </div>

        {/* Minimal vertical list */}
        <div className="space-y-12">
          {reviews.map((rev, idx) => (
            <div key={idx} className="border-b border-[#748E7A]/25 pb-8 text-left space-y-4">
              <p className="text-base sm:text-lg font-serif text-[#382F2D] italic leading-relaxed">
                "{rev.comment}"
              </p>
              <div className="flex items-center space-x-3 text-xs font-sans">
                <span className="font-bold text-[#1B4332] font-serif">{rev.name}</span>
                <span className="text-[#1C1917]/40">—</span>
                <span className="text-[#1C1917]/60 font-medium">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
