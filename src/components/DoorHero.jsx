'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { img } from '@/lib/assets';
import { BRAND } from '@/lib/content';

export default function DoorHero() {
  const root = useRef(null);
  const scene = useRef(null);
  const leftLeaf = useRef(null);
  const rightLeaf = useRef(null);
  const leftShade = useRef(null);
  const rightShade = useRef(null);
  const interior = useRef(null);
  const copy = useRef(null);
  const hint = useRef(null);
  const seam = useRef(null);
  const welcome = useRef(null);

  const door = img('mandala-door');
  // Warm gold entryway revealed beyond the door — tonally matches the gold
  // mandala you just walked through (the cool grey TV wall clashed).
  const inside = img('foyer-console-gold');

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set([leftLeaf.current, rightLeaf.current], { transformStyle: 'preserve-3d' });
      gsap.set(interior.current, { scale: 1.2, autoAlpha: 0.35 });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=175%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. brand copy & hint clear, seam flares
      tl.to(copy.current, { autoAlpha: 0, y: -50, duration: 0.28 }, 0)
        .to(hint.current, { autoAlpha: 0, duration: 0.12 }, 0)
        .to(seam.current, { opacity: 1, duration: 0.12 }, 0)
        .to(seam.current, { opacity: 0, duration: 0.3 }, 0.18);

      // 2. doors swing open in 3D
      tl.to(leftLeaf.current, { rotateY: -108, duration: 1 }, 0.12)
        .to(rightLeaf.current, { rotateY: 108, duration: 1 }, 0.12)
        .to([leftShade.current, rightShade.current], { opacity: 0.6, duration: 1 }, 0.12);

      // 3. camera dollies through the opening into the interior
      tl.to(scene.current, { scale: 1.55, duration: 1.1 }, 0.12)
        .to(interior.current, { scale: 1, autoAlpha: 1, duration: 1 }, 0.12)
        .to(interior.current, { scale: 1.12, duration: 0.7 }, 1.05)
        .to([leftLeaf.current, rightLeaf.current], { autoAlpha: 0, duration: 0.35 }, 1.15);

      // 4. fade the welcome + scroll cue in AS the doors finish opening (no dead scroll)
      tl.fromTo(
        welcome.current,
        { autoAlpha: 0, y: 26 },
        { autoAlpha: 1, y: 0, duration: 0.35 },
        0.85
      );
    }, root);

    return () => ctx.revert();
  }, []);

  const leafBg = {
    backgroundImage: `url(${door.src})`,
    backgroundSize: '200% 100%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section
      ref={root}
      className="door-hero relative h-screen w-full overflow-hidden bg-ink"
      style={{ perspective: '1500px', perspectiveOrigin: '50% 45%' }}
      aria-label="Enter Aashiyana Living"
    >
      {/* interior revealed beyond the doors */}
      <img
        ref={interior}
        src={inside.src}
        alt={inside.alt}
        width={inside.width}
        height={inside.height}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="pointer-events-none absolute inset-0 bg-ink/35" />

      {/* the 3D door scene */}
      <div
        ref={scene}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="relative h-[100svh] max-h-[100svh]"
          style={{ aspectRatio: '1414 / 2121', transformStyle: 'preserve-3d' }}
        >
          {/* left leaf */}
          <div
            ref={leftLeaf}
            className="absolute left-0 top-0 h-full w-1/2 will-change-transform"
            style={{ ...leafBg, backgroundPosition: '0% 50%', transformOrigin: 'left center' }}
          >
            <div
              ref={leftShade}
              className="absolute inset-0 opacity-0"
              style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.65), rgba(0,0,0,0.05))' }}
            />
          </div>
          {/* right leaf */}
          <div
            ref={rightLeaf}
            className="absolute right-0 top-0 h-full w-1/2 will-change-transform"
            style={{ ...leafBg, backgroundPosition: '100% 50%', transformOrigin: 'right center' }}
          >
            <div
              ref={rightShade}
              className="absolute inset-0 opacity-0"
              style={{ background: 'linear-gradient(270deg, rgba(0,0,0,0.65), rgba(0,0,0,0.05))' }}
            />
          </div>
          {/* glowing centre seam where the leaves meet */}
          <div
            ref={seam}
            className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 opacity-0"
            style={{ background: 'linear-gradient(to bottom, transparent, #e3c77d, transparent)', boxShadow: '0 0 30px 6px rgba(227,199,125,0.7)' }}
          />
        </div>
      </div>

      {/* brand copy overlaid on the closed door */}
      <div
        ref={copy}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center"
      >
        {/* overall darken + focused radial scrim so copy stays legible over the door */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/80" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 62% 52% at 50% 44%, rgba(8,6,4,0.78), transparent 72%)' }}
        />
        <div className="relative px-6">
          <p className="mb-5 animate-fade-up font-sans text-xs uppercase tracking-luxe text-cream [text-shadow:0_2px_18px_rgba(0,0,0,0.95)]">
            <span className="text-gold-light">{BRAND.city}</span>
            <span className="mx-2 text-cream/50">•</span>
            Turnkey Interiors
          </p>
          <h1 className="heading-xl text-cream [text-shadow:0_4px_44px_rgba(0,0,0,0.9)]">
            <span className="block">Aashiyana Living</span>
            <span className="block text-gold-gradient">Interiors &amp; Decors</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-sans text-sm uppercase tracking-luxe text-cream/85 [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
            {BRAND.tagline}
          </p>
        </div>
      </div>

      {/* scroll hint */}
      <div
        ref={hint}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <p className="font-sans text-[11px] uppercase tracking-luxe text-cream/70">
          Scroll to open the door
        </p>
        <div className="mx-auto mt-3 h-10 w-[1px] bg-gradient-to-b from-gold to-transparent" />
      </div>

      {/* welcome cue — fades in once the door is open, guides the next scroll */}
      <div
        ref={welcome}
        className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-end pb-14 text-center opacity-0 md:pb-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
        <div className="relative px-6">
          <p className="font-sans text-xs uppercase tracking-luxe text-gold-light [text-shadow:0_2px_16px_rgba(0,0,0,0.9)]">
            Welcome inside
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-cream [text-shadow:0_3px_28px_rgba(0,0,0,0.9)] md:text-5xl">
            Now, let’s walk through your home
          </h2>
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="font-sans text-[11px] uppercase tracking-luxe text-cream/85 [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
              Keep scrolling to explore
            </span>
            <span className="flex h-10 w-6 justify-center rounded-full border border-gold/70 pt-2">
              <span className="h-2 w-1 animate-scrollwheel rounded-full bg-gold" />
            </span>
            <svg viewBox="0 0 24 24" className="h-5 w-5 animate-bob fill-none stroke-gold" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
