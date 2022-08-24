function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}
getArrayBounds([15, 10, 20, 30, 55]);
console.log(getArrayBounds([15, 10, 20, 30, 55]));
console.log(getArrayBounds(15, 10, 20, 30, 55));
console.log(getArrayBounds([1]));
console.log(getArrayBounds([0]));
console.log(getArrayBounds("super"));
