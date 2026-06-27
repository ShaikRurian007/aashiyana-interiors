import { AREAS } from './content';

export const toSlug = (s) => s.toLowerCase().replace(/\s+/g, '-');

// Every local landing page slug. "hyderabad" is the city hub; the rest are
// neighbourhood / micro-market pages targeting "interior designers in <area>".
export const LOCALITIES = [
  { name: 'Hyderabad', slug: 'interior-designers-in-hyderabad', hub: true },
  ...AREAS.map((a) => ({
    name: a,
    slug: `interior-designers-in-${toSlug(a)}`,
    hub: false,
  })),
];

export function findLocality(slug) {
  return LOCALITIES.find((l) => l.slug === slug) || null;
}
