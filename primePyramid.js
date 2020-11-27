"use strict";

let input = [
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let myNum = +gets();
let primeNumbers = [];

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 0;
}

for (let i = 0; i <= myNum; i++) {
    if (isPrime(i)) {
        primeNumbers.push(i);
    }
}
let numRow = '';
for (let i = 0; i < primeNumbers.length; i++) {
    numRow = '';
    for (let n = 1; n <= primeNumbers[i]; ++n) {
        numRow += isPrime(n) ? 1 : 0;
    }
    console.log(numRow);
}