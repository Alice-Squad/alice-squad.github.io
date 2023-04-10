import { type Release, Convert } from "./release"

export async function fetchReleases(url: string | URL): Promise<Release[]> {
    const userAgent =
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36"

    const data = await fetch(url, { headers: { "User-Agent": userAgent } })
    return Convert.toRelease(await data.json())
}

export async function getLatestStableRelease(releases: Release[]): Promise<Release | null> {
    for (const release of releases) {
        if (!release.prerelease) return release
    }
    return null
}
