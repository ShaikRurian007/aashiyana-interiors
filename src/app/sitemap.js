import { BRAND } from '@/lib/content';
import { LOCALITIES } from '@/lib/localities';

export default function sitemap() {
  const base = BRAND.url.replace(/\/$/, '');
  const now = '2026-06-27';

  const home = { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 };
  const pages = LOCALITIES.map((l) => ({
    url: `${base}/${l.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: l.hub ? 0.9 : 0.7,
  }));

  return [home, ...pages];
}
