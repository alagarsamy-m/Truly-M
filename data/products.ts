export interface ProductColor {
  name: string;
  hex: string;
  border?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: 'Home Décor' | 'Bed Linen' | 'King Sheets' | 'Queen Sheets' | 'Table Linen' | 'Placemats & Napkins';
  subtitle: string;
  description: string;
  craftStory: string;
  material: string;
  dimensions: string;
  threadCount?: string;
  care: string;
  leadTime: string;
  priceEstimate: string;
  badge?: string;
  colors: ProductColor[];
  imageUrl: string;
  imageType: 'bedding' | 'tablecloth' | 'placemat' | 'cushion' | 'curtains' | 'throw';
  texturePattern: 'herringbone' | 'plain-weave' | 'waffle' | 'hemstitch' | 'embroidery';
}

export const CATEGORIES = [
  'All Collections',
  'Bed Linen',
  'King Sheets',
  'Queen Sheets',
  'Table Linen',
  'Placemats & Napkins',
  'Home Décor',
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'truly-k01',
    name: 'Aravalli Washed Linen King Set',
    category: 'King Sheets',
    subtitle: 'Pure washed European flax, woven on Indian looms',
    description: 'Soft from day one. Made with pure linen that stays cool in summer and cozy warm in winter.',
    craftStory: 'Woven slowly on wooden looms in Rajasthan and finished with durable double hems.',
    material: '100% Pure Flax Linen (175 GSM)',
    dimensions: 'Flat: 275 × 275 cm | Fitted: 180 × 200 × 40 cm | 2 Pillowcases: 50 × 75 cm',
    threadCount: '175 GSM stonewashed',
    care: 'Warm machine wash. Line dry in shade or tumble dry low. No ironing needed.',
    leadTime: 'In stock · Dispatches in 2–3 days',
    priceEstimate: 'INR 14,500 / $175 USD',
    badge: 'Bestseller',
    colors: [
      { name: 'Natural Oatmeal', hex: '#E6DFC8' },
      { name: 'Neutral Ash', hex: '#9C928C' },
      { name: 'Soft Chalk White', hex: '#F9F8F5', border: true },
      { name: 'Crimson Stitch', hex: '#A62626' }
    ],
    imageUrl: '/images/bed-king.jpg',
    imageType: 'bedding',
    texturePattern: 'plain-weave'
  },
  {
    id: 'truly-q01',
    name: 'Serena Muted Linen Queen Set',
    category: 'Queen Sheets',
    subtitle: 'Hand-hemstitched edges with deep mattress pockets',
    description: 'Designed for deep, comfortable sleep. Includes fitted sheet with deep corners and two matching pillow shams.',
    craftStory: 'Gently hand-dyed with natural eco-dyes that protect the texture of natural linen fibers.',
    material: '100% Belgian Flax with Organic Cotton accents',
    dimensions: 'Duvet: 230 × 220 cm | Fitted: 150 × 200 × 38 cm | 2 Pillowcases: 50 × 75 cm',
    threadCount: '170 GSM',
    care: 'Gentle cycle wash. Dries quickly and gets softer after every wash.',
    leadTime: 'In stock · Dispatches in 2–3 days',
    priceEstimate: 'INR 12,800 / $155 USD',
    colors: [
      { name: 'Soft Sand', hex: '#DED6C7' },
      { name: 'Muted Sage', hex: '#B8C2B4' },
      { name: 'Neutral Ash', hex: '#9C928C' },
      { name: 'Raw Ivory', hex: '#F7F4EE', border: true }
    ],
    imageUrl: '/images/bed-queen.jpg',
    imageType: 'bedding',
    texturePattern: 'hemstitch'
  },
  {
    id: 'truly-tl01',
    name: 'Varanasi Hand-Loomed Tablecloth',
    category: 'Table Linen',
    subtitle: 'Heirloom table cover with hand-pulled thread borders',
    description: 'A beautiful linen centerpiece for your dining table. Drapes naturally and turns every meal into a special occasion.',
    craftStory: 'Hand-woven by women artisans in Uttar Pradesh. Every corner is carefully folded and stitched by hand.',
    material: '60% Pure Flax Linen, 40% Hand-Spun Cotton',
    dimensions: '160 × 260 cm (Seats 6–8) / 160 × 320 cm (Seats 10–12)',
    care: 'Machine wash warm. Lay flat to dry.',
    leadTime: 'In stock · Custom lengths on request',
    priceEstimate: 'INR 6,900 / $85 USD',
    badge: 'Signature Piece',
    colors: [
      { name: 'Unbleached Flax', hex: '#D6CDBF' },
      { name: 'Neutral Ash', hex: '#9C928C' },
      { name: 'Terracotta Red', hex: '#9E6858' },
      { name: 'Pure Chalk', hex: '#FAFAF7', border: true }
    ],
    imageUrl: '/images/tablecloth.jpg',
    imageType: 'tablecloth',
    texturePattern: 'plain-weave'
  },
  {
    id: 'truly-pn01',
    name: 'Kutch Botanical Placemats & Napkins (Set of 6)',
    category: 'Placemats & Napkins',
    subtitle: 'Tone-on-tone embroidery on double-layered flax linen',
    description: 'Protect your table with elegant double-layered placemats and matching napkins. Stays flat and looks timeless.',
    craftStory: 'Detailed with delicate floral sprigs hand-stitched by skilled embroidery artisans in Kutch.',
    material: 'Pure Flax Linen with silk-cotton embroidery',
    dimensions: 'Placemats: 35 × 48 cm | Napkins: 45 × 45 cm',
    care: 'Machine wash gentle. Iron damp for a crisp look or leave natural.',
    leadTime: 'Sets of 6 or 12 ready to ship',
    priceEstimate: 'INR 4,800 / $58 USD (Set of 6)',
    badge: 'Hand Embroidered',
    colors: [
      { name: 'Warm Biscuit', hex: '#C9BAA3' },
      { name: 'Heritage Crimson', hex: '#A62626' },
      { name: 'Ash Grey', hex: '#9C928C' }
    ],
    imageUrl: '/images/placemats.jpg',
    imageType: 'placemat',
    texturePattern: 'embroidery'
  },
  {
    id: 'truly-hd01',
    name: 'Malabar Waffle Linen Couch & Bed Throw',
    category: 'Home Décor',
    subtitle: 'Honeycomb weave for cozy texture and weight',
    description: 'An inviting blanket to wrap yourself in on the couch or fold at the foot of your bed. Warm yet breathable.',
    craftStory: 'Woven with extra-long yarn on wide handlooms, pre-shrunk in small batches for deep honeycomb softness.',
    material: '100% Pre-washed European Flax Linen (320 GSM)',
    dimensions: '220 × 260 cm (Generous sofa throw / summer quilt)',
    care: 'Machine wash cool. Fluffs up softer with every wash.',
    leadTime: 'In stock · Dispatches in 2 days',
    priceEstimate: 'INR 9,500 / $115 USD',
    colors: [
      { name: 'Neutral Ash', hex: '#9C928C' },
      { name: 'Crimson Accent', hex: '#8B2C2C' },
      { name: 'Warm Cream', hex: '#F0ECE1', border: true }
    ],
    imageUrl: '/images/waffle-throw.jpg',
    imageType: 'throw',
    texturePattern: 'waffle'
  },
  {
    id: 'truly-bl02',
    name: 'Jaipur Block-Dobby Bed Linen Set',
    category: 'Bed Linen',
    subtitle: 'Subtle micro-texture with genuine wooden button ties',
    description: 'Simple and calming for your bedroom. Features interior corner ties so your duvet never bunches up inside.',
    craftStory: 'Woven in Bagru near Jaipur on heritage wooden pedal looms.',
    material: '85% Washed Flax, 15% Organic Cotton',
    dimensions: 'Duvet: 260 × 240 cm | Fitted: 180 × 200 cm | 2 Shams: 50 × 90 cm',
    threadCount: '185 GSM',
    care: 'Machine wash gentle. Line dry naturally.',
    leadTime: 'In stock · Dispatches in 2 days',
    priceEstimate: 'INR 16,200 / $195 USD',
    colors: [
      { name: 'Flax Dune', hex: '#DACFBC' },
      { name: 'Ash Grey', hex: '#9C928C' },
      { name: 'Heritage Crimson', hex: '#A62626' }
    ],
    imageUrl: '/images/bed-king.jpg',
    imageType: 'bedding',
    texturePattern: 'plain-weave'
  },
  {
    id: 'truly-hd02',
    name: 'Nilgiri Hand-Stitched Cushion Covers (Pair of 2)',
    category: 'Home Décor',
    subtitle: 'Slub linen with contrast kantha running stitches',
    description: 'Elevate your sofa or reading chair. Made with textured linen and finished with delicate hand-stitched borders.',
    craftStory: 'Stitched by women craft collectives practicing traditional kantha needlework.',
    material: 'Pure Heavyweight Linen with Cotton Threadwork',
    dimensions: '50 × 50 cm / 40 × 60 cm',
    care: 'Spot clean or gentle machine wash.',
    leadTime: 'In stock · Dispatches immediately',
    priceEstimate: 'INR 3,400 / $42 USD (Pair)',
    colors: [
      { name: 'Neutral Ash', hex: '#9C928C' },
      { name: 'Crimson Stitch', hex: '#A62626' },
      { name: 'Dark Indigo', hex: '#2A303A' }
    ],
    imageUrl: '/images/cushions.jpg',
    imageType: 'cushion',
    texturePattern: 'embroidery'
  },
  {
    id: 'truly-tl02',
    name: 'Chettinad Hemstitched Dinner Napkins (Set of 8)',
    category: 'Placemats & Napkins',
    subtitle: 'Hand-pulled threads with classic ladder stitch borders',
    description: 'Generously sized dinner napkins that feel luxurious. Perfect for everyday family dinners or hosting friends.',
    craftStory: 'Every single napkin is finished with hand-pulled thread loops along the edges.',
    material: '100% Belgian Flax (160 GSM)',
    dimensions: '50 × 50 cm',
    care: 'Machine wash 40°C. Gets softer with every wash.',
    leadTime: 'In stock',
    priceEstimate: 'INR 4,200 / $50 USD (Set of 8)',
    badge: 'Dining Essential',
    colors: [
      { name: 'Chalk White', hex: '#FDFBF7', border: true },
      { name: 'Neutral Ash', hex: '#9C928C' },
      { name: 'Warm Wheat', hex: '#DED3BF' }
    ],
    imageUrl: '/images/placemats.jpg',
    imageType: 'placemat',
    texturePattern: 'hemstitch'
  },
  {
    id: 'truly-hd03',
    name: 'Sheer Gossamer Linen Curtains',
    category: 'Home Décor',
    subtitle: 'Gently softens sunlight with airy natural flax drape',
    description: 'Fills your rooms with warm, diffused natural light while keeping daytime privacy. Hangs with effortless, relaxed grace.',
    craftStory: 'Spun from sheer unbleached flax threads, keeping the organic texture of the plant.',
    material: '100% Sheer Flax Linen (115 GSM open weave)',
    dimensions: 'Single Panel: 140 × 260 cm / 140 × 300 cm',
    care: 'Cold hand wash or gentle cycle. Hang damp to drape without ironing.',
    leadTime: 'In stock · Custom lengths in 7 days',
    priceEstimate: 'INR 5,600 / $68 USD (Per Panel)',
    colors: [
      { name: 'Sunlit Natural', hex: '#F3EEDF' },
      { name: 'Soft Mist Ash', hex: '#9C928C' },
      { name: 'Pure White', hex: '#FFFFFF', border: true }
    ],
    imageUrl: '/images/curtains.jpg',
    imageType: 'curtains',
    texturePattern: 'plain-weave'
  }
];

export interface EnquiryRecord {
  id: string;
  customerName: string;
  emailOrPhone: string;
  productName: string;
  productCategory: string;
  quantityRequired: number;
  message: string;
  isWholesale?: boolean;
  businessName?: string;
  createdAt: string;
}

export interface ClientChecklistItem {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'provided' | 'in_review';
  category: string;
  placeholderValue: string;
}

export const INITIAL_CLIENT_CHECKLIST: ClientChecklistItem[] = [
  {
    id: 1,
    title: 'Truly M Logo in High Resolution',
    description: 'Vector SVG or high-res transparent PNG of the official Truly M logo.',
    status: 'provided',
    category: 'Brand Identity',
    placeholderValue: 'Generated official Truly M luxury logo with needle thread loop and crimson accent.'
  },
  {
    id: 2,
    title: 'Product Photos Organised by Category',
    description: 'Photos for Bed Linen, Sheets, Table Linen, Placemats, and Home Décor.',
    status: 'provided',
    category: 'Media Assets',
    placeholderValue: 'Real high-definition editorial lifestyle and product photography loaded.'
  },
  {
    id: 3,
    title: 'Product Names and Final Descriptions',
    description: 'Approved names and descriptions for your launch catalogue.',
    status: 'in_review',
    category: 'Product Copy',
    placeholderValue: 'Simple, human-written descriptions with dimensions and care guides ready.'
  },
  {
    id: 4,
    title: 'Material, Size and Colour/Variant Details',
    description: 'Confirmed fabric compositions (e.g. 100% Belgian flax) and sizes.',
    status: 'in_review',
    category: 'Specifications',
    placeholderValue: 'Standard King (275×275cm) and Queen (230×220cm) dimensions configured.'
  },
  {
    id: 5,
    title: 'Brand Story and Founder Information',
    description: 'Truly M origin story and artisan craft philosophy.',
    status: 'in_review',
    category: 'Storytelling',
    placeholderValue: 'Simple 3-part story on Indian handlooms, slow living, and natural fibers.'
  },
  {
    id: 6,
    title: 'Contact Details and Business Email',
    description: 'Official customer support email, phone number, and studio address.',
    status: 'in_review',
    category: 'Contact',
    placeholderValue: 'care@trulym.com, Jaipur & Delhi studio address.'
  },
  {
    id: 7,
    title: 'Wholesale Information & Minimum Order Quantities',
    description: 'B2B boutique pricing guidelines and wholesale order quantities.',
    status: 'in_review',
    category: 'Trade & B2B',
    placeholderValue: 'Bespoke wholesale inquiry form with low 15-unit MOQ and swatch deck requests.'
  },
  {
    id: 8,
    title: 'Reference Websites & Preferred Visual Styles',
    description: 'Visual direction from brief: neutral ash (#9C928C), soft grey, warm beige & red accent.',
    status: 'provided',
    category: 'Design Reference',
    placeholderValue: 'Visual palette matched 100% to brief specs.'
  }
];
