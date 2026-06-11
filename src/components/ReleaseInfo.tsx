import ReleaseInfoClient from "./ReleaseInfoClient";

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

async function getReleases(): Promise<ReleaseData[]> {
  const res = await fetch(
    "https://api.github.com/repos/Sarwarhridoy4/StreamNest/releases?per_page=20",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch releases");
  }

  return res.json();
}

export default async function ReleaseInfo() {
  let releases: ReleaseData[] = [];
  let initialSelected: ReleaseData | null = null;
  let error = false;

  try {
    releases = await getReleases();
    if (releases.length) {
      initialSelected = releases[0];
    }
  } catch {
    error = true;
  }

  return (
    <div className="neu-pressed p-4">
      {error ? (
        <>
          <p className="font-semibold text-primary">Latest version: 2.0.1</p>
          <p className="mt-1 text-sm text-slate-400">
            Available now: Linux (Debian package and AppImage)
          </p>
          <p className="text-sm text-slate-400">
            Coming soon: Windows, mobile, and macOS.
          </p>
        </>
      ) : !releases.length || !initialSelected ? (
        <p className="text-slate-400">Loading release info...</p>
      ) : (
        <ReleaseInfoClient
          releases={releases}
          initialSelected={initialSelected}
        />
      )}
    </div>
  );
}
