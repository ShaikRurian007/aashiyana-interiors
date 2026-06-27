import { BRAND } from '@/lib/content';

export default function robots() {
  const base = BRAND.url.replace(/\/$/, '');
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
