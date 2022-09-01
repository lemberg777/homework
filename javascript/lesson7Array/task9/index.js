function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let reversed = arr.slice();
  reversed.reverse();
  return reversed;
}

console.log(reverseArray(1, 2, 3, 4));
console.log(reverseArray([1, 2, 3, 4]));
