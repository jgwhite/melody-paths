<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}

<style>
	:global(body) {
		font-family:
			system-ui,
			-apple-system,
			sans-serif;
	}
</style>
