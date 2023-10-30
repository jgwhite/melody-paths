<script type="ts">
	import Chord from './Chord.svelte';

	let chords = [
		{
			root: 'Sol',
			quality: '-',
			extensions: '7'
		},
		{
			root: 'Mi♭',
			quality: '',
			extensions: '9'
		},
		{
			root: 'Re',
			quality: '',
			extensions: '7♭9'
		}
	];
</script>

<div class="progression">
	{#each chords as chord}
		<div class="measure">
			{#each [7, 6, 5, 4, 3, 2, 1] as note}
				<div class="note">{note}</div>
			{/each}
			<Chord {chord} />
		</div>
	{/each}
</div>

<style>
	.progression {
		display: flex;
		gap: 0.5rem;
	}
	.measure {
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
		justify-content: middle;
		align-items: center;
	}
	.note {
		display: flex;
		padding: 1rem;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid black;
		width: 1rem;
		height: 1rem;
	}
</style>
