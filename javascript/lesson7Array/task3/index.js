"use strict";
function getSpecialNumbers(from, to) {
  let specialNumbers = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }
  return specialNumbers;
}
const specialNumbers = getSpecialNumbers;
console.log(getSpecialNumbers(1, 20));
console.log(getSpecialNumbers(-10, 20));
console.log(getSpecialNumbers(1, 2));
