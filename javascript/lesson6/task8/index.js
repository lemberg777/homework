function findDivCount(a, b, n) {
  let j = 0;
  for (let i = a; a <= b && i <= b; i++) {
    if (i % n === 0) {
      j = j + 1;
    }
  }
  return j;
}
findDivCount(1, 100, 5);
console.log(findDivCount(1, 100, 5));
