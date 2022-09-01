"use strict";

function squareArray(arr) {
  let square = [];
  if (!Array.isArray(arr)) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      square.push(arr[i] * arr[i]);
    }
    return square;
  }
}

console.log(squareArray([12, 3, 7]));
console.log(squareArray([-12, 0, 6, 5]));
console.log(squareArray("d", "6"));
