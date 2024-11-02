<script>
	import config from './discloudConfig.json';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Variables for form fields
	let type = 'bot';
	let name = '';
	let avatar = '';
	let main = '';
	let ram = config.defaults.minRam.bot;
	let autorestart = false;
	let version = '';
	let id = '';
	let selectedApts = [];
	let language = '';
	let availableVersions = [];
	let mainFileError = '';
	let avatarError = '';
	let showPopup = false;
	let showDomainMessage = false;
	let showRamWarning = false;
	let previewGifLink = 'https://i.imgur.com/HKfCPnh.gif';

	const versions = config.versions;
	const aptsOptions = config.apts;
	const fileExtensions = config.fileExtensions;

	// Set minimum RAM based on application type
	function handleTypeChange() {
		const minRam = type === 'site' ? config.defaults.minRam.site : config.defaults.minRam.bot;
		ram = minRam;
		showRamWarning = false;
	}

	// Check for "discloud.app" when input is blurred (focus is lost)
	function handleIdBlur() {
		const normalizedId = id.toLowerCase().replace(/\.?discloud\.app/, '');
		showDomainMessage = id !== normalizedId;
		id = normalizedId;
	}

	// Toggle APT packages
	function toggleApt(aptName) {
		const lowerApt = aptName.toLowerCase();
		selectedApts = selectedApts.includes(lowerApt)
			? selectedApts.filter((a) => a !== lowerApt)
			: [...selectedApts, lowerApt];
	}

	// RAM validation function
	function validateRam() {
		const minRam = type === 'site' ? config.defaults.minRam.site : config.defaults.minRam.bot;
		if (ram < minRam) {
			ram = minRam;
			showRamWarning = true;
			setTimeout(() => (showRamWarning = false), 3000);
		}
	}

	// Validate main file based on language requirements
	function validateMainFile() {
		const ext = main.slice(main.lastIndexOf('.'));
		language = fileExtensions[ext] || '';
		mainFileError = '';

		if (ext === '.java') {
			mainFileError = 'Projetos em Java devem ser compilados em um arquivo .jar.';
		} else if (language === 'java') {
			const jarFilePattern = /^[a-zA-Z0-9]+\.jar$/;
			if (ext !== '.jar') {
				mainFileError = 'Projetos em Java devem ser compilados em um arquivo .jar.';
			} else if (!jarFilePattern.test(main)) {
				mainFileError = 'Nome inválido. Use apenas letras e números (ex: app.jar).';
			}
		} else if (main && !language) {
			mainFileError = 'Tipo de arquivo inválido. Por favor, use uma extensão válida.';
		}
	}

	// Set available versions based on detected language
	function setAvailableVersions() {
		availableVersions = language ? versions[language] || [] : [];
		if (language && availableVersions.length > 0 && !version) version = availableVersions[0];
		else if (!main) version = '';
	}

	// Validate avatar URL
	function validateAvatarUrl() {
		avatarError =
			avatar && !/^(https?:\/\/[^\s]+(\.png|\.jpg|\.jpeg)(\?.*)?)$/i.test(avatar)
				? 'A URL do avatar deve ser válida e terminar com .png, .jpg ou .jpeg. Ex: https://i.imgur.com/zVC0jHl.png'
				: '';
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

	// Reactive Updates
	$: {
		validateMainFile();
		setAvailableVersions();
		validateAvatarUrl();
	}

	$: isFormValid =
		name &&
		main &&
		ram >= 100 &&
		(type === 'bot' || (type === 'site' && id)) &&
		!mainFileError &&
		!avatarError;
</script>

<svelte:head>
	<title>discloud.config</title>
	<meta
		name="description"
		content="Gere o arquivo de configuração para Discloud de forma simples e rápida."
	/>

	<meta property="og:title" content="Discloud Helper - Gerador do discloud.config" />
	<meta
		property="og:description"
		content="Gere o arquivo de configuração discloud.config para configurar a sua aplicação na Discloud."
	/>
	<meta property="og:image" content="https://i.imgur.com/hjeNHfj.png" />
	<meta property="og:url" content="https://init.discloud.app/discloud-config" />
	<meta property="og:type" content="article" />
</svelte:head>

<Header />

<div class="main-container bg-primary min-h-screen">
	<title>discloud.config</title>
	<div class="grid-container mx-auto max-w-5xl gap-6 rounded-lg p-8 shadow-lg">
		<div class="menu bg-secondary rounded-lg p-8">
			<h1 class="title">Gerador do discloud.config</h1>

			<!-- Form Fields -->
			<div class="grid grid-cols-1 gap-6">
				<div>
					<label for="type" class="block text-sm font-semibold">Tipo de aplicação</label>
					<select
						bind:value={type}
						on:change={handleTypeChange}
						class="bg-background-alt text-text-color border-gray mt-1 w-full cursor-pointer rounded-md border p-2"
					>
						<option value="bot">Bot</option>
						<option value="site">Site</option>
					</select>
				</div>

				<div>
					<label for="name" class="text-gray block text-sm font-semibold">
						Nome<span class="text-alt-pink">*</span>
					</label>
					<input
						bind:value={name}
						placeholder="Nome da Aplicação"
						class="bg-background-alt text-text-color border-gray mt-1 w-full rounded-md border p-2"
						required
					/>
				</div>

				<div>
					<label for="avatar" class="text-gray block text-sm font-semibold">Avatar URL</label>
					<input
						bind:value={avatar}
						placeholder="URL da Imagem do Avatar"
						on:blur={validateAvatarUrl}
						class="bg-background-alt text-text-color border-gray mt-1 w-full rounded-md border p-2"
					/>
					{#if avatarError}
						<span class="text-alt-pink text-xs">{avatarError}</span>
					{/if}
				</div>

				{#if type === 'site'}
					<div>
						<label for="id" class="text-gray block text-sm font-semibold">
							ID (Subdomínio) <span class="text-alt-pink">*</span>
						</label>
						<input
							bind:value={id}
							placeholder="Subdomínio da aplicação"
							class="bg-background-alt text-text-color border-gray mt-1 w-full rounded-md border p-2"
							on:blur={handleIdBlur}
							required
						/>
						{#if showDomainMessage}
							<p class="text-alt-yellow mt-1 text-xs">
								"discloud.app" foi removido automaticamente, pois não precisa ser informado.
							</p>
						{/if}
					</div>
				{/if}

				<div>
					<label for="main" class="text-gray block text-sm font-semibold">
						Arquivo principal (MAIN) <span class="text-alt-pink">*</span>
					</label>

					<input
						bind:value={main}
						placeholder="Ex: index.js ou src/index.js"
						on:blur={() => {
							validateMainFile();
							setAvailableVersions();
						}}
						class="bg-background-alt text-text-color border-gray mt-1 w-full rounded-md border p-2"
						required
					/>

					{#if !main}
						<div class="examples-section bg-background-secondary mt-3 rounded-md p-3">
							<p class="examples-title text-gray text-sm font-semibold">
								Exemplos de arquivos principais:
							</p>
							<ul class="examples-list text-text-color ml-4 list-inside list-disc text-sm">
								<li>index.js</li>
								<li>bot.py</li>
								<li>main.go</li>
								<li>server.php</li>
								<li>main.rs</li>
							</ul>
							<p class="examples-description text-gray mt-2 text-sm">
								O arquivo principal é o ponto de entrada da sua aplicação, geralmente onde o
								servidor ou o bot é inicializado.
							</p>
						</div>
					{/if}

					{#if mainFileError}
						<span class="text-alt-pink text-xs">{mainFileError}</span>
					{/if}
				</div>

				<div class="flex gap-4">
					<div class="flex-1">
						<label for="ram" class="text-gray block text-sm font-semibold">
							RAM (MB) <span class="text-alt-pink">*</span>
						</label>
						<input
							type="number"
							bind:value={ram}
							on:blur={validateRam}
							class="bg-background-alt text-text-color border-gray mt-1 w-full rounded-md border p-2"
							required
						/>
						{#if showRamWarning}
							<p class="text-alt-pink mt-1 text-xs">
								{type === 'site'
									? 'Valor mínimo de RAM para sites é 512 MB.'
									: 'Valor mínimo de RAM é 100 MB.'}
							</p>
						{/if}
					</div>
					<div class="flex-1">
						<label for="autorestart" class="text-gray mb-1 block text-sm font-semibold">
							Reinício automático
						</label>
						<div class="flex items-center gap-2">
							<button
								type="button"
								on:click={() => (autorestart = !autorestart)}
								class:autorestart-enabled={autorestart}
								class:autorestart-disabled={!autorestart}
								class="toggle-button-autorestart rounded-md p-2.5 text-sm font-semibold"
							>
								{autorestart ? 'Ligado' : 'Desligado'}
							</button>
							<div class="text-text-color flex items-center gap-1 text-xs">
								<img src="https://i.imgur.com/vzcLk1W.png" alt="Emoji Platina" class="emoji-icon" />
								<span>
									Apenas a partir do plano
									<a
										href="https://discloud.app/plans"
										class="text-highlight"
										target="_blank"
										rel="noopener noreferrer"
									>
										Platina
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div>
					<label for="version" class="text-gray block text-sm font-semibold">
						Versão do container
					</label>
					<select
						bind:value={version}
						disabled={!main || mainFileError}
						class="bg-background-alt text-text-color border-gray mt-1 w-full rounded-md border p-2 {main &&
						!mainFileError
							? 'cursor-pointer'
							: 'cursor-default'}"
					>
						{#if !main}
							<option value="" disabled selected hidden>
								Informe o arquivo principal para ver as versões disponíveis
							</option>
						{:else if main && !language}
							<option value="" disabled selected hidden>Tipo de arquivo inválido</option>
						{:else}
							{#each availableVersions as ver}
								<option value={ver}>{ver}</option>
							{/each}
						{/if}
					</select>
				</div>

				<!-- Centralized APT Packages -->
				<div class="flex flex-wrap justify-center gap-4">
					<label for="apt" class="text-gray block w-full text-center text-sm font-semibold">
						Pacotes APT
					</label>
					{#each aptsOptions as apt}
						<label class="text-text-color group relative flex items-center space-x-2 text-sm">
							<button
								class="apt-button {selectedApts.includes(apt.name.toLowerCase()) ? 'selected' : ''}"
								on:click={() => toggleApt(apt.name)}
							>
								{apt.name}
							</button>
							<span
								class="absolute left-0 top-8 z-10 hidden w-48 rounded-md bg-gray-800 p-2 text-xs text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:block group-hover:opacity-100"
							>
								{apt.dependencies}
							</span>
						</label>
					{/each}
				</div>

				<button
					on:click={downloadConfig}
					disabled={!isFormValid}
					class="button mt-6 w-full {isFormValid ? 'available' : 'unavailable'}"
				>
					Gerar discloud.config
				</button>
			</div>
		</div>

		<!-- Preview Section -->
		<div class="preview bg-secondary rounded-lg p-8 shadow-lg">
			<h2 class="preview-title text-highlight mb-4 text-center text-xl font-semibold">
				Pré-visualização do discloud.config
			</h2>
			<div class="preview-container">
				<div class="preview-title-bar">
					<div class="circle red"></div>
					<div class="circle yellow"></div>
					<div class="circle green"></div>
					<span class="preview-filename">discloud.config</span>
				</div>
				<div class="preview-content">
					{configPreview}
				</div>
			</div>
		</div>
	</div>

	<Footer />
</div>

<!-- Informational Pop-up -->
{#if showPopup}
	<div class="init-popup-overlay">
		<div class="init-popup">
			<h2>Informações Importantes</h2>
			<p>Coloque o arquivo <strong>discloud.config</strong> na raiz da aplicação.</p>
			{#if previewGifLink}
				<div>
					<img src={previewGifLink} alt="GIF explicativo" />
				</div>
			{/if}
			<button on:click={closePopup} class="button">OK!</button>
		</div>
	</div>
{/if}
