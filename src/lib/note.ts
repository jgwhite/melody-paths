export function split(note: string) {
	return /(?<base>[^♯♭]+)(?<accidental>[♭♯]?)/.exec(note)!.groups as {
		base: string;
		accidental: string;
	};
}
