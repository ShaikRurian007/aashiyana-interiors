// Single source of truth for all brand content (from the Aashiyana brand deck).

export const BRAND = {
  name: 'Aashiyana Living Interiors & Decors',
  shortName: 'Aashiyana Living',
  tagline: 'Design • Build • Elevate',
  city: 'Hyderabad',
  description:
    'Aashiyana Living Interiors & Decors is a comprehensive turnkey interior design studio based in Hyderabad — a one-stop solution provider handling everything from design and material sourcing to civil work, modular furniture, quality control and timely handover.',
  phones: ['+91 97003 32544', '+91 99491 41486'],
  phonesRaw: ['919700332544', '919949141486'],
  email: 'aashianainteriorsanddecors@gmail.com',
  instagram: 'aashiyanainteriorsanddecors',
  instagramUrl: 'https://www.instagram.com/aashiyanainteriorsanddecors',
  // Canonical site origin (no trailing slash). This is the live GitHub Pages URL.
  // To switch to a custom domain: set this to e.g. https://aashiyanainteriors.in,
  // add public/CNAME with that domain, and CI drops the basePath automatically.
  url: 'https://shaikrurian007.github.io/aashiyana-interiors',
  areaServed: 'Hyderabad, Telangana',
};

export const SERVICES = [
  {
    key: 'residential',
    title: 'Residential Interiors',
    blurb:
      'Full-home interiors crafted end-to-end — living rooms, bedrooms, dining and pooja spaces designed around how your family actually lives.',
  },
  {
    key: 'modular',
    title: 'Modular Furniture',
    blurb:
      'Factory-finished modular kitchens, wardrobes, TV units, vanities and pooja units built to last and tailored to your space.',
  },
  {
    key: 'civil',
    title: 'Civil & Construction',
    blurb:
      'RCC, brickwork, electrical, plumbing, tiling and waterproofing — structural work executed to spec with full quality control.',
  },
  {
    key: 'commercial',
    title: 'Office & Commercial',
    blurb:
      'Clinics, pharmacies, retail and office spaces designed and delivered turnkey — from 3D concept to a ready-to-operate fit-out.',
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Consult & Concept',
    body:
      'We understand your requirements, develop the concept design and share a transparent, itemised quote.',
  },
  {
    step: '02',
    title: 'Book Your Project',
    body:
      'Confirm your project with just 15% of the quote and we lock your design, timeline and material schedule.',
  },
  {
    step: '03',
    title: 'Production & Build',
    body:
      '50% of production cost begins the build; a further 30% follows on delivery as work moves on site.',
  },
  {
    step: '04',
    title: 'Handover',
    body:
      'Final quality checks, a walkthrough and handover of your finished home — with the closing 5% on completion.',
  },
];

// The scroll journey. Each scene maps real project photos to a room/stage.
// `slugs` reference keys in data/manifest.json.
export const JOURNEY = [
  {
    id: 'living',
    eyebrow: 'Step Inside',
    title: 'Living & Dining',
    body:
      'Marble feature walls, floating units and warm cove lighting — living spaces designed to host and to unwind.',
    slugs: [
      'living-tv-warm',
      'living-marble-tv-wall',
      'living-molding-classic',
      'foyer-double-doors',
      'foyer-console-gold',
      'dining-pooja-gold',
      'ceiling-jaali-detail',
    ],
  },
  {
    id: 'kitchen',
    eyebrow: 'The Heart of the Home',
    title: 'Modular Kitchens',
    body:
      'Sage-green shutters, quartz counters and intelligent storage — modular kitchens that are as functional as they are beautiful.',
    slugs: [
      'kitchen-sage-l-shape',
      'kitchen-sage-island',
      'kitchen-sage-marble',
      'kitchen-sage-glass-display',
      'kitchen-sage-tall-units',
    ],
  },
  {
    id: 'bedroom',
    eyebrow: 'Rest & Retreat',
    title: 'Bedrooms & Wardrobes',
    body:
      'Upholstered headboards, textured accent walls and full-height wardrobes — private retreats finished down to the last detail.',
    slugs: [
      'bedroom-curtains-grey',
      'bedroom-charcoal-wood',
      'bedroom-marble-accent',
      'bedroom-cove-textured',
      'bedroom-grey-headboard',
      'bedroom-bright-minimal',
      'bedroom-sliding-wardrobe',
      'bedroom-study-combo',
      'bedroom-study-nook',
      'bedroom-mirror-wall',
      'bedroom-grey-textured-wall',
      'bedroom-wood-panel',
      'wardrobe-glass-shutters',
      'wardrobe-blush-gloss',
      'wardrobe-open-shelving',
      'wardrobe-walkin-shelves',
      'wardrobe-white-utility',
      'wardrobe-sliding-demo',
      'vanity-oval-mirror',
      'vanity-marble-gold',
      'vanity-floating-desk',
      'pooja-arch-niche',
    ],
  },
  {
    id: 'bathroom',
    eyebrow: 'The Details',
    title: 'Bathrooms & Finishes',
    body:
      'Stone cladding, designer vanities and considered lighting — the finishing touches that elevate everyday rituals.',
    slugs: ['bathroom-stone-vanity', 'bathroom-grey-stone', 'bathroom-round-mirror'],
  },
  {
    id: 'civil',
    eyebrow: 'Built From the Ground Up',
    title: 'Civil & Construction',
    body:
      'From foundation and RCC to brickwork and staircases — we build the structure, not just the surface. One accountable team, start to finish.',
    slugs: [
      'construction-foundation',
      'construction-brickwork',
      'construction-rcc-slab',
      'staircase-rcc-structure',
      'door-civil-raw',
      'villa-elevation-day',
      'villa-elevation-street',
    ],
  },
  {
    id: 'commercial',
    eyebrow: 'Beyond the Home',
    title: 'Office & Commercial',
    body:
      'Clinics, pharmacies, salons and offices delivered turnkey — spaces designed to work as hard as the people in them.',
    slugs: [
      'office-executive-desk',
      'clinic-reception-desk',
      'clinic-consult-room',
      'clinic-treatment-room',
      'clinic-corridor-branding',
      'pharmacy-shelving',
      'retail-display-shelves',
      'salon-twin-vanity',
    ],
  },
];

export const STATS = [
  { value: 'Turnkey', label: 'Single accountable team' },
  { value: '100%', label: 'In-house design to handover' },
  { value: 'Hyderabad', label: 'Local studio, on-site QC' },
];

// Local SEO landing pages — Hyderabad neighbourhoods / micro-markets.
export const AREAS = [
  'Gachibowli', 'Kondapur', 'Madhapur', 'Kokapet', 'Manikonda',
  'Financial District', 'Nallagandla', 'Tellapur', 'Narsingi', 'Banjara Hills',
  'Jubilee Hills', 'Kukatpally', 'Miyapur', 'Bachupally', 'Nizampet',
  'Uppal', 'LB Nagar', 'Kompally', 'Shamshabad', 'Adibatla',
];
