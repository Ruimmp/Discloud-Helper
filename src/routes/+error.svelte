<script>
	import { page } from '$app/stores';
	import { t } from '$lib/langStore';

	// Detect the message based on the status or use the default message
	$: errorMessage =
		$page.status && $t.errorPage.messages[$page.status]
			? $t.errorPage.messages[$page.status]
			: $t.errorPage.messages.default;
</script>

<svelte:head>
	<title>{$page.status} - {$t.errorPage.title}</title>
</svelte:head>

<div class="flex items-center justify-center bg-[#0b0b0b] text-white">
	<main class="w-full px-4">
		<section
			class="mx-auto grid max-w-4xl grid-cols-1 gap-6 rounded-lg bg-[#1c1c1c] p-8 shadow-xl md:grid-cols-2 md:items-center"
		>
			<!-- Error information -->
			<div>
				<h1 class="text-6xl font-extrabold text-[#ed4245]">Error {$page.status}</h1>
				<p class="mt-4 text-2xl font-semibold text-gray-300">{errorMessage}</p>
				<p class="mt-2 text-gray-400">{$t.errorPage.instructions}</p>
				<a
					href="/"
					class="mt-6 inline-block rounded-lg bg-[#57f287] px-6 py-3 text-lg font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-[#3ba459]"
				>
					{$t.errorPage.button}
				</a>
			</div>

			<!-- Decorative image -->
			<div class="flex items-center justify-center">
				<div
					class="relative flex h-64 w-64 items-center justify-center rounded-lg transition-transform duration-300 hover:scale-105"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						class="h-40 w-40 text-[#ed4245]"
					>
						<circle cx="12" cy="12" r="10" stroke-width="2" />
						<path d="M15 9l-6 6m0-6l6 6" stroke-width="2" />
					</svg>
				</div>
			</div>
		</section>
	</main>
</div>
