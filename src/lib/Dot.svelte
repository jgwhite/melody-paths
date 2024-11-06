<script lang="ts">
	type Props = {
		isActive?: boolean;
		title?: string;
		color?: string | undefined;
		children?: import('svelte').Snippet;
	};

	let { isActive = false, title = '', color = undefined, children }: Props = $props();
</script>

<div class="dot" class:active={isActive} style:background-color={color} {title}>
	{@render children?.()}
</div>

<style>
	.dot {
		display: flex;
		padding: 1rem;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid transparent;
		width: 1rem;
		height: 1rem;
	}
	.dot.active {
		border-color: black;
	}
</style>
