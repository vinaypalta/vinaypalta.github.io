# vinaypalta.github.io

Personal site for Vinay Palta, served by GitHub Pages from `main` / root.

- `index.html`: all content (hero, key figures, profile, experience, education, beyond, contact) plus SEO and link-preview tags.
- `style.css`: colors and fonts live in `:root` (navy / ivory / gold, Newsreader + Inter).
- `script.js`: header state, scroll progress, reveal-on-scroll, count-up figures, mobile menu, active-section nav.
- `images/og-image.jpg`: the 1200×630 preview shown when the link is shared on LinkedIn, iMessage, etc.
- `404.html`, `robots.txt`, `sitemap.xml`, `favicon.svg`: GitHub Pages extras.

To change a key figure, edit both the visible text and `data-count` / `data-suffix` on the `<span>`.
After editing CSS or JS, bump the `?v=` number in `index.html` so browsers fetch the new file.
