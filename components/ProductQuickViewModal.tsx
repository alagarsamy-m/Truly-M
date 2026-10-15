'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '@/data/products';
import { TextileVisual } from './TextileVisual';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onInquire: (productDetails: string) => void;
}

export function ProductQuickViewModal({
  product,
  onClose,
  onInquire,
}: ProductQuickViewModalProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!product) return null;

  const currentColor = product.colors[selectedColorIndex] || product.colors[0];

  const handleInquireClick = () => {
    onInquire(`${product.name} — ${currentColor.name}`);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#24201D]/60 backdrop-blur-xs transition-opacity"
        />

        <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl border border-[#E5DFD4] text-left relative z-10 flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#24201D] hover:text-[#A62626] border border-[#DDD5C7] transition-all shadow-xs"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left: Gallery & Real Visual */}
            <div className="md:w-1/2 bg-[#F2EDE4] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8E1D5]">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#DDD5C7] shadow-xs">
                <TextileVisual
                  type={product.imageType}
                  title={product.name}
                  pattern={product.texturePattern}
                  accentColor={currentColor.hex}
                  imageUrl={product.imageUrl}
                  className="w-full h-full"
                />
              </div>

              {/* Craft Certification Badge */}
              <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#A62626] shrink-0 mt-0.5" />
                <div className="text-xs text-[#5E5750]">
                  <p className="font-semibold text-[#24201D]">Handmade in India</p>
                  <p className="mt-0.5 leading-relaxed text-[#7A7067]">{product.craftStory}</p>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Inquiry Action */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#7A7067] mb-2">
                  <span className="font-semibold uppercase tracking-wider text-[#A62626]">
                    {product.category}
                  </span>
                  <span>·</span>
                  <span>{product.texturePattern.replace('-', ' ')}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#24201D] leading-snug">
                  {product.name}
                </h2>
                <p className="text-xs font-medium text-[#7A7067] mt-1">
                  {product.subtitle}
                </p>

                {/* Price */}
                <div className="mt-3 text-sm font-semibold text-[#24201D] tabular-nums">
                  {product.priceEstimate}
                </div>

                <p className="text-xs sm:text-sm text-[#5E5750] mt-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Color Selector */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-medium text-[#24201D]">Color Variation:</span>
                    <span className="font-semibold text-[#A62626]">{currentColor.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c, i) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColorIndex(i)}
                        className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                          selectedColorIndex === i
                            ? 'ring-2 ring-[#24201D] ring-offset-2 scale-110'
                            : 'border-[#CCC] hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {selectedColorIndex === i && (
                          <Check
                            className={`w-3.5 h-3.5 ${
                              c.name.includes('White') || c.name.includes('Chalk') || c.name.includes('Ivory')
                                ? 'text-[#24201D]'
                                : 'text-white'
                            }`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specification Table */}
                <div className="mt-6 space-y-2 pt-4 border-t border-[#EFEAE2] text-xs text-[#5E5750]">
                  <div className="grid grid-cols-3">
                    <span className="font-medium text-[#24201D]">Material:</span>
                    <span className="col-span-2 text-[#4A433D]">{product.material}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="font-medium text-[#24201D]">Dimensions:</span>
                    <span className="col-span-2 font-mono tabular-nums text-[#4A433D]">
                      {product.dimensions}
                    </span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="font-medium text-[#24201D]">Care:</span>
                    <span className="col-span-2 text-[#7A7067]">{product.care}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="font-medium text-[#24201D]">Availability:</span>
                    <span className="col-span-2 text-[#7A7067]">{product.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#EAE3D6]">
                <button
                  onClick={handleInquireClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-white bg-[#A62626] hover:bg-[#8C1F1F] rounded-md transition-colors shadow-sm"
                >
                  <span>Inquire About This Piece</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
