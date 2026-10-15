'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Eye, ArrowRight, Sparkles, SlidersHorizontal, Layers, Check } from 'lucide-react';
import { Product, CATEGORIES } from '@/data/products';
import { TextileVisual } from './TextileVisual';

interface CatalogSectionProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenQuickView: (product: Product) => void;
  onInquireProduct: (productName: string) => void;
}

const FABRIC_GUIDES = [
  {
    name: '175 GSM Belgian Flax',
    use: 'King & Queen Sheet Sets',
    feel: 'Enzyme-softened, feather-light, breathable',
    temp: 'Cools in summer, insulates in winter',
  },
  {
    name: '320 GSM Heavy Drape',
    use: 'Malabar Honeycomb Waffle Throws',
    feel: 'Sensorial plush weight, cloud-soft honeycomb cells',
    temp: 'Deep cozy warmth for lounging',
  },
  {
    name: '160 GSM Slub Tablecloth',
    use: 'Table Linens & Hemstitched Napkins',
    feel: 'Supple fluid drape, hand-mitred corners',
    temp: 'Resistant to frequent laundering',
  },
  {
    name: '115 GSM Open Flax',
    use: 'Gossamer Sheer Window Panels',
    feel: 'Airy, translucent, natural plant fiber slubs',
    temp: 'Diffuses direct glare into ambient glow',
  },
];

export function CatalogSection({
  products,
  selectedCategory,
  onSelectCategory,
  onOpenQuickView,
  onInquireProduct,
}: CatalogSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColorFilter, setSelectedColorFilter] = useState<string | null>(null);
  const [showFabricGuide, setShowFabricGuide] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All Collections' ||
        p.category === selectedCategory ||
        (selectedCategory === 'Bed Linen' &&
          (p.category === 'King Sheets' || p.category === 'Queen Sheets' || p.category === 'Bed Linen'));

      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.material.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesColor =
        !selectedColorFilter ||
        p.colors.some((c) => c.name.toLowerCase().includes(selectedColorFilter.toLowerCase()));

      return matchesCategory && matchesSearch && matchesColor;
    });
  }, [products, selectedCategory, searchQuery, selectedColorFilter]);

  return (
    <section id="collections" className="py-28 bg-[#FAF7F2] border-t border-[#EAE3D6] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#8C7E72] font-semibold mb-2">
              All Pieces
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24201D] font-normal tracking-tight">
              The Truly M Collections
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Fabric Guide Toggle */}
            <button
              onClick={() => setShowFabricGuide(!showFabricGuide)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#24201D] bg-white border border-[#DDD5C7] rounded-md hover:border-[#A62626] transition-colors shadow-2xs"
            >
              <Layers className="w-3.5 h-3.5 text-[#A62626]" />
              <span>{showFabricGuide ? 'Hide Fabric Guide' : 'Fabric & Weight Guide'}</span>
            </button>

            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9C928C]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search linens..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#A62626] transition-colors text-[#24201D] placeholder-[#9C928C]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9C928C] hover:text-[#24201D]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Fabric & Weight Guide Banner */}
        <AnimatePresence>
          {showFabricGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-8"
            >
              <div className="p-6 bg-[#FDFBF7] rounded-2xl border border-[#E5DFD4] shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#24201D] uppercase tracking-wider mb-4">
                  <Sparkles className="w-4 h-4 text-[#A62626]" />
                  <span>The Truly M Fabric & GSM Touch Guide</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  {FABRIC_GUIDES.map((f) => (
                    <div key={f.name} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EBE4D8]">
                      <span className="font-semibold text-sm text-[#24201D] block">{f.name}</span>
                      <span className="text-[11px] text-[#A62626] font-medium block mt-0.5">{f.use}</span>
                      <p className="text-[#5E5750] mt-2 leading-relaxed">{f.feel}</p>
                      <p className="text-[11px] text-[#8C7E72] mt-1 pt-2 border-t border-[#E8E1D5]">{f.temp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filter Tabs with Sliding Active Pill */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`relative px-4 py-2 text-xs font-medium tracking-wide whitespace-nowrap shrink-0 rounded-md transition-all duration-200 border ${
                  isActive
                    ? 'text-white border-[#24201D] bg-[#24201D] shadow-xs'
                    : 'bg-white text-[#5E5750] border-[#E2DBD0] hover:border-[#9C928C] hover:text-[#24201D]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#24201D] rounded-md -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results Bar and Palette Swatches */}
        <div className="flex items-center justify-between text-xs text-[#7A7067] mb-8 pb-3 border-b border-[#E8E1D5]">
          <span>
            Showing <strong className="font-semibold text-[#24201D] tabular-nums">{filteredProducts.length}</strong> items
            {selectedCategory !== 'All Collections' && ` in ${selectedCategory}`}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-[#9C928C]">Filter by shade:</span>
            <div className="flex items-center gap-1.5">
              {[
                { name: 'All', color: '#EAE4DC' },
                { name: 'Ash', color: '#9C928C' },
                { name: 'Crimson', color: '#A62626' },
                { name: 'Oatmeal', color: '#E6DFC8' },
                { name: 'Chalk', color: '#FFFFFF' }
              ].map((swatch) => (
                <button
                  key={swatch.name}
                  onClick={() => setSelectedColorFilter(selectedColorFilter === swatch.name ? null : swatch.name === 'All' ? null : swatch.name)}
                  title={`Filter by ${swatch.name}`}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    (selectedColorFilter === swatch.name || (!selectedColorFilter && swatch.name === 'All'))
                      ? 'scale-125 ring-2 ring-[#24201D]'
                      : 'border-[#CCC] hover:scale-110'
                  }`}
                  style={{ backgroundColor: swatch.color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-[#E5DFD4] p-8">
            <p className="font-serif text-xl text-[#24201D]">No pieces match your search</p>
            <p className="text-xs text-[#7A7067] mt-1">Try resetting the search or category filter.</p>
            <button
              onClick={() => {
                onSelectCategory('All Collections');
                setSearchQuery('');
                setSelectedColorFilter(null);
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-white bg-[#24201D] rounded-md hover:bg-[#A62626] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#E5DFD4] hover:border-[#9C928C] transition-all duration-300 hover:shadow-xl flex flex-col"
                >
                  {/* Visual Container */}
                  <div className="relative aspect-[4/3] bg-[#F2EDE4] overflow-hidden">
                    <TextileVisual
                      type={product.imageType}
                      title={product.name}
                      pattern={product.texturePattern}
                      accentColor="#A62626"
                      imageUrl={product.imageUrl}
                      className="w-full h-full group-hover:scale-106 transition-transform duration-700 ease-out"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase bg-[#24201D] text-white px-2.5 py-1 rounded-sm shadow-xs">
                        {product.badge}
                      </span>
                    )}

                    {/* Hover Quick Action Overlay */}
                    <div className="absolute inset-0 bg-[#24201D]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 p-4">
                      <button
                        onClick={() => onOpenQuickView(product)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#24201D] bg-white rounded-md shadow-md hover:bg-[#FDFBF7] hover:text-[#A62626] transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>

                      <button
                        onClick={() => onInquireProduct(product.name)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#A62626] rounded-md shadow-md hover:bg-[#8C1F1F] transition-all"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Metadata and Description */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Category Metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#7A7067] mb-1.5">
                        <span className="font-semibold uppercase tracking-wider text-[11px] text-[#A62626]">
                          {product.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{product.material.split('(')[0].trim()}</span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => onOpenQuickView(product)}
                        className="font-serif text-xl font-normal text-[#24201D] group-hover:text-[#A62626] transition-colors cursor-pointer leading-snug"
                      >
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-[#5E5750] mt-2 line-clamp-2 leading-relaxed font-normal">
                        {product.description}
                      </p>

                      {/* Size Callout */}
                      <div className="mt-4 pt-3 border-t border-[#EFEAE2] flex flex-col gap-1 text-[11px] text-[#7A7067]">
                        <div className="flex justify-between">
                          <span className="font-medium text-[#4A433D]">Dimensions:</span>
                          <span className="tabular-nums font-mono text-[#24201D] truncate max-w-[65%] text-right">
                            {product.dimensions.split('|')[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Area: Color Swatches + Inquire Link */}
                    <div className="mt-5 pt-4 border-t border-[#EFEAE2] flex items-center justify-between gap-3">
                      {/* Available Swatches */}
                      <div className="flex items-center gap-1.5" title="Available Colours">
                        {product.colors.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className={`w-3.5 h-3.5 rounded-full border ${c.border ? 'border-[#DDD]' : 'border-[#999]/40'}`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                      </div>

                      {/* Inquire Button */}
                      <button
                        onClick={() => onInquireProduct(product.name)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#24201D] hover:text-[#A62626] transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-3 h-3 text-[#A62626]" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
