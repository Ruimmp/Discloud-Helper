<script>
	import { t } from '$lib/langStore';

	let clientId = '';
	let permissions = 0;
	let scope = ['bot'];
	let inviteLink = '';
	let linkError = '';
	let expandedGroup = null;

	const scopes = [
		{
			value: 'bot',
			label: $t.botInvite.scopes.options.bot.label,
			description: $t.botInvite.scopes.options.bot.description
		},
		{
			value: 'applications.commands',
			label: $t.botInvite.scopes.options.commands.label,
			description: $t.botInvite.scopes.options.commands.description
		},
		{
			value: 'identify',
			label: $t.botInvite.scopes.options.identify.label,
			description: $t.botInvite.scopes.options.identify.description
		},
		{
			value: 'guilds',
			label: $t.botInvite.scopes.options.guilds.label,
			description: $t.botInvite.scopes.options.guilds.description
		}
	];

	const mainPermissions = [
		{
			value: '8',
			label: $t.botInvite.permissions.main.admin.label,
			description: $t.botInvite.permissions.main.admin.description
		},
		{
			value: '2048',
			label: $t.botInvite.permissions.main.sendMessages.label,
			description: $t.botInvite.permissions.main.sendMessages.description
		},
		{
			value: '1048576',
			label: $t.botInvite.permissions.main.connect.label,
			description: $t.botInvite.permissions.main.connect.description
		},
		{
			value: '2097152',
			label: $t.botInvite.permissions.main.speak.label,
			description: $t.botInvite.permissions.main.speak.description
		}
	];

	const additionalPermissionGroups = [
		{
			title: $t.botInvite.permissions.additional.general.title,
			permissions: [
				{
					value: '128',
					label: $t.botInvite.permissions.additional.general.auditLog.label,
					description: $t.botInvite.permissions.additional.general.auditLog.description
				},
				{
					value: '32',
					label: $t.botInvite.permissions.additional.general.manageServer.label,
					description: $t.botInvite.permissions.additional.general.manageServer.description
				},
				{
					value: '268435456',
					label: $t.botInvite.permissions.additional.general.manageRoles.label,
					description: $t.botInvite.permissions.additional.general.manageRoles.description
				},
				{
					value: '16',
					label: $t.botInvite.permissions.additional.general.manageChannels.label,
					description: $t.botInvite.permissions.additional.general.manageChannels.description
				},
				{
					value: '2',
					label: $t.botInvite.permissions.additional.general.kickMembers.label,
					description: $t.botInvite.permissions.additional.general.kickMembers.description
				},
				{
					value: '4',
					label: $t.botInvite.permissions.additional.general.banMembers.label,
					description: $t.botInvite.permissions.additional.general.banMembers.description
				},
				{
					value: '1',
					label: $t.botInvite.permissions.additional.general.createInstantInvite.label,
					description: $t.botInvite.permissions.additional.general.createInstantInvite.description
				},
				{
					value: '67108864',
					label: $t.botInvite.permissions.additional.general.changeNickname.label,
					description: $t.botInvite.permissions.additional.general.changeNickname.description
				},
				{
					value: '134217728',
					label: $t.botInvite.permissions.additional.general.manageNicknames.label,
					description: $t.botInvite.permissions.additional.general.manageNicknames.description
				},
				{
					value: '1073741824',
					label: $t.botInvite.permissions.additional.general.manageExpressions.label,
					description: $t.botInvite.permissions.additional.general.manageExpressions.description
				},
				{
					value: '536870912',
					label: $t.botInvite.permissions.additional.general.createExpressions.label,
					description: $t.botInvite.permissions.additional.general.createExpressions.description
				},
				{
					value: '32768',
					label: $t.botInvite.permissions.additional.general.manageWebhooks.label,
					description: $t.botInvite.permissions.additional.general.manageWebhooks.description
				},
				{
					value: '1024',
					label: $t.botInvite.permissions.additional.general.viewChannels.label,
					description: $t.botInvite.permissions.additional.general.viewChannels.description
				},
				{
					value: '8589934592',
					label: $t.botInvite.permissions.additional.general.manageEvents.label,
					description: $t.botInvite.permissions.additional.general.manageEvents.description
				},
				{
					value: '17179869184',
					label: $t.botInvite.permissions.additional.general.createEvents.label,
					description: $t.botInvite.permissions.additional.general.createEvents.description
				},
				{
					value: '262144',
					label: $t.botInvite.permissions.additional.general.moderateMembers.label,
					description: $t.botInvite.permissions.additional.general.moderateMembers.description
				},
				{
					value: '2199023255552',
					label: $t.botInvite.permissions.additional.general.viewServerInsights.label,
					description: $t.botInvite.permissions.additional.general.viewServerInsights.description
				},
				{
					value: '4398046511104',
					label: $t.botInvite.permissions.additional.general.viewServerSubscriptionInsights.label,
					description:
						$t.botInvite.permissions.additional.general.viewServerSubscriptionInsights.description
				}
			]
		},
		{
			title: $t.botInvite.permissions.additional.text.title,
			permissions: [
				{
					value: '8388608',
					label: $t.botInvite.permissions.additional.text.createPublicThreads.label,
					description: $t.botInvite.permissions.additional.text.createPublicThreads.description
				},
				{
					value: '16777216',
					label: $t.botInvite.permissions.additional.text.createPrivateThreads.label,
					description: $t.botInvite.permissions.additional.text.createPrivateThreads.description
				},
				{
					value: '8192',
					label: $t.botInvite.permissions.additional.text.sendMessagesInThreads.label,
					description: $t.botInvite.permissions.additional.text.sendMessagesInThreads.description
				},
				{
					value: '32768',
					label: $t.botInvite.permissions.additional.text.manageMessages.label,
					description: $t.botInvite.permissions.additional.text.manageMessages.description
				},
				{
					value: '4096',
					label: $t.botInvite.permissions.additional.text.sendTTSMessages.label,
					description: $t.botInvite.permissions.additional.text.sendTTSMessages.description
				},
				{
					value: '524288',
					label: $t.botInvite.permissions.additional.text.manageThreads.label,
					description: $t.botInvite.permissions.additional.text.manageThreads.description
				},
				{
					value: '16384',
					label: $t.botInvite.permissions.additional.text.embedLinks.label,
					description: $t.botInvite.permissions.additional.text.embedLinks.description
				},
				{
					value: '131072',
					label: $t.botInvite.permissions.additional.text.attachFiles.label,
					description: $t.botInvite.permissions.additional.text.attachFiles.description
				},
				{
					value: '65536',
					label: $t.botInvite.permissions.additional.text.readMessageHistory.label,
					description: $t.botInvite.permissions.additional.text.readMessageHistory.description
				},
				{
					value: '4194304',
					label: $t.botInvite.permissions.additional.text.mentionEveryone.label,
					description: $t.botInvite.permissions.additional.text.mentionEveryone.description
				},
				{
					value: '262144',
					label: $t.botInvite.permissions.additional.text.useExternalEmojis.label,
					description: $t.botInvite.permissions.additional.text.useExternalEmojis.description
				},
				{
					value: '2097152',
					label: $t.botInvite.permissions.additional.text.useExternalStickers.label,
					description: $t.botInvite.permissions.additional.text.useExternalStickers.description
				},
				{
					value: '64',
					label: $t.botInvite.permissions.additional.text.addReactions.label,
					description: $t.botInvite.permissions.additional.text.addReactions.description
				},
				{
					value: '2147483648',
					label: $t.botInvite.permissions.additional.text.useSlashCommands.label,
					description: $t.botInvite.permissions.additional.text.useSlashCommands.description
				},
				{
					value: '549755813888',
					label: $t.botInvite.permissions.additional.text.useEmbeddedActivities.label,
					description: $t.botInvite.permissions.additional.text.useEmbeddedActivities.description
				},
				{
					value: '1099511627776',
					label: $t.botInvite.permissions.additional.text.useExternalApps.label,
					description: $t.botInvite.permissions.additional.text.useExternalApps.description
				},
				{
					value: '2199023255552',
					label: $t.botInvite.permissions.additional.text.createPolls.label,
					description: $t.botInvite.permissions.additional.text.createPolls.description
				}
			]
		},
		{
			title: $t.botInvite.permissions.additional.voice.title,
			permissions: [
				{
					value: '8388608',
					label: $t.botInvite.permissions.additional.voice.video.label,
					description: $t.botInvite.permissions.additional.voice.video.description
				},
				{
					value: '4194304',
					label: $t.botInvite.permissions.additional.voice.muteMembers.label,
					description: $t.botInvite.permissions.additional.voice.muteMembers.description
				},
				{
					value: '8192',
					label: $t.botInvite.permissions.additional.voice.deafenMembers.label,
					description: $t.botInvite.permissions.additional.voice.deafenMembers.description
				},
				{
					value: '16384',
					label: $t.botInvite.permissions.additional.voice.moveMembers.label,
					description: $t.botInvite.permissions.additional.voice.moveMembers.description
				},
				{
					value: '67108864',
					label: $t.botInvite.permissions.additional.voice.useVoiceActivity.label,
					description: $t.botInvite.permissions.additional.voice.useVoiceActivity.description
				},
				{
					value: '256',
					label: $t.botInvite.permissions.additional.voice.prioritySpeaker.label,
					description: $t.botInvite.permissions.additional.voice.prioritySpeaker.description
				},
				{
					value: '131072',
					label: $t.botInvite.permissions.additional.voice.requestToSpeak.label,
					description: $t.botInvite.permissions.additional.voice.requestToSpeak.description
				},
				{
					value: '549755813888',
					label: $t.botInvite.permissions.additional.voice.useEmbeddedActivities.label,
					description: $t.botInvite.permissions.additional.voice.useEmbeddedActivities.description
				},
				{
					value: '34359738368',
					label: $t.botInvite.permissions.additional.voice.useSoundboard.label,
					description: $t.botInvite.permissions.additional.voice.useSoundboard.description
				},
				{
					value: '68719476736',
					label: $t.botInvite.permissions.additional.voice.useExternalSounds.label,
					description: $t.botInvite.permissions.additional.voice.useExternalSounds.description
				}
			]
		}
	];

	// Generate the invite link based on input values
	function generateLink() {
		if (!clientId) {
			linkError = $t.botInvite.input.error;
			inviteLink = '';
			return;
		}
		linkError = '';
		const scopeParam = scope.join('%20');
		inviteLink = `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=${scopeParam}&permissions=${permissions}`;
	}

	// Toggle individual permissions
	function togglePermission(value) {
		permissions ^= value;
		generateLink();
	}

	// Toggle OAuth scopes
	function toggleScope(s) {
		scope = scope.includes(s) ? scope.filter((x) => x !== s) : [...scope, s];
		generateLink();
	}
</script>

<svelte:head>
	<title>Discloud Helper - Bot Invite Link</title>
	<meta
		name="description"
		content="Easily generate an invite link for your Discord bot with customizable scopes and permissions."
	/>
	<meta property="og:title" content="Discord Helper - Bot Invite Link" />
	<meta
		property="og:description"
		content="Quickly configure and generate a custom invite link for your Discord bot with the required permissions and OAuth scopes."
	/>
	<meta property="og:image" content="https://i.imgur.com/hjeNHfj.png" />
	<meta property="og:url" content="https://init.discloud.app/bot-invite" />
	<meta property="og:type" content="website" />
</svelte:head>

<!-- Main Container -->
<h1 class="mb-4 text-center text-3xl font-bold text-[#57f287]">{$t.botInvite.title}</h1>
<div class="flex flex-col flex-wrap items-center justify-center bg-[#0b0b0b] p-4 text-white">
	<!-- Guide Section -->
	<div class="mb-6 w-full max-w-4xl rounded-lg border border-[#57f287] bg-[#1c1c1c] p-6 shadow-md">
		<h2 class="mb-4 text-2xl font-semibold text-[#57f287]">{$t.botInvite.guide.title}</h2>
		<p class="mb-2 text-gray-300">
			1. {$t.botInvite.guide.step1}
			<a
				href="https://discord.com/developers/applications"
				target="_blank"
				class="text-[#57f287] underline hover:text-[#3ba459]">Discord Developer Portal</a
			>.
		</p>
		<p class="mb-2 text-gray-300">2. {$t.botInvite.guide.step2}</p>
		<p class="mb-2 text-gray-300">3. {$t.botInvite.guide.step3}</p>
		<p class="mb-2 text-gray-300">4. {$t.botInvite.guide.step4}</p>
	</div>

	<div class="w-full max-w-4xl rounded-lg bg-[#1c1c1c] p-6 shadow-lg">
		<!-- Client ID Input -->
		<div class="mb-4">
			<h2 class="mb-1 text-lg font-semibold text-[#57f287]">{$t.botInvite.input.clientId}</h2>
			<input
				type="text"
				bind:value={clientId}
				placeholder={$t.botInvite.input.placeholder}
				maxlength="20"
				class="w-full rounded-md border border-gray-600 bg-[#0b0b0b] px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#57f287] focus:ring-opacity-50"
				on:input={generateLink}
			/>
			{#if linkError}
				<p class="mt-1 text-sm text-red-500">{linkError}</p>
			{/if}
		</div>

		<!-- OAuth Scopes Selection -->
		<div class="mb-6">
			<h2 class="mb-1 text-lg font-semibold text-[#57f287]">{$t.botInvite.scopes.title}</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each scopes as s}
					<div class="flex items-center space-x-3">
						<button
							on:click={() => toggleScope(s.value)}
							class="w-32 rounded-md px-4 py-2 font-semibold transition duration-300 {scope.includes(
								s.value
							)
								? 'bg-[#57f287] text-black'
								: 'bg-[#ed4245] text-white'}"
						>
							{scope.includes(s.value) ? 'Enabled' : 'Disabled'}
						</button>
						<div>
							<p class="font-semibold text-gray-300">{s.label}</p>
							<p class="text-xs text-gray-400">{s.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Permissions Section -->
		<div class="mb-6">
			<h2 class="mb-1 text-lg font-semibold text-[#57f287]">{$t.botInvite.permissions.title}</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each mainPermissions as perm}
					<div class="flex items-center space-x-3">
						<button
							on:click={() => togglePermission(perm.value)}
							class="w-32 rounded-md px-4 py-2 font-semibold transition duration-300 {permissions &
							perm.value
								? 'bg-[#57f287] text-black'
								: 'bg-[#ed4245] text-white'}"
						>
							{permissions & perm.value ? 'Enabled' : 'Disabled'}
						</button>
						<div>
							<p class="font-semibold text-gray-300">{perm.label}</p>
							<p class="text-xs text-gray-400">{perm.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Additional Permissions with Accordion -->
		<div class="mb-4">
			<h2 class="mb-1 text-lg font-semibold text-[#57f287]">
				{$t.botInvite.permissions.additional.title}
			</h2>
			<div class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
				{#each additionalPermissionGroups as group, i}
					<div class="w-full">
						<!-- Accordion Header -->
						<button
							class="flex w-full items-center justify-between rounded-md border border-gray-600 bg-[#0b0b0b] p-3 text-sm font-semibold text-gray-300"
							on:click={() => (expandedGroup = expandedGroup === i ? null : i)}
						>
							<span>{group.title}</span>
							<span class="rotate-icon" class:rotate-180={expandedGroup === i}> ▲ </span>
						</button>

						<!-- Accordion Content -->
						{#if expandedGroup === i}
							<div class="grid-cols-0 mt-2 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
								{#each group.permissions as perm}
									<div
										class="flex items-center space-x-3 rounded-md border border-gray-600 bg-[#1c1c1c] p-3"
									>
										<button
											class="h-12 w-32 rounded-md px-2 py-1 text-sm font-semibold transition duration-300 {permissions &
											perm.value
												? 'bg-[#57f287] text-black'
												: 'bg-[#ed4245] text-white'}"
											on:click={() => togglePermission(perm.value)}
										>
											{permissions & perm.value
												? $t.botInvite.buttons.enabled
												: $t.botInvite.buttons.disabled}
										</button>
										<div>
											<p class="font-semibold text-gray-300">{perm.label}</p>
											<p class="text-xs text-gray-400">{perm.description}</p>
										</div>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Output Invite Link -->
		<div class="mt-6 w-full rounded-md border border-gray-600 bg-[#0b0b0b] p-4">
			<h3 class="mb-2 text-lg font-semibold text-[#57f287]">{$t.botInvite.output.title}</h3>
			<div
				class={`overflow-x-auto rounded-md p-2 text-sm transition duration-300 ${
					clientId ? 'bg-[#1c1c1c] text-gray-300' : 'text-[#ed4245]'
				}`}
			>
				{inviteLink || $t.botInvite.output.placeholder}
			</div>
		</div>

		<!-- Copy Button -->
		<button
			on:click={() => navigator.clipboard.writeText(inviteLink)}
			class={`mt-4 w-full rounded-md px-4 py-2 font-semibold transition duration-300 sm:w-auto ${
				inviteLink
					? 'bg-[#57f287] text-black hover:bg-[#3ba459]'
					: 'cursor-not-allowed bg-[#ed4245] text-white opacity-50'
			}`}
			disabled={!inviteLink}
		>
			{$t.botInvite.buttons.copy}
		</button>
	</div>
</div>
