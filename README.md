# Vardaan Space

Dark-themed Astro site for an amateur astronomer/astrophotographer, with:

- Photo-first **Gallery**
- Session notes and writeups in **Blog**
- **About / Contact** section

## Tech

- Astro
- Content Collections (Markdown + MDX)
- RSS + Sitemap

## Content model

- `src/content/gallery/*.md`  
  Photo entries with short title, description, capture date, optional location/equipment, and image.

- `src/content/blog/*.{md,mdx}`  
  Blog entries with title, description, publish date, and optional hero image.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```
