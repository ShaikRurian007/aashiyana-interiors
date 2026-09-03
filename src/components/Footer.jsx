import Link from 'next/link';
import { img } from '@/lib/assets';
import { BRAND, AREAS, SERVICES } from '@/lib/content';

const slug = (s) => s.toLowerCase().replace(/\s+/g, '-');

export default function Footer() {
  const logo = img('logo-stacked');
  const qr = img('instagram-qr');
  const grain = img('texture-newsprint-2');

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-coal">
      <img
        src={grain.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.04]"
      />
      <div className="container-luxe relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo.src} alt={logo.alt} className="h-11 w-11 rounded-sm bg-cream/95 object-contain p-1.5" />
              <span className="font-serif text-xl text-cream">Aashiyana <span className="text-gold">Living</span></span>
            </div>
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-cream/60">
              {BRAND.tagline}. Hyderabad’s turnkey interior design & build studio — residential,
              modular, civil and commercial.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/70 transition hover:text-gold">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 01-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.43 9.05 3.42 9.4 3.42 12.5c0 3.1 0 3.45.07 4.69.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.69 0-3.1 0-3.45-.07-4.69-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 00-.68-1.06 2.85 2.85 0 00-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4 15.15 4 12 4zm0 3.06A4.94 4.94 0 1112 17a4.94 4.94 0 010-9.88zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm5.16-.86a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" /></svg>
              </a>
              <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-cream/70 transition hover:text-gold">
                @{BRAND.instagram}
              </a>
            </div>
          </div>

          {/* contact */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-luxe text-gold">Get in touch</h4>
            <ul className="mt-5 space-y-3 font-sans text-sm text-cream/70">
              {BRAND.phones.map((p, i) => (
                <li key={p}><a href={`tel:${BRAND.phonesRaw[i]}`} className="transition hover:text-gold">{p}</a></li>
              ))}
              <li className="break-all"><a href={`mailto:${BRAND.email}`} className="transition hover:text-gold">{BRAND.email}</a></li>
              <li className="text-cream/55">Hyderabad, Telangana, India</li>
            </ul>
          </div>

          {/* service areas — internal links for local SEO */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-luxe text-gold">Areas we serve</h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-[13px] text-cream/60">
              {AREAS.slice(0, 12).map((a) => (
                <li key={a}>
                  <Link href={`/interior-designers-in-${slug(a)}/`} className="transition hover:text-gold">
                    {a}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/interior-designers-in-hyderabad/" className="mt-4 inline-block font-sans text-[13px] text-gold/90 underline-offset-4 hover:underline">
              All Hyderabad areas →
            </Link>
          </div>

          {/* QR */}
          <div className="md:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-luxe text-gold">Follow our work</h4>
            <img src={qr.src} alt={qr.alt} width={qr.width} height={qr.height} className="mt-5 w-32 rounded-sm" />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-xs text-cream/45">
            © {2026} {BRAND.name}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/45">
            Interior Designers in Hyderabad · Modular Kitchens · Turnkey Interiors
          </p>
        </div>
      </div>
    </footer>
  );
}
