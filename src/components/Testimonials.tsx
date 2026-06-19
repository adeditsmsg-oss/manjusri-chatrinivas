'use client';

import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';
import { TulipLeft, TulipRight } from './FlowerAccent';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Riya Sen',
      role: 'Student, Vidyasagar University',
      rating: 5,
      comment: 'খুবই নিরাপদ এবং পড়াশোনার চমৎকার পরিবেশ! The single room here is spacious and the food packages are a lifesaver. I highly recommend Manjusri Chatrinivas to anyone looking for a hostel in Midnapore.',
      date: '2 weeks ago'
    },
    {
      name: 'Anjali Sharma',
      role: 'Working Professional, Midnapore Town',
      rating: 5,
      comment: 'As a working woman, security was my main concern. Outside CCTV and responsible owners make this place 100% safe. The washrooms are cleaned daily, and the environment is very peaceful.',
      date: '1 month ago'
    },
    {
      name: 'Kakali Dey (Parent)',
      role: 'Mother of Boarder',
      rating: 5,
      comment: 'মেয়ের সুরক্ষার কথা ভেবে মঞ্জুশ্রী ছাত্রীনিবাসে রেখেছিলাম। ওখানকার খাওয়া-দাওয়া এবং ওনারদের দায়িত্বশীল ব্যবহার আমাদের নিশ্চিন্ত রেখেছে। Very trustworthy ladies mess in Ramayanpara.',
      date: '2 months ago'
    },
    {
      name: 'Tanushree Roy',
      role: 'Competitive Exam Aspirant',
      rating: 5,
      comment: 'The homely Bengali lunch and dinners are outstanding. It is near Bidla Traffic Point, which makes transport and coaching centres easily accessible. Best ladies mess cum PG in Midnapore!',
      date: '3 months ago'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-creamBg text-charcoalText relative overflow-hidden">
      
      <TulipLeft />
      <TulipRight />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali block">অভিভাবক ও ছাত্রীদের মতামত (Testimonials)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">What Our Boarders & Parents Say</h2>
          <p className="text-darkBrown/85 mt-4 leading-relaxed text-sm sm:text-base font-sans">
            Read authentic reviews from ladies boarders and satisfied parents who trust Manjusri Chatrinivas.
          </p>
        </div>

        {/* Testimonial slider */}
        <div className="relative">
          
          <div className="bg-whitePure p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-greyBorder/50 relative min-h-[280px] flex flex-col justify-between">
            <div className="space-y-6 text-left">
              
              {/* Stars */}
              <div className="flex items-center space-x-1 text-accentOrange">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accentOrange text-accentOrange" />
                ))}
              </div>

              {/* Text */}
              <p className="text-base sm:text-lg font-medium text-charcoalText italic leading-relaxed font-serif">
                "{reviews[currentIndex].comment}"
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 pt-6 border-t border-greyBorder/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-full bg-primaryGreen/10 text-primaryGreen flex items-center justify-center">
                  <UserCheck size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-primaryGreen text-sm sm:text-base font-serif">{reviews[currentIndex].name}</h4>
                  <p className="text-xs text-charcoalText/60 font-semibold">{reviews[currentIndex].role}</p>
                </div>
              </div>
              
              <div className="text-xs text-charcoalText/40 self-start sm:self-center font-sans">
                {reviews[currentIndex].date}
              </div>
            </div>

            {/* Quotes Background accent */}
            <div className="absolute bottom-6 right-8 text-primaryGreen/5 text-9xl font-serif pointer-events-none select-none">
              ”
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-whitePure border border-greyBorder/50 hover:border-primaryGreen hover:text-primaryGreen rounded-full text-charcoalText transition-colors shadow-xs"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-whitePure border border-greyBorder/50 hover:border-primaryGreen hover:text-primaryGreen rounded-full text-charcoalText transition-colors shadow-xs"
              aria-label="Next Testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
