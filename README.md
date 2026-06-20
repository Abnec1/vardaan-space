# Vardaan.space

Hey! Vardaan.space is my website containing years worth of my journey into astrophotography and astronomy as a whole.

I was always told I should 'document' my findings in astronomy, but I usually just stashed it all one a drive and forgot about it. Thought it would be wise to showcase my talents.

It contains:

- A Gallery with all my pictures
- Session notes and writeups in Blog
- About / Contact section
- Gear Page


## How it works / Tech

I've built this on VSCode, with a bit of help from Copilot, and used Vercel free tier.
I've also used Cloudflare to set up an email forwarding service.

The languages: 

- Astro
- Content Collections (Markdown + MDX)
- RSS + Sitemap

## Content model (How the blogs are written)

- `src/content/gallery/*.md`  
  Photo entries with short title, description, capture date, optional location/equipment, and image.

- `src/content/blog/*.{md,mdx}`  
  Blog entries with title, description, publish date, and optional hero image.

