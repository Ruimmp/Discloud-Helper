<script>
	import { t } from '$lib/langStore';
	import config from './discloudConfig.json';

	// Variables for form fields
	let type = 'bot';
	let name = '';
	let main = '';
	let avatar = '';
	let ram = config.defaults.minRam.bot;
	let autorestart = false;
	let version = '';
	let selectedApts = ['tools'];
	let availableVersions = [];
	let id = '';
	let language = '';

	// Config preview
	let copyButtonText = $t.discloudConfig.form.copyButton;

	// Error/Warning messages for form fields
	let idError = '';
	let showIdWarning = false;
	let nameError = '';
	let mainFileError = '';
	let avatarError = '';
	let showRamError = false;

	// Constants from config file
	const appTypes = config.appTypes;
	const versions = config.versions;
	const aptsOptions = config.apts;
	const fileExtensions = config.fileExtensions;

	// Handle type change
	function handleTypeChange() {
		const minRam = type === 'site' ? config.defaults.minRam.site : config.defaults.minRam.bot;
		ram = minRam;
		showRamError = false;
	}

	// Validate ID field
	function validateId() {
		id = id.trim();

		// Check if ".discloud.app" is included in the ID
		if (id.toLowerCase().includes('.discloud.app')) {
			// Remove ".discloud.app" from the ID
			id = id.toLowerCase().replace('.discloud.app', '').trim();
			showIdWarning = true; // Show warning message

			setTimeout(() => {
				showIdWarning = false;
			}, 5000);
		}
	}

	// Validate name field
	function validateName() {
		name = name.trim();

		if (!name) {
			nameError = $t.discloudConfig.form.appName.error;
		} else {
			nameError = '';
		}
	}

	// Validate main file based on language requirements
	function validateMainFile() {
		const ext = main.slice(main.lastIndexOf('.'));
		language = fileExtensions[ext] || '';
		mainFileError = '';

		if (ext === '.java') {
			mainFileError = $t.discloudConfig.form.appMain.error.javaJar;
		} else if (language === 'java') {
			const jarFilePattern = /^[a-zA-Z0-9]+\.jar$/;
			if (ext !== '.jar') {
				mainFileError = $t.discloudConfig.form.appMain.error.javaJar;
			} else if (!jarFilePattern.test(main)) {
				mainFileError = $t.discloudConfig.form.appMain.error.invalidJarName;
			}
		} else if (main && !language) {
			mainFileError = $t.discloudConfig.form.appMain.error.invalidExtension;
		}
	}

	// Validate avatar URL
	function validateAvatarUrl() {
		avatarError =
			avatar && !/^(https?:\/\/[^\s]+(\.png|\.jpg|\.jpeg)(\?.*)?)$/i.test(avatar)
				? $t.discloudConfig.form.appAvatar.error
				: '';
	}

	// Validate RAM field
	function validateRam() {
		showRamError =
			type === 'site' ? ram < config.defaults.minRam.site : ram < config.defaults.minRam.bot;
	}

	// Set available versions based on detected language
	function setAvailableVersions() {
		availableVersions = language ? versions[language] || [] : [];
		if (language && availableVersions.length > 0) {
			version = version || availableVersions[0]; // Set the first version as default
		} else {
			version = ''; // Reset version if language is invalid or not detected
		}
	}

	// Toggle APT packages
	function toggleApt(aptName) {
		const lowerApt = aptName.toLowerCase();
		selectedApts = selectedApts.includes(lowerApt)
			? selectedApts.filter((a) => a !== lowerApt)
			: [...selectedApts, lowerApt];
	}

	// Reactive Updates
	$: {
		validateMainFile();
		setAvailableVersions();
		validateAvatarUrl();
	}

	// Generate config preview
	$: configPreview = [
		name ? `NAME=${name}` : null,
		avatar && !avatarError ? `AVATAR=${avatar}` : null,
		`TYPE=${type}`,
		type === 'site' && id ? `ID=${id}` : null,
		main ? `MAIN=${main}` : null,
		`RAM=${ram}`,
		autorestart ? `AUTORESTART=true` : null,
		version && language ? `VERSION=${version}` : null,
		selectedApts.length ? `APT=${selectedApts.join(', ')}` : null
	]
		.filter((line) => line !== null)
		.join('\n');
	// Download discloud.config file
	function downloadConfig() {
		const blob = new Blob([configPreview], { type: 'text/plain' });
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = 'discloud.config';
		link.click();
		URL.revokeObjectURL(link.href);

		showPopup = true;
	}

	$: isFormValid =
		name &&
		main &&
		ram >= 100 &&
		(type === 'bot' || (type === 'site' && id && !idError)) &&
		!mainFileError &&
		!avatarError;

	// Handle form submission
	function handleSubmit(event) {
		event.preventDefault(); // Prevent default form submission
		downloadConfig();
	}

	// Copy config preview to clipboard
	function handleCopy() {
		navigator.clipboard.writeText(configPreview).then(
			() => {
				copyButtonText = $t.discloudConfig.form.copySuccess;
				setTimeout(() => (copyButtonText = $t.discloudConfig.form.copyButton), 2000);
			},
			(err) => {
				copyButtonText = $t.discloudConfig.form.copyError;
				console.error('Erro ao copiar conteúdo:', err);
				setTimeout(() => (copyButtonText = $t.discloudConfig.form.copyButton), 2000);
			}
		);
	}
</script>

<svelte:head>
	<title>discloud.config</title>
	<meta name={$t.discloudConfig.title} content={$t.discloudConfig.description} />

	<meta property="og:title" content={$t.discloudConfig.ogTitle} />
	<meta property="og:description" content={$t.discloudConfig.ogDescription} />
	<meta property="og:image" content="https://i.imgur.com/hjeNHfj.png" />
	<meta property="og:url" content="https://init.discloud.app/discloud-config" />
	<meta property="og:type" content="article" />
</svelte:head>

<div class="flex flex-col items-center justify-center bg-[#0b0b0b] p-4 text-white">
	<h1 class="mb-4 text-2xl font-bold text-[#45be6c]">{$t.discloudConfig.header.title}</h1>

	<div class="flex w-full max-w-6xl flex-col gap-6 md:flex-row">
		<form on:submit={handleSubmit} class="w-[750px] rounded-lg bg-[#1c1c1c] p-6 shadow-lg">
			<div class="mb-4">
				<label for="appType" class="mb-2 block text-sm font-semibold text-gray-300">
					{$t.discloudConfig.form.appType.label}
				</label>
				<select
					id="appType"
					bind:value={type}
					on:change={handleTypeChange}
					class="w-full rounded-md border border-gray-600 bg-[#0b0b0b] px-4 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#57f287] focus:ring-opacity-50"
				>
					{#each appTypes as appType}
						<option value={appType}>{appType.charAt(0).toUpperCase() + appType.slice(1)}</option>
					{/each}
				</select>
			</div>

			{#if type === 'site'}
				<div class="mb-4">
					<label for="appId" class="mb-2 block text-sm font-semibold text-gray-300">
						{$t.discloudConfig.form.appId.label}<span class="text-[#fee75c]>*"></span>
					</label>
					<input
						type="text"
						id="appId"
						bind:value={id}
						on:input={validateId}
						placeholder={$t.discloudConfig.form.appId.placeholder}
						class="w-full rounded-md border border-gray-600 bg-[#0b0b0b] px-4 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#57f287] focus:ring-opacity-50"
					/>
					{#if idError}
						<p class="mt-1 text-sm text-red-500">{$t.discloudConfig.form.appId.error}</p>
					{/if}
					{#if showIdWarning}
						<p class="mt-1 text-sm text-yellow-500">
							{$t.discloudConfig.form.appId.warningMessage}
						</p>
					{/if}
				</div>
			{/if}

			<div class="mb-4">
				<label for="appName" class="mb-2 block text-sm font-semibold text-gray-300">
					{$t.discloudConfig.form.appName.label}<span class="text-[#fee75c]">*</span>
				</label>
				<input
					type="text"
					id="appName"
					bind:value={name}
					on:input={validateName}
					placeholder={$t.discloudConfig.form.appName.placeholder}
					class="w-full rounded-md border border-gray-600 bg-[#0b0b0b] px-4 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#57f287] focus:ring-opacity-50"
				/>
				{#if nameError}
					<p class="mt-1 text-sm text-red-500">{nameError}</p>
				{/if}
			</div>

			<div class="mb-4">
				<label for="appMain" class="mb-2 block text-sm font-semibold text-gray-300">
					{$t.discloudConfig.form.appMain.label}<span class="text-[#fee75c]">*</span>
				</label>
				<input
					type="text"
					id="appMain"
					bind:value={main}
					on:input={validateMainFile}
					on:blur={() => {
						validateMainFile();
						setAvailableVersions();
					}}
					placeholder={$t.discloudConfig.form.appMain.placeholder}
					class="w-full rounded-md border border-gray-600 bg-[#0b0b0b] px-4 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#57f287] focus:ring-opacity-50"
				/>
				{#if !main}
					<div
						class="mt-3 flex items-start space-x-3 rounded-md border border-[#fee75c] bg-[#1c1c1c] p-3"
					>
						<!-- SVG icon -->
						<svg
							class="h-6 w-6 flex-shrink-0 text-[#fee75c]"
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 512 512"
							xml:space="preserve"
							fill="#000000"
						>
							<g id="SVGRepo_bgCarrier" stroke-width="0" />
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
							<g id="SVGRepo_iconCarrier">
								<path
									style="fill:#fee75c;"
									d="M492.109,245.771c0,130.407-105.71,236.117-236.104,236.117c-8.769,0-17.423-0.477-25.934-1.419 c-26.708-2.915-52.062-10.291-75.34-21.356l-83.452,43.215l14.431-93.021C44.958,366.88,19.901,309.26,19.901,245.771 c0-130.394,105.698-236.104,236.104-236.104c32.395,0,63.256,6.525,91.344,18.326C432.387,63.702,492.109,147.76,492.109,245.771z"
								/>
								<path
									style="fill:#fee75c;"
									d="M107.738,483.449l11.502-74.14C78.488,366.88,53.431,309.26,53.431,245.771 c0-124.758,96.763-226.907,219.344-235.505c-5.54-0.389-11.131-0.6-16.77-0.6c-130.407,0-236.104,105.71-236.104,236.104 c0,63.488,25.057,121.109,65.81,163.537l-14.431,93.021L107.738,483.449z"
								/>
								<path
									style="fill:#fee75c;"
									d="M263.601,480.47c-26.708-2.915-52.062-10.291-75.34-21.356l-15.092,7.815 c18.026,6.756,37.091,11.378,56.902,13.541c8.512,0.941,17.165,1.419,25.934,1.419c5.665,0,11.28-0.213,16.846-0.605 C269.753,481.066,266.664,480.809,263.601,480.47z"
								/>
								<g>
									<circle style="fill:#E6E6E6;" cx="256.004" cy="121.921" r="41.539" />
									<polygon
										style="fill:#E6E6E6;"
										points="292.072,367.413 292.072,231.291 292.072,199.148 219.929,199.148 199.244,199.148 199.244,231.291 219.929,231.291 219.929,367.413 199.244,367.413 199.244,399.555 219.929,399.555 292.072,399.555 312.758,399.555 312.758,367.413 "
									/>
								</g>
								<g>
									<path
										style="fill:#333333;"
										d="M75.429,412.503l-13.707,88.342c-0.558,3.601,0.953,7.208,3.91,9.336 c1.677,1.207,3.657,1.82,5.647,1.82c1.52,0,3.046-0.357,4.447-1.083l79.241-41.036c31.825,14.386,65.788,21.675,101.032,21.675 c135.521,0,245.778-110.255,245.778-245.778C501.778,110.255,391.523,0,256,0S10.223,110.255,10.223,245.778 C10.223,307.949,33.344,366.964,75.429,412.503z M256,19.344c124.855,0,226.433,101.577,226.433,226.433 S380.856,472.211,256,472.211c-33.973,0-66.646-7.347-97.114-21.835c-2.731-1.3-5.914-1.244-8.6,0.146l-66.524,34.45l11.51-74.177 c0.463-2.982-0.493-6.007-2.582-8.184c-40.704-42.373-63.121-98.072-63.121-156.835C29.568,120.922,131.145,19.344,256,19.344z"
									/>
									<path
										style="fill:#333333;"
										d="M256,173.124c28.238,0,51.208-22.972,51.208-51.208c0-28.238-22.972-51.208-51.208-51.208 s-51.208,22.972-51.208,51.208C204.792,150.152,227.764,173.124,256,173.124z M256,90.052c17.571,0,31.864,14.294,31.864,31.864 S273.57,153.78,256,153.78c-17.57,0-31.864-14.294-31.864-31.864C224.136,104.346,238.43,90.052,256,90.052z"
									/>
									<path
										style="fill:#333333;"
										d="M199.244,409.227h113.514c5.342,0,9.672-4.331,9.672-9.672v-32.143c0-5.342-4.331-9.672-9.672-9.672 h-11.013V199.148c0-5.342-4.331-9.672-9.672-9.672h-92.828c-5.342,0-9.672,4.331-9.672,9.672v32.143 c0,5.342,4.331,9.672,9.672,9.672h11.013v116.777h-11.013c-5.342,0-9.672,4.331-9.672,9.672v32.143 C189.571,404.897,193.902,409.227,199.244,409.227z M208.916,377.085h11.013c5.342,0,9.672-4.331,9.672-9.672V231.291 c0-5.342-4.331-9.672-9.672-9.672h-11.013v-12.798H282.4v158.593c0,5.342,4.331,9.672,9.672,9.672h11.013v12.798h-94.17 L208.916,377.085L208.916,377.085z"
									/>
								</g>
							</g>
						</svg>

						<div>
							<p class="text-sm font-semibold text-[#fee75c]">
								{$t.discloudConfig.form.appMain.error.missingTitle}
							</p>
							<p class="text-gray mt-1 text-sm">
								{$t.discloudConfig.form.appMain.error.missingDescription}
							</p>
							<ul class="mt-2 list-inside list-disc text-sm text-gray-300">
								<li>
									{$t.discloudConfig.form.appMain.examples.title}
									{#each $t.discloudConfig.form.appMain.examples.list as example, index}
										<span class="text-[#fee75c]">{example}</span>
										{index < $t.discloudConfig.form.appMain.examples.list.length - 1 ? ', ' : ''}
									{/each}
								</li>
								<li>
									{$t.discloudConfig.form.appMain.examples.javaNote}
									<span class="text-[#fee75c]">.jar</span>
								</li>
							</ul>
						</div>
					</div>
				{/if}

				{#if mainFileError}
					<p class="mt-1 text-sm text-red-500">{mainFileError}</p>
				{/if}
			</div>

			<div class="mb-4">
				<label for="appAvatar" class="mb-2 block text-sm font-semibold text-gray-300">
					{$t.discloudConfig.form.appAvatar.label}
				</label>
				<input
					type="text"
					id="appAvatar"
					bind:value={avatar}
					on:input={validateAvatarUrl}
					placeholder={$t.discloudConfig.form.appAvatar.placeholder}
					class="w-full rounded-md border border-gray-600 bg-[#0b0b0b] px-4 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#57f287] focus:ring-opacity-50"
				/>
				{#if avatarError}
					<p class="mt-1 text-sm text-red-500">{avatarError}</p>
				{/if}
			</div>

			<div class="mb-4 flex items-start space-x-6">
				<!-- Campo de RAM -->
				<div class="flex-1">
					<label for="appRam" class="mb-2 block text-sm font-semibold text-gray-300">
						{$t.discloudConfig.form.appRam.label}
					</label>
					<input
						type="number"
						id="appRam"
						bind:value={ram}
						on:input={validateRam}
						placeholder={$t.discloudConfig.form.appRam.placeholder}
						class="w-full rounded-md border border-gray-600 bg-[#0b0b0b] px-4 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#57f287] focus:ring-opacity-50"
					/>
					{#if showRamError}
						<p class="mt-1 text-sm text-red-500">
							{type === 'site'
								? `${$t.discloudConfig.form.appRam.error.site.replace('{minRamSite}', config.defaults.minRam.site)}`
								: `${$t.discloudConfig.form.appRam.error.bot.replace('{minRamBot}', config.defaults.minRam.bot)}`}
						</p>
					{/if}
				</div>

				<!-- Autorestart Button -->
				<div class="flex-1">
					<label for="autorestart" class="block text-sm font-semibold text-gray-300">
						{$t.discloudConfig.form.autorestart.label}
					</label>
					<div class="mt-2 flex flex-col items-start">
						<!-- Alternance button -->
						<button
							type="button"
							on:click={() => (autorestart = !autorestart)}
							class={`flex w-full items-center justify-center rounded-md px-4 py-2 text-base font-semibold transition duration-300 ${
								autorestart
									? 'bg-[#57f287] text-black hover:bg-[#3ba459]'
									: 'bg-[#ed4245] text-white hover:bg-[#c92a2f]'
							}`}
						>
							{autorestart
								? $t.discloudConfig.form.autorestart.enabled
								: $t.discloudConfig.form.autorestart.disabled}
						</button>
						<span class="mt-2 text-sm text-gray-300">
							{$t.discloudConfig.form.autorestart.tooltip}
							<a
								href={$t.discloudConfig.form.autorestart.linkUrl}
								class="inline-flex items-center text-[#57f287] underline hover:text-[#3ba459]"
								target="_blank"
								rel="noopener noreferrer"
							>
								{$t.discloudConfig.form.autorestart.linkText}
							</a>
						</span>
					</div>
				</div>
			</div>

			<div class="mb-4">
				<label for="appVersion" class="mb-2 block text-sm font-semibold text-gray-300">
					{$t.discloudConfig.form.appVersion.label}
				</label>
				<select
					id="appVersion"
					bind:value={version}
					disabled={!main || mainFileError}
					class={`w-full rounded-md border border-gray-600 bg-[#0b0b0b] px-4 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#57f287] focus:ring-opacity-50 ${
						!mainFileError ? 'cursor-pointer' : 'cursor-default'
					}" `}
				>
					{#if !main}
						<option value="" disabled selected hidden>
							{$t.discloudConfig.form.appVersion.placeholder.selectFile}
						</option>
					{:else if main && !language}
						<option value="" disabled selected hidden>
							{$t.discloudConfig.form.appVersion.placeholder.invalidFile}
						</option>
					{:else}
						{#each availableVersions as ver}
							<option value={ver}>{ver}</option>
						{/each}
					{/if}
				</select>
			</div>

			<div class="mb-12">
				<label for="appApts" class="mb-2 block text-sm font-semibold text-gray-300">
					{$t.discloudConfig.form.appApts.label}
				</label>
				<div class="grid grid-cols-3 gap-4">
					{#each aptsOptions as apt}
						<div
							class="relative flex items-center space-x-4 rounded-md border border-gray-600 bg-[#0b0b0b] p-3 shadow-sm"
						>
							<!-- Selection button -->
							<button
								type="button"
								on:click={() => toggleApt(apt.name)}
								class={`flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition duration-300 ${
									selectedApts.includes(apt.name.toLowerCase())
										? 'bg-[#57f287] text-black hover:bg-[#3ba459]'
										: 'bg-[#ed4245] text-white hover:bg-[#c92a2f]'
								}`}
							>
								{apt.name}
							</button>

							<!-- Information pop-up -->
							<div class="group relative">
								<button
									type="button"
									class="flex items-center justify-center rounded-md bg-[#b5b5b5] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#4b56d6]"
									aria-label={$t.discloudConfig.form.appApts.info}
								>
									<svg
										class="h-5 w-5 flex-shrink-0 text-[#fee75c]"
										version="1.1"
										id="Layer_1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 512 512"
										xml:space="preserve"
										fill="#000000"
									>
										<g id="SVGRepo_bgCarrier" stroke-width="0" />
										<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
										<g id="SVGRepo_iconCarrier">
											<g>
												<circle style="fill:#57f287;" cx="256" cy="81.293" r="73.034" />
												<path
													style="fill:#57f287;"
													d="M356.012,231.76v-44.394H155.988v44.394c14.899,0,26.975,12.077,26.975,26.974v173.638 c0,14.898-12.078,26.975-26.975,26.975v44.394h200.025v-44.393c-14.899,0-26.975-12.078-26.975-26.975v-173.64 C329.037,243.836,341.114,231.76,356.012,231.76z"
												/>
											</g>
											<path
												d="M256,162.588c44.826,0,81.295-36.469,81.295-81.295S300.826,0,256,0s-81.295,36.468-81.295,81.293 S211.174,162.588,256,162.588z M256,16.516c35.719,0,64.778,29.06,64.778,64.777c0,35.719-29.06,64.778-64.778,64.778 s-64.778-29.06-64.778-64.778C191.222,45.576,220.281,16.516,256,16.516z"
											/>
											<path
												d="M356.013,240.018c4.561,0,8.258-3.696,8.258-8.258v-44.394c0-4.562-3.697-8.258-8.258-8.258H155.987 c-4.561,0-8.258,3.696-8.258,8.258v44.394c0,4.562,3.697,8.258,8.258,8.258c10.321,0,18.718,8.396,18.718,18.716v22.022 c0,4.562,3.697,8.258,8.258,8.258c4.561,0,8.258-3.696,8.258-8.258v-22.022c0-16.584-11.519-30.53-26.976-34.254v-28.856h183.508 v28.856c-15.457,3.726-26.976,17.671-26.976,34.254v173.638c0,16.585,11.519,30.531,26.976,34.257v28.855H164.245V466.63 c15.457-3.727,26.976-17.672,26.976-34.257V313.788c0-4.562-3.697-8.258-8.258-8.258c-4.561,0-8.258,3.696-8.258,8.258v118.585 c0,10.321-8.397,18.718-18.718,18.718c-4.561,0-8.258,3.696-8.258,8.258v44.393c0,4.562,3.697,8.258,8.258,8.258h200.025 c4.561,0,8.258-3.696,8.258-8.258V459.35c0-4.562-3.697-8.258-8.258-8.258c-10.321,0-18.718-8.397-18.718-18.718v-173.64 C337.295,248.414,345.691,240.018,356.013,240.018z"
											/>
										</g>
									</svg>
								</button>

								<!-- APT dependencies list -->
								<div
									class="absolute left-1/2 top-full z-50 mt-2 hidden w-48 rounded-md border border-gray-600 bg-[#1c1c1c] p-3 text-sm text-gray-300 shadow-lg group-hover:flex"
									style="transform: translateX(-50%);"
								>
									<ul class="list-inside list-disc space-y-1">
										{apt.dependencies}
									</ul>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<button
				type="button"
				on:click={downloadConfig}
				disabled={!isFormValid}
				class={`w-full rounded-md px-4 py-2 text-sm font-semibold transition duration-300 ${
					isFormValid
						? 'bg-[#57f287] text-black hover:bg-[#3ba459]'
						: 'cursor-not-allowed bg-[#ed4245] text-white opacity-50'
				}`}
			>
				{$t.discloudConfig.form.downloadButton}
			</button>
		</form>

		<!-- Config Preview -->
		<div
			class="flex-1 rounded-lg bg-[#1c1c1c] p-6 shadow-lg md:sticky md:top-4"
			style="height: fit-content;"
		>
			<div class="overflow-hidden rounded-lg border border-gray-600 bg-[#0b0b0b] shadow-lg">
				<div class="flex items-center justify-between bg-[#1c1c1c] p-2">
					<div class="flex items-center space-x-2">
						<div class="h-3 w-3 rounded-full bg-red-500"></div>
						<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
						<div class="h-3 w-3 rounded-full bg-green-500"></div>
					</div>
					<span class="text-sm font-medium text-gray-300">
						{$t.discloudConfig.preview.title}
					</span>
					<button
						on:click={handleCopy}
						class="text-sm font-medium text-[#57f287] hover:underline focus:outline-none"
						title="Copy to clipboard"
					>
						{#if isFormValid}
							{copyButtonText}
						{/if}
					</button>
				</div>

				<div class="overflow-auto p-4 text-sm text-gray-300">
					<pre>{configPreview}</pre>
				</div>
			</div>
		</div>
	</div>
</div>
