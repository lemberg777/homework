function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let maxValue = Math.max.apply(null, arr);
  let minValue = Math.min.apply(null, arr);

  let sumOfvalue = maxValue + minValue;
  if (sumOfvalue > 1000) {
    return true;
  } else {
    return false;
  }
}
console.log(checker(1));
console.log(checker([50, 30, 700, 80]));
console.log(checker([500, 300, 70, 900]));
console.log(checker([500, 300, 700, 900]));
console.log(checker([-5000, -300, -700, -900]));
console.log(checker([0, 0, 0, 0]));
console.log(checker([0, 0, 0, 2000]));
