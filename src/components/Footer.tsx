export default function Footer() {
  return (
    <footer className="neon-border p-6 text-center" role="contentinfo">
      <p className="text-sm text-slate-400">
        StreamNest by{" "}
        <a
          className="focus-ring font-semibold text-primary transition hover:text-primary-light"
          href="https://github.com/Sarwarhridoy4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sarwarhridoy4 GitHub profile (opens in a new tab)"
        >
          Sarwarhridoy4
        </a>
        . Download the latest desktop build from GitHub releases.
      </p>
      <p className="mt-2 text-xs text-slate-500">
        © {new Date().getFullYear()} StreamNest. Licensed under MIT.
      </p>
    </footer>
  );
}
