<script>
	import { onMount, onDestroy } from 'svelte';
	import { language, supportedLanguages, t } from '$lib/langStore';

	let isMenuOpen = false; // Mobile menu toggle
	let isToolsDropdownOpen = false; // Tools dropdown toggle
	let isLanguageDropdownOpen = false; // Language dropdown toggle
	let handleClickOutside; // Placeholder for the event handler

	// Setup event listeners
	onMount(() => {
		const handleClickOutside = (e) => {
			if (!e.target.closest('.menu-container') && !e.target.closest('.dropdown-container')) {
				isMenuOpen = false;
				isToolsDropdownOpen = false;
				isLanguageDropdownOpen = false;
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	// Cleanup event listeners
	onDestroy(() => {
		if (handleClickOutside) {
			document.removeEventListener('click', handleClickOutside);
		}
	});

	// Toggle language dropdown
	function toggleLanguageDropdown() {
		isLanguageDropdownOpen = !isLanguageDropdownOpen;
	}

	// Change the language
	function changeLanguage(lang) {
		language.set(lang); // Sync language state
		isLanguageDropdownOpen = false; // Close dropdown if open
	}
</script>

<div class="duration-5000 flex flex-col transition-colors ease-in-out">
	<header class="flex items-center justify-between bg-[#0b0b0b] p-2">
		<div class="mx-auto flex w-full max-w-screen-xl items-center justify-between p-2">
			<h1 class="text-center text-xl font-bold text-white">
				<a href="/" class="transition duration-300 hover:text-[#57f287]">
					<img src="/logo.png" alt="Logo" class="mr-2 inline-block h-10 w-10" />
					{$t.header.title}
				</a>
			</h1>
		</div>

		<nav class="mx-auto hidden items-center space-x-4 md:flex">
			<div class="dropdown-container relative">
				<!-- Language Dropdown -->
				<div class="relative z-50">
					<button
						class="relative flex items-center rounded-lg px-4 py-2 text-white shadow-md transition duration-300 hover:bg-[#45be6c]"
						on:click={toggleLanguageDropdown}
					>
						{$language}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ml-2 h-5 w-5 transition-transform"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							style="transform: rotate({isLanguageDropdownOpen ? 180 : 0}deg);"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					<!-- Dropdown Menu -->
					{#if isLanguageDropdownOpen}
						<ul
							class="z-100 absolute right-0 mt-2 w-40 origin-top-right rounded-lg bg-[#1c1c1c] p-2 text-white shadow-lg transition-all duration-300"
							style="pointer-events: auto;"
						>
							{#each supportedLanguages as lang}
								<li>
									<button
										on:click={() => changeLanguage(lang)}
										class="block w-full rounded-md px-4 py-2 text-left text-sm transition duration-200 hover:bg-[#45be6c] hover:text-white"
									>
										{lang}
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		</nav>
	</header>
</div>
