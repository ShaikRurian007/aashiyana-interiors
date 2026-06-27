import { img } from '@/lib/assets';
import { PROCESS } from '@/lib/content';
import ParallaxImage from './ParallaxImage';

export default function Process() {
  const blueprint = img('blueprint-hands');
  const keys = img('house-keys-handover');
  const grain = img('texture-newsprint');

  return (
    <section id="process" className="relative overflow-hidden bg-coal py-24 md:py-32">
      <img
        src={grain.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.05]"
      />
      <div className="container-luxe relative">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">How It Works</p>
          <h2 className="heading-lg reveal mt-5 text-cream">
            A clear, staged process — and transparent payments.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* steps */}
          <ol className="relative">
            {PROCESS.map((p, i) => (
              <li key={p.step} className="reveal relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 font-serif text-lg text-gold">
                    {p.step}
                  </span>
                  {i < PROCESS.length - 1 && <span className="mt-1 w-px flex-1 bg-gold/20" />}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-serif text-2xl text-cream">{p.title}</h3>
                  <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-cream/65">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* imagery: design → handover */}
          <div className="flex flex-col gap-5">
            <ParallaxImage image={blueprint} overlay className="reveal h-64 w-full rounded-sm md:h-80" />
            <div className="reveal relative overflow-hidden rounded-sm">
              <ParallaxImage image={keys} className="h-56 w-full md:h-64" />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 to-transparent">
                <p className="p-6 font-serif text-xl text-cream">…and finally, the keys are yours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
