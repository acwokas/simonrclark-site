# simonrclark-site

A static rebuild of [simonrclark.com](https://www.simonrclark.com/) — Simon Clark's editor/communications
portfolio site — built with [Astro](https://astro.build). Content (bio, experience, education, skills,
and all 15 portfolio projects) is mirrored verbatim from the live WordPress site into
`src/data/content.json`. Media assets (images, CV PDFs, project PDFs) are served from `public/wp-content/uploads/...`
at the exact same paths as the original WordPress uploads, so existing direct links continue to resolve.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Deploy

Deployed to Cloudflare Pages:

```bash
npm run build
wrangler pages deploy dist
```

## Ownership note

This repository is currently owned by Adrian Watkins (GitHub: `acwokas`) on Simon Clark's behalf.
Ownership may be transferred to Simon directly at a later date.
