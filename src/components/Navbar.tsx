'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About PG', href: '#about' },
    { name: 'Room Pricing', href: '#services' },
    { name: 'Amenities', href: '#why-us' },
    { name: 'Property Tour', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-capsule py-3 shadow-md mx-4 mt-4 rounded-full max-w-7xl lg:mx-auto' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-full bg-primaryGreen flex items-center justify-center text-whitePure">
              <Home size={18} />
            </div>
            <div>
              <span className="font-bengali text-lg sm:text-xl font-extrabold text-primaryGreen block leading-none">মঞ্জুশ্রী ছাত্রীনিবাস</span>
              <span className="text-[9px] text-accentRose font-bold uppercase tracking-widest">Manjusri Chatrinivas</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-charcoalText hover:text-accentRose transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+918016801695"
              className="flex items-center space-x-2 bg-primaryGreen text-whitePure px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-accentRose transition-all duration-300 transform hover:scale-105 shadow-md shadow-primaryGreen/10"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoalText hover:text-accentRose focus:outline-none p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 glass-capsule rounded-3xl overflow-hidden shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-charcoalText hover:bg-creamCard hover:text-accentRose transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+918016801695"
              className="flex items-center justify-center space-x-2 bg-primaryGreen text-whitePure mx-4 my-4 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accentRose transition-colors shadow-md"
            >
              <Phone size={16} />
              <span>Call Support</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
