<script type="ts">
	import Chord from './Chord.svelte';

	let key = 'Re';
	let chords = [
		{
			root: 'Mi',
			quality: '-',
			extensions: '7'
		},
		{
			root: 'La',
			quality: '',
			extensions: '7'
		},
		{
			root: 'Mi',
			quality: '-',
			extensions: '7'
		},
		{
			root: 'La',
			quality: '',
			extensions: '7'
		},
		{
			root: 'Fa♯',
			quality: '-',
			extensions: '7'
		},
		{
			root: 'Si',
			quality: '',
			extensions: '7'
		},
		{
			root: 'Fa♯',
			quality: '-',
			extensions: '7'
		},
		{
			root: 'Si',
			quality: '',
			extensions: '7'
		},
		{
			root: 'Si',
			quality: '-',
			extensions: '7'
		},
		{
			root: 'Mi',
			quality: '',
			extensions: '7'
		},
		{
			root: 'Si♭',
			quality: '',
			extensions: '7'
		},
		{
			root: 'Mi♭',
			quality: '',
			extensions: '7'
		},
		{
			root: 'Re',
			quality: '',
			extensions: 'Δ'
		},
		{
			root: 'Mi',
			quality: '-',
			extensions: '7'
		},
		{
			root: 'Fa♯',
			quality: '-',
			extensions: '7'
		},
		{
			root: 'Si',
			quality: '',
			extensions: '7'
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
