import manifest from '@/data/manifest.json';
import { BRAND } from '@/lib/content';

// Prefix a public path with the configured basePath so assets resolve
// correctly when the site is served from /<repo> on GitHub Pages.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE}${path}`;
}

// Fully-qualified absolute URL for metadata (canonical, OG, JSON-LD).
// BRAND.url already includes any project subpath, so we never add basePath here.
export function absUrl(path = '') {
  if (/^https?:\/\//.test(path)) return path;
  return `${BRAND.url}${path}`;
}

// Look up one image record by slug, with basePath-resolved src.
export function img(slug) {
  const m = manifest[slug];
  if (!m) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('[assets] missing image slug:', slug);
    }
    return { src: '', alt: '', width: 1600, height: 1067, orientation: 'landscape' };
  }
  return {
    ...m,
    src: asset(m.src),
    srcSmall: m.srcSmall ? asset(m.srcSmall) : undefined,
  };
}

// All slugs in a category (sorted for stable order).
export function byCategory(category) {
  return Object.keys(manifest)
    .filter((k) => manifest[k].category === category)
    .sort()
    .map((k) => img(k));
}

export { manifest };
