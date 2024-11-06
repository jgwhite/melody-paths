<script lang="ts">
	import { type Chord, splitName } from './note';

	type Props = {
		chord: Chord;
	};

	let {
		chord = {
			root: 'Do',
			quality: '',
			extensions: ''
		}
	}: Props = $props();

	let { base, accidental } = $derived(splitName(chord.root));
</script>

<div class="chord-name">
	<span class="a">{base}</span>
	<span class="b">{accidental}</span>
	<span class="c">{chord.quality}{chord.extensions}</span>
</div>

<style>
	.chord-name {
		display: grid;
		grid-template:
			'a b' 1rem
			'a c' 1rem;
		align-items: center;
		justify-content: start;
	}
	.a {
		grid-area: a;
		font-size: 1.25rem;
	}
	.b {
		grid-area: b;
	}
	.c {
		grid-area: c;
	}
</style>
