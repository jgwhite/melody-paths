import allOfMe from './all-of-me';
import allTheThingsYouAre from './all-the-things-you-are';
import autumnLeaves from './autumn-leaves';
import blackOrpheus from './black-orpheus';
import lullabyOfBirdland from './lullaby-of-birdland';
import myOneAndOnlyLove from './my-one-and-only-love';
import satinDoll from './satin-doll';
import stellaByStarlight from './stella-by-starlight';
import stThomas from './st-thomas';
import takeTheATrain from './take-the-a-train';
import youDontKnow from './you-dont-know-what-love-is';
import { type Chord } from '../note';

export type Song = {
	id: string;
	name: string;
	key: string;
	sections: SongSection[];
};

export type SongSection = {
	name: string;
	chords: Chord[];
};

export default [
	allOfMe,
	allTheThingsYouAre,
	autumnLeaves,
	blackOrpheus,
	lullabyOfBirdland,
	myOneAndOnlyLove,
	satinDoll,
	stellaByStarlight,
	stThomas,
	takeTheATrain,
	youDontKnow,
];
