"use strict";

const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }
  return false;
};

console.log(includes([1, 4, 8, 3], 8));
console.log(includes([1, 4, 8, 3], 5));
console.log(includes([1, 4, 8, 3], -5));
console.log(includes([1, 4, 8, 3], 4));
