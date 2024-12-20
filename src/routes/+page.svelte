<script>
	import { t } from '$lib/langStore';
</script>

<svelte:head>
	<title>Discloud Helper</title>
	<meta
		name="description"
		content="Useful tools to simplify the configuration and management of your applications on Discloud."
	/>
	<meta property="og:title" content="Discloud Helper" />
	<meta
		property="og:description"
		content="Useful tools to simplify the configuration and management of your applications on Discloud."
	/>
	<meta property="og:image" content="https://i.imgur.com/hjeNHfj.png" />
	<meta property="og:url" content="https://init.discloud.app/" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="bg-[#0b0b0b] text-white">
	<div class="py-12 text-center">
		<img src="/logo.png" alt="Discloud Logo" class="mx-auto mb-4 h-20 w-20" />
		<h1 class="text-3xl font-bold text-[#57f287]">{$t.landing.welcome.title}</h1>
		<p class="mt-4 text-lg text-gray-300">
			{$t.landing.welcome.description}
		</p>
	</div>

	<main class="mx-auto max-w-6xl px-6">
		<h2 class="text-2xl font-semibold text-[#57f287]">{$t.landing.functionalities.title}</h2>
		<div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
			<div class="rounded-lg bg-[#1c1c1c] p-6 shadow-md">
				<h3 class="text-xl font-semibold text-[#57f287]">
					{$t.landing.functionalities.tools.configGenerator.title}
				</h3>
				<p class="mt-2 text-gray-300">
					{@html $t.landing.functionalities.tools.configGenerator.description}
				</p>
				<a
					href="/discloud-config"
					class="mt-4 inline-block rounded-md bg-[#57f287] px-4 py-2 text-sm font-medium text-black hover:bg-[#3ba459]"
				>
					{$t.landing.functionalities.tools.configGenerator.button}
				</a>
			</div>

			<div class="rounded-lg bg-[#1c1c1c] p-6 shadow-md">
				<h3 class="text-xl font-semibold text-[#57f287]">
					{$t.landing.functionalities.tools.generateDiscordApplicationInvite.title}
				</h3>
				<p class="mt-2 text-gray-300">
					{@html $t.landing.functionalities.tools.generateDiscordApplicationInvite.description}
				</p>
				<a
					href="/invite-discord-bot"
					class="mt-4 inline-block rounded-md bg-[#57f287] px-4 py-2 text-sm font-medium text-black hover:bg-[#3ba459]"
				>
					{$t.landing.functionalities.tools.generateDiscordApplicationInvite.button}
				</a>
			</div>

			<div class="rounded-lg bg-[#1c1c1c] p-6 shadow-md">
				<h3 class="text-xl font-semibold text-[#5865f2]">
					{$t.landing.functionalities.tools.comingSoon.title}
				</h3>
				<p class="mt-2 text-gray-300">
					{$t.landing.functionalities.tools.comingSoon.description}
				</p>
			</div>
		</div>
	</main>
</div>
