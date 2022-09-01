"use strict";
const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
};

console.log(checkSum([90, 10, 20]));
console.log(checkSum([90, 1, 2]));
console.log(checkSum([-90, 0, 2]));
console.log(checkSum(-90, 0, 50));
