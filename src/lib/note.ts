export function splitName(note: string) {
	return /(?<base>[^♯♭]+)(?<accidental>[♭♯]?)/.exec(note)!.groups as {
		base: string;
		accidental: string;
	};
}

export type Chord = {
	bar?: number;
	root: string;
	quality: string;
	extensions: string;
};

export const notes = ['Do', 'Re♭', 'Re', 'Mi♭', 'Mi', 'Fa', 'Fa♯', 'Sol', 'La♭', 'La', 'Si♭', 'Si'];

export function notesForKey(key: string): string[] {
	key = normalize(key);

	return [
		key,
		transpose(key, 2),
		transpose(key, 4),
		transpose(key, 5),
		transpose(key, 7),
		transpose(key, 9),
		transpose(key, 11)
	];
}

export function ensureOrder(notes: string[]): string[] {
	const copy = [...notes];

	for (let i = 1; i < copy.length; i++) {
		const prev = withoutAccidentals(copy.at(i - 1)!);
		const curr = withoutAccidentals(copy.at(i)!);
		const next = withoutAccidentals(copy.at((i + 1) % copy.length)!);

		if (prev === curr || curr === next) {
			copy[i] = enharmonic(copy[i]);
		}
	}

	return copy;
}

function withoutAccidentals(note: string): string {
	return note.replace(/[♭♯]/, '');
}

export function notesForChord(chord: Chord): string[] {
	const result: string[] = [];
	const keyNotes = notesForKey(chord.root);

	// 1st
	result.push(keyNotes[0]);

	if (chord.quality === 'ø' && chord.extensions === '7') {
		// Special treatment for half-diminished seventh (ø7)
		result.push(transpose(keyNotes[2], -1));
		result.push(transpose(keyNotes[4], -1));
		result.push(transpose(keyNotes[6], -1));

		return result;
	}

	if (chord.quality === 'o' && chord.extensions === '7') {
		// Special treatment for diminished seventh (o7)
		result.push(transpose(keyNotes[2], -1));
		result.push(transpose(keyNotes[4], -1));
		result.push(transpose(keyNotes[6], -2));

		return result;
	}

	if (chord.quality === '-') {
		// Minor 3rd
		result.push(transpose(keyNotes[2], -1));
	} else {
		// Major 3rd
		result.push(keyNotes[2]);
	}

	if (chord.extensions.includes('♭5')) {
		// Flat 5th
		result.push(transpose(keyNotes[4], -1));
	} else {
		// Perfect 5th
		result.push(keyNotes[4]);
	}

	if (chord.extensions.includes('6')) {
		// 6th
		result.push(keyNotes[5]);
	}

	if (chord.extensions.includes('7')) {
		// Minor 7th
		result.push(transpose(keyNotes[6], -1));
	}

	if (chord.extensions === 'Δ') {
		// Major 7th
		result.push(keyNotes[6]);
	}

	if (chord.extensions.includes('♭9')) {
		// Flat 9th
		result.push(transpose(keyNotes[1], -1));
	} else if (chord.extensions.includes('9')) {
		// Regular 9th
		result.push(keyNotes[1]);
	}

	if (chord.extensions.includes('♯11')) {
		result.push(transpose(keyNotes[3], 1));
	}

	return result;
}

export function transpose(note: string, semitones: number): string {
	const i = notes.indexOf(normalize(note));
	const j = (i + semitones) % 12;

	return notes.at(j)!;
}

export function normalize(note: string): string {
	switch (note) {
		case 'Do♯':
			return 'Re♭';
		case 'Re♯':
			return 'Mi♭';
		case 'Mi♯':
			return 'Fa';
		case 'Sol♭':
			return 'Fa♯';
		case 'Sol♯':
			return 'La♭';
		case 'La♯':
			return 'Si♭';
		case 'Si♯':
			return 'Do';
		default:
			return note;
	}
}

export function enharmonic(note: string): string {
	switch (note) {
		case 'Do♯':
			return 'Re♭';
		case 'Re♭':
			return 'Do♯';

		case 'Re♯':
			return 'Mi♭';
		case 'Mi♭':
			return 'Re♯';

		case 'Mi♯':
			return 'Fa';
		case 'Fa':
			return 'Mi♯';

		case 'Sol♭':
			return 'Fa♯';
		case 'Fa♯':
			return 'Sol♭';

		case 'Sol♯':
			return 'La♭';
		case 'La♭':
			return 'Sol♯';

		case 'La♯':
			return 'Si♭';
		case 'Si♭':
			return 'La♯';

		case 'Si♯':
			return 'Do';
		case 'Do':
			return 'Si♯';

		default:
			return note;
	}
}
