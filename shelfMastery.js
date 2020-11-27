"use strict";

let input = [
    '6',
    '1 2 3 3 5 10',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let trophyNum = +gets();
let arrTrophy = gets().split(' ');
let lastTrophy = arrTrophy[trophyNum - 1];
// console.log(lastTrophy);
arrTrophy.sort(function(a, b) { return b - a });
let firstRow = '';
let secondRow = '';
let thirdRow = '';
let fourthRow = '';


// let shelfRows = new Array;
// console.log(arrTrophy)

for (let i = 0; i < arrTrophy.length; i++) {
    // if (arrTrophy[i] > lastTrophy * .9) console.log(arrTrophy[i]);
    if (arrTrophy[i] > lastTrophy * .9) firstRow += (arrTrophy[i] + ' ')
    else if (arrTrophy[i] > lastTrophy * .5) secondRow += (arrTrophy[i] + ' ');
    else if (arrTrophy[i] > lastTrophy * .2) thirdRow += (arrTrophy[i] + ' ');
    else fourthRow += (arrTrophy[i] + ' ');
}
print(firstRow == '' ? 'empty' : firstRow.trim());
print(secondRow == '' ? 'empty' : secondRow.trim());
print(thirdRow == '' ? 'empty' : thirdRow.trim());
print(fourthRow == '' ? 'empty' : fourthRow.trim());