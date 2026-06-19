import React from 'react';

export function TulipLeft() {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-36 sm:w-48 h-96 pointer-events-none select-none opacity-85 z-20 hidden xl:block">
      <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Stems */}
        <path d="M10 200 C25 150 30 110 20 80" stroke="#1B4332" strokeWidth="3" strokeLinecap="round"/>
        <path d="M10 200 C30 130 50 90 65 60" stroke="#1B4332" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M10 200 C15 140 12 110 8 90" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round"/>
        
        {/* Leaves */}
        <path d="M20 150 C30 125 45 105 50 85 C40 105 25 125 20 150Z" fill="#748E7A" opacity="0.95"/>
        <path d="M25 120 C40 95 55 75 60 55 C50 75 35 95 25 120Z" fill="#1B4332" opacity="0.9"/>
        <path d="M8 140 C2 110 -2 85 2 65 C6 90 10 115 8 140Z" fill="#748E7A" opacity="0.9"/>
        
        {/* Tulip Blooms (Terracotta / Warm Rose / Coral Pink) */}
        {/* Left Terracotta Tulip */}
        <path d="M20 80 C8 65 10 45 18 40 C28 35 38 55 30 75 Z" fill="#C26D55"/>
        <path d="M22 80 C15 70 18 55 20 45 C25 55 28 70 22 80 Z" fill="#F0A699"/>
        
        {/* Center Tall Warm Rose Tulip */}
        <path d="M65 60 C55 40 60 20 70 15 C80 10 87 30 80 55 Z" fill="#C58B97"/>
        <path d="M70 60 C65 50 67 35 70 25 C75 35 77 50 70 60 Z" fill="#DDA5B2"/>
        
        {/* Small Coral Bud */}
        <path d="M8 90 C4 80 6 70 12 70 C18 70 16 80 8 90 Z" fill="#F0A699"/>
      </svg>
    </div>
  );
}

export function TulipRight() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-36 sm:w-48 h-96 pointer-events-none select-none opacity-85 z-20 hidden xl:block">
      <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform scale-x-[-1]">
        {/* Stems */}
        <path d="M10 200 C25 150 30 110 20 80" stroke="#1B4332" strokeWidth="3" strokeLinecap="round"/>
        <path d="M10 200 C30 130 50 90 65 60" stroke="#1B4332" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M10 200 C15 140 12 110 8 90" stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round"/>
        
        {/* Leaves */}
        <path d="M20 150 C30 125 45 105 50 85 C40 105 25 125 20 150Z" fill="#748E7A" opacity="0.95"/>
        <path d="M25 120 C40 95 55 75 60 55 C50 75 35 95 25 120Z" fill="#1B4332" opacity="0.9"/>
        
        {/* Tulip Blooms */}
        <path d="M20 80 C8 65 10 45 18 40 C28 35 38 55 30 75 Z" fill="#C58B97"/>
        <path d="M22 80 C15 70 18 55 20 45 C25 55 28 70 22 80 Z" fill="#DDA5B2"/>
        
        <path d="M65 60 C55 40 60 20 70 15 C80 10 87 30 80 55 Z" fill="#C26D55"/>
        <path d="M70 60 C65 50 67 35 70 25 C75 35 77 50 70 60 Z" fill="#F0A699"/>
      </svg>
    </div>
  );
}

export function RoseCornerLeft() {
  return (
    <div className="absolute left-0 top-0 w-24 sm:w-36 h-24 sm:h-36 pointer-events-none select-none opacity-80 z-20">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Leaves */}
        <path d="M0 0 C20 10 40 0 45 20 C30 35 10 15 0 0Z" fill="#1B4332"/>
        <path d="M0 0 C10 30 5 45 25 40 C35 25 20 10 0 0Z" fill="#748E7A"/>
        {/* Rose Petals */}
        <circle cx="20" cy="20" r="18" fill="#C58B97" opacity="0.9"/>
        <circle cx="20" cy="20" r="12" fill="#DDA5B2"/>
        <circle cx="18" cy="18" r="7" fill="#C26D55"/>
        <path d="M20 5 C25 10 25 15 20 20 C15 15 12 10 20 5Z" fill="#F0A699"/>
      </svg>
    </div>
  );
}

export function RoseCornerRight() {
  return (
    <div className="absolute right-0 top-0 w-24 sm:w-36 h-24 sm:h-36 pointer-events-none select-none opacity-80 z-20">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform scale-x-[-1]">
        {/* Leaves */}
        <path d="M0 0 C20 10 40 0 45 20 C30 35 10 15 0 0Z" fill="#1B4332"/>
        <path d="M0 0 C10 30 5 45 25 40 C35 25 20 10 0 0Z" fill="#748E7A"/>
        {/* Rose Petals */}
        <circle cx="20" cy="20" r="18" fill="#C58B97" opacity="0.9"/>
        <circle cx="20" cy="20" r="12" fill="#DDA5B2"/>
        <circle cx="18" cy="18" r="7" fill="#C26D55"/>
        <path d="M20 5 C25 10 25 15 20 20 C15 15 12 10 20 5Z" fill="#F0A699"/>
      </svg>
    </div>
  );
}
