'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

export default function Services() {
  const [billingMode, setBillingMode] = useState<'all' | 'custom'>('all');
  
  // Custom states for separate calculator
  const [selectedBed, setSelectedBed] = useState<string>('single');
  const [selectedMeal, setSelectedMeal] = useState<string>('55');

  const allInclusivePackages = [
    {
      id: 'single',
      name: 'Single Bed Room',
      price: '4,299',
      period: 'Month',
      popular: false,
      desc: 'Maximum privacy and quiet study room layout, ideal for higher-class students.',
      features: ['Private Single Bed', 'Hygienic Home-cooked Meals', 'All Utilities & Electric Included', 'Assigned Bookshelf', 'Daily Washroom Cleaning']
    },
    {
      id: 'double',
      name: '2 Bed Sharing',
      price: '3,499',
      period: 'Month',
      popular: true,
      desc: 'Highly balanced choice offering ample room space and study-focused sharing environment.',
      features: ['Shared Bed & Desk Space', 'Hygienic Home-cooked Meals', 'All Utilities & Electric Included', 'Assigned Bookshelf', 'Daily Washroom Cleaning']
    },
    {
      id: 'triple',
      name: '3 Bed Sharing',
      price: '3,299',
      period: 'Month',
      popular: false,
      desc: 'Perfect community living option for college peers and friends.',
      features: ['Shared 3-Bed Layout', 'Hygienic Home-cooked Meals', 'All Utilities & Electric Included', 'Assigned Bookshelf', 'Daily Washroom Cleaning']
    },
    {
      id: 'quad',
      name: '4 Bed Sharing',
      price: '2,799',
      period: 'Month',
      popular: false,
      desc: 'Extremely budget-friendly rate offering access to all PG utilities.',
      features: ['Shared 4-Bed Layout', 'Hygienic Home-cooked Meals', 'All Utilities & Electric Included', 'Assigned Bookshelf', 'Daily Washroom Cleaning']
    }
  ];

  const bedRates = {
    single: { name: 'Single Bed', price: 2299 },
    double: { name: '2 Bed Sharing', price: 1599 },
    triple: { name: '3 Bed Sharing', price: 1399 },
    quad: { name: '4 Bed Sharing', price: 899 },
  };

  const mealRates = {
    '55': { name: '55 Meals Package', price: 2099 },
    '50': { name: '50 Meals Package', price: 1999 },
    '40': { name: '40 Meals Package', price: 1799 },
    '30': { name: '30 Meals Package', price: 1499 },
    '20': { name: '20 Meals Package', price: 1199 },
    '15': { name: '15 Meals Package', price: 999 },
    'kitchen': { name: 'Only Kitchen Access', price: 599 }
  };

  const calculateCustomTotal = () => {
    const bed = bedRates[selectedBed as keyof typeof bedRates]?.price || 0;
    const meal = mealRates[selectedMeal as keyof typeof mealRates]?.price || 0;
    return bed + meal;
  };

  return (
    <section id="services" className="py-24 bg-creamBg text-charcoalText relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">রুম ও প্যাকেজ (Room Pricing)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Flexible Accommodation Packages</h2>
          <p className="text-charcoalText/80 mt-4 leading-relaxed text-sm sm:text-base">
            Choose our comprehensive all-inclusive packages or customize your expenses by selecting individual room options and meal counts.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-creamCard p-1.5 rounded-2xl flex items-center border border-greyBorder shadow-sm">
            <button
              onClick={() => setBillingMode('all')}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                billingMode === 'all'
                  ? 'bg-primaryGreen text-whitePure shadow-md'
                  : 'text-charcoalText/70 hover:text-primaryGreen'
              }`}
            >
              Bed + Electric + Food Packages
            </button>
            <button
              onClick={() => setBillingMode('custom')}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                billingMode === 'custom'
                  ? 'bg-primaryGreen text-whitePure shadow-md'
                  : 'text-charcoalText/70 hover:text-primaryGreen'
              }`}
            >
              Separate / Custom Calculator
            </button>
          </div>
        </div>

        {/* ALL-INCLUSIVE PACKAGE CARDS */}
        {billingMode === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {allInclusivePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-whitePure rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                  pkg.popular
                    ? 'border-accentRose ring-2 ring-accentRose relative scale-105 z-10 shadow-xl'
                    : 'border-greyBorder/50 shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-accentRose text-whitePure text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1">
                    <Sparkles size={10} />
                    <span>Popular Choice</span>
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6 text-left">
                  <div>
                    <h3 className="text-xl font-bold text-primaryGreen font-serif">{pkg.name}</h3>
                    <p className="text-xs text-charcoalText/60 mt-1 leading-relaxed">{pkg.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-greyBorder/30">
                    <span className="text-3xl font-black text-primaryGreen font-serif">₹{pkg.price}</span>
                    <span className="text-xs text-charcoalText/50 font-semibold block mt-0.5">Per {pkg.period} (All-Inclusive)</span>
                  </div>

                  <div className="space-y-2 pt-2">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-charcoalText/85">
                        <Check size={14} className="text-primaryGreen mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 border-t border-greyBorder/10">
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${
                      pkg.popular
                        ? 'bg-accentRose text-whitePure hover:bg-primaryGreen'
                        : 'bg-creamCard text-charcoalText hover:bg-primaryGreen hover:text-whitePure'
                    }`}
                  >
                    <span>Book Seat</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CUSTOM INTERACTIVE CALCULATOR */}
        {billingMode === 'custom' && (
          <div className="max-w-4xl mx-auto bg-whitePure border border-greyBorder/50 rounded-[2.5rem] shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Selection Controls */}
            <div className="md:col-span-7 p-8 text-left space-y-6">
              <h3 className="text-lg font-bold text-primaryGreen font-serif border-b border-greyBorder/40 pb-3">Customize Accommodation</h3>
              
              {/* Bed Sharing Select */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider font-bold text-charcoalText/75">1. Select Bed Sharing style</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(bedRates).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedBed(key)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                        selectedBed === key
                          ? 'border-primaryGreen bg-primaryGreen/5 text-primaryGreen shadow-sm ring-1 ring-primaryGreen'
                          : 'border-greyBorder/60 hover:bg-creamBg'
                      }`}
                    >
                      <p className="text-xs font-bold">{item.name}</p>
                      <p className="text-sm font-black mt-1">₹{item.price}/mo</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Meal Plan Select */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider font-bold text-charcoalText/75">2. Select Monthly Meal Plan</label>
                <select
                  value={selectedMeal}
                  onChange={(e) => setSelectedMeal(e.target.value)}
                  className="w-full px-4 py-3 bg-creamBg border border-greyBorder rounded-xl text-sm font-semibold outline-none focus:border-primaryGreen text-charcoalText"
                >
                  {Object.entries(mealRates).map(([key, item]) => (
                    <option key={key} value={key}>
                      {item.name} (+₹{item.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Note about electrical bill */}
              <div className="p-4 rounded-2xl bg-goldBrand/10 text-charcoalText border border-goldBrand/20 flex items-start space-x-2 text-xs leading-relaxed">
                <HelpCircle size={16} className="text-goldBrand flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Submeter Electricity Note:</strong> Separate billing applies for electrical rooms at <strong>₹10/unit</strong>, measured via accurate digital sub-meters installed in each room.
                </span>
              </div>
            </div>

            {/* Right Summary Panel */}
            <div className="md:col-span-5 bg-creamCard p-8 text-center flex flex-col justify-between items-center border-t md:border-t-0 md:border-l border-greyBorder/40">
              <div className="w-full text-left space-y-4">
                <h3 className="text-lg font-bold text-primaryGreen font-serif border-b border-greyBorder/40 pb-3">Monthly Estimate</h3>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-charcoalText/80">
                    <span>{bedRates[selectedBed as keyof typeof bedRates]?.name} Rent:</span>
                    <span className="font-bold">₹{bedRates[selectedBed as keyof typeof bedRates]?.price}</span>
                  </div>
                  <div className="flex justify-between text-charcoalText/80">
                    <span>{mealRates[selectedMeal as keyof typeof mealRates]?.name}:</span>
                    <span className="font-bold">₹{mealRates[selectedMeal as keyof typeof mealRates]?.price}</span>
                  </div>
                  <div className="flex justify-between text-charcoalText/80">
                    <span>Electricity Sub-Meter:</span>
                    <span className="font-semibold text-accentRose">₹10/Unit Extra</span>
                  </div>
                </div>
              </div>

              <div className="py-6 border-y border-greyBorder/50 w-full my-6 text-left">
                <span className="text-xs uppercase tracking-wider text-charcoalText/60 block font-bold">Estimated Cost</span>
                <span className="text-4xl font-black text-primaryGreen font-serif mt-1 block">₹{calculateCustomTotal()}</span>
                <span className="text-[10px] text-charcoalText/40 leading-tight block mt-1">Excluding running electrical units.</span>
              </div>

              <a
                href="#contact"
                className="w-full flex items-center justify-center space-x-2 bg-primaryGreen hover:bg-accentRose text-whitePure py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-300"
              >
                <span>Confirm Selection</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
