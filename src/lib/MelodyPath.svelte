<script lang="ts">
	import { goto } from '$app/navigation';
	import Chord from './Chord.svelte';
	import Column from './Column.svelte';
	import Dot from './Dot.svelte';
	import { notesForKey, ensureOrder } from './note';
	import songs from './songs';

	export let song = songs[0];

	$: notes = ensureOrder(notesForKey(song.key)).reverse();

	function handleSongChange(event: Event) {
		let target = event.target;

		if (target instanceof HTMLSelectElement) {
			goto(`/${target.value}`);
		}
	}
</script>

<select on:change={handleSongChange}>
	{#each songs as s (s.id)}
		<option selected={s === song} value={s.id}>{s.name}</option>
	{/each}
</select>

<div class="container">
	<h1>{song.name}</h1>

	{#each song.sections as section (section)}
		<h2>{section.name}</h2>
		<div class="progression">
			<Column>
				{#each notes as note}
					<Dot>{note}</Dot>
				{/each}
			</Column>

			{#each section.chords as chord (chord)}
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
		gap: 8px;
		padding: 1rem;
	}
	select {
		margin-bottom: 1rem;
	}
	.progression {
		display: flex;
	}
	h1 {
		font-size: 1.25rem;
	}
	h2 {
		display: flex;
		font-size: 0.75rem;
		position: relative;
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
