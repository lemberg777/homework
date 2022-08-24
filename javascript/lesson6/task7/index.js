function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}

function sum(from, to) {
  let sum = 0;
  for (let num = from; num <= to; num += 1) {
    sum += num;
  }
  return sum;
}

console.log(compareSums(11, 4112, 11, 3100));
console.log(compareSums(0, 1, 110, 310));
console.log(compareSums(-100, 2, 11, 100));
console.log(compareSums(11, 12, -11, 3));
console.log(compareSums(0, 0, 0, 0));
