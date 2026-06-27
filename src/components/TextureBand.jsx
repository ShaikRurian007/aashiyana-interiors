import { img } from '@/lib/assets';

// A slim full-bleed divider using one of the deck's mood textures as faint
// grain behind a single line of copy. Keeps every source image in play.
export default function TextureBand({ slug, children, tall = false }) {
  const tex = img(slug);
  return (
    <div className={`relative overflow-hidden bg-ink ${tall ? 'py-28 md:py-40' : 'py-16 md:py-24'}`}>
      <img
        src={tex.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08] grayscale"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink" />
      <div className="container-luxe relative text-center">
        <p className="reveal mx-auto max-w-3xl font-serif text-2xl font-light leading-snug text-cream/90 md:text-4xl">
          {children}
        </p>
      </div>
    </div>
  );
}
