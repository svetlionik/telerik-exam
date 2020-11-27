"use strict";

let input = [
    [1, 2, 3],
    'anagram',
    '6',
    'gramana',
    'aaagrnm',
    'anagra',
    'margana',
    'abc',
    'xy'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);



let destinationWord;
let sourceWord = gets();
let wordsNum = gets();
for (let i = 1; i <= wordsNum; i++) {
    destinationWord = gets().split('').sort().join('');
    sourceWord = sourceWord.split('').sort().join('');
    console.log((sourceWord == destinationWord) ? 'Yes' : 'No');
}