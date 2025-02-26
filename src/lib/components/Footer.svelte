<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { t } from '$lib/langStore';

  let contributors = [];
  const currentYear = new Date().getFullYear();
  let loading = true;

  onMount(async () => {
    try {
      const res = await fetch(
        'https://api.github.com/repos/Ruimmp/Discloud-Helper/contributors'
      );
      const data = await res.json();
      contributors = data.filter((c) => c.login !== 'dependabot[bot]');
    } catch (error) {
      console.error('Error fetching contributors:', error);
    } finally {
      loading = false;
    }
  });
</script>

<!-- Divider -->
<div class="my-6 flex justify-center">
  <hr class="w-3/4 border-t opacity-25" />
</div>

<footer class="bg-[#0b0b0b] py-8 text-white">
  <div class="mx-auto max-w-screen-xl px-4 text-center">
    <!-- Contributors Section -->
    <div class="mb-6">
      <h2 class="text-lg font-semibold mb-2">{$t.footer.contributors}</h2>
      {#if loading}
        <p class="text-sm">{$t.footer.loadingContributors}</p>
      {:else}
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {#each contributors as contributor (contributor.id)}
            <a
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${contributor.login}'s GitHub profile`}
              class="flex flex-col items-center space-y-1 text-sm p-2 rounded transition transform duration-300 hover:opacity-80 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1a1a1a] hover:to-[#323232]"
              in:fade={{ duration: 300 }}
            >
              <img
                src={contributor.avatar_url}
                alt={`${contributor.login}'s avatar`}
                class="w-10 h-10 rounded-full"
                loading="lazy"
              />
              <span>{contributor.login}</span>
            </a>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Footer Info -->
    <div class="flex flex-col items-center space-y-2">
      <p class="text-sm">
        &copy; {currentYear}{' '}
        <span
          class="text-[#45be6c] underline transition-colors duration-300 hover:text-[#3ba459]"
        >
          <a
            href="https://github.com/Ruimmp/Discloud-Helper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discloud Helper
          </a>
        </span>
        | All rights reserved.
      </p>
      <p class="mt-2 text-sm md:mt-0">
        <span class="text-gray-400">{$t.footer.info} </span>
        <a
          href="https://discloud.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#45be6c] underline transition-colors duration-300 hover:text-[#3ba459]"
        >
          Discloud
        </a>.
      </p>
    </div>
  </div>
</footer>
