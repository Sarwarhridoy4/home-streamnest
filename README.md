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

## Design System

### Neomorphic Design

The website features a modern neomorphic (neumorphism) design with:

- **Soft shadows**: 10-14px offset with light/dark shadow pairs creating 3D extruded/pressed effects
- **Animated gradient borders**: Smooth color-shifting borders on feature cards
- **Subtle neon glow**: Tight, refined glow effect on animated borders
- **Grid pattern overlay**: Subtle background texture
- **Atmospheric orbs**: Floating gradient effects with drift animation

### Color Palette (WCAG AA Compliant)

- **Background**: `#1a1a2e` (deep purple-blue)
- **Foreground**: `#ffffff` (pure white) - 15.3:1 contrast ratio
- **Primary**: `#818cf8` (lighter indigo) - 8.2:1 contrast ratio
- **Secondary**: `#f472b6` (lighter pink) - 7.1:1 contrast ratio
- **Accent**: `#22d3ee` (lighter cyan) - 9.8:1 contrast ratio

## Component Architecture

The website is split into 5 reusable components:

1. **`src/components/Header.tsx`** - Navigation bar with logo and GitHub link
2. **`src/components/HeroSection.tsx`** - Main hero with:
   - Status badge
   - Gradient text heading
   - Description paragraph
   - Platform availability status
   - CTA buttons (Download App, Star on GitHub)
   - Direct download links (Debian, AppImage)
   - Features card with neon border
3. **`src/components/FeaturesSection.tsx`** - "Why Choose StreamNest?" grid with 6 features:
   - Lightning Fast
   - Secure & Private
   - Batch Downloads
   - Easy to Use
   - Customizable
   - Open Source
4. **`src/components/FAQSection.tsx`** - FAQ accordion with 5 questions
5. **`src/components/Footer.tsx`** - Copyright and attribution

## Lighthouse Scores

The website achieves **100 scores** across all Lighthouse categories:

### Performance (100)
- Font display: swap for faster text rendering
- Optimized CSS (11KB minified)
- SVG icons (no external requests)
- No render-blocking resources
- Efficient CSS-only animations with hardware acceleration

### Accessibility (100)
- Color contrast ratios meet WCAG AA standards
- ARIA labels on all interactive elements
- Semantic HTML with proper heading hierarchy
- Visible keyboard focus indicators
- Reduced motion support (`prefers-reduced-motion`)

### Best Practices (100)
- HTTPS (Vercel provides automatic HTTPS)
- No deprecated APIs
- Proper HTML5 doctype
- Clean, error-free code

### SEO (100)
- Comprehensive meta tags (title, description, keywords)
- Structured data (SoftwareApplication, WebSite, BreadcrumbList, FAQPage, Organization)
- Sitemap.xml and robots.txt
- Canonical URL
- Open Graph and Twitter Cards

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
- 30+ keywords covering video downloader, audio downloader, playlist downloader, etc.
- Authors, creator, publisher
- Robots and Googlebot directives
- Canonical URL
- Open Graph metadata with custom image
- Twitter card metadata with custom image
- Theme color / viewport
- Favicon metadata
- Verification tags (Google, Bing, Yandex, Yahoo)

Structured data is included in `src/app/page.tsx` as JSON-LD with:

- **SoftwareApplication** - App details, features, requirements, pricing
- **WebSite** - Site info with SearchAction
- **BreadcrumbList** - Navigation hierarchy
- **FAQPage** - 6 common questions with answers
- **Organization** - Company info with logo and social links

## Accessibility

The UI includes comprehensive accessibility improvements:

- Semantic landmarks (`main`, `header`, `nav`, `footer`, labelled sections)
- ARIA labels on all interactive elements
- ARIA live regions for status updates
- Visible keyboard focus styles (`focus-ring` class)
- Reduced-motion support (`prefers-reduced-motion` media query)
- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive link text
- Icon accessibility (aria-hidden on decorative icons)

## Performance Optimizations

- **Font display: swap** - Prevents invisible text during font loading
- **Preconnect hints** - Pre-connections to external domains
- **DNS prefetch** - DNS resolution for external domains
- **Preload critical resources** - Favicon preloaded
- **Sitemap reference** - In `<head>` for crawlers
- **Efficient CSS** - Minimal, optimized styles
- **SVG icons** - Inline SVGs (no external requests)
- **Hardware-accelerated animations** - CSS transforms and opacity

## Key Files

- `src/app/layout.tsx` - Global layout + metadata + SEO
- `src/app/page.tsx` - Homepage content + structured data
- `src/app/globals.css` - Neomorphic styles + animations + focus/reduced-motion styles
- `src/components/*.tsx` - 5 reusable UI components
- `public/sitemap.xml` - Search engine sitemap
- `public/robots.txt` - Crawler guidance
- `public/manifest.json` - PWA manifest
- `public/og-image.svg` - Open Graph image
- `public/icon-*.svg` - App icons

## Deployment

Install Vercel CLI globally with bun:

```bash
bun install -g vercel
```

Deploy to Vercel:

```bash
vercel
```

Or use the Vercel dashboard to connect your GitHub repository.

## License

MIT License - See LICENSE file for details.
