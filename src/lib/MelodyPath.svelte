<script type="ts">
	import Chord from './Chord.svelte';
	import Column from './Column.svelte';
	import Dot from './Dot.svelte';
	import { notesForKey } from './note';
	import songs from './songs';

	let song = songs[0];
</script>

<select bind:value={song}>
	{#each songs as song}
		<option value={song}>{song.name}</option>
	{/each}
</select>

<div class="progression">
	<Column>
		{#each notesForKey(song.key).reverse() as note}
			<Dot>{note}</Dot>
		{/each}
	</Column>

	{#each song.chords as chord}
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
