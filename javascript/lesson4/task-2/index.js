let m = 20;
const n = 30;
let result = 1;
let a = m;
do {
  if (a % 2 === 1) {
    result *= a;
  }
  a += 1;
} while (m <= n && a <= n);
console.log(result);
