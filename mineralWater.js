"use strict";

let input = [
    '3',
    '1',
    '9'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let smallBottles = +gets();
let bigBottles = +gets();
let truckCapacity = +gets();
let smallDelivered = 0;
let leftSpace = truckCapacity;

for (let i = 0; i < bigBottles; i++) {
    leftSpace -= (leftSpace >= 5 ? 5 : 0);
}
print(smallBottles >= leftSpace ? leftSpace : -1);











// let smalBottlesRemain = (bigBottles > 0) ? truckCapacity % (bigBottles * 5) : truckCapacity;
// if (leftSpace == 0) smalBottlesRemain = 0;
// let freeSpace = (smalBottlesRemain - smallBottles);
// // console.log(freeSpace > 0 ? -1 : smalBottlesRemain);