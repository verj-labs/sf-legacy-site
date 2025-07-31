Below is a production‑ready style guide tailored for a modern, white‑theme dealership website. It’s written so an AI agent (or your team) can implement it directly. Fonts: Ubuntu (headings) and Nunito (body). Layout: clean, grid‑first, with optional bento sections where useful.

1) Brand Direction
Personality: Confident, trustworthy, performance‑oriented, practical.

Voice: Clear, concise, benefit‑led (“Find your next car”, “Book a test drive today”).

Use of color: White foregrounds vehicles; bold primary for CTAs; a warm accent for highlights.

2) Color System
2.1 Core Palette
Primary (Brand Blue): #2563EB — buttons, links, focus rings.

Primary Dark: #1E40AF — hover/active, dark headers on light hero.

Accent (Signal Orange): #FF6B2C — secondary CTAs, badges, highlights.

Support (Teal): #14B8A6 — finance highlights, “certified” chips, success accents.

Neutral Ink (Near‑Black): #0B1020

Neutral Body: #1F2937

Border / Dividers: #E5E7EB

Surface Base: #FFFFFF

Surface Muted: #F8FAFC (light sections) / #F1F5F9 (cards, filters background)

2.2 Semantic Colors
Success: #16A34A

Warning: #F59E0B

Error: #DC2626

Info: #0EA5E9

2.3 Gradients (for drama sections/hero)
G1 (Brand): 135° from #2563EB → #7C3AED

G2 (Performance): 135° from #2563EB → #22D3EE

G3 (Action): 135° from #FF6B2C → #F59E0B
Use gradients sparingly: hero overlays, featured banners, KPI stripes.

3) Typography
Headings (Ubuntu):

H1: 48/56, weight 700, letter‑spacing ‑0.5px

H2: 36/44, weight 700, letter‑spacing ‑0.25px

H3: 28/36, weight 700

H4: 22/30, weight 600

Body (Nunito):

Body L: 18/28, weight 400

Body M: 16/26, weight 400 (default)

Body S: 14/22, weight 400

UI Meta / Overline: 12/16, weight 600, all‑caps, letter‑spacing +0.6px
Links: Body M, primary color, underline on hover.

4) Spacing, Radius, Shadow
Spacing scale (4px base): 4, 8, 12, 16, 20, 24, 32, 40, 48, 64

Radius: 8 (inputs), 12 (cards), 16 (hero CTAs), 9999 (pills)

Shadows:

XS: 0 1px 2px rgba(0,0,0,0.06)

SM: 0 2px 6px rgba(0,0,0,0.08)

MD: 0 6px 18px rgba(0,0,0,0.10)

LG: 0 12px 32px rgba(0,0,0,0.12)

5) Layout System
Breakpoints:

Mobile ≤ 640, Tablet ≤ 1024, Desktop > 1024, Wide > 1440

Container widths (max): 640 / 896 / 1200 / 1320

Grid: 12‑col desktop (gutter 24), 6‑col tablet (gutter 16), 4‑col mobile (gutter 12)

Section rhythm: top/bottom padding 64–96 on desktop; 40–64 on mobile.

Bento (optional): Use in “Featured” or “Why choose us” sections; maintain consistent 12‑col alignment.

6) Components
6.1 Header / Nav
Header: White background (#FFFFFF), subtle bottom border (#E5E7EB). Black logo sits cleanly on white.

Sticky: Yes, shrink height on scroll (80 → 64).

Nav links: Body M, #1F2937; hover → #2563EB; active underline 2px #2563EB.

6.2 Hero
Layout: Left text stack (H1, subcopy, CTA primary + CTA secondary), right vehicle image or collage card.

Background: White with a soft gradient stripe (G1 at 12–20% opacity) behind the image for depth.

CTA primary: Solid Primary; CTA secondary: Outline (Primary) or ghost on white.

6.3 Vehicle Card (Listing)
Image: 4:3 (desktop), 16:9 (mobile ok). Radius 12; object‑fit: cover.

Title: H4 (Ubuntu) + short meta line (Body S, muted).

Price: Prominent (H3 or 22/30), brand blue or near‑black.

Spec chips: Pill tags (radius 9999), Surface Muted bg, Body S (e.g., Year, KM, Transmission).

Actions: “View details” (primary), “Book test drive” (secondary).

Hover: Elevate to Shadow MD, translateY(-2px), image slightly scale(1.01).

6.4 Vehicle Detail Page
Gallery: 1 large image, 4 thumbs; lightbox.

Key specs grid: 2–3 columns with icon + label + value.

Price + CTA stack: Sticky on desktop (right rail).

Finance block: Inline calculator widget or link to finance form.

Trust strip: Warranty, certified, CarFax badge.

6.5 Filters / Search
Search bar: Full‑width, icon left, clear button right.

Filters: Pills for “Make”, “Body”, “Fuel”, Dropdowns for Year/Price, Range slider for price/KMs.

Applied filter chips: Show above results; each removable (×).

6.6 Buttons
Primary: Solid #2563EB; hover #1E40AF; text white; radius 12; padding 12×20.

Secondary (Outline): Border #2563EB, text #2563EB; hover bg #EFF6FF.

Tertiary (Ghost): Text #2563EB; hover underline.

Destructive: Solid #DC2626, text white.

6.7 Forms
Inputs: Radius 8; border #E5E7EB; focus ring 2px #2563EB (outside).

Labels: Body S, #374151.

Help/error: Body S; error #DC2626.

Validation: Inline, on blur and on submit.

6.8 Badges / Chips
New: Accent orange bg (10% tint), text Accent.

Certified: Teal bg (10% tint), text Teal.

Sold: Neutral bg, #1F2937 text at 70% opacity.

6.9 Footer
Background: #F8FAFC

Columns: 4 on desktop, 2 on tablet, 1 on mobile.

Legal: Body S, #6B7280.

7) Accessibility
Minimum contrast AA for all text.

Focus visible on all interactive elements.

Don’t rely on color alone (use icons/labels).

Hit area ≥ 44×44px.

8) Imagery Guidelines
Neutral white/gray backdrops; avoid heavy color casts.

Emphasize front‑three‑quarter shots; keep reflections minimal.

Use subtle gradient overlays on images only when placing text over images.

9) CSS Variables (Tokens) – Drop‑in
```
:root{
  /* Colors */
  --c-bg: #FFFFFF;
  --c-bg-muted: #F8FAFC;
  --c-surface: #FFFFFF;
  --c-surface-muted: #F1F5F9;
  --c-border: #E5E7EB;
  --c-ink: #0B1020;
  --c-body: #1F2937;

  --c-primary: #2563EB;
  --c-primary-600: #2563EB;
  --c-primary-800: #1E40AF;

  --c-accent: #FF6B2C;
  --c-support: #14B8A6;

  --c-success: #16A34A;
  --c-warning: #F59E0B;
  --c-error: #DC2626;
  --c-info: #0EA5E9;

  /* Gradients */
  --g-brand: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
  --g-perf: linear-gradient(135deg, #2563EB 0%, #22D3EE 100%);
  --g-action: linear-gradient(135deg, #FF6B2C 0%, #F59E0B 100%);

  /* Radii */
  --r-sm: 8px; --r-md: 12px; --r-lg: 16px; --r-pill: 9999px;

  /* Shadows */
  --sh-xs: 0 1px 2px rgba(0,0,0,.06);
  --sh-sm: 0 2px 6px rgba(0,0,0,.08);
  --sh-md: 0 6px 18px rgba(0,0,0,.10);
  --sh-lg: 0 12px 32px rgba(0,0,0,.12);

  /* Spacing (4px base) */
  --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px;
  --sp-5: 20px; --sp-6: 24px; --sp-8: 32px; --sp-10: 40px;
  --sp-12: 48px; --sp-16: 64px;

  /* Typography */
  --font-heading: "Ubuntu", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;

  --h1-size: 48px; --h1-lh: 56px; --h1-ls: -0.5px;
  --h2-size: 36px; --h2-lh: 44px; --h2-ls: -0.25px;
  --h3-size: 28px; --h3-lh: 36px;
  --h4-size: 22px; --h4-lh: 30px;

  --body-m-size: 16px; --body-m-lh: 26px;
  --body-l-size: 18px; --body-l-lh: 28px;
  --body-s-size: 14px; --body-s-lh: 22px;

  /* Motion */
  --easing-standard: cubic-bezier(.2,.8,.2,1);
  --dur-fast: 150ms; --dur-med: 250ms; --dur-slow: 400ms;
}
```

10) Tailwind Mapping (optional)
```
// tailwind.config.js (snippet)
theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: '#2563EB',
        dark: '#1E40AF'
      },
      accent: '#FF6B2C',
      support: '#14B8A6',
      ink: '#0B1020',
      body: '#1F2937',
      surface: { DEFAULT: '#FFFFFF', muted: '#F1F5F9' },
      border: '#E5E7EB'
    },
    borderRadius: { sm:'8px', md:'12px', lg:'16px', pill:'9999px' },
    boxShadow: {
      xs:'0 1px 2px rgba(0,0,0,.06)',
      sm:'0 2px 6px rgba(0,0,0,.08)',
      md:'0 6px 18px rgba(0,0,0,.10)',
      lg:'0 12px 32px rgba(0,0,0,.12)'
    },
    fontFamily: {
      heading: ['Ubuntu','system-ui','sans-serif'],
      body: ['Nunito','system-ui','sans-serif']
    }
  }
}
```

11) Example Component Specs
11.1 Primary Button
css
Copy
Edit
.btn-primary{
  font: 600 var(--body-m-size)/var(--body-m-lh) var(--font-body);
  color:#fff; background: var(--c-primary);
  padding: 12px 20px; border-radius: var(--r-md);
  box-shadow: var(--sh-sm);
  transition: transform var(--dur-fast) var(--easing-standard),
              box-shadow var(--dur-fast) var(--easing-standard),
              background var(--dur-fast) var(--easing-standard);
}
.btn-primary:hover{ background: var(--c-primary-800); box-shadow: var(--sh-md); transform: translateY(-1px); }
.btn-primary:active{ transform: translateY(0); box-shadow: var(--sh-sm); }
.btn-primary:focus-visible{ outline: 2px solid transparent; box-shadow: 0 0 0 3px rgba(37,99,235,.35); }
11.2 Card (Vehicle)
css
Copy
Edit
.card{
  background: var(--c-surface); border:1px solid var(--c-border);
  border-radius: var(--r-md); box-shadow: var(--sh-xs); overflow: hidden;
  transition: transform var(--dur-med) var(--easing-standard), box-shadow var(--dur-med) var(--easing-standard);
}
.card:hover{ transform: translateY(-2px); box-shadow: var(--sh-md); }
.card__image{ display:block; aspect-ratio:4/3; object-fit:cover; }
.card__title{ font: 700 var(--h4-size)/var(--h4-lh) var(--font-heading); color: var(--c-ink); }
.card__meta{ font: 600 var(--body-s-size)/var(--body-s-lh) var(--font-body); color:#6B7280; }
.card__price{ font: 700 22px/30px var(--font-heading); color: var(--c-ink); }
11.3 Filter Chip
css
Copy
Edit
.chip{
  display:inline-flex; align-items:center; gap:8px;
  background: var(--c-surface-muted); border:1px solid var(--c-border);
  padding: 8px 12px; border-radius: var(--r-pill);
  font: 600 var(--body-s-size)/var(--body-s-lh) var(--font-body);
  color: var(--c-body);
}
.chip--active{ background: #EFF6FF; border-color: var(--c-primary); color: var(--c-primary); }
12) Page Templates
Home: Hero (white + gradient stripe), featured inventory (bento optional), quick filters row, trust badges, finance strip, testimonials, CTA footer.

Inventory List: Filter rail (top on mobile, left on desktop), grid cards 3/row desktop, 2/tablet, 1/mobile; sticky filter on desktop.

Vehicle Detail: Gallery + spec grid + price/CTA rail (sticky), finance block, similar vehicles carousel.

About/Financing/Contact: Standard two‑column template (content + supporting sidebar); forms styled per section 6.7.

