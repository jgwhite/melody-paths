<script lang="ts">
	import { type Chord, notesForKey, notesForChord, transpose } from './note';
	import ChordName from './ChordName.svelte';
	import Column from './Column.svelte';
	import Dot from './Dot.svelte';

	type Props = {
		key?: string;
		chord?: Chord;
	};

	let {
		key = 'Do',
		chord = {
			bar: undefined,
			root: 'Do',
			quality: '',
			extensions: ''
		}
	}: Props = $props();

	let keyNotes = $derived(notesForKey(key).reverse());
	let chordNotes = $derived(notesForChord(chord));

	function isActive(note: string, n: number): boolean {
		return chordNotes.includes(note) || chordNotes.includes(outsideNote(note, n));
	}

	function numberFor(note: string, n: number): string {
		if (chordNotes.includes(note)) {
			return `${n}`;
		}

		note = outsideNote(note, n);

		if (chordNotes.includes(note)) {
			return `♯${n}`;
		}

		return `${n}`;
	}

	function titleFor(note: string, n: number) {
		if (chordNotes.includes(note)) {
			return note;
		}

		note = outsideNote(note, 1);

		if (chordNotes.includes(note)) {
			return note;
		}

		return note;
	}

	function outsideNote(note: string, n: number): string {
		if (n === 3) {
			return note;
		}
		if (n === 7) {
			return note;
		}
		return transpose(note, 1);
	}

	function colorFor(note: string, n: number): string | undefined {
		if (note === chordNotes[0] || outsideNote(note, n) == chordNotes[0]) {
			return '#f59e0b';
		}

		if (note === chordNotes[1] || outsideNote(note, n) === chordNotes[1]) {
			return '#fbbf24';
		}

		if (note === chordNotes[2] || outsideNote(note, n) === chordNotes[2]) {
			return '#fde68a';
		}

		if (note === chordNotes[3] || outsideNote(note, n) === chordNotes[3]) {
			return '#fffbeb';
		}

		if (note === chordNotes[4] || outsideNote(note, n) === chordNotes[4]) {
			return '#ede9fe';
		}
	}
</script>

<Column>
	{#each keyNotes as note, index}
		<Dot
			isActive={isActive(note, 7 - index)}
			title={titleFor(note, 7 - index)}
			color={colorFor(note, 7 - index)}
		>
			{numberFor(note, 7 - index)}
		</Dot>
	{/each}
	<div class="box">
		<ChordName {chord} />
	</div>
	{#if chord.bar}
		<div class="bar">{chord.bar}</div>
	{/if}
</Column>

<style>
	.box {
		border-top: 1px solid #eee;
		margin-top: 0.5rem;
		padding: 0.5rem 0;
	}
	.bar {
		color: #222;
		align-self: start;
		font-size: 0.75rem;
	}
</style>
