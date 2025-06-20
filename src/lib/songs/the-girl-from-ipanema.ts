import { type Song } from '.';

const theGirlFromIpanema: Song = {
	id: 'the-girl-from-ipanema',
	name: 'The Girl From Ipanema',
	key: 'Sol', // G major for clarinet
	sections: [
		{
			name: 'A',
			chords: [
				// SolΔ | SolΔ | La7♯11 | La7♯11
				{ root: 'Sol', quality: '', extensions: 'Δ' },
				{ root: 'Sol', quality: '', extensions: 'Δ' },
				{ root: 'La', quality: '', extensions: '7♯11' },
				{ root: 'La', quality: '', extensions: '7♯11' },
				// La-7 | La♭7♯11 | SolΔ | La♭7
				{ root: 'La', quality: '-', extensions: '7' },
				{ root: 'La♭', quality: '', extensions: '7♯11' },
				{ root: 'Sol', quality: '', extensions: 'Δ' },
				{ root: 'La♭', quality: '', extensions: '7' },
			],
		},
		{
			name: 'B',
			chords: [
				// La♭Δ | La♭Δ | Do♯7 | Do♯7
				{ root: 'La♭', quality: '', extensions: 'Δ' },
				{ root: 'La♭', quality: '', extensions: 'Δ' },
				{ root: 'Do♯', quality: '', extensions: '7' },
				{ root: 'Do♯', quality: '', extensions: '7' },
				// La♭-7 | La♭-7 | Mi7 | Mi7
				{ root: 'La♭', quality: '-', extensions: '7' },
				{ root: 'La♭', quality: '-', extensions: '7' },
				{ root: 'Mi', quality: '', extensions: '7' },
				{ root: 'Mi', quality: '', extensions: '7' },
			],
		},
		{
			name: 'B',
			chords: [
				// La-7 | La-7 | Fa7 | Fa7
				{ root: 'La', quality: '-', extensions: '7' },
				{ root: 'La', quality: '-', extensions: '7' },
				{ root: 'Fa', quality: '', extensions: '7' },
				{ root: 'Fa', quality: '', extensions: '7' },
				// Si-7 | Mi7♭5♭9 | La-7 | Re7♭5♭9
				{ root: 'Si', quality: '-', extensions: '7' },
				{ root: 'Mi', quality: '', extensions: '7♭5♭9' },
				{ root: 'La', quality: '-', extensions: '7' },
				{ root: 'Re', quality: '', extensions: '7♭5♭9' },
			],
		},
	],
};

export default theGirlFromIpanema;
