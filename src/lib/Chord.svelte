<script lang="ts">
	import { notesForKey, notesForChord, transpose } from './note';
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

	function isActive(note: string, n: number): boolean {
		if (chordNotes.includes(note)) {
			return true;
		}

		if (n === 3) {
			return false;
		}

		if (n === 7) {
			return false;
		}

		if (chordNotes.includes(transpose(note, 1))) {
			return true;
		}

		return false;
	}

	function numberFor(note: string, n: number): string {
		if (chordNotes.includes(note)) {
			return `${n}`;
		}

		if (n === 3) {
			return `${n}`;
		}

		if (n === 7) {
			return `${n}`;
		}

		if (chordNotes.includes(transpose(note, 1))) {
			return `♯${n}`;
		}

		return `${n}`;
	}
</script>

<Column>
	{#each keyNotes as note, index}
		<Dot isActive={isActive(note, 7 - index)}>
			{numberFor(note, 7 - index)}
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
