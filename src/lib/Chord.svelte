<script lang="ts">
	import { type Chord, notesForKey, notesForChord, transpose } from './note';
	import ChordName from './ChordName.svelte';
	import Column from './Column.svelte';
	import Dot from './Dot.svelte';

	type Props = {
		key?: string;
		chord?: Chord;
	};

	type Adapted = {
		note: string;
		trueNote: string;
		nudge?: '♯' | '♭';
	};

	let {
		key = 'Do',
		chord = {
			bar: undefined,
			root: 'Do',
			quality: '',
			extensions: '',
		},
	}: Props = $props();

	let keyNotes = $derived(notesForKey(key).reverse());
	let chordNotes = $derived(notesForChord(chord));
	let adapted: Adapted[] = $derived.by(() => {
		let seen = new Set();
		let result: Adapted[] = [];

		for (let note of chordNotes) {
			if (keyNotes.includes(note) && !seen.has(note)) {
				result.push({ note, trueNote: note });
				seen.add(note);
				continue;
			}

			let flat = transpose(note, -1);
			if (keyNotes.includes(flat) && !seen.has(flat)) {
				result.push({ note: flat, trueNote: note, nudge: '♯' });
				seen.add(flat);
				continue;
			}

			let sharp = transpose(note, 1);
			if (keyNotes.includes(sharp) && !seen.has(sharp)) {
				result.push({ note: sharp, trueNote: note, nudge: '♭' });
				seen.add(sharp);
				continue;
			}
		}

		return result;
	});

	function isActive(note: string): boolean {
		return adapted.some((a) => a.note === note);
	}

	function numberFor(note: string, n: number): string {
		const a = adapted.find((a) => a.note === note);
		const nudge = a?.nudge ?? '';

		return `${nudge}${7 - n}`;
	}

	function titleFor(note: string): string {
		const a = adapted.find((a) => a.note === note);

		if (!a) {
			return '';
		}

		return a.trueNote;
	}

	function colorFor(note: string): string | undefined {
		const index = adapted.findIndex((a) => a.note === note);

		return {
			0: 'var(--root)',
			1: 'var(--second)',
			2: 'var(--third)',
			3: 'var(--fourth)',
			4: 'var(--fifth)',
		}[index];
	}
</script>

<Column>
	{#each keyNotes as note, index}
		<Dot isActive={isActive(note)} title={titleFor(note)} color={colorFor(note)}>
			{numberFor(note, index)}
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
