import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import { BRAND } from '@/lib/content';
import { asset, absUrl } from '@/lib/assets';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

const title = 'Best Interior Designers in Hyderabad | Aashiyana Interiors & Decors';
const description =
  'Aashiyana Interiors & Decors — Hyderabad’s turnkey interior design studio. Residential interiors, modular kitchens & wardrobes, civil works and commercial fit-outs. Free design consultation. Book your home today.';

export const metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: title,
    template: '%s | Aashiyana Interiors & Decors',
  },
  description,
  keywords: [
    'interior designers in hyderabad',
    'best interior designers in hyderabad',
    'interior designers near me',
    'turnkey interiors hyderabad',
    'modular kitchen hyderabad',
    'home interior design hyderabad',
    'interior decorators hyderabad',
    'Aashiyana Interiors',
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  alternates: { canonical: `${BRAND.url}/` },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BRAND.url}/`,
    siteName: BRAND.name,
    title,
    description,
    images: [{ url: absUrl('/images/living/living-marble-tv-wall.webp'), width: 1600, height: 1067, alt: BRAND.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [absUrl('/images/living/living-marble-tv-wall.webp')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: asset('/images/logo/logo-square.webp'),
    apple: asset('/images/logo/logo-square.webp'),
  },
};

export const viewport = {
  themeColor: '#14110e',
  width: 'device-width',
  initialScale: 1,
};

function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesignBusiness',
    '@id': `${BRAND.url}/#business`,
    name: BRAND.name,
    image: absUrl('/images/living/living-marble-tv-wall.webp'),
    logo: absUrl('/images/logo/logo-square.webp'),
    url: BRAND.url,
    telephone: BRAND.phones[0],
    email: BRAND.email,
    priceRange: '₹₹₹',
    description: BRAND.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'City', name: 'Hyderabad' },
    sameAs: [BRAND.instagramUrl],
    slogan: BRAND.tagline,
    knowsAbout: [
      'Residential Interior Design',
      'Modular Kitchens',
      'Modular Wardrobes',
      'Civil Construction',
      'Commercial Interiors',
      'Turnkey Interiors',
    ],
    makesOffer: [
      'Residential Interiors',
      'Modular Furniture',
      'Civil & Construction',
      'Office & Commercial Interiors',
    ].map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans antialiased">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
