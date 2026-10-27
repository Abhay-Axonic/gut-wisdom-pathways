# Post-publication checks (run after the first publish)

Replace `SITE` with the published address (currently https://gut-wisdom-pathways.lovable.app, or the final domain once connected).

## 1. Direct page HTML (no JavaScript)
- `curl -s SITE/services | grep -E "<title>|canonical|og:title"`. The output must show the Services title, `SITE/services` as the canonical, and the Services og:title.
- Repeat for /, /fees, /clinicians, /testing, /science, /faq, /about, /contact, /providers, /privacy, /terms and /accessibility.
- If any route returns the homepage title instead, the host is not serving the prepared page HTML. Only then consider moving to server rendering.

## 2. Page-specific social metadata
- Paste three URLs (/, /testing, /faq) into the LinkedIn Post Inspector and the Facebook Sharing Debugger. Each must show its own title and description.

## 3. Canonical URLs
- In each page's HTML there must be exactly one `rel="canonical"`, pointing to itself on the production domain. There must be no preview or `id-preview` addresses anywhere.
- The published site must not carry `noindex`. Preview hosts should carry it.

## 4. Sitemap and robots
- SITE/sitemap.xml lists 13 pages, all on the production domain.
- SITE/robots.txt allows crawling and points to the sitemap.
- Submit the sitemap in Google Search Console after verifying the domain.

## 5. Missing pages
- `curl -s -o /dev/null -w "%{http_code}" SITE/does-not-exist`. Expected on this hosting: `200` (a limitation of the hosting).
- Open that address in a browser. It must show "We could not find that page" and carry `noindex`.
- /research must redirect to /science, and /resources to /testing.

## 6. One complete enquiry and notification test
Needs a verified sender domain and a staff recipient address.
1. Submit the form on SITE/contact with a name starting "TEST".
2. The success message shows a reference number.
3. The staff inbox receives "New consultation request". The email contains the reference and the review link only, with no name, contact details or message.
4. The record appears in the backend with the same reference.
5. Submitting the same details again within 15 minutes returns the same reference, and no second record is created.
6. Delete the test records afterwards.
