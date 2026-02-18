export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "StreamNest",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Linux (Debian, AppImage)",
    description:
      "Desktop media downloader built with Flet and yt-dlp for single media and playlist downloads.",
    url: "https://github.com/Sarwarhridoy4/StreamNest",
    author: {
      "@type": "Person",
      name: "Sarwar Hridoy",
      url: "https://github.com/Sarwarhridoy4",
    },
    softwareHelp: "https://github.com/Sarwarhridoy4/StreamNest#readme",
    downloadUrl:
      "https://github.com/Sarwarhridoy4/StreamNest/releases/latest",
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-12 md:px-12">
      <div className="atmosphere atmosphere-top" aria-hidden />
      <div className="atmosphere atmosphere-bottom" aria-hidden />
      <main
        id="main-content"
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 rounded-3xl border border-white/20 bg-black/55 p-8 shadow-2xl backdrop-blur-xl md:p-12"
      >
        <header className="flex items-center justify-between gap-4">
          <nav aria-label="Primary navigation">
            <a
              href="https://github.com/Sarwarhridoy4/StreamNest"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="StreamNest GitHub repository (opens in a new tab)"
              className="focus-ring text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200"
            >
              StreamNest
            </a>
          </nav>
          <a
            href="https://github.com/Sarwarhridoy4/StreamNest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View StreamNest on GitHub (opens in a new tab)"
            className="focus-ring rounded-full border border-red-400/50 px-4 py-2 text-xs font-medium text-red-100 transition hover:border-red-300 hover:bg-red-400/10"
          >
            View GitHub
          </a>
        </header>
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
              Desktop Media Downloader
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Download media faster with StreamNest.
            </h1>
            <p className="max-w-xl text-base text-slate-200/90 md:text-lg">
              StreamNest is a desktop media downloader built with Flet and
              yt-dlp. It supports a wide range of sites/providers supported by
              yt-dlp, including single media downloads and playlist workflows.
            </p>
            <div className="rounded-xl border border-cyan-200/30 bg-cyan-100/6 p-4 text-sm text-cyan-100/95">
              <p className="font-semibold">
                Available now: Linux (Debian package and AppImage)
              </p>
              <p className="mt-1 text-cyan-100/80">
                Coming soon: Windows, mobile, and macOS.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="focus-ring inline-flex h-12 items-center justify-center rounded-full bg-red-500 px-7 text-sm font-semibold text-white transition hover:bg-red-400"
                href="https://github.com/Sarwarhridoy4/StreamNest/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download the latest StreamNest release from GitHub (opens in a new tab)"
              >
                Download App
              </a>
              <a
                className="focus-ring inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition hover:border-red-300 hover:bg-red-400/10"
                href="https://github.com/Sarwarhridoy4/StreamNest"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Star StreamNest on GitHub (opens in a new tab)"
              >
                Star on GitHub
              </a>
            </div>
          </div>
          <section
            className="feature-card rounded-2xl border border-red-300/30 p-6 md:p-8"
            aria-labelledby="features-heading"
          >
            <h2
              id="features-heading"
              className="mb-4 text-xs uppercase tracking-[0.18em] text-red-100/90"
            >
              Features
            </h2>
            <ul className="space-y-4 text-sm text-slate-100 md:text-base">
              <li className="rounded-xl bg-white/8 p-4">
                Built with Flet for a desktop-first interface.
              </li>
              <li className="rounded-xl bg-white/8 p-4">
                Powered by yt-dlp with broad provider support.
              </li>
              <li className="rounded-xl bg-white/8 p-4">
                Download single videos/audio or full playlists with a clean
                workflow.
              </li>
            </ul>
          </section>
        </section>
        <footer className="text-xs text-slate-200/70">
          StreamNest by{" "}
          <a
            className="focus-ring underline decoration-red-300/60 underline-offset-4 transition hover:text-red-100"
            href="https://github.com/Sarwarhridoy4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sarwarhridoy4 GitHub profile (opens in a new tab)"
          >
            Sarwarhridoy4
          </a>
          . Download the latest desktop build from GitHub releases.
        </footer>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
