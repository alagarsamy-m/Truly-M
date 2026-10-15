'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactSectionProps {
  prefilledProduct?: string;
}

export function ContactSection({ prefilledProduct }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [userSubject, setUserSubject] = useState<string | null>(null);
  const [isWholesale, setIsWholesale] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const activeSubject =
    userSubject !== null
      ? userSubject
      : prefilledProduct
      ? `Inquiry: ${prefilledProduct}`
      : 'Bed Linen & Sheets';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !emailOrPhone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F1EB] border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details & Studio Presence */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#736A62] font-semibold mb-2">
                Get in Touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#24201D] font-normal tracking-tight leading-[1.2] mb-4 [text-wrap:balance]">
                We’d love to hear from you.
              </h2>
              <p className="text-sm text-[#5E5750] leading-relaxed">
                Whether you have questions about our linen bed sizes, care recommendations, custom dimensions, or boutique wholesale orders, our studio team is here to assist.
              </p>
            </div>

            {/* Studio Info Cards */}
            <div className="space-y-4 pt-4 border-t border-[#E2DBD0]">
              <div className="flex items-start gap-3.5 text-xs text-[#5E5750]">
                <MapPin className="w-4 h-4 text-[#A62626] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#24201D]">Design Studio & Showroom</p>
                  <p className="text-[#7A7067] mt-0.5 leading-relaxed">
                    14 Heritage Weaver Enclave, Sanganer, Jaipur & Hauz Khas, New Delhi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-[#5E5750]">
                <Mail className="w-4 h-4 text-[#A62626] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#24201D]">Direct Email</p>
                  <a
                    href="mailto:care@trulym.com"
                    className="text-[#7A7067] hover:text-[#A62626] transition-colors mt-0.5 block"
                  >
                    care@trulym.com / wholesale@trulym.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-[#5E5750]">
                <Phone className="w-4 h-4 text-[#A62626] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#24201D]">Phone & WhatsApp</p>
                  <p className="text-[#7A7067] mt-0.5">+91 (0) 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-[#5E5750]">
                <Clock className="w-4 h-4 text-[#A62626] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#24201D]">Response Time</p>
                  <p className="text-[#7A7067] mt-0.5">We reply within 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Elegant Contact Form */}
          <div className="lg:col-span-7 bg-[#FDFBF7] p-8 sm:p-10 rounded-2xl border border-[#E5DFD4] shadow-xs">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-14 h-14 bg-[#F0F7F2] text-[#2E7D32] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#24201D]">Thank you, {name}</h3>
                <p className="text-xs sm:text-sm text-[#5E5750] max-w-md mx-auto leading-relaxed">
                  Your message has been received. Our studio manager will review fabric availability and respond to <strong>{emailOrPhone}</strong> within 1 business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                    setUserSubject(null);
                  }}
                  className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#24201D] border border-[#DDD5C7] rounded-md hover:bg-[#F5F1EB] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-[#EAE4DC]">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#24201D]">
                    Send us a message
                  </h3>
                  <p className="text-xs text-[#7A7067] mt-1">
                    Fill out the form below and we will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#24201D] mb-1">
                      Your Name <span className="text-[#A62626]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#A62626] text-[#24201D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#24201D] mb-1">
                      Email or Phone <span className="text-[#A62626]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      placeholder="e.g. priya@example.com or +91..."
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#A62626] text-[#24201D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#24201D] mb-1">
                    Subject / Product of Interest
                  </label>
                  <input
                    type="text"
                    value={activeSubject}
                    onChange={(e) => setUserSubject(e.target.value)}
                    placeholder="e.g. King Sheet Set / Custom Tablecloth size / Wholesale"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#A62626] text-[#24201D]"
                  />
                </div>

                {/* Wholesale Toggle */}
                <div className="pt-1">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-[#5E5750]">
                    <input
                      type="checkbox"
                      checked={isWholesale}
                      onChange={(e) => setIsWholesale(e.target.checked)}
                      className="w-4 h-4 rounded text-[#A62626] focus:ring-[#A62626] border-[#DDD5C7]"
                    />
                    <span>This is a boutique wholesale or hospitality inquiry</span>
                  </label>
                </div>

                {isWholesale && (
                  <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#DDD5C7] animate-in fade-in">
                    <label className="block text-xs font-medium text-[#24201D] mb-1">
                      Boutique or Hotel Name
                    </label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Studio Terra / Villa Rosa"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#DDD5C7] rounded-md focus:outline-none text-[#24201D]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-[#24201D] mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you are looking for, required quantities, or custom dimension requests..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#A62626] text-[#24201D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold tracking-wider uppercase text-white bg-[#24201D] hover:bg-[#A62626] rounded-md transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
