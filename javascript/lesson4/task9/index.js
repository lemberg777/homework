let a = 1;
let b = 1000;
let sum = 0;

for (let i = 1; a < b && i <= b; i++) {
  sum += i;
}
let div = Math.floor(sum / 1234);
let mod = sum % 1234;

console.log(Boolean(div > mod));
