<div class="column">
	<slot />
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
	}
</style>
