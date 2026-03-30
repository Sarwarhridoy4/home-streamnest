import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://streamnest-puce.vercel.app"),
  title: {
    default: "StreamNest - Free Desktop Media Downloader | Download Videos & Playlists",
    template: "%s | StreamNest",
  },
  description:
    "StreamNest is a free, open-source desktop media downloader built with Flet and yt-dlp. Download videos, audio, and playlists from YouTube, Vimeo, and 1000+ sites. Supports MP4, MP3, and playlist workflows.",
  applicationName: "StreamNest",
  keywords: [
    "StreamNest",
    "media downloader",
    "video downloader",
    "audio downloader",
    "playlist downloader",
    "yt-dlp",
    "desktop app",
    "Flet",
    "YouTube downloader",
    "Vimeo downloader",
    "MP4 downloader",
    "MP3 extractor",
    "free video downloader",
    "open source downloader",
    "cross-platform downloader",
    "Linux video downloader",
    "Windows video downloader",
    "macOS video downloader",
    "batch download",
    "video converter",
    "audio extractor",
    "playlist manager",
    "media converter",
    "streaming downloader",
    "online video downloader",
    "video download tool",
    "audio download tool",
  ],
  authors: [{ name: "Sarwar Hridoy", url: "https://github.com/Sarwarhridoy4" }],
  creator: "Sarwar Hridoy",
  publisher: "StreamNest",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.svg", type: "image/svg+xml", sizes: "192x192" },
      { url: "/icon-512.svg", type: "image/svg+xml", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "StreamNest - Free Desktop Media Downloader",
    description:
      "Download videos, audio, and playlists from 1000+ sites. Free, open-source desktop app built with Flet and yt-dlp. Supports MP4, MP3, and batch downloads.",
    type: "website",
    locale: "en_US",
    siteName: "StreamNest",
    url: "https://streamnest-puce.vercel.app",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "StreamNest - Desktop Media Downloader",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamNest - Free Desktop Media Downloader",
    description:
      "Download videos, audio, and playlists from 1000+ sites. Free, open-source desktop app built with Flet and yt-dlp.",
    images: ["/og-image.svg"],
    creator: "@Sarwarhridoy4",
    site: "@StreamNest",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "software",
  classification: "Multimedia Software",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "StreamNest",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#071221",
    "msapplication-TileImage": "/icon-192.svg",
    "theme-color": "#071221",
  },
};

export const viewport: Viewport = {
  themeColor: "#071221",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.svg" type="image/svg+xml" sizes="192x192" />
        <link rel="icon" href="/icon-512.svg" type="image/svg+xml" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" sizes="180x180" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://streamnest-puce.vercel.app/" />
        
        {/* Alternate language versions (if applicable) */}
        <link rel="alternate" hrefLang="en" href="https://streamnest-puce.vercel.app/" />
        <link rel="alternate" hrefLang="x-default" href="https://streamnest-puce.vercel.app/" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Preload critical resources */}
        {/* Note: favicon.ico is not preloaded as it's not critical for initial render */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
