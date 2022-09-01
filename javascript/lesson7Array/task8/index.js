"use strict";
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let evenEl = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenEl.push(arr[i] + delta);
      } else {
        evenEl.push(arr[i]);
      }
    }
    return evenEl;
  }
};

console.log(increaseEvenEl([5, 2, 3, 4, 5, 6, 7, 8], 10));
console.log(increaseEvenEl(1, 2, 3, 10));
console.log(increaseEvenEl([], 10));
console.log(increaseEvenEl([5, 2, 3, 4, 5, 6, 7, 8], -10));
