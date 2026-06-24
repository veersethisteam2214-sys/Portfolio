# Veer Sethi — Portfolio

A premium, single-page portfolio for selling website & AI-automation services to
clients worldwide. Built with **Next.js 15**, **Tailwind CSS** and **Framer
Motion**. Deploys to Vercel in one click.

**Design direction:** *precision-engineered / machined metal + liquid glass.*
Warm-graphite palette with a single ember-amber accent, an industrial type system
(Bricolage Grotesque + Hanken Grotesk + JetBrains Mono), real liquid-glass panels
(masked conic rims), a mouse-spotlight and a magnetic CTA. Deliberately avoids the
common "AI-generated" tells (no purple, no gradient text, no glow, no template
skeleton) — it scores 0 on the `vibecoded-design-tells` scanner.

### Change the accent colour / palette
All colours are CSS variables at the top of [`app/globals.css`](app/globals.css)
(`--bg`, `--surface`, `--line`, `--ink`, `--ember`). Change `--ember` to re-skin the
whole site. Fonts live in [`app/layout.tsx`](app/layout.tsx).

---

## ✏️ How to customize (start here)

Almost everything you'll want to change lives in **one file**:

### `lib/site.ts`
Open it and edit the plain English. It controls:

| Section | What to edit |
|---|---|
| Your name, email, WhatsApp, domain | `site` object at the top |
| The big stats (30+, 12k+, etc.) | `stats` |
| Services / what you do | `services` |
| Portfolio projects | `projects` |
| "How it works" steps | `process` |
| Tech logos strip | `stack` |
| Testimonials | `testimonials` |
| Pricing plans | `plans` |
| FAQ | `faqs` |

> **Important:** set your real WhatsApp number in `site.whatsapp`
> (international format, no `+` or spaces, e.g. `919876543210`).

### Make the contact form land in your inbox automatically (optional)
Right now the form opens the visitor's email app pre-filled (works everywhere, no
setup). To get submissions delivered automatically instead:
1. Create a free account at [Formspree](https://formspree.io).
2. In `components/contact.tsx`, replace the `mailto:` logic in `handleSubmit`
   with a `fetch()` POST to your Formspree endpoint. (Search for the comment
   that explains this in the file.)

---

## 🖥️ Run it on your computer

```bash
npm install      # first time only
npm run dev      # then open http://localhost:3000
```

To check it builds for production:
```bash
npm run build
```

---

## 🚀 Deploy to Vercel (free)

1. Push this code to your GitHub repo (already connected).
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**.
3. Import the `Portfolio` repo. Vercel auto-detects Next.js — just click
   **Deploy**. No settings to change.
4. You'll get a live `*.vercel.app` URL in ~1 minute.

### Connect your domain (veersafety.com)
1. In your Vercel project → **Settings → Domains** → add `veersafety.com`.
2. Vercel shows you the DNS records to add.
3. Add those records where you bought the domain (the registrar's dashboard).
4. Wait a few minutes — it goes live with free HTTPS.

> If you change the domain, also update `siteUrl` in `app/layout.tsx`,
> `app/sitemap.ts` and `app/robots.ts`.

---

## 🎨 Tech stack
- **Next.js 15** (App Router, fully static)
- **Tailwind CSS** (custom graphite theme + ember accent)
- **Framer Motion** (magnetic CTA only) + CSS IntersectionObserver reveals
- **lucide-react** for icons
- Type: Bricolage Grotesque · Hanken Grotesk · JetBrains Mono

## 📁 Structure
```
app/            → page, layout, SEO (sitemap/robots/icon)
components/     → every section (hero, services, projects, pricing, …)
components/ui/  → reusable bits (reveal animations, marquee, icons)
lib/site.ts     → ALL your content (edit this)
lib/utils.ts    → helpers
```
