# Inline Granite deployment

This project is a standard React + Vite static site, fixed for GitHub and Cloudflare Pages.

## Cloudflare Pages settings

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank if these files are at the repository root
- Node version: 22 is fine

## GitHub upload

Upload the contents of this folder to the root of the GitHub repository, not the outer ZIP folder.

## Local test

```bash
npm install
npm run build
npm run preview
```

The `_redirects` file is included so all routes such as `/about`, `/services`, `/gallery`, and `/contact` work correctly on Cloudflare Pages.
