'use client';

import { useEffect, useState } from 'react';
import { img } from '@/lib/assets';
import ParallaxImage from './ParallaxImage';

// One stage of the scroll journey. Renders a compact section preview and an
// on-demand modal gallery so users can continue scrolling quickly.
export default function JourneySection({ scene, index }) {
  const images = scene.slugs.map((s) => img(s));
  const hero = images[0];
  const preview = images.slice(0, 3);
  const num = String(index + 2).padStart(2, '0'); // door is 01
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    if (!isGalleryOpen) return;
    const onEscape = (event) => {
      if (event.key === 'Escape') setIsGalleryOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [isGalleryOpen]);

  useEffect(() => {
    if (!isGalleryOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isGalleryOpen]);

  return (
    <section id={scene.id} className="relative bg-ink py-20 md:py-28">
      {/* intro: sticky text + tall hero */}
      <div className="container-luxe grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <div className="reveal flex items-center gap-4">
              <span className="font-serif text-2xl text-gold/70">{num}</span>
              <span className="hairline max-w-[80px]" />
              <p className="eyebrow">{scene.eyebrow}</p>
            </div>
            <h2 className="heading-lg reveal mt-5 text-cream">{scene.title}</h2>
            <p className="reveal mt-6 max-w-md font-sans text-[15px] leading-relaxed text-cream/70">
              {scene.body}
            </p>
            <a
              href="#consult"
              className="btn-ghost reveal mt-8"
              data-anchor
            >
              Design mine
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          <ParallaxImage
            image={hero}
            eager={index === 0}
            overlay
            className="reveal h-[58vh] w-full rounded-sm md:h-[78vh]"
          />
        </div>
      </div>

      <div className="container-luxe mt-12 md:mt-16">
        <div className="rounded-sm border border-gold/20 bg-coal/45 p-5 md:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-sans text-sm text-cream/75">
              Open this section gallery for all photos, then close it and continue scrolling.
            </p>
            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="btn-gold !py-2.5 !text-xs"
            >
              View all {images.length} photos
            </button>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {preview.map((image, i) => (
              <figure
                key={image.src + i}
                className="group relative overflow-hidden rounded-sm"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10 transition group-hover:ring-gold/40" />
              </figure>
            ))}
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <div className="fixed inset-0 z-[90] bg-ink/90 p-4 backdrop-blur-sm md:p-8">
          <div className="mx-auto h-full w-full max-w-6xl overflow-y-auto rounded-sm border border-gold/25 bg-coal p-5 md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{scene.eyebrow}</p>
                <h3 className="mt-2 font-serif text-3xl text-cream">{scene.title}</h3>
                <p className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-cream/60">
                  Press Esc or Close gallery to return and continue scrolling
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="rounded-full border border-gold/30 px-4 py-2 font-sans text-xs uppercase tracking-[0.12em] text-cream/85 transition hover:border-gold hover:text-gold"
              >
                Close gallery
              </button>
            </div>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
              {images.map((image, i) => (
                <figure
                  key={image.src + i}
                  className="group relative break-inside-avoid overflow-hidden rounded-sm"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading={i > 2 ? 'lazy' : 'eager'}
                    className="w-full"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
