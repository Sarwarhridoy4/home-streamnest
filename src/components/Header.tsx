export default function Header() {
  return (
    <header className="neu-card p-6 md:p-8" role="banner">
      <div className="flex items-center justify-between gap-4">
        <nav aria-label="Primary navigation">
          <a
            href="https://github.com/Sarwarhridoy4/StreamNest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="StreamNest GitHub repository (opens in a new tab)"
            className="focus-ring flex items-center gap-3 text-xl font-bold gradient-text"
          >
            <div className="neu-icon h-10 w-10">
              <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            StreamNest
          </a>
        </nav>
        <a
          href="https://github.com/Sarwarhridoy4/StreamNest"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View StreamNest on GitHub (opens in a new tab)"
          className="focus-ring neu-btn px-4 py-2 text-sm font-medium text-slate-300"
        >
          View GitHub
        </a>
      </div>
    </header>
  );
}
