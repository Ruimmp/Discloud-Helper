<script>
	import { t } from '$lib/langStore';
	const currentYear = new Date().getFullYear();
</script>

<div class="my-8 flex justify-center">
	<hr class="color-[##fff] w-3/4 border-t opacity-25" />
</div>

<footer class="bg-[#0b0b0b] py-4 text-white">
	<div
		class="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 text-center md:flex-row md:justify-between"
	>
		<p class="text-sm">
			&copy; {currentYear}
			<span class="text-[#45be6c] underline transition-colors duration-300 hover:text-[#3ba459]">
				<a href="https://portfolio.ruimmp.com/" target="_blank" rel="noopener noreferrer">
					Rui Monteiro
				</a>
			</span>. {$t.footer.allRightsReserved}.
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
</footer>
