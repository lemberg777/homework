function getSum(arr) {
  let sumOfNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfNumber += arr[i];
  }
  if (!Array.isArray(arr)) {
    return null;
  }
  return sumOfNumber;
}
console.log(getSum([1, 2, 3]));
console.log(getSum(1, 2, 3));
console.log(getSum([1]));
console.log(getSum([-8, 8]));
