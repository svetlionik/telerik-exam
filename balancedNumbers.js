"use strict";

let input = [
    '275',
    '693',
    '110',
    '103',
    '120',
    '132'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sumOfDigits = 0;
while (true) {
    let myNum = gets();
    if (+myNum[0] + +myNum[2] == +myNum[1]) {
        sumOfDigits += +myNum;
    } else {
        print(sumOfDigits);
        break;
    }
}