import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberArray = new NumbersCollection([0, -5, 2, -99]);
numberArray.sort();

const string = new CharactersCollection('aBZoDz');
string.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-2);
linkedList.add(14);
linkedList.add(-10);


linkedList.sort();
linkedList.print();
