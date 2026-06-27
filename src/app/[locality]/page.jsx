import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCALITIES, findLocality } from '@/lib/localities';
import { BRAND, SERVICES, PROCESS } from '@/lib/content';
import { img, absUrl } from '@/lib/assets';
import LandingHeader from '@/components/LandingHeader';
import Services from '@/components/Services';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SmoothScroll from '@/components/SmoothScroll';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALITIES.map((l) => ({ locality: l.slug }));
}

export function generateMetadata({ params }) {
  const loc = findLocality(params.locality);
  if (!loc) return {};
  const where = loc.hub ? 'Hyderabad' : `${loc.name}, Hyderabad`;
  const title = `Best Interior Designers in ${where}`;
  const description = `Looking for the best interior designers in ${where}? Aashiyana Interiors & Decors offers turnkey home interiors, modular kitchens, wardrobes, civil works & commercial fit-outs in ${loc.name}. Free design consultation — call ${BRAND.phones[0]}.`;
  return {
    title,
    description,
    alternates: { canonical: `${BRAND.url}/${loc.slug}/` },
    openGraph: {
      title: `${title} | ${BRAND.name}`,
      description,
      url: `${BRAND.url}/${loc.slug}/`,
      images: [{ url: absUrl('/images/living/living-marble-tv-wall.webp') }],
    },
  };
}

const GALLERY = [
  'living-marble-tv-wall', 'kitchen-sage-island', 'bedroom-curtains-grey',
  'wardrobe-blush-gloss', 'bathroom-stone-vanity', 'foyer-double-doors',
  'clinic-reception-desk', 'villa-elevation-day',
];

const WHY = [
  { t: 'One accountable team', d: 'Design, civil work, modular furniture and finishing — all in-house. No vendor juggling.' },
  { t: 'Transparent pricing', d: 'Itemised quotes and a staged 15 / 50 / 30 / 5 payment plan. No surprises.' },
  { t: 'On-time handover', d: 'Local Hyderabad studio with on-site quality control and committed timelines.' },
  { t: 'Built to last', d: 'Factory-finished modular units and proper civil execution — quality you live with for years.' },
];

export default function LocalityPage({ params }) {
  const loc = findLocality(params.locality);
  if (!loc) notFound();

  const where = loc.hub ? 'Hyderabad' : `${loc.name}, Hyderabad`;
  const inArea = loc.hub ? 'across Hyderabad' : `in ${loc.name} and across Hyderabad`;
  const hero = img('living-marble-tv-wall');

  const faqs = [
    {
      q: `Who are the best interior designers in ${where}?`,
      a: `Aashiyana Interiors & Decors is a leading turnkey interior design studio serving ${where}. We handle complete home interiors, modular kitchens, wardrobes, civil works and commercial spaces — design to handover under one roof.`,
    },
    {
      q: `How much do home interiors cost in ${loc.name}?`,
      a: `Cost depends on scope, area and finishes. After a free consultation we share a transparent, itemised quote. Projects are booked with just 15% of the quote, with staged payments through delivery.`,
    },
    {
      q: `Do you handle civil and construction work too?`,
      a: `Yes. Beyond interiors we execute RCC, brickwork, electrical, plumbing, tiling and waterproofing — even ground-up construction — so one team is accountable end to end.`,
    },
    {
      q: `How do I get started?`,
      a: `Request a free consultation through the form on this page, call ${BRAND.phones[0]}, or message us on WhatsApp. We’ll discuss your requirements and share concept ideas and a quote.`,
    },
  ];

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BRAND.url}/` },
      { '@type': 'ListItem', position: 2, name: `Interior Designers in ${where}`, item: `${BRAND.url}/${loc.slug}/` },
    ],
  };

  return (
    <SmoothScroll>
      <LandingHeader />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden bg-ink">
          <img src={hero.src} alt={hero.alt} className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          <div className="container-luxe relative py-24 md:py-36">
            <nav className="mb-6 font-sans text-xs uppercase tracking-[0.15em] text-cream/50">
              <Link href="/" className="hover:text-gold">Home</Link>
              <span className="mx-2 text-gold/50">/</span>
              <span className="text-cream/80">Interior Designers in {loc.name}</span>
            </nav>
            <p className="eyebrow">{BRAND.tagline}</p>
            <h1 className="heading-xl mt-4 max-w-4xl text-cream">
              Best Interior Designers in <span className="text-gold-gradient">{where}</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-cream/75">
              Aashiyana Interiors &amp; Decors is a turnkey interior design &amp; build studio working {inArea}.
              From modular kitchens and wardrobes to full-home interiors, civil works and commercial fit-outs —
              we design it, build it, and hand you the keys.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#consult" className="btn-gold">Get a free design quote</a>
              <a href={`tel:${BRAND.phonesRaw[0]}`} className="btn-ghost">Call {BRAND.phones[0]}</a>
            </div>
          </div>
        </section>

        {/* intro copy */}
        <section className="bg-coal py-20 md:py-28">
          <div className="container-luxe grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="heading-lg text-cream">
                Turnkey interiors in {loc.name}, done right.
              </h2>
            </div>
            <div className="space-y-5 font-sans text-[15px] leading-relaxed text-cream/70">
              <p>
                Searching for trusted <strong className="text-cream">interior designers in {loc.name}</strong>?
                Aashiyana is a Hyderabad-based studio that takes your home from bare structure to a finished
                space you love — without you having to coordinate a dozen contractors.
              </p>
              <p>
                We bring design, material sourcing, civil work, modular furniture, quality control and timely
                delivery under one accountable roof. Whether it’s a 2BHK in {loc.name} or a full villa,
                you get one team and one transparent quote.
              </p>
            </div>
          </div>
        </section>

        <Services />

        {/* gallery */}
        <section className="bg-ink py-20 md:py-28">
          <div className="container-luxe">
            <p className="eyebrow">Our Work</p>
            <h2 className="heading-lg mt-4 text-cream">Recent projects around Hyderabad</h2>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {GALLERY.map((s) => {
                const im = img(s);
                return (
                  <div key={s} className="group overflow-hidden rounded-sm">
                    <img src={im.src} alt={`${im.alt} — interior project near ${loc.name}`} loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* why us */}
        <section className="bg-coal py-20 md:py-28">
          <div className="container-luxe">
            <h2 className="heading-lg text-cream">Why {loc.name} chooses Aashiyana</h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-gold/15 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map((w) => (
                <div key={w.t} className="bg-ink/40 p-7">
                  <h3 className="font-serif text-xl text-gold">{w.t}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-cream/65">{w.d}</p>
                </div>
              ))}
            </div>

            {/* process summary */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((p) => (
                <div key={p.step} className="rounded-sm border border-gold/10 p-6">
                  <span className="font-serif text-2xl text-gold/70">{p.step}</span>
                  <h3 className="mt-2 font-serif text-lg text-cream">{p.title}</h3>
                  <p className="mt-2 font-sans text-[13px] leading-relaxed text-cream/60">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeadForm />
        <FAQ items={faqs} heading={`Interior designers in ${loc.name} — FAQs`} />

        {/* nearby areas interlink */}
        <section className="bg-ink py-14">
          <div className="container-luxe">
            <p className="eyebrow">We also serve</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {LOCALITIES.filter((l) => l.slug !== loc.slug).map((l) => (
                <Link key={l.slug} href={`/${l.slug}/`}
                  className="rounded-full border border-gold/20 px-4 py-1.5 font-sans text-[13px] text-cream/70 transition hover:border-gold/60 hover:text-gold">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </SmoothScroll>
  );
}
