<script lang="ts">
	type Props = {
		children?: import('svelte').Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="column">
	{@render children?.()}
</div>

<style>
	.column {
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
		justify-content: middle;
		align-items: center;
		padding: 0 0.5rem;
		border-right: 1px solid #eee;
		min-width: 5rem;
	}
</style>
