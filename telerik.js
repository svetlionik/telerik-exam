// function _solve(input) {
//     let sum = 0;
//     let same = true;
//     numberArr = input.toString().split('');
//     for (let i = 1; i <= numberArr.length; i++) {
//         if (typeof(numberArr[i]) !== 'undefined') {
//             sum += Number(numberArr[i]);
//             if (numberArr[i] !== numberArr[i - 1]) {
//                 same = false;
//             }
//         }

//     }

//     console.log(sum);
//     console.log(same);
// }
// // solve(33333);
// // function solve(input) {
// //     const myArr = input.toString().split('');
// //     let same = false;
// //     const total = myArr.reduce((a, b) => (Number(a) + Number(b)));
// //     if (Math.max(...myArr) === Math.min(...myArr)) same = true;
// //     console.log(`${same}\r\n${total}`);
// // }
// function solve(myArr) {
//     var speed = Number(myArr[0]);
//     var place = myArr[1];
//     const speeds = {
//         'motorway': 130,
//         'interstate': 90,
//         'city': 50,
//         'residential': 20
//     }

//     if (speed > speeds[place] + 40) {
//         console.log('reckless driving');
//     } else if (speed > speeds[place] + 20) {
//         console.log('excessive speeding');
//     } else if (speed > speeds[place]) {
//         console.log('speeding ');
//     }
// }
// solve([40, 'city']);
'use strict';

function crookedDigits(number) {
    let myNumber = Math.abs(Number(number)).toString();
    var N = 0;
    myNumber = myNumber.replace(".", "");
    doMath(myNumber);

    function doMath(myNumber) {
        myNumber = myNumber.toString().split('');
        N = myNumber.reduce((a, b) => (Number(a) + Number(b)));
        // console.log(total);
        if (N > 9) {
            doMath(N);
            return;
        }
    }
    console.log(N);
}
crookedDigits('12345');