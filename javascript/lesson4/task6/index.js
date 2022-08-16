const start = 1;
const end = 10;
let result = 0;
let i = 1;
while (start < end && i <= end) {
  if (i % 5 === 0) {
    console.log(i);
  } else if (i % 2 === 0 && i % 4 !== 0) {
    result = result + i;
  } else if (i % 3 === 0) {
    result = result - i;
  } else if (i % 4 === 0) {
    result = result * i;
  }
  i += 1;
}
console.log(result);
