export function splitName(note: string) {
	return /(?<base>[^♯♭]+)(?<accidental>[♭♯]?)/.exec(note)!.groups as {
		base: string;
		accidental: string;
	};
}

export function notesForKey(key: string) {
	switch (key) {
		case 'Re':
			return ['Re', 'Mi', 'Fa♯', 'Sol', 'La', 'Si', 'Do'];
		case 'Mi♭':
			return ['Mi♭', 'Fa', 'Sol', 'La♭', 'Si♭', 'Do', 'Re'];
		case 'Sol-':
			return ['Sol', 'La', 'Si♭', 'Do', 'Re', 'Mi♭', 'Fa'];
		default:
			return ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];
	}
}

type Chord = {
	root: string;
	quality: string;
	extensions: string;
};

export function notesForChord(chord: Chord): string[] {
	const result = [];
	const notes = notesForKey(chord.root + chord.quality);

	// add extensions
	let extensions = chord.extensions.split(/(?<=\d)(?=[♭♯])/).sort((a, b) => parseInt(a) - parseInt(b));
	// for each extension, split up its accidental and number parts; flip around the accidental to be after the number for parsing
	extensions.forEach((extension) => {
		let accidental = extension.replace(/\d/, '');
		let number = parseInt(extension.replace(/[♭♯]/, ''));
		let noteIndex = (number - 1) % 7;
		let note = notes[noteIndex];
		if (accidental) {
			note = note.replace(/♭|♯/, '');
			note += accidental;
		}
		result.push(note);
	});

	result.push(notes[0]);
	result.push(notes[2]);
	result.push(notes[4]);

	return result;
}
