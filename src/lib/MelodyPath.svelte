<script lang="ts">
	import { goto } from '$app/navigation';
	import Chord from './Chord.svelte';
	import Column from './Column.svelte';
	import Dot from './Dot.svelte';
	import { notesForKey, ensureOrder, type Chord as ChordType } from './note';
	import { default as songs, type Song } from './songs';

	type Props = {
		song?: Song;
	};

	let { song = songs[0] }: Props = $props();

	let notes = $derived(ensureOrder(notesForKey(song.key)).reverse());

	function handleSongChange(event: Event) {
		let target = event.target;

		if (target instanceof HTMLSelectElement) {
			goto(`/${target.value}`);
		}
	}
</script>

<select onchange={handleSongChange}>
	{#each songs as s (s.id)}
		<option selected={s === song} value={s.id}>{s.name}</option>
	{/each}
</select>

<div class="container">
	<h1>{song.name}</h1>

	{#each song.sections as section}
		<h2>{section.name}</h2>
		<div class="progression">
			<Column>
				{#each notes as note}
					<Dot>{note}</Dot>
				{/each}
			</Column>

			{#each section.chords as chord}
				<Chord key={song.key} {chord} />
			{/each}
		</div>
	{/each}
</div>

<style>
	.container {
		display: inline-flex;
		flex-direction: column;
		position: relative;
		gap: 1rem;
		padding: 1rem;
	}
	select {
		display: block;
		margin: 1rem 0.75rem;
	}
	.progression {
		display: flex;
	}
	h1 {
		font-size: 1.25rem;
		margin: 0;
	}
	h2 {
		display: flex;
		font-size: 0.75rem;
		position: relative;
		margin: 0;
		gap: 8px;
		align-items: center;
		color: #555;
	}
	h2:after {
		content: '';
		display: block;
		flex-grow: 1;
		height: 1px;
		background: #eee;
	}
</style>
