<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Discloud Helper</title>
	<meta
		name="description"
		content="Ferramentas úteis para facilitar a configuração e o gerenciamento de suas aplicações na Discloud."
	/>

	<meta property="og:title" content="Discloud Helper - Ferramentas" />
	<meta
		property="og:description"
		content="Descubra ferramentas úteis para facilitar a configuração e o gerenciamento de suas aplicações na Discloud."
	/>
	<meta property="og:image" content="https://i.imgur.com/hjeNHfj.png" />
	<meta property="og:url" content="https://init.discloud.app/" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="landing-container bg-primary">
	<header class="header-content">
		<img src="/logo.png" alt="Discloud Logo" class="logo" />
		<h1 class="landing-title">Bem-vindo ao Discloud Helper</h1>
		<p class="landing-description">
			Ferramentas úteis para facilitar a configuração e o gerenciamento de suas aplicações na
			Discloud.
		</p>
	</header>

	<main class="main-content">
		<h2 class="section-title">Funcionalidades</h2>
		<div class="features-grid">
			<div class="feature-card">
				<h3>Gerador de discloud.config</h3>
				<p>
					Crie facilmente o arquivo <code>discloud.config</code> para configurar seu bot ou site na Discloud.
				</p>
				<a href="/discloud-config" class="button">Acessar Gerador</a>
			</div>
			<div class="feature-card">
				<h3>Em breve...</h3>
				<p>
					Novas ferramentas estão em desenvolvimento para ajudar você a maximizar o uso da Discloud.
				</p>
			</div>
		</div>
	</main>

	<Footer />
</div>
