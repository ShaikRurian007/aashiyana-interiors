export default function FAQ({ items, heading = 'Frequently asked questions' }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    })),
  };

  return (
    <section className="bg-coal py-20 md:py-28">
      <div className="container-luxe max-w-3xl">
        <h2 className="heading-lg reveal text-cream">{heading}</h2>
        <div className="mt-10 divide-y divide-gold/10 border-y border-gold/10">
          {items.map((q) => (
            <details key={q.q} className="reveal group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-cream marker:hidden">
                {q.q}
                <span className="text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 font-sans text-sm leading-relaxed text-cream/65">{q.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
