# Truly M — Stories Crafted by Hand (Prototype Implementation Plan)

Truly M is an editorial, high-craft digital storefront and prototype for a luxury Indian home textiles and contemporary living brand. It pairs tactile editorial storytelling, an interactive visual product catalog, and a bespoke product enquiry engine with an interactive client asset collection toolkit to streamline final asset handoff.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural decisions were aligned during Phase 1 clarification:

- **Navigation & Layout Structure**: Multi-section editorial story with sticky refined top bar, smooth category filters, interactive product cards, and immersive quick-view detail modals.
- **Client Asset & Content Collector**: Integrated toggleable drawer enabling the client to inspect placeholder copy, review the 8-point content checklist from the brief, live-preview custom image replacements, and export an asset dossier.
- **Brand Identity & Color Palette**: Heritage crimson red (`#A62626` / `#8B1E1E`) as the brand accent, paired with warm off-white linen (`#FBF9F5`), soft cream (`#F4EFE6`), neutral ash (`#9C928C`), and deep loom charcoal (`#23201E`).

---

### 1. Overview & Core Concept

- **What It Does**: Presents a showcase website prototype for Truly M that balances contemporary living aesthetics with traditional Indian loom craftsmanship. Features a hero campaign, category-driven visual collection catalog (Home Décor, Bed Linen, King Sheets, Queen Sheets, Table Linen, Placemats & Napkins), detailed product modals, an enquiry system ("Product Enquiry Folder"), and a dedicated wholesale/trade section.
- **Target Audience / Persona**: Female-centric audience and discerning homemakers interested in artisanal craftsmanship, sustainable textiles, and warm minimal interiors; interior designers and boutique retailers seeking wholesale partnerships.
- **Key Value**: Provides a production-grade prototype with persuasive human-written editorial copy, lifelike textile photography, and client collaboration affordances so the client can immediately approve the visual direction and provide final assets.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Editorial Journey**: Visitor arrives at the cinematic Hero section ("Stories Crafted by Hand"), encounters the brand philosophy, artisan loom heritage story, and material transparency features.
2. **Product Catalog & Quick-View**: Visitor browses filtered categories (Bed Linen, Table Linen, Placemats, etc.), inspects material dimensions and color variations in a modal, and triggers a contextual enquiry.
3. **Product Enquiry Folder**: When clicking "Enquire About This Product", a dedicated enquiry drawer opens with the selected product, SKU/material pre-populated, and fields for quantity, message, and B2B wholesale toggle.
4. **Wholesale & Trade Inquiries**: Dedicated section with low-friction wholesale quote requests for interior decorators and boutique hotel buyers.
5. **Client Review & Asset Tracker Drawer**: Floating discreet pill button at the bottom-right ("Client Review Mode") that toggles an interactive checklist tracking the 8 content items required by the brief, allowing upload simulations and feedback notes.

#### Visual Identity & Theme
- **Aesthetic Direction**: High-end editorial, tactile warmth, tranquil minimalism, and heritage loom textile heritage.
- **Color Palette & Distribution (60-30-10 Rule)**:
  - *60% Dominant Neutral Canvas*: Natural bleached linen `#FBF9F5` and warm eggshell `#F5F1EB`.
  - *30% Structural Surfaces & Typography*: Neutral ash `#9C928C`, slate stone `#E5DFD7`, and rich bark charcoal `#24201D` for legible typography.
  - *10% Brand Accent*: Heritage crimson red `#A62626` (and hover `#8E1E1E`) reserved for primary action points, subtle active indicators, and logo marks.
- **Typography**:
  - *Display / Headlines*: Editorial serif styling (`Cormorant Garamond` / `Playfair Display`) with balanced word wrap and generous line pacing.
  - *Body & Interface*: `Plus Jakarta Sans` / clean geometric sans for crisp readability, paired with tabular numerals (`tabular-nums`) for dimensions and measurements.
- **Spatial Composition & Motion**:
  - Full-width desktop baseline with generous container margins.
  - Subtle micro-animations via `motion` (gentle fades, slide-in quick-views, and image zoom on hover $\le 200\text{ms}$).
  - Strict anti-slop rules: No glowing pulsing dots, no code-like prefixes, no static pill badge spam, and no fake status tickers.

---

### 3. Key Product Decisions & Trade-Offs

- **Single-Page Editorial Flow with Dedicated Modals vs. Multi-Page Routing**:
  - *Chosen*: Single cohesive editorial page with category anchor filtering and high-performance slide-over quick-view drawers.
  - *Why*: Provides an unbroken storytelling flow for the prototype presentation without navigation friction, while allowing full inspection of individual product specifications.
- **Embedded Client Asset Collection Toolkit**:
  - *Chosen*: A non-intrusive floating control allowing the reviewer to toggle "Client Review Mode", which highlights placeholder assets and presents the content collection checklist directly inside the live interface.
  - *Why*: Solves the user's explicit pain point ("extract information and resources from customer to make changes in the website") without disrupting the customer-facing beauty of the prototype.
- **Contextual Product Enquiry System**:
  - *Chosen*: "Product Enquiry Folder" modal that captures customer details and automatically preserves product context, variant choice, and quantity.
  - *Why*: Aligns with the brief's requirement to track customer purchase intent and B2B trade inquiries without requiring an e-commerce checkout gateway during early prototyping.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                              App Header                                │
│       Truly M Wordmark  ───  Story · Collections · Craft · Contact     │
│                 [Enquire / Wholesale Action]                           │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
┌──────────────┐             ┌──────────────┐             ┌──────────────┐
│ Hero Section │             │ Story & Loom │             │ Collections  │
│  Lifestyle   │             │   Heritage   │             │   Catalog    │
│  Photograph  │             │  Craft Story │             │  (Filtered)  │
└──────────────┘             └──────────────┘             └──────┬───────┘
                                                                 │
                                                    ┌────────────┴───────────┐
                                                    ▼                        ▼
                                            ┌───────────────┐        ┌───────────────┐
                                            │ Product Modal │        │ Enquiry Drawer│
                                            │ Quick View    │───────►│ Pre-populated │
                                            │ Specs/Colors  │        │ Form & Folder │
                                            └───────────────┘        └───────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
┌──────────────┐             ┌──────────────┐             ┌──────────────┐
│  Wholesale   │             │ Client Asset │             │ Brand Footer │
│  & B2B Trade │             │  Collector   │             │  & Inquiries │
│  Section     │             │  (Tool Mode) │             │  Information │
└──────────────┘             └──────────────┘             └──────────────┘
```

#### Data Entities & Collections
1. **Products Data**: Structured catalog items covering Home Décor, Bed Linen (King/Queen Sheets), Table Linen, and Placemats & Napkins with authentic descriptions, dimensions (e.g., 275cm x 275cm for King Sheets), yarn counts (100% Belgian flax / organic handloom cotton), color swatches, and artisan origin notes.
2. **Enquiries Store**: Client-side reactive store for submitted enquiries with status, customer contact, product references, and wholesale specifications.
3. **Client Asset Checklist**: Interactive tracking store for the 8 items from Section 5 of the client brief (High-res logo, category photos, product copy, dimension specs, founder story, contact details, wholesale MOQs, visual moodboards).

#### Visual Asset Plan (`generate_image` batch)
In the implementation turn, high-fidelity lifestyle and textile imagery will be generated in a single parallel batch:
1. `hero_linen_living`: Contemporary sunlit living room with draped raw Belgian linen throws and textured cushions.
2. `artisan_loom_weaving`: High-detail documentary shot of artisan hands operating an Indian wooden handloom shuttle with raw neutral yarn.
3. `bed_linen_sheets`: Layered neutral washed linen bed with crisp king sheets and terracotta/crimson accent piping.
4. `table_linen_dining`: Minimalist dining table setup with hand-stitched linen tablecloth, napkins, and stoneware ceramics.
5. `placemats_napkins_set`: Flat-lay composition of hand-embroidered linen placemats and folded napkins with artisan texture.
