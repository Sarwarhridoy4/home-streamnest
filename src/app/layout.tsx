import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StreamNest | Desktop Media Downloader",
    template: "%s | StreamNest",
  },
  description:
    "StreamNest is a desktop media downloader built with Flet and yt-dlp, supporting single downloads and playlist workflows.",
  applicationName: "StreamNest",
  keywords: [
    "StreamNest",
    "media downloader",
    "yt-dlp",
    "playlist downloader",
    "desktop app",
    "Flet",
  ],
  authors: [{ name: "Sarwar Hridoy", url: "https://github.com/Sarwarhridoy4" }],
  creator: "Sarwar Hridoy",
  publisher: "StreamNest",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "StreamNest | Desktop Media Downloader",
    description:
      "Download videos, audio, and playlists with StreamNest. Built with Flet and powered by yt-dlp.",
    type: "website",
    locale: "en_US",
    siteName: "StreamNest",
  },
  twitter: {
    card: "summary",
    title: "StreamNest | Desktop Media Downloader",
    description:
      "Download videos, audio, and playlists with StreamNest. Built with Flet and powered by yt-dlp.",
  },
};

export const viewport: Viewport = {
  themeColor: "#071221",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
