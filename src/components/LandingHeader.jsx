import Link from 'next/link';
import { img } from '@/lib/assets';
import { BRAND } from '@/lib/content';

export default function LandingHeader() {
  const logo = img('logo-stacked');
  return (
    <header className="border-b border-gold/15 bg-ink/90 backdrop-blur-md">
      <nav className="container-luxe flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src={logo.src} alt={logo.alt} className="h-9 w-9 rounded-sm bg-cream/95 object-contain p-1" />
          <span className="font-serif text-lg tracking-wide text-cream">
            Aashiyana <span className="text-gold">Living</span>
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/" className="hidden font-sans text-xs uppercase tracking-[0.15em] text-cream/80 transition hover:text-gold sm:block">
            Home
          </Link>
          <a href={`tel:${BRAND.phonesRaw[0]}`} className="hidden font-sans text-xs uppercase tracking-[0.15em] text-cream/80 transition hover:text-gold md:block">
            {BRAND.phones[0]}
          </a>
          <a href="#consult" className="btn-gold !py-2.5 !text-xs">Free Consultation</a>
        </div>
      </nav>
    </header>
  );
}
