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

<div class="progression">
	<Column>
		{#each notes as note}
			<Dot>{note}</Dot>
		{/each}
	</Column>

	{#each song.chords as chord (chord)}
		<Chord key={song.key} {chord} />
	{/each}
</div>

<style>
	select {
		margin-bottom: 1rem;
	}
	.progression {
		display: flex;
	}
</style>
