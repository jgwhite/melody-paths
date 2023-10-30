<script lang="ts">
	import { notesForKey, notesForChord } from './note';
	import ChordName from './ChordName.svelte';

	export let key = 'Do';
	export let chord = {
		root: 'Do',
		quality: '',
		extensions: ''
	};

	let keyNotes = notesForKey(key).reverse();
	let chordNotes = notesForChord(chord);
</script>

<div class="chord">
	{#each keyNotes as note, index}
		<div class="note" class:active={chordNotes.includes(note)}>
			{7 - index}
		</div>
	{/each}
	<ChordName {chord} />
</div>

<style>
	.chord {
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
		border: 1px solid transparent;
		width: 1rem;
		height: 1rem;
	}
	.note.active {
		border-color: black;
	}
</style>
