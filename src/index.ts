import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';
import {LinkedList} from './LinkedList';

const numbersCollection = new NumbersCollection([1000000, 3, -5, -18, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('FxleprqerkoDDLE');
const sortCharacters = new Sorter(charactersCollection);
sortCharacters.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const linkListSorter = new Sorter(linkedList);
linkListSorter.sort();
linkedList.print();
