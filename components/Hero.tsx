'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { TextileVisual } from './TextileVisual';

interface HeroProps {
  onExploreCollections: () => void;
  onInquireClick: () => void;
}

export function Hero({ onExploreCollections, onInquireClick }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-[#FDFBF7] overflow-hidden">
      {/* Background warm ambient glow */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-radial from-[#F5EFE6]/80 via-[#FAF7F2]/40 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-radial from-[#F0ECE1]/50 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Content Column (5 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Kicker with delicate loom thread badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-[#A62626]" />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#8C7E72]">
                Artisanal Indian Loom Heritage
              </span>
            </motion.div>

            {/* Stunning, Highly Attractive Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] text-[#24201D] font-light tracking-[-0.025em] leading-[1.04] mb-6 [text-wrap:balance]"
            >
              Stories <br />
              <span className="font-serif italic font-normal text-[#24201D] relative inline-block">
                Crafted by Hand<span className="text-[#A62626]">.</span>
                <span className="absolute -bottom-1.5 left-0 w-3/4 h-[2px] bg-gradient-to-r from-[#A62626] via-[#A62626]/50 to-transparent rounded-full" />
              </span>
            </motion.h1>

            {/* Simple, natural, human copy */}
            <motion.p
              variants={itemVariants}
              className="text-base text-[#5E5750] leading-relaxed mb-8 max-w-lg font-normal"
            >
              Fall in love with linen. Hand-woven by Indian artisans using pure European flax. Soft, comfortable, and made to last for years to come.
            </motion.p>

            {/* Action Buttons with Enhanced Hover Transitions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreCollections}
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#24201D] hover:bg-[#A62626] rounded-md transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onInquireClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-medium tracking-wider uppercase text-[#24201D] hover:text-[#A62626] bg-white/70 hover:bg-white border border-[#DDD5C7] hover:border-[#A62626] rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
              >
                <span>Inquire</span>
              </button>
            </motion.div>

            {/* Key Facts with subtle divider */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-[#EAE3D6] text-[#5A524A]"
            >
              <div className="group cursor-default">
                <p className="text-2xl font-serif text-[#24201D] font-normal tabular-nums transition-colors group-hover:text-[#A62626]">
                  100%
                </p>
                <p className="text-xs text-[#7A7067] mt-0.5 font-medium">Pure Natural Flax</p>
              </div>
              <div className="group cursor-default">
                <p className="text-2xl font-serif text-[#24201D] font-normal tabular-nums transition-colors group-hover:text-[#A62626]">
                  Handmade
                </p>
                <p className="text-xs text-[#7A7067] mt-0.5 font-medium">Wooden Loom Weave</p>
              </div>
              <div className="group cursor-default">
                <p className="text-2xl font-serif text-[#24201D] font-normal tabular-nums transition-colors group-hover:text-[#A62626]">
                  Soft
                </p>
                <p className="text-xs text-[#7A7067] mt-0.5 font-medium">Enzyme Washed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Lifestyle Visual Column (7 cols) with Enhanced Depth & Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-[#E8E1D5] bg-[#F5EFE6] group">
              <TextileVisual
                type="hero"
                title="Truly M Living Room with Pure Washed Linen"
                pattern="plain-weave"
                accentColor="#A62626"
                imageUrl="/images/hero-living.jpg"
                className="w-full h-full"
              />

              {/* Lifestyle Caption Overlay with Gentle Glassmorphism */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E5DFD4] shadow-sm flex items-center justify-between transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A62626]" />
                  <div>
                    <p className="text-xs font-semibold text-[#24201D] tracking-wide">
                      Contemporary Living Collection
                    </p>
                    <p className="text-[11px] text-[#7A7067]">
                      Raw washed linen throws & neutral ash cushions
                    </p>
                  </div>
                </div>

                <button
                  onClick={onExploreCollections}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#A62626] hover:underline whitespace-nowrap transition-transform duration-200 hover:translate-x-0.5"
                >
                  <span>Explore Pieces</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
