import { img } from '@/lib/assets';
import ParallaxImage from './ParallaxImage';

// One stage of the scroll journey. Renders an editorial intro, an immersive
// full-bleed parallax banner, and a masonry gallery — using every photo.
export default function JourneySection({ scene, index }) {
  const images = scene.slugs.map((s) => img(s));
  const hero = images[0];
  const banner = images[1] || images[0];
  const rest = images.slice(2);
  const num = String(index + 2).padStart(2, '0'); // door is 01

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

      {/* immersive full-bleed banner */}
      {images.length > 1 && (
        <div className="relative mt-16 md:mt-24">
          <ParallaxImage image={banner} strength={14} overlay className="h-[52vh] w-full md:h-[68vh]" />
          <div className="pointer-events-none absolute inset-0 flex items-end">
            <div className="container-luxe pb-8 md:pb-12">
              <p className="font-serif text-3xl text-cream/95 md:text-5xl">{scene.title}</p>
            </div>
          </div>
        </div>
      )}

      {/* gallery — every remaining photo */}
      {rest.length > 0 && (
        <div className="container-luxe mt-12 md:mt-20">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {rest.map((image, i) => (
              <figure
                key={image.src + i}
                className="reveal group relative break-inside-avoid overflow-hidden rounded-sm"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/0 transition group-hover:ring-gold/40" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/80 to-transparent p-4 text-xs uppercase tracking-[0.15em] text-cream/0 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-cream/85 group-hover:opacity-100">
                  {scene.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
