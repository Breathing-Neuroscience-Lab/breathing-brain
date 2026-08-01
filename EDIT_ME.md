# Breathing–Brain website: launch checklist

This is a self-contained static website. It has no database, no build step, and no external font or JavaScript dependency.

## Five-minute preview

Open `index.html` in a browser. For a more accurate local preview, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Essential edits before public launch

1. **Verify the PI email** in `index.html`. It is currently set to `sufyan@ncbs.res.in`.
2. **Replace the portrait placeholder**: save the final image as `assets/sufyan-ashhad.jpg`; then change `assets/pi-placeholder.svg` to `assets/sufyan-ashhad.jpg` in `index.html`.
3. **Add lab members** in `js/site-data.js`. Copy the commented example object once per member. Create `assets/people/` and place their square or portrait photographs there.
4. **Review research wording**, especially work not yet public. Remove, soften, or add “ongoing work” where appropriate.
5. **Update publications** in `js/site-data.js`. The current list is selected rather than exhaustive.
6. **Replace the social sharing card if desired**. `assets/social-card.svg` is original and usable, but some social platforms prefer a 1200 × 630 PNG or JPEG.
7. **Institutional identity**: obtain permission before adding NCBS/TIFR logos. The supplied site uses text links only.

## Recommended material to collect

- High-resolution PI portrait, preferably vertical and uncluttered.
- One current group photograph.
- Individual member portraits and 25–40 word project descriptions.
- Three to six original scientific images: slice/recording view, holographic spots, electrophysiology traces, brainstem circuit schematic, in vivo setup, and human tracing/breathing setup.
- Final lab roster with role, project, start year, degree programme, and optional personal profile link.
- Updated CV or bibliography including DOI/PMID links and accepted/in-press work.
- Current vacancies, eligibility, deadline, funding duration, and application instructions.
- Funding acknowledgements and approved funder logos.
- Google Scholar, ORCID, Bluesky/X, GitHub, or laboratory code/data links.
- A short lab-culture statement and any accessibility, inclusion, mentoring, or data-sharing commitments you want public.

## Deployment choices

### A. Existing hosting or cPanel
Upload **the contents of this folder** into the web root, often named `public_html`, `www`, or `htdocs`. Point `breathing-brain.com` to that hosting account using the DNS records supplied by the host.

### B. Netlify
Drag this entire folder into Netlify Drop, then add `breathing-brain.com` under Domain management. The included `netlify.toml` adds basic security headers and a custom 404 page.

### C. GitHub Pages
Create a repository, upload the contents, enable Pages from the main branch, and add a file named `CNAME` containing:

```
breathing-brain.com
```

Then configure the registrar DNS records shown by GitHub.

## Domain contact verification: do this first

The domain registration contact must be verified promptly. Prefer signing in directly to the registrar account in a fresh browser tab and completing verification from the account dashboard. Confirm that the email sender and verification domain belong to the registrar before using an email link.

## Useful files

- `index.html` — page content and SEO metadata
- `css/styles.css` — colours, layout, typography, and responsive design
- `js/site-data.js` — team and publication entries
- `js/site.js` — navigation, rendering, and subtle motion
- `assets/` — original vectors and future photographs
- `robots.txt` and `sitemap.xml` — basic search-engine discovery
- `404.html` — custom missing-page screen
