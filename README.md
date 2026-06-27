# Aashiyana Interiors & Decors — Website

A cinematic, scroll-driven website for **Aashiyana Interiors & Decors**, a turnkey
interior design studio in Hyderabad. Built as a fully static site for GitHub Pages.

The homepage opens on the studio's carved gold **mandala double door**; as you scroll,
the door swings open in 3D and the camera dollies through a journey of real project
photography — living spaces, modular kitchens, bedrooms & wardrobes, bathrooms, civil
works and commercial fit-outs — ending in a lead-generation consultation form.

## Tech stack

- **Next.js 14** (App Router, `output: 'export'` — static HTML, great SEO)
- **Tailwind CSS** — styling & responsive design
- **GSAP ScrollTrigger + Lenis** — the door-open + scroll choreography (real CSS 3D transforms)
- **Web3Forms** — serverless lead form (works on static hosting)
- All 65 project photos extracted from the brand deck, optimised to WebP (~6 MB total)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Configuration before launch

1. **Lead form** — create a free key at <https://web3forms.com> (just enter the
   destination email). Add it as a GitHub Actions secret named `WEB3FORMS_KEY`
   (Settings → Secrets and variables → Actions). Until set, the form falls back to
   opening the visitor's email client / WhatsApp.
2. **Canonical URL** — set `BRAND.url` in `src/lib/content.js` to your final domain
   (used by sitemap, robots, Open Graph, JSON-LD).
3. **Custom domain (recommended for ranking)** — add a file `public/CNAME` containing
   your domain (e.g. `aashiyanainteriors.in`) and point your DNS to GitHub Pages.

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages.

- One-time: in the repo, go to **Settings → Pages → Build and deployment → Source:
  GitHub Actions**.
- The workflow auto-detects the correct `basePath`:
  - Project repo (`github.com/<user>/<repo>`) → served at `/<repo>`, basePath set automatically.
  - User/org page (`<user>.github.io`) or a `public/CNAME` custom domain → basePath empty.

## SEO

- Per-page metadata, Open Graph & Twitter cards
- `InteriorDesignBusiness` + `BreadcrumbList` + `FAQPage` JSON-LD
- `sitemap.xml` and `robots.txt` generated at build
- 21 local landing pages: `/interior-designers-in-hyderabad/` plus 20 Hyderabad
  micro-markets (Gachibowli, Kondapur, Madhapur, Kokapet, …) targeting
  "interior designers in <area>" searches.

## Content

All brand content (services, process, contact, journey structure) lives in
`src/lib/content.js`. Image metadata is in `src/data/manifest.json`.
