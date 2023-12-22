<script lang="ts">
	import { notesForKey, notesForChord } from './note';
	import ChordName from './ChordName.svelte';
	import Column from './Column.svelte';
	import Dot from './Dot.svelte';

	export let key = 'Do';
	export let chord = {
		root: 'Do',
		quality: '',
		extensions: ''
	};

	let keyNotes = notesForKey(key).reverse();
	let chordNotes = notesForChord(chord);
</script>

<Column>
	{#each keyNotes as note, index}
		<Dot isActive={chordNotes.includes(note)}>
			{7 - index}
		</Dot>
	{/each}
	<div class="box">
		<ChordName {chord} />
	</div>
</Column>

<style>
	.box {
		border-top: 1px solid #eee;
		margin-top: 0.5rem;
		padding: 0.5rem 0;
	}
</style>
