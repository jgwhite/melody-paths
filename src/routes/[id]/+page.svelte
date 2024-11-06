<script lang="ts">
	import MelodyPath from '$lib/MelodyPath.svelte';
	import songs from '$lib/songs';
	import { page } from '$app/stores';

	let song = $derived(songs.find((s) => s.id === $page.params.id) ?? songs[0]);
</script>

<MelodyPath {song} />
