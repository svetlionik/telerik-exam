"use strict";

let input = [
    '-1.0000000000000005'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let myNumber = gets();
myNumber = myNumber.replace(".", "");
myNumber = myNumber.replace("-", "");
let sumOfDigits = 0;

function doMath(myNumber) {
    myNumber = myNumber.toString().split('');
    sumOfDigits = myNumber.reduce((a, b) => (Number(a) + Number(b)));
    // console.log(total);
    if (sumOfDigits > 9) {
        doMath(sumOfDigits);
        return;
    }
    print(sumOfDigits);
}
doMath(myNumber);