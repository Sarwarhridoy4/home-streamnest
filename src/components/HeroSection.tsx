import ReleaseInfo from "@/components/ReleaseInfo";

export default function HeroSection() {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]" aria-labelledby="hero-heading">
      <div className="space-y-6">
        <div className="status-badge inline-block">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Desktop Media Downloader
          </span>
        </div>
        <h1 id="hero-heading" className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Download media{" "}
          <span className="gradient-text">faster</span> with{" "}
          <span className="gradient-text">StreamNest</span>
        </h1>
        <p className="max-w-xl text-base text-slate-300 md:text-lg">
          StreamNest is a free, open-source desktop media downloader built with Flet and
          yt-dlp. It supports a wide range of sites/providers including YouTube, Vimeo, and
          1000+ others, with single media downloads and playlist workflows.
        </p>

         {/* Status badge */}
         <ReleaseInfo />


        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row" role="group" aria-label="Download and GitHub actions">
          <a
            className="focus-ring btn-primary pulse-glow inline-flex h-14 items-center justify-center gap-2 px-8 text-sm font-semibold text-white"
            href="https://github.com/Sarwarhridoy4/StreamNest/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download the latest StreamNest release from GitHub (opens in a new tab)"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download App
          </a>
          <a
            className="focus-ring btn-secondary inline-flex h-14 items-center justify-center gap-2 px-8 text-sm font-semibold text-slate-300"
            href="https://github.com/Sarwarhridoy4/StreamNest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star StreamNest on GitHub (opens in a new tab)"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Star on GitHub
          </a>
        </div>
      </div>

      {/* Features Card */}
      <section
        className="neon-border p-6 md:p-8"
        aria-labelledby="features-heading"
      >
        <h2
          id="features-heading"
          className="mb-6 text-lg font-bold gradient-text"
        >
          Features
        </h2>
        <ul className="space-y-4" role="list">
          <li className="feature-item p-4">
            <div className="flex items-start gap-3">
              <div className="neu-icon h-10 w-10 shrink-0">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <strong className="text-slate-200">Built with Flet</strong>
                <p className="mt-1 text-sm text-slate-400">Desktop-first interface with native performance</p>
              </div>
            </div>
          </li>
          <li className="feature-item p-4">
            <div className="flex items-start gap-3">
              <div className="neu-icon h-10 w-10 shrink-0">
                <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <strong className="text-slate-200">Powered by yt-dlp</strong>
                <p className="mt-1 text-sm text-slate-400">Broad provider support for 1000+ sites</p>
              </div>
            </div>
          </li>
          <li className="feature-item p-4">
            <div className="flex items-start gap-3">
              <div className="neu-icon h-10 w-10 shrink-0">
                <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div>
                <strong className="text-slate-200">Single & Playlist</strong>
                <p className="mt-1 text-sm text-slate-400">Download videos, audio, or full playlists</p>
              </div>
            </div>
          </li>
          <li className="feature-item p-4">
            <div className="flex items-start gap-3">
              <div className="neu-icon h-10 w-10 shrink-0">
                <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <strong className="text-slate-200">MP4 & MP3 Support</strong>
                <p className="mt-1 text-sm text-slate-400">Dynamic format loading and quality selection</p>
              </div>
            </div>
          </li>
          <li className="feature-item p-4">
            <div className="flex items-start gap-3">
              <div className="neu-icon h-10 w-10 shrink-0">
                <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <strong className="text-slate-200">Cross-Platform</strong>
                <p className="mt-1 text-sm text-slate-400">Automatic FFmpeg installation</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
}
