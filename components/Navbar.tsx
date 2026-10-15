'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#EAE4DC] py-3.5'
          : 'bg-[#FDFBF7]/80 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Brand Logo Lockup */}
        <a
          href="#home"
          className="group flex items-center shrink-0 transition-opacity hover:opacity-90"
          aria-label="Truly M Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/logo.svg`}
            alt="Truly M — Stories Crafted by Hand"
            className="h-11 sm:h-12 w-auto object-contain block transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* Simplified Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-[#5E5750]">
          <a
            href="#collections"
            className="hover:text-[#24201D] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#A62626]"
          >
            Collections
          </a>
          <a
            href="#story"
            className="hover:text-[#24201D] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#A62626]"
          >
            Our Story
          </a>
          <a
            href="#craft"
            className="hover:text-[#24201D] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#A62626]"
          >
            Craftsmanship
          </a>
          <a
            href="#contact"
            className="hover:text-[#24201D] transition-colors whitespace-nowrap py-1 border-b border-transparent hover:border-[#A62626]"
          >
            Contact
          </a>
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-white bg-[#24201D] hover:bg-[#A62626] rounded-md transition-all duration-200 shadow-xs hover:shadow-sm"
          >
            <span>Inquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#24201D] hover:text-[#A62626] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#EAE4DC] px-6 py-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 text-base font-medium text-[#24201D]">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EFE9DF]"
            >
              Collections
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EFE9DF]"
            >
              Our Story
            </a>
            <a
              href="#craft"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EFE9DF]"
            >
              Craftsmanship
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EFE9DF]"
            >
              Contact & Inquiries
            </a>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3 text-xs tracking-wider uppercase font-semibold text-white bg-[#24201D] hover:bg-[#A62626] rounded-md text-center flex items-center justify-center gap-2"
              >
                <span>Make an Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
