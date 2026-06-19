'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Send, MessageSquare, CheckCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageType: 'all-inclusive',
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
      setFormData({ name: '', phone: '', packageType: 'all-inclusive', sharing: 'double', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-creamBg text-charcoalText relative overflow-hidden floral-backdrop">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">যোগাযোগ করুন (Contact)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Secure Your Seat For August</h2>
          <p className="text-charcoalText/80 mt-4 leading-relaxed text-sm sm:text-base">
            Reach out to our warden desk today to confirm room availability, verify mess packages, or arrange a campus tour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info & Map Column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-whitePure p-8 rounded-[2rem] shadow-xl border border-greyBorder/50 space-y-6">
              <h3 className="text-xl font-bold text-primaryGreen font-serif">Contact Information</h3>
              
              <div className="space-y-4">
                <a href="tel:+918016801695" className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creamBg transition-colors">
                  <div className="p-3 bg-primaryGreen/5 text-primaryGreen rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoalText/60 leading-none font-bold uppercase">Call Warden</p>
                    <p className="text-base font-extrabold text-primaryGreen mt-1.5">+91 80168 01695</p>
                  </div>
                </a>

                <a href="tel:+919126836422" className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creamBg transition-colors">
                  <div className="p-3 bg-primaryGreen/5 text-primaryGreen rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoalText/60 leading-none font-bold uppercase">Call Admission Support</p>
                    <p className="text-base font-extrabold text-primaryGreen mt-1.5">+91 91268 36422</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918016801695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creamBg transition-colors"
                >
                  <div className="p-3 bg-green-500/10 text-green-600 rounded-xl">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoalText/60 leading-none font-bold uppercase">WhatsApp Admission Desk</p>
                    <p className="text-base font-extrabold text-green-600 mt-1.5">Direct WhatsApp Link</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/place/Manjusri+Chatrinivas+(Ladies+Mess)/@22.4338633,87.300358,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-creamBg transition-colors"
                >
                  <div className="p-3 bg-primaryGreen/5 text-primaryGreen rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoalText/60 leading-none font-bold uppercase">Address (Tap to view map)</p>
                    <p className="text-sm font-extrabold text-primaryGreen mt-1.5 leading-snug">
                      Manjusri Chatrinivas (Ladies Mess),<br />
                      Bidla Traffic Point, Ramayanpara,<br />
                      Tantigeria, Midnapore - 721102
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Embedded Google Map (Custom center coordinate mapping) */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg border border-greyBorder/50 h-[300px] relative group">
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
                href="https://www.google.com/maps/place/Manjusri+Chatrinivas+(Ladies+Mess)/@22.4338633,87.300358,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primaryGreen text-whitePure font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-accentRose transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <ExternalLink size={12} />
                <span>Open in Google Maps</span>
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
                <h3 className="text-2xl font-bold text-primaryGreen font-bengali">ধন্যবাদ! আমরা পেয়ে গেছি</h3>
                <p className="text-xs sm:text-sm text-charcoalText/70 max-w-sm mx-auto leading-relaxed">
                  Your details have been registered. The warden of Manjusri Chatrinivas will call you shortly to discuss room options.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <h3 className="text-2xl font-bold text-primaryGreen font-serif">Seat Reservation Enquiry</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoalText/70 font-bold mb-2">Student Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rupali Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-creamBg border border-greyBorder/60 rounded-xl text-charcoalText focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoalText/70 font-bold mb-2">Mobile Number *</label>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoalText/70 font-bold mb-2">Select Package Preference</label>
                    <select
                      value={formData.packageType}
                      onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                      className="w-full px-4 py-3 bg-creamBg border border-greyBorder/60 rounded-xl text-charcoalText focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen outline-none transition-colors text-sm font-semibold"
                    >
                      <option value="all-inclusive">All-Inclusive Package</option>
                      <option value="separate">Separate / Custom Billing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoalText/70 font-bold mb-2">Room Sharing Style</label>
                    <select
                      value={formData.sharing}
                      onChange={(e) => setFormData({ ...formData, sharing: e.target.value })}
                      className="w-full px-4 py-3 bg-creamBg border border-greyBorder/60 rounded-xl text-charcoalText focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen outline-none transition-colors text-sm font-semibold"
                    >
                      <option value="single">Single Bed Room</option>
                      <option value="double">2 Bed Sharing</option>
                      <option value="triple">3 Bed Sharing</option>
                      <option value="quad">4 Bed Sharing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoalText/70 font-bold mb-2">Additional Notes / Parent Queries</label>
                  <textarea
                    rows={4}
                    placeholder="Let us know when you plan to visit, or specify food preferences/queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-creamBg border border-greyBorder/60 rounded-xl text-charcoalText focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen outline-none transition-colors text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-primaryGreen hover:bg-accentRose text-whitePure py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primaryGreen/10"
                >
                  <Send size={16} />
                  <span>Submit Reservation Enquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
