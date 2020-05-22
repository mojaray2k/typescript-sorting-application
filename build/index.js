"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var numbersCollection_1 = require("./numbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new numbersCollection_1.NumbersCollection([1000000, 3, -5, -18, 0]);
var sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('FxleprqerkoDDLE');
var sortCharacters = new sorter_1.Sorter(charactersCollection);
sortCharacters.sort();
console.log(charactersCollection.data);
