'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TextileVisual } from './TextileVisual';

interface FeaturedCategoriesProps {
  onSelectCategory: (category: string) => void;
}

const CATEGORY_CARDS = [
  {
    name: 'Bed Linen & Sheets',
    filterTarget: 'Bed Linen',
    subtitle: 'King & Queen Pure Linen Sets',
    count: '6 Sets',
    visualType: 'bedding' as const,
    pattern: 'plain-weave' as const,
    imageUrl: '/images/bed-king.jpg',
    description: 'Pre-washed for extra softness. Keeps you cool all night long.',
  },
  {
    name: 'Table Linen',
    filterTarget: 'Table Linen',
    subtitle: 'Tablecloths & Runners',
    count: '4 Pieces',
    visualType: 'tablecloth' as const,
    pattern: 'hemstitch' as const,
    imageUrl: '/images/tablecloth.jpg',
    description: 'Generous table drapes that make family dinners warm and inviting.',
  },
  {
    name: 'Placemats & Napkins',
    filterTarget: 'Placemats & Napkins',
    subtitle: 'Hand-Stitched Sets',
    count: '8 Sets',
    visualType: 'placemat' as const,
    pattern: 'embroidery' as const,
    imageUrl: '/images/placemats.jpg',
    description: 'Double-layer linen placemats with delicate embroidered details.',
  },
  {
    name: 'Home Décor',
    filterTarget: 'Home Décor',
    subtitle: 'Cushions & Living Throws',
    count: '5 Pieces',
    visualType: 'cushion' as const,
    pattern: 'waffle' as const,
    imageUrl: '/images/cushions.jpg',
    description: 'Honeycomb waffle blankets and sheer linen curtains for your living space.',
  },
];

export function FeaturedCategories({ onSelectCategory }: FeaturedCategoriesProps) {
  return (
    <section className="py-24 bg-[#F7F4EE] border-y border-[#ECE5D8] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#8C7E72] font-semibold mb-2">
              Curated Living
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#24201D] font-normal tracking-tight">
              Featured Collections
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-[#5E5750] max-w-md leading-relaxed"
          >
            Thoughtfully made for every corner of your home — from restful bedroom sanctuaries to Sunday dinner tables.
          </motion.p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {CATEGORY_CARDS.map((card, idx) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => onSelectCategory(card.filterTarget)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#FDFBF7] border border-[#E5DFD4] hover:border-[#A62626]/60 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              {/* Visual Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE6D8]">
                <TextileVisual
                  type={card.visualType}
                  title={card.name}
                  pattern={card.pattern}
                  accentColor="#A62626"
                  imageUrl={card.imageUrl}
                  className="w-full h-full group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-3.5 right-3.5 text-[11px] font-semibold bg-[#FDFBF7]/95 backdrop-blur-xs text-[#24201D] px-2.5 py-1 rounded-md border border-[#E2DBD0] shadow-xs">
                  {card.count}
                </span>
              </div>

              {/* Card Meta */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#24201D] group-hover:text-[#A62626] transition-colors leading-snug">
                    {card.name}
                  </h3>
                  <p className="text-xs text-[#8C7E72] font-medium mt-1">
                    {card.subtitle}
                  </p>
                  <p className="text-xs text-[#5E5750] mt-2.5 line-clamp-2 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#EFEAE2] flex items-center justify-between text-xs font-semibold text-[#24201D] group-hover:text-[#A62626] transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
