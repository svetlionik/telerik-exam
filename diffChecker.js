"use strict";

let input = [
    '1 2 4 4 5 6 7',
    '1 2 3 4 5 7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstArr = gets().split(' ');
let secondArr = gets().split(' ');
let workArr = [];

if (firstArr.length > secondArr.length) {
    workArr = firstArr.slice(0);
} else {
    workArr = secondArr.slice(0);

}

for (let i = 0; i < workArr.length; i++) {
    if (typeof(firstArr[i]) == 'undefined' || typeof(secondArr[i]) == 'undefined') {

        print(`- ${typeof(firstArr[i])=='undefined' ? 'x': firstArr[i]} ${typeof(secondArr[i])=='undefined' ? 'x': secondArr[i]}`);
    } else if (firstArr[i] === secondArr[i]) {
        print(`+ ${firstArr[i]} ${secondArr[i]}`);
    } else if (firstArr[i] !== secondArr[i]) {
        print(`- ${firstArr[i]} ${secondArr[i]}`);
    }
}