import { SERVICES } from '@/lib/content';

const ICONS = {
  residential: 'M3 21V9l9-6 9 6v12h-6v-7H9v7H3z',
  modular: 'M3 4h18v6H3V4zm0 10h18v6H3v-6zM7 7h0M7 17h0',
  civil: 'M4 21V8l8-5 8 5v13M9 21v-6h6v6',
  commercial: 'M3 21h18M5 21V7l7-4 7 4v14M9 10h0M9 14h0M15 10h0M15 14h0',
};

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 md:py-32">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">What We Do</p>
          <h2 className="heading-lg reveal mt-5 text-cream">
            Turnkey interiors, end to end.
          </h2>
          <p className="reveal mt-5 font-sans text-[15px] leading-relaxed text-cream/65">
            From a single room refresh to ground-up construction — every discipline your home needs,
            delivered by one studio in Hyderabad.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-gold/15 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.key}
              className="reveal group relative bg-coal/60 p-8 transition-colors duration-500 hover:bg-coal"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 stroke-gold"
                fill="none"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={ICONS[s.key]} />
              </svg>
              <h3 className="mt-6 font-serif text-2xl text-cream">{s.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-cream/60">{s.blurb}</p>
              <div className="mt-6 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
