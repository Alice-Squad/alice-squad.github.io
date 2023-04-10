<script lang="ts">
    import { onMount } from "svelte"
    import { fetchReleases, getLatestStableRelease } from "$lib/github/releases_fetcher"
    import type { Release } from "$lib/github/release"

    let latestRelease: Release | null
    let theme = "bumblebee"

    onMount(async () => {
        latestRelease = await getLatestStableRelease(
            await fetchReleases("https://api.github.com/repos/schombert/Project-Alice/releases")
        )
    })
</script>

<div data-theme={theme}>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <img src="/favicon.png" alt="logo" width="50px" height="50px" />
            <div class="normal-case text-xl m-4">Project Alice</div>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <a href="https://schombert.github.io/Project-Alice/index.html" target="_blank">Docs</a>
                </li>
                <li>
                    <a href="https://discord.gg/QUJExr4mRn" target="_blank">
                        <img
                            src="/discord-mark/discord-mark-black.svg"
                            width="25px"
                            height="25px"
                            alt="Discord Logo"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/schombert/Project-Alice"
                        target="_blank"
                        class="btn btn-ghost"
                    >
                        <img
                            width="25px"
                            height="25px"
                            src="/github-mark/github-mark.svg"
                            alt="GitHub logo"
                        />
                    </a>
                </li>
            </ul>
        </div>
    </div>

    {#if latestRelease != null}
        <button>Latest Release</button>
    {:else}
        <h3>There is no release at the moment</h3>
    {/if}
</div>
