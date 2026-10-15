'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '@/data/products';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedCategories } from '@/components/FeaturedCategories';
import { StorySection } from '@/components/StorySection';
import { CatalogSection } from '@/components/CatalogSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ProductQuickViewModal } from '@/components/ProductQuickViewModal';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Collections');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('');

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProduct = (productDetails: string) => {
    setContactSubject(productDetails);
    scrollToSection('contact');
  };

  const handleExploreCategory = (category: string) => {
    setSelectedCategory(category);
    scrollToSection('collections');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#24201D] flex flex-col relative selection:bg-[#A62626]/10 selection:text-[#A62626]">
      {/* Top Bar Navigation */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Website Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCollections={() => scrollToSection('collections')}
          onInquireClick={() => scrollToSection('contact')}
          onSelectHotspotProduct={(productName) => setContactSubject(productName)}
        />

        {/* Featured Collections Introduction */}
        <FeaturedCategories onSelectCategory={handleExploreCategory} />

        {/* The Truly M Story & Indian Craftsmanship */}
        <StorySection />

        {/* Complete Collections Catalogue */}
        <CatalogSection
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenQuickView={setQuickViewProduct}
          onInquireProduct={handleInquireProduct}
        />

        {/* Simple & Focused Contact & Inquiries Section */}
        <ContactSection prefilledProduct={contactSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Quick-View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onInquire={handleInquireProduct}
      />
    </div>
  );
}
