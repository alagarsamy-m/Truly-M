import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Truly M — Stories Crafted by Hand | Luxury Home Textiles & Décor',
  description:
    'Handcrafted Indian textiles, pure linen beddings, table linens, and contemporary home décor. Rooted in artisanal craftsmanship, slow living, and modern elegance.',
  openGraph: {
    title: 'Truly M — Stories Crafted by Hand',
    description:
      'Handcrafted Indian textiles, pure linen beddings, and contemporary home décor.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truly M — Stories Crafted by Hand',
    description:
      'Handcrafted Indian textiles, pure linen beddings, and contemporary home décor.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FDFBF7] text-[#24201D] selection:bg-[#A62626]/10 selection:text-[#A62626]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
