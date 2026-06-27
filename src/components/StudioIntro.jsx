import { img } from '@/lib/assets';
import { BRAND, STATS } from '@/lib/content';

export default function StudioIntro() {
  const logo = img('logo-stacked');
  const grain = img('texture-facets');

  return (
    <section id="studio" className="relative overflow-hidden bg-coal py-24 md:py-36">
      {/* faint decorative grain */}
      <img
        src={grain.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.06]"
      />
      <div className="container-luxe relative grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow reveal">The Studio</p>
          <h2 className="heading-lg reveal mt-5 text-cream">
            One team, from <span className="text-gold-gradient">bare structure</span> to the home you move into.
          </h2>
        </div>
        <div className="reveal flex flex-col justify-center">
          <p className="font-sans text-[15px] leading-relaxed text-cream/75">
            {BRAND.description}
          </p>
          <p className="mt-5 font-sans text-[15px] leading-relaxed text-cream/60">
            Design, material sourcing, civil work, modular furniture, quality control and timely
            delivery — handled under one accountable roof in {BRAND.city}. No coordinating five
            vendors. One studio that designs it, builds it, and hands you the keys.
          </p>
        </div>
      </div>

      <div className="container-luxe relative mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-gold/15 sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.label} className="reveal bg-ink/40 px-8 py-10 text-center">
            <p className="font-serif text-3xl text-gold md:text-4xl">{s.value}</p>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-cream/55">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
