<script type="ts">
	import Chord from './Chord.svelte';
	import Column from './Column.svelte';
	import Dot from './Dot.svelte';
	import { notesForKey } from './note';

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
	<Column>
		{#each notesForKey(key).reverse() as note}
			<Dot>{note}</Dot>
		{/each}
	</Column>

	{#each chords as chord}
		<Chord {key} {chord} />
	{/each}
</div>

<style>
	.progression {
		display: flex;
	}
</style>
