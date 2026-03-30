export default function FAQSection() {
  return (
    <section aria-labelledby="faq-heading" className="neon-border p-6 md:p-8">
      <h2 id="faq-heading" className="mb-6 text-2xl font-bold gradient-text">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-4">
        <div className="faq-item p-5">
          <dt className="text-lg font-semibold text-primary">What is StreamNest?</dt>
          <dd className="mt-2 text-slate-400">
            StreamNest is a free, open-source desktop media downloader built with Flet and yt-dlp. 
            It allows you to download videos, audio, and playlists from YouTube, Vimeo, and 1000+ 
            other sites supported by yt-dlp.
          </dd>
        </div>
        <div className="faq-item p-5">
          <dt className="text-lg font-semibold text-primary">Is StreamNest free to use?</dt>
          <dd className="mt-2 text-slate-400">
            Yes, StreamNest is completely free and open-source. You can download, use, and modify 
            it under the MIT license.
          </dd>
        </div>
        <div className="faq-item p-5">
          <dt className="text-lg font-semibold text-primary">What platforms does StreamNest support?</dt>
          <dd className="mt-2 text-slate-400">
            StreamNest currently supports Linux (Debian package and AppImage). Windows, macOS, and 
            mobile versions are coming soon.
          </dd>
        </div>
        <div className="faq-item p-5">
          <dt className="text-lg font-semibold text-primary">Do I need FFmpeg to use StreamNest?</dt>
          <dd className="mt-2 text-slate-400">
            FFmpeg is recommended for the best quality when merging, remuxing, or extracting audio. 
            StreamNest includes an automatic FFmpeg installer that works on Linux, macOS, and Windows.
          </dd>
        </div>
        <div className="faq-item p-5">
          <dt className="text-lg font-semibold text-primary">Can I download entire playlists with StreamNest?</dt>
          <dd className="mt-2 text-slate-400">
            Yes, StreamNest supports playlist downloads. You can load playlist entries, select specific 
            items, and use range support (e.g., 1-5, 1,3,7-10) to download exactly what you need.
          </dd>
        </div>
      </dl>
    </section>
  );
}
