'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Image inside a fixed-size frame with a gentle scroll parallax.
export default function ParallaxImage({
  image,
  className = '',
  strength = 10,
  eager = false,
  overlay = false,
}) {
  const frame = useRef(null);
  const el = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: 'none',
          scrollTrigger: {
            trigger: frame.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, frame);
    return () => ctx.revert();
  }, [strength]);

  return (
    <div ref={frame} className={`relative overflow-hidden ${className}`}>
      <img
        ref={el}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? 'eager' : 'lazy'}
        className="absolute left-0 top-[-12%] h-[124%] w-full object-cover"
      />
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      )}
    </div>
  );
}
