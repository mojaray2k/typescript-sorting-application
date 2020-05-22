import {Sorter} from './sorter';
import {NumbersCollection} from './numbersCollection';
import {CharactersCollection} from './CharactersCollection';

const numbersCollection = new NumbersCollection([1000000, 3, -5, -18, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('FxleprqerkoDDLE');
const sortCharacters = new Sorter(charactersCollection);
sortCharacters.sort();
console.log(charactersCollection.data);
