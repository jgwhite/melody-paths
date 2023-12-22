<script lang="ts">
	export let isActive = false;
	export let title = '';
	export let color: string | undefined = undefined;
</script>

<div class="dot" class:active={isActive} style:background-color={color} {title}>
	<slot />
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
