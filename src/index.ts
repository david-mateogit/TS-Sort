import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numberArray = new NumbersCollection([0, -5, 2, -99]);
const string = new CharactersCollection('aBZoDz');


const sortNums = new Sorter(numberArray);
const sorString = new Sorter(string);

sortNums.sort();
sorString.sort();
