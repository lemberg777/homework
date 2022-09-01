"use strict";
const numbers = [1, 2, 3, 4];
function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}
swap(numbers);
console.log(swap(numbers));

function swapManual(numbers) {
  let newNumbers = numbers.slice();
  newNumbers.push(newNumbers.shift());

  return newNumbers;
}

console.log(swapManual(numbers));
