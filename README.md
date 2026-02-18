# StreamNest Landing Page

Marketing website for **StreamNest Media Downloader**, built with Next.js App Router and Tailwind CSS.

- Desktop app repository: https://github.com/Sarwarhridoy4/StreamNest
- Latest desktop release: https://github.com/Sarwarhridoy4/StreamNest/releases/latest

## Platform Availability

- Available now: Linux (Debian package and AppImage)
- Coming soon: Windows, mobile, and macOS

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev    # Start local dev server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # ESLint checks
```

## SEO and Metadata

SEO metadata is configured in `src/app/layout.tsx` using Next.js Metadata API:

- Title template + description
- Keywords, authors, creator, publisher
- Robots and Googlebot directives
- Canonical URL
- Open Graph metadata
- Twitter card metadata
- Theme color / viewport
- Favicon metadata

Structured data is included in `src/app/page.tsx` as JSON-LD with `SoftwareApplication` schema.

## Accessibility

The UI includes accessibility improvements in `src/app/page.tsx` and `src/app/globals.css`:

- Semantic landmarks (`main`, `header`, `nav`, labelled sections)
- Skip link (`Skip to main content`)
- Accessible labels for external links
- Visible keyboard focus styles
- Reduced-motion support (`prefers-reduced-motion`)

## Key Files

- `src/app/layout.tsx` - global layout + metadata
- `src/app/page.tsx` - homepage content + structured data
- `src/app/globals.css` - global styles + focus/skip-link/reduced-motion styles
- `src/app/favicon.ico` - StreamNest favicon
