'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/content';
import { WEB3FORMS_KEY, hasFormKey } from '@/lib/config';
import { img } from '@/lib/assets';

const PROPERTY = ['Apartment / Flat', 'Independent House / Villa', 'Office', 'Commercial / Retail', 'Other'];
const SCOPE = ['Full home interiors', 'Modular kitchen', 'Wardrobes / furniture', 'Civil + interiors (turnkey)', 'Commercial fit-out'];

export default function LeadForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const grain = img('texture-leopard');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!hasFormKey) {
      // no key configured yet — fall back to email client
      const body = encodeURIComponent(
        `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nLocation: ${data.location}\nProperty: ${data.property}\nScope: ${data.scope}\n\n${data.message || ''}`
      );
      window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent('Interior design enquiry')}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New interior enquiry — ${data.name}`,
          from_name: 'Aashiyana Website',
          ...data,
        }),
      });
      const json = await res.json();
      setStatus(json.success ? 'done' : 'error');
      if (json.success) form.reset();
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full rounded-sm border border-gold/20 bg-ink/50 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream/35 outline-none transition focus:border-gold/70';

  return (
    <section id="consult" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <img
        src={grain.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.05] grayscale"
      />
      <div className="container-luxe relative grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* pitch */}
        <div>
          <p className="eyebrow reveal">Free Consultation</p>
          <h2 className="heading-lg reveal mt-5 text-cream">
            Let’s design the home <span className="text-gold-gradient">you’ll never want to leave.</span>
          </h2>
          <p className="reveal mt-6 max-w-md font-sans text-[15px] leading-relaxed text-cream/70">
            Tell us about your space. We’ll get back with concept ideas and a transparent quote — no
            obligation, no pressure. Hyderabad’s turnkey studio is one message away.
          </p>

          <div className="reveal mt-10 space-y-4">
            <a href={`tel:${BRAND.phonesRaw[0]}`} className="flex items-center gap-4 text-cream/85 transition hover:text-gold">
              <Dot /> {BRAND.phones[0]}
            </a>
            <a href={`tel:${BRAND.phonesRaw[1]}`} className="flex items-center gap-4 text-cream/85 transition hover:text-gold">
              <Dot /> {BRAND.phones[1]}
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-4 break-all text-cream/85 transition hover:text-gold">
              <Dot /> {BRAND.email}
            </a>
          </div>
        </div>

        {/* form */}
        <div className="reveal rounded-sm border border-gold/15 bg-coal/70 p-6 backdrop-blur-sm md:p-8">
          {status === 'done' ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-cream">Thank you!</h3>
              <p className="mt-2 font-sans text-sm text-cream/65">
                Your enquiry is in. The Aashiyana team will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <input className={field} name="name" placeholder="Your name *" required />
              <input className={field} name="phone" type="tel" placeholder="Phone / WhatsApp *" required />
              <input className={`${field} sm:col-span-2`} name="email" type="email" placeholder="Email" />
              <input className={`${field} sm:col-span-2`} name="location" placeholder="Area in Hyderabad (e.g. Kondapur)" />
              <select className={field} name="property" defaultValue="">
                <option value="" disabled>Property type</option>
                {PROPERTY.map((p) => <option key={p}>{p}</option>)}
              </select>
              <select className={field} name="scope" defaultValue="">
                <option value="" disabled>What you need</option>
                {SCOPE.map((s) => <option key={s}>{s}</option>)}
              </select>
              <textarea className={`${field} sm:col-span-2`} name="message" rows={3} placeholder="Tell us about your project (optional)" />

              {status === 'error' && (
                <p className="sm:col-span-2 text-sm text-red-300">
                  Something went wrong. Please call {BRAND.phones[0]} or WhatsApp us.
                </p>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn-gold sm:col-span-2 disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Request my free consultation'}
              </button>
              <p className="sm:col-span-2 text-center text-[11px] text-cream/40">
                Prefer chat? Use the WhatsApp button — bottom right.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />;
}
