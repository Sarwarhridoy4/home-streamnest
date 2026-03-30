export default function FeaturesSection() {
  return (
    <section aria-labelledby="detailed-features-heading" className="neon-border p-6 md:p-8">
      <h2 id="detailed-features-heading" className="mb-6 text-2xl font-bold gradient-text">
        Why Choose StreamNest?
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="feature-item p-5">
          <div className="flex items-start gap-4">
            <div className="neu-icon h-12 w-12 shrink-0">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200">Lightning Fast</h3>
              <p className="mt-2 text-sm text-slate-400">
                Optimized download engine with multi-threaded support for maximum speed.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature-item p-5">
          <div className="flex items-start gap-4">
            <div className="neu-icon h-12 w-12 shrink-0">
              <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200">Secure & Private</h3>
              <p className="mt-2 text-sm text-slate-400">
                No data collection, no tracking. Your downloads remain completely private.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="feature-item p-5">
          <div className="flex items-start gap-4">
            <div className="neu-icon h-12 w-12 shrink-0">
              <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200">Batch Downloads</h3>
              <p className="mt-2 text-sm text-slate-400">
                Download multiple videos or entire playlists with a single click.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="feature-item p-5">
          <div className="flex items-start gap-4">
            <div className="neu-icon h-12 w-12 shrink-0">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200">Easy to Use</h3>
              <p className="mt-2 text-sm text-slate-400">
                Simple, intuitive interface that anyone can use without technical knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="feature-item p-5">
          <div className="flex items-start gap-4">
            <div className="neu-icon h-12 w-12 shrink-0">
              <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200">Customizable</h3>
              <p className="mt-2 text-sm text-slate-400">
                Choose quality, format, and download location to suit your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 6 */}
        <div className="feature-item p-5">
          <div className="flex items-start gap-4">
            <div className="neu-icon h-12 w-12 shrink-0">
              <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200">Open Source</h3>
              <p className="mt-2 text-sm text-slate-400">
                Free forever. Contribute, modify, and distribute under MIT license.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
