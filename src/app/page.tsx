import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://streamnest-puce.vercel.app/#software",
        name: "StreamNest",
        alternateName: "StreamNest Desktop Media Downloader",
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "VideoDownloader",
        operatingSystem: "Linux, Windows, macOS",
        description:
          "Free, open-source desktop media downloader built with Flet and yt-dlp. Download videos, audio, and playlists from YouTube, Vimeo, and 1000+ sites.",
        url: "https://streamnest-puce.vercel.app",
        author: {
          "@type": "Person",
          name: "Sarwar Hridoy",
          url: "https://github.com/Sarwarhridoy4",
          sameAs: [
            "https://github.com/Sarwarhridoy4",
            "https://twitter.com/Sarwarhridoy4",
          ],
        },
        creator: {
          "@type": "Person",
          name: "Sarwar Hridoy",
          url: "https://github.com/Sarwarhridoy4",
        },
        softwareHelp: {
          "@type": "CreativeWork",
          url: "https://github.com/Sarwarhridoy4/StreamNest#readme",
        },
        downloadUrl: "https://github.com/Sarwarhridoy4/StreamNest/releases/latest",
        softwareVersion: "2.0.0",
        releaseNotes: "https://github.com/Sarwarhridoy4/StreamNest/blob/main/changelog.md",
        license: "https://github.com/Sarwarhridoy4/StreamNest/blob/main/LICENSE",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        featureList: [
          "Download videos from 1000+ sites",
          "Extract audio as MP3",
          "Playlist download support",
          "Batch download capabilities",
          "Cross-platform support",
          "Free and open-source",
        ],
        screenshot: "https://streamnest-puce.vercel.app/og-image.svg",
        softwareRequirements: "Python 3.11+, FFmpeg (recommended)",
        memoryRequirements: "512MB RAM",
        storageRequirements: "100MB free disk space",
      },
      {
        "@type": "WebSite",
        "@id": "https://streamnest-puce.vercel.app/#website",
        url: "https://streamnest-puce.vercel.app",
        name: "StreamNest",
        description: "Official website for StreamNest - Free Desktop Media Downloader",
        publisher: {
          "@id": "https://streamnest-puce.vercel.app/#software",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://github.com/Sarwarhridoy4/StreamNest/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://streamnest-puce.vercel.app/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://streamnest-puce.vercel.app",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Download",
            item: "https://github.com/Sarwarhridoy4/StreamNest/releases/latest",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Documentation",
            item: "https://github.com/Sarwarhridoy4/StreamNest#readme",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://streamnest-puce.vercel.app/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is StreamNest?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "StreamNest is a free, open-source desktop media downloader built with Flet and yt-dlp. It allows you to download videos, audio, and playlists from YouTube, Vimeo, and 1000+ other sites supported by yt-dlp.",
            },
          },
          {
            "@type": "Question",
            name: "Is StreamNest free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, StreamNest is completely free and open-source. You can download, use, and modify it under the MIT license.",
            },
          },
          {
            "@type": "Question",
            name: "What platforms does StreamNest support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "StreamNest currently supports Linux (Debian package and AppImage). Windows, macOS, and mobile versions are coming soon.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need FFmpeg to use StreamNest?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "FFmpeg is recommended for the best quality when merging, remuxing, or extracting audio. StreamNest includes an automatic FFmpeg installer that works on Linux, macOS, and Windows.",
            },
          },
          {
            "@type": "Question",
            name: "Can I download entire playlists with StreamNest?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, StreamNest supports playlist downloads. You can load playlist entries, select specific items, and use range support (e.g., 1-5, 1,3,7-10) to download exactly what you need.",
            },
          },
          {
            "@type": "Question",
            name: "What video and audio formats does StreamNest support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "StreamNest supports MP4 video (remux) and MP3 audio (extract) formats. It dynamically loads available formats before download, allowing you to choose the best quality for your needs.",
            },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://streamnest-puce.vercel.app/#organization",
        name: "StreamNest",
        url: "https://streamnest-puce.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://streamnest-puce.vercel.app/icon-512.svg",
          width: 512,
          height: 512,
        },
        founder: {
          "@type": "Person",
          name: "Sarwar Hridoy",
          url: "https://github.com/Sarwarhridoy4",
        },
        sameAs: [
          "https://github.com/Sarwarhridoy4/StreamNest",
          "https://twitter.com/Sarwarhridoy4",
        ],
      },
    ],
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-8 md:px-8 md:py-12">
      {/* Background effects */}
      <div className="atmosphere atmosphere-top" aria-hidden="true" />
      <div className="atmosphere atmosphere-bottom" aria-hidden="true" />
      <div className="grid-pattern" aria-hidden="true" />

      {/* Main content */}
      <main
        id="main-content"
        role="main"
        aria-label="StreamNest main content"
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 md:gap-12"
      >
        <Header />
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
        <Footer />
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
