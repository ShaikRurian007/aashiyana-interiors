'use client';

import { useEffect, useState } from 'react';
import { BRAND } from '@/lib/content';
import { img } from '@/lib/assets';

const LINKS = [
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#living' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#consult' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const logo = img('logo-stacked');

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -10 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-ink/85 backdrop-blur-md shadow-[0_1px_0_rgba(201,162,75,0.15)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-luxe flex items-center justify-between py-4">
        <a href="#top" onClick={(e) => go(e, '#top')} className="flex items-center gap-3">
          <img src={logo.src} alt={logo.alt} className="h-9 w-9 rounded-sm bg-cream/95 object-contain p-1" />
          <span className="font-serif text-lg tracking-wide text-cream">
            Aashiyana <span className="text-gold">Living</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="font-sans text-xs uppercase tracking-[0.15em] text-cream/80 transition hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a href="#consult" onClick={(e) => go(e, '#consult')} className="btn-gold !py-2.5 !text-xs">
            Free Consultation
          </a>
        </div>

        <button
          className="md:hidden text-cream"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-7 bg-cream transition ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-px w-7 bg-cream transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-7 bg-cream transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-ink/95 backdrop-blur-md transition-[max-height] duration-500 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-luxe flex flex-col gap-5 py-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="font-sans text-sm uppercase tracking-[0.15em] text-cream/85"
            >
              {l.label}
            </a>
          ))}
          <a href="#consult" onClick={(e) => go(e, '#consult')} className="btn-gold mt-2 w-full">
            Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
