<script type="ts">
	import Chord from './Chord.svelte';

	let key = 'Sol-';
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
		<Chord {key} {chord} />
	{/each}
</div>

<style>
	.progression {
		display: flex;
		gap: 0.5rem;
	}
</style>
