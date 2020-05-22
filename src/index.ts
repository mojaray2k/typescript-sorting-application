import {Sorter} from './sorter';
import {NumbersCollection} from './numbersCollection';

const numbersCollection = new NumbersCollection([1000000, 3, -5, 0]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
