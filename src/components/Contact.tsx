'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Send, MessageSquare, CheckCircle, ExternalLink, GraduationCap, School, Map } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    sharing: 'double',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out your name and mobile number.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', sharing: 'double', message: '' });
    }, 5000);
  };

  const nearbyLocations = [
    { name: 'Vidyasagar University', dist: '5 mins ride' },
    { name: 'Midnapore College', dist: '6 mins ride' },
    { name: 'Raja N.L. Khan Women\'s College', dist: '8 mins ride' },
    { name: 'Tantigeria & Saratpally Markets', dist: 'Walking distance' },
    { name: 'Local coaching centres', dist: 'Walking distance' },
    { name: 'Bidla Traffic Point', dist: '1 min walk' }
  ];

  return (
    <section id="contact" className="py-24 bg-creamBg text-charcoalText relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali block">যোগাযোগ করুন (Contact Us)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Book Your Room or Ask Questions</h2>
          <p className="text-darkBrown/80 mt-4 leading-relaxed text-sm sm:text-base font-sans">
            Ready to visit? Schedule a site tour or ask about pricing packages. Contact us directly or submit the quick form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info & Map Column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-whitePure p-8 rounded-[2rem] shadow-xl border border-greyBorder/50 space-y-6">
              <h3 className="text-xl font-bold text-primaryGreen font-serif">Official Location</h3>
              
              <div className="space-y-4 font-sans">
                <a href="tel:+918016801695" className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creamBg transition-colors">
                  <div className="p-3 bg-primaryGreen/5 text-primaryGreen rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoalText/60 leading-none font-bold uppercase">Call Principal Contact</p>
                    <p className="text-base font-extrabold text-primaryGreen mt-1.5">+91 80168 01695</p>
                  </div>
                </a>

                <a href="tel:+919126836422" className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creamBg transition-colors">
                  <div className="p-3 bg-primaryGreen/5 text-primaryGreen rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoalText/60 leading-none font-bold uppercase">Backup / Alternate Call</p>
                    <p className="text-base font-extrabold text-primaryGreen mt-1.5">+91 91268 36422</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918016801695?text=Hi!%20I%20am%20interested%20in%20Manjusri%20Chatrinivas.%20Please%20share%20room%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creamBg transition-colors"
                >
                  <div className="p-3 bg-green-500/10 text-green-600 rounded-xl">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoalText/60 leading-none font-bold uppercase">WhatsApp Chat Support</p>
                    <p className="text-base font-extrabold text-green-600 mt-1.5">Direct WhatsApp Link</p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/rsw1iBtf1YVwS1uP6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creamBg transition-colors"
                >
                  <div className="p-3 bg-accentOrange/10 text-accentOrange rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoalText/60 leading-none font-bold uppercase">Address (Tap to view map)</p>
                    <p className="text-xs sm:text-sm font-bold text-primaryGreen mt-1.5 leading-snug">
                      Manjusri Chatrinivas (Ladies Mess),<br />
                      Ramayanpara, Near Bidla Traffic Point,<br />
                      Tantigeria, Midnapore, WB - 721102
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Nearby Places Indicator */}
            <div className="bg-whitePure p-8 rounded-[2rem] shadow-md border border-greyBorder/50 space-y-4 text-left">
              <h4 className="text-base font-bold text-primaryGreen font-serif flex items-center gap-2">
                <GraduationCap size={20} />
                <span>Nearby Landmarks</span>
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {nearbyLocations.map((item, idx) => (
                  <div key={idx} className="bg-creamBg/55 p-3 rounded-xl border border-greyBorder/40">
                    <p className="font-bold text-primaryGreen font-serif">{item.name}</p>
                    <p className="text-[10px] text-charcoalText/60 mt-1">{item.dist}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg border border-greyBorder/50 h-[280px] relative group">
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
                className="absolute bottom-4 right-4 bg-primaryGreen text-whitePure font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-accentOrange transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <ExternalLink size={12} />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-whitePure p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-greyBorder/50">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-primaryGreen font-bengali">ধন্যবাদ! Enquiry Received</h3>
                <p className="text-xs sm:text-sm text-charcoalText/70 max-w-sm mx-auto leading-relaxed font-sans">
                  Your details have been registered. Our ladies hostel warden will contact you or your parent shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <h3 className="text-2xl font-bold text-primaryGreen font-serif">Room Booking Request</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoalText/70 font-bold mb-2">Student Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Riya Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-creamBg border border-greyBorder/60 rounded-xl text-charcoalText focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoalText/70 font-bold mb-2">Parent Contact No. *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-creamBg border border-greyBorder/60 rounded-xl text-charcoalText focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoalText/70 font-bold mb-2">Desired Sharing Style</label>
                  <select
                    value={formData.sharing}
                    onChange={(e) => setFormData({ ...formData, sharing: e.target.value })}
                    className="w-full px-4 py-3 bg-creamBg border border-greyBorder/60 rounded-xl text-charcoalText focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen outline-none transition-colors text-sm font-semibold"
                  >
                    <option value="single">Single Room (₹2,299/mo)</option>
                    <option value="double">2 Sharing Room (₹1,599/mo)</option>
                    <option value="triple">3 Sharing Room (₹1,399/mo)</option>
                    <option value="quad">4 Sharing Room (₹899/mo)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoalText/70 font-bold mb-2">Message or Queries</label>
                  <textarea
                    rows={4}
                    placeholder="Mention if you need meal subscription or specific kitchen/wardrobe needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-creamBg border border-greyBorder/60 rounded-xl text-charcoalText focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen outline-none transition-colors text-sm font-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-primaryGreen hover:bg-accentOrange text-whitePure py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primaryGreen/10"
                >
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
