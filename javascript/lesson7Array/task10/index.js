function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let cloned = arr.slice();
  return cloned;
}
console.log(cloneArr([2, 3, 4, 6]));
