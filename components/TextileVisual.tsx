'use client';

import React, { useState } from 'react';

interface TextileVisualProps {
  type: 'bedding' | 'tablecloth' | 'placemat' | 'cushion' | 'curtains' | 'throw' | 'artisan-loom' | 'hero';
  title: string;
  pattern?: 'herringbone' | 'plain-weave' | 'waffle' | 'hemstitch' | 'embroidery';
  accentColor?: string;
  className?: string;
  imageUrl?: string;
  customImageUrl?: string;
}

export function TextileVisual({
  type,
  title,
  pattern = 'plain-weave',
  accentColor = '#A62626',
  className = '',
  imageUrl,
  customImageUrl,
}: TextileVisualProps) {
  const [imageError, setImageError] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  // If a custom uploaded image exists or a valid imageUrl exists and hasn't errored
  const activeImage = customImageUrl || imageUrl;
  const resolvedImage =
    activeImage && activeImage.startsWith('/') ? `${basePath}${activeImage}` : activeImage;

  if (resolvedImage && !imageError) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#F2EDE4] ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolvedImage}
          alt={title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle warm lighting vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 pointer-events-none" />
      </div>
    );
  }

  // High-tactile fallback SVG textile visual if image is unavailable
  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none bg-[#F7F4EE] flex items-center justify-center ${className}`}
      role="img"
      aria-label={`Visual depiction of ${title}`}
    >
      <div className="absolute inset-0 bg-radial from-[#FAF8F5] via-[#F2EDE4] to-[#E8E1D5] opacity-90" />

      <svg
        className="relative w-full h-full"
        viewBox="0 0 600 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="linen-weave" width="12" height="12" patternUnits="userSpaceOnUse">
            <line x1="0" y1="6" x2="12" y2="6" stroke="#9C928C" strokeWidth="0.75" strokeOpacity="0.25" />
            <line x1="6" y1="0" x2="6" y2="12" stroke="#9C928C" strokeWidth="0.75" strokeOpacity="0.25" />
            <circle cx="6" cy="6" r="0.7" fill="#8A807A" fillOpacity="0.3" />
          </pattern>
          <pattern id="waffle-weave" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="2" y="2" width="16" height="16" rx="2" stroke="#9C928C" strokeWidth="1" strokeOpacity="0.3" fill="none" />
            <line x1="2" y1="2" x2="18" y2="18" stroke="#8A807A" strokeWidth="0.5" strokeOpacity="0.2" />
          </pattern>
        </defs>

        {type === 'hero' && (
          <g>
            <rect width="600" height="450" fill="#F4EFE6" />
            <rect x="350" y="30" width="210" height="280" rx="3" fill="#E8E2D7" stroke="#D1C8BA" strokeWidth="2" opacity="0.6" />
            <rect x="180" y="240" width="380" height="150" rx="12" fill="#EAE4D9" />
            <rect x="180" y="240" width="380" height="150" fill="url(#linen-weave)" />
            <rect x="240" y="200" width="70" height="70" rx="8" fill="#F0ECE1" />
            <rect x="300" y="210" width="65" height="65" rx="8" fill="#DFD7CA" />
            <rect x="370" y="215" width="68" height="68" rx="8" fill="#9C928C" />
          </g>
        )}

        {(type === 'bedding' || type === 'throw' || type === 'cushion' || type === 'tablecloth' || type === 'placemat' || type === 'curtains' || type === 'artisan-loom') && (
          <g>
            <rect width="600" height="450" fill="#EDE7DC" />
            <rect width="600" height="450" fill="url(#linen-weave)" />
            <rect x="60" y="60" width="480" height="330" rx="12" fill="#FAF8F5" stroke="#D8D0C2" strokeWidth="2" />
            <circle cx="300" cy="225" r="40" fill={accentColor} opacity="0.1" />
            <text x="300" y="230" textAnchor="middle" fill="#24201D" fontFamily="serif" fontSize="18">
              {title}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
