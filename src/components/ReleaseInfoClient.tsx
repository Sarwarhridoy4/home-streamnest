"use client";
import { useState } from "react";

interface ReleaseAsset {
  name: string;
  size: number;
  browser_download_url: string;
}

interface ReleaseData {
  tag_name: string;
  name: string;
  html_url: string;
  assets: ReleaseAsset[];
}

export default function ReleaseInfoClient({
  releases,
  initialSelected,
}: {
  releases: ReleaseData[];
  initialSelected: ReleaseData;
}) {
  const [selected, setSelected] = useState<ReleaseData>(initialSelected);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = e.target.value;
    const found = releases.find((r) => r.tag_name === tag) || null;
    setSelected(found!);
  };

  const debianAsset = selected.assets.find((a) => a.name.endsWith(".deb"));
  const appImageAsset = selected.assets.find((a) => a.name.endsWith(".AppImage"));

  return (
    <>
      <p className="font-semibold text-primary">Latest version: {selected.tag_name}</p>
      <p className="mt-1 text-sm text-slate-400">Available now: Linux (Debian package and AppImage)</p>
      <p className="text-sm text-slate-400">Coming soon: Windows, mobile, and macOS.</p>

      <div className="mt-4">
        <label htmlFor="release-select" className="text-sm text-slate-400">Select version:</label>
        <select
          id="release-select"
          className="mt-2 w-full neu-pressed bg-slate-900 px-3 py-2 text-sm text-slate-200 outline-none"
          value={selected.tag_name}
          onChange={handleChange}
        >
          {releases.map((r) => (
            <option key={r.tag_name} value={r.tag_name}>{r.tag_name} – {r.name}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        {debianAsset && (
          <a
            className="focus-ring btn-download inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white"
            href={debianAsset.browser_download_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download StreamNest ${selected.tag_name} Debian package`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Debian Package (.deb)
          </a>
        )}
        {appImageAsset && (
          <a
            className="focus-ring btn-download inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white"
            href={appImageAsset.browser_download_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download StreamNest ${selected.tag_name} AppImage`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            AppImage (Linux)
          </a>
        )}
      </div>
    </>
  );
}
