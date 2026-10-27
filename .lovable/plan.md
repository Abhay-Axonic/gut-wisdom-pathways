# Refine the Microbiome Clinic site in place

Keep the existing wording, enquiry form, central settings and colour identity. No redesign, no publishing.

## 1. Typography and colour (theme-level fixes)
- Before changing anything, check every page for pale-on-light text, low-contrast muted text, footer links and buttons, using a script that measures real contrast against the actual background.
- Set one responsive type scale in the global styles, using relative units: body 16–18px (line height 1.65–1.7), hero intro 17–20px, H1 36–44px on mobile and 48–64px on desktop, H2 26–40px, H3 21–26px. Labels and the small "eyebrow" headings get larger and less letter-spaced.
- Make the muted text colour darker so it passes AA. Pale ivory text is used only on the dark forest sections.
- Keep paragraphs at roughly 65 characters wide. Remove inherited heading styles from paragraphs.
- Load fonts with preconnect and `font-display: swap`, and use size-matched fallbacks to limit layout shift.

## 2. Composition and spacing
- Make the hero heading a bit smaller and balance the text column against the illustration, so the main button shows without scrolling at 1280x800 and 390x844.
- Use a consistent container and tighter section spacing (shared section spacing utilities).
- Use asymmetric editorial layouts for evidence, options, process and clinician sections instead of repeated grids.
- Add scroll padding so the sticky navbar never covers anchor targets or focused controls.

## 3. Handcrafted visuals
- Expand the illustrations file into one family that shares the same stroke widths and colours: hero microbe field (refined), small microbe motifs, a botanical sprig, a fine dotted "culture" texture, an organic curved section divider and a brass rule. All are decorative, hidden from screen readers, and lightweight SVG.
- Place them sparingly: the hero, the dividers around the dark "How it works" band, and accents on the testing, science and services headers.
- No photos, no testimonials, no invented credentials.

## 4. Subtle animation
- The hero text fades up once (about 500ms, 14px). The hero illustration draws in once and then stops, with no endless motion.
- A small `Reveal` component uses IntersectionObserver for section reveals (16px, 500ms). Content stays visible by default: the hidden state applies only once JS has added a class, so text can never be left stuck invisible.
- Buttons and links get 200ms transitions. Cards get a slight lift on hover. The accordion already animates; refine its easing.
- Smooth anchor scrolling stays on, except when the visitor has asked for reduced motion. Reduced motion turns off all of the above.

## 5. SEO
- Audit each route's title, description, single H1, canonical and heading order, and fix duplicates.
- Default social metadata in the page head: og:title/description/type/url, twitter:card, plus one generated branded share image (an illustration, not a photo).
- Structured data uses only facts already confirmed in settings (clinic, phone, email, London, clinicians, and FAQPage on the FAQ page). Breadcrumbs go on inner pages.
- Clarify the role of each page and add descriptive internal links between them: Services (what a consultation covers), Testing (limits and when a test might help), Science (the evidence), Fees (how to ask), Clinicians (who you see).
- 404 page: noindex. Real 404 status codes aren't possible on this host because it serves a single-page app; this will be reported. Retired-page redirects stay.
- Pre-rendering isn't available on this setup, so pages still render in the browser. Key content stays in plain links and headings, and the static fallback metadata in the page head will be improved. This limitation will be reported.
- Domain: canonicals and the sitemap use the configured address. The final custom domain is still a dependency in the owner checklist.
- No new medical claims, no reviewer attribution, no "clinically reviewed" labels.

## 6. Verification
- Playwright screenshots of the hero, one lower section and mobile, before and after the changes.
- Viewports: 360, 390, 768, 1280 and 1440, across all routes. Checks: horizontal overflow, H1 count, measured contrast, keyboard focus order, reduced-motion check (content visible), and nothing left at zero opacity.
- Re-run the existing form tests, and add a small test for the rule that hidden settings values stay off the page if one is touched.
- Report Lighthouse-style results only if measured locally. Otherwise state that they weren't measured.
- Update `OWNER_CHECKLIST.md` and `AGENTS.md` (motion/reveal rule).

## Technical details
- Files: `src/index.css`, `tailwind.config.ts`, `index.html`, `src/components/shared/Illustrations.tsx` (expanded), new `src/components/shared/Reveal.tsx`, `Seo.tsx`, `PageHero.tsx`, `Navbar`/`Footer` contrast, page files for layout and links, `scripts/generate-sitemap.mjs` if routes change, and a generated `public/og-image.jpg`.
- Remove the unused `src/App.css`.
