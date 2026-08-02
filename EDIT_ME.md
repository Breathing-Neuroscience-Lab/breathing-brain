# Breathing Neuroscience Laboratory website — Canva-inspired version

This folder is a static website that can be uploaded directly to GitHub Pages.

## What changed

- The page structure and visual hierarchy now follow the supplied Canva concept: a white institutional masthead, full-width microscopy hero, large editorial section headings, black publication and people sections, and a teal contact/footer area.
- The design is adapted rather than copied exactly, and remains responsive on phones and tablets.
- The BML logo is used in the masthead and footer.
- Laboratory microscopy is used throughout:
  - `assets/hero-fluorescent-slice.jpg` — landing page
  - `assets/dual-patch.jpg` — dendritic computation
  - `assets/fluorescent-neurons.jpg` — cell-type-specific circuit mapping
  - `assets/paired-patch-fluorescent.jpg` — inspiratory circuit physiology

## Editing people and publications

Open `js/site-data.js`. Team cards and publication entries are generated from that file.

## Adding a PI portrait

Replace `assets/pi-placeholder.svg` with a web-sized portrait and update the two matching image paths in `index.html`.

## Institutional logos

The masthead currently uses text-based NCBS and TIFR affiliation marks so the site is functional without distributing institutional logo files. Approved NCBS/TIFR PNG or SVG files can be added later.

## GitHub Pages update

Upload the files inside this folder to the root of the existing `breathing-brain` repository. Keep the repository's existing `CNAME` file if it already contains the live custom domain.
