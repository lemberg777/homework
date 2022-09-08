function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [];
  if (array.length > 0) {
    newArr = [...new Set(array)];
  }
  return newArr;
}
console.log(removeDuplicates([1, 1, 2, 3, 3, 5, 6, 6]));
console.log(removeDuplicates([-1, 0, 2, 3, 3, 5, 6, 6]));
