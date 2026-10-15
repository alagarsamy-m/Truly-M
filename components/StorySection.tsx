'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Feather, ShieldCheck, HeartHandshake, Sparkles, Compass } from 'lucide-react';
import { TextileVisual } from './TextileVisual';

const CRAFT_STEPS = [
  {
    step: '01',
    title: 'Natural Fibers',
    subtitle: '100% European Flax & Organic Indian Cotton',
    narrative:
      'We choose pure natural flax and organic cotton. They breathe naturally, feel soft against bare skin, and keep your body at the ideal resting temperature through all four seasons.',
    feature: 'Naturally hypoallergenic · Zero synthetic polyester',
  },
  {
    step: '02',
    title: 'Wooden Handlooms',
    subtitle: 'Hand-Woven by Master Artisans in Rajasthan',
    narrative:
      'Our weavers use wooden shuttle looms operated purely by foot pedals and artisan hands. No electric motors are used, giving each piece a gentle, living texture that machines cannot replicate.',
    feature: '6–8 meters woven per day · Hand-calibrated yarn tension',
  },
  {
    step: '03',
    title: 'Stonewashed for Softness',
    subtitle: 'No Harsh Caustic Chemicals or Chlorine',
    narrative:
      'Every collection undergoes a gentle bio-enzyme wash with pumice stones. That means your bedding arrives buttery soft and relaxed, with no stiff break-in period.',
    feature: 'Natural relaxed drape · Gets softer with every wash',
  },
  {
    step: '04',
    title: 'Hand-Finished Hems',
    subtitle: 'French Seams & Delicate Needlework',
    narrative:
      'Every corner is carefully mitred and double-stitched by hand. Delicate hemstitches and botanical threadwork are added by artisan needleworkers, designed to last for generations.',
    feature: 'Mitred corners · Tear-resistant French seams',
  },
];

export function StorySection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="story" className="py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* The Truly M Story Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5DFD4] shadow-xl group">
              <TextileVisual
                type="artisan-loom"
                title="Indian Artisan Weaving on Traditional Wooden Shuttle Loom"
                pattern="plain-weave"
                accentColor="#A62626"
                imageUrl="/images/artisan-loom.jpg"
                className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-103"
              />

              {/* Artisan Profile Vignette Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E2DBD0] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#24201D]">Govind Ram</p>
                  <p className="text-[11px] text-[#7A7067]">4th-Generation Master Loom Artisan · Sanganer, Rajasthan</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#FAF6EE] text-[#A62626] border border-[#E5DFD4]">
                  Heritage Craft
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#8C7E72] font-semibold mb-3">
              The Truly M Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24201D] font-normal tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
              Simple, honest living <br />
              <span className="italic font-light text-[#A62626]">crafted by hand.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5E5750] leading-relaxed">
              <p>
                We started Truly M with one simple idea: the things you touch every day — your bed sheets, dining tablecloths, and cozy couch throws — should bring peace, calm, and grounded warmth to your home.
              </p>
              <p>
                We collaborate directly with artisan weaving families across India. By weaving slowly on non-electric wooden looms, we celebrate the organic texture of natural flax rather than industrial uniformity.
              </p>
              <p className="font-serif italic text-[#3A332E] text-base sm:text-lg pt-2 border-l-2 border-[#A62626] pl-4 leading-relaxed">
                &ldquo;Linens made with patience and care, so you can enjoy slower mornings and peaceful evenings.&rdquo;
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-3 gap-5 pt-8 mt-6 border-t border-[#EFEAE2]">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#24201D] mb-1">
                  <Feather className="w-3.5 h-3.5 text-[#A62626]" />
                  <span>100% Pure Flax</span>
                </div>
                <p className="text-xs text-[#7A7067]">Zero synthetic blends</p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#24201D] mb-1">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#A62626]" />
                  <span>Fair Pay</span>
                </div>
                <p className="text-xs text-[#7A7067]">Direct artisan support</p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#24201D] mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A62626]" />
                  <span>Made to Last</span>
                </div>
                <p className="text-xs text-[#7A7067]">Durable double seams</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Craftsmanship Steps Journey */}
        <div id="craft" className="pt-16 border-t border-[#EAE3D6]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8C7E72] font-semibold mb-2">
              Our Process
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#24201D] font-normal tracking-tight">
              From Raw Flax to Your Bedroom
            </h3>
            <p className="text-sm text-[#5E5750] mt-2.5">
              Explore the four mindful stages behind each Truly M piece.
            </p>
          </div>

          {/* Interactive Step Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto mb-8">
            {CRAFT_STEPS.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-300 border relative overflow-hidden ${
                    isActive
                      ? 'bg-[#FAF6EE] border-[#A62626] text-[#24201D] shadow-sm'
                      : 'bg-white border-[#E5DFD4] text-[#7A7067] hover:border-[#C4B9AA]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeStepBorder"
                      className="absolute top-0 left-0 right-0 h-0.5 bg-[#A62626]"
                    />
                  )}
                  <span className={`text-xs font-mono font-semibold block ${isActive ? 'text-[#A62626]' : 'text-[#9C928C]'}`}>
                    Step {s.step}
                  </span>
                  <p className="text-sm font-medium mt-1 text-[#24201D] line-clamp-1">
                    {s.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card with Motion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#F7F4EE] border border-[#E3DBD0] shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-mono font-semibold bg-[#A62626] text-white rounded-md shadow-2xs">
                  Stage {CRAFT_STEPS[activeStep].step}
                </span>
                <span className="text-xs font-medium text-[#7A7067]">
                  {CRAFT_STEPS[activeStep].subtitle}
                </span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#24201D] font-normal mb-3">
                {CRAFT_STEPS[activeStep].title}
              </h4>

              <p className="text-sm sm:text-base text-[#5E5750] leading-relaxed mb-6 font-normal">
                {CRAFT_STEPS[activeStep].narrative}
              </p>

              <div className="pt-4 border-t border-[#EAE3D6] flex items-center gap-2 text-xs font-semibold text-[#A62626]">
                <Sparkles className="w-4 h-4" />
                <span>{CRAFT_STEPS[activeStep].feature}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
