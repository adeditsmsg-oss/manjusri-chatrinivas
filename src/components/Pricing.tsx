'use client';

import React from 'react';
import { Check, Star, HelpCircle } from 'lucide-react';

export default function Pricing() {
  const package1 = {
    title: 'All-Inclusive Package',
    subtitle: 'Bed + Food + Electricity',
    bengaliText: 'সবচেয়ে জনপ্রিয় - ছাত্রীদের জন্য রেকমেন্ডেড',
    recommended: true,
    plans: [
      { name: 'Single Room', price: '4,299' },
      { name: '2 Sharing Room', price: '3,499' },
      { name: '3 Sharing Room', price: '3,299' },
      { name: '4 Sharing Room', price: '2,799' }
    ],
    features: [
      'High-Speed Wi-Fi',
      'Purified & Submersible Water',
      'Bed, Bookshelf & Study Space',
      'Standard Electricity Included',
      'Emergency Backup Lights',
      'House Maid & Room Cleaning',
      'Bicycle Stand Access',
      'Healthy Bengali Meals (Daily)'
    ]
  };

  const package2 = {
    title: 'Flexible Separate Plan',
    subtitle: 'Rent Only (Excludes food & electric)',
    bengaliText: 'আপনার প্রয়োজন অনুযায়ী কাস্টমাইজ করুন',
    recommended: false,
    plans: [
      { name: 'Single Bed', price: '2,299' },
      { name: '2 Sharing Bed', price: '1,599' },
      { name: '3 Sharing Bed', price: '1,399' },
      { name: '4 Sharing Bed', price: '899' }
    ],
    extras: [
      { name: 'Electric Billing', detail: '₹10 Per Unit' },
      { name: 'Optional Kitchen Access', detail: '₹599 / month' }
    ],
    features: [
      'Standard bed frame',
      'High-speed Wi-Fi access',
      'Purified drinking water',
      'Bicycle parking facilities',
      'Housekeeping (common area)'
    ]
  };

  const foodPackages = [
    { meals: '55 Meals', price: '2,099' },
    { meals: '50 Meals', price: '1,999' },
    { meals: '40 Meals', price: '1,799' },
    { meals: '30 Meals', price: '1,499' },
    { meals: '20 Meals', price: '1,199' },
    { meals: '15 Meals', price: '999' }
  ];

  return (
    <section id="pricing" className="py-24 bg-creamCard text-charcoalText relative overflow-hidden">
      {/* Decorative leaf shapes */}
      <div className="absolute left-0 bottom-1/4 w-32 h-64 bg-accentRose/5 rounded-r-full blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali block">সাশ্রয়ী প্ল্যান (Pricing Details)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Affordable Plans For Every Requirement</h2>
          <p className="font-bengali text-accentOrange text-lg font-medium mt-1">আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Package 1: All Inclusive */}
          <div className="lg:col-span-6 bg-whitePure rounded-3xl p-6 sm:p-8 border border-primaryGreen/20 shadow-xl flex flex-col justify-between relative transform hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primaryGreen text-accentCoral text-xs font-bold uppercase tracking-widest px-6 py-1.5 rounded-full shadow-md">
              Most Popular
            </div>

            <div>
              <div className="text-center pb-6 border-b border-greyBorder/40">
                <span className="text-[10px] uppercase font-bold text-accentRose tracking-widest">{package1.subtitle}</span>
                <h3 className="text-2xl font-bold text-primaryGreen font-serif mt-1">{package1.title}</h3>
                <p className="font-bengali text-accentOrange text-xs mt-1.5">{package1.bengaliText}</p>
              </div>

              {/* Price list */}
              <div className="py-6 space-y-3.5">
                {package1.plans.map((p, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-creamBg/45 py-2.5 px-4 rounded-xl border border-greyBorder/20">
                    <span className="text-xs sm:text-sm font-bold text-charcoalText/90">{p.name}</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-primaryGreen font-serif">₹{p.price}</span>
                      <span className="text-[9px] text-charcoalText/50 block font-semibold">/ month</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature list */}
              <div className="pt-2 pb-6 space-y-2.5">
                <p className="text-xs uppercase font-extrabold tracking-wider text-charcoalText/60 mb-2">Package Inclusions:</p>
                {package1.features.map((f, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-charcoalText/95">
                    <Check size={14} className="text-primaryGreen flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="w-full text-center bg-primaryGreen hover:bg-accentOrange text-whitePure py-4 rounded-2xl font-bold uppercase text-xs tracking-wider transition-colors shadow-md mt-4"
            >
              Book All-Inclusive Package
            </a>
          </div>

          {/* Package 2: Flexible Separate Plan */}
          <div className="lg:col-span-6 bg-whitePure rounded-3xl p-6 sm:p-8 border border-greyBorder/60 shadow-md flex flex-col justify-between transform hover:scale-[1.01] transition-transform duration-300">
            <div>
              <div className="text-center pb-6 border-b border-greyBorder/40">
                <span className="text-[10px] uppercase font-bold text-charcoalText/60 tracking-widest">{package2.subtitle}</span>
                <h3 className="text-2xl font-bold text-primaryGreen font-serif mt-1">{package2.title}</h3>
                <p className="font-bengali text-accentRose text-xs mt-1.5">{package2.bengaliText}</p>
              </div>

              {/* Price list */}
              <div className="py-6 space-y-3">
                {package2.plans.map((p, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 px-3 border-b border-greyBorder/30">
                    <span className="text-xs sm:text-sm font-semibold text-charcoalText/85">{p.name}</span>
                    <span className="text-base font-bold text-primaryGreen font-serif">₹{p.price} <span className="text-[9px] text-charcoalText/50 font-normal">/ mo</span></span>
                  </div>
                ))}
              </div>

              {/* Billing Extras */}
              <div className="p-4 bg-creamBg rounded-2xl border border-greyBorder/30 space-y-2 mb-6">
                <p className="text-[10px] uppercase font-bold text-accentOrange tracking-wider">Separate Addons & Utilities</p>
                {package2.extras.map((ex, idx) => (
                  <div key={idx} className="flex justify-between text-xs font-bold text-charcoalText/90">
                    <span>{ex.name}</span>
                    <span className="text-primaryGreen">{ex.detail}</span>
                  </div>
                ))}
              </div>

              {/* Inclusions */}
              <div className="pb-6 space-y-2.5">
                <p className="text-xs uppercase font-extrabold tracking-wider text-charcoalText/60 mb-2">Included Amenities:</p>
                {package2.features.map((f, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-charcoalText/90">
                    <Check size={14} className="text-sageGreen flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="w-full text-center bg-creamBg hover:bg-primaryGreen hover:text-whitePure text-charcoalText py-4 rounded-2xl font-bold uppercase text-xs tracking-wider transition-all border border-greyBorder/80 mt-4"
            >
              Choose Flexible Plan
            </a>
          </div>

        </div>

        {/* Meal Package Section */}
        <div className="mt-16 bg-creamBg rounded-3xl p-6 sm:p-8 border border-greyBorder/50">
          <div className="max-w-xl text-left mb-8">
            <span className="text-[10px] uppercase font-extrabold text-accentRose tracking-widest block">Addon Dining (Food Packages)</span>
            <h3 className="text-2xl font-bold text-primaryGreen font-serif mt-1">Daily Meal Plans</h3>
            <p className="text-xs sm:text-sm text-charcoalText/80 mt-2 font-sans">
              Choose separate meal tokens if you are on the Flexible Plan. Consistent, fresh Bengali lunches and dinners served daily.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {foodPackages.map((f, idx) => (
              <div key={idx} className="bg-whitePure p-4 rounded-2xl border border-greyBorder/40 text-center hover:shadow-md transition-shadow">
                <span className="text-xs uppercase font-bold text-charcoalText/60 block">{f.meals}</span>
                <span className="text-xl font-bold text-primaryGreen font-serif block mt-2">₹{f.price}</span>
                <span className="text-[9px] text-accentOrange font-semibold block mt-1">Best Value</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
