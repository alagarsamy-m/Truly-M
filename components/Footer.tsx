'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, MapPin } from 'lucide-react';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#24201D] text-[#ECE7DF] pt-20 pb-12 border-t border-[#38332E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3D3732]">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/images/logo-white.svg`}
                alt="Truly M — Stories Crafted by Hand"
                className="h-11 sm:h-12 w-auto object-contain block"
              />
            </div>

            <p className="text-xs text-[#A89E94] leading-relaxed max-w-sm pt-2">
              Pure European flax and Indian handloom textiles. Designed for modern living, woven by hand with care in Rajasthan and Uttar Pradesh.
            </p>

            {/* Studio Address */}
            <div className="pt-4 space-y-2 text-xs text-[#A89E94]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#A62626] shrink-0 mt-0.5" />
                <span>Jaipur Handloom Studio & Delhi Design Office</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#A62626] shrink-0" />
                <a href="mailto:care@trulym.com" className="hover:text-white transition-colors">
                  care@trulym.com / wholesale@trulym.com
                </a>
              </div>
            </div>
          </div>

          {/* Collections Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-white">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#A89E94]">
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Bed Linen & Sheets
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Table Linens
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Placemats & Napkins
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Cushions & Throws
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Linen Curtains
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-white">
              About & Inquiries
            </h4>
            <ul className="space-y-2 text-xs text-[#A89E94]">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  The Truly M Story
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-white transition-colors">
                  Artisan Weaving Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Wholesale & Trade Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-xs text-[#A89E94] leading-relaxed">
              Sign up for quiet stories on linen care and new limited collection drops.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-md bg-[#2E2824] border border-[#4D453E] text-xs text-[#D8D2C7]">
                Thank you! You are now subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#2E2824] border border-[#4D453E] rounded-md focus:outline-none focus:border-[#A62626] text-white placeholder-[#786E65]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-[#A62626] hover:bg-[#8C1F1F] text-white rounded text-xs transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#786E65] block">
                  Zero spam. You can unsubscribe at any time.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#786E65]">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} Truly M. Stories Crafted by Hand. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#9C928C]">Rooted in Indian Craftsmanship</span>
            <span>·</span>
            <span>Sustainable Flax Linens</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
