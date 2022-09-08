function uniqueCount(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let result = new Set(arr);
  return result.size;
}

console.log(uniqueCount([1, 5, 1, 3, 3, 3, 5, 2, 7, 9, 9]));
