let a = 0;
let b = 1000;
let i = 0;
let sum = 0;
while (a < b && i < b) {
  if (i % 2 === 1) {
    console.log("Found");
    sum += i;
  }
  i += 1;
}

if (sum * 5 > 5000) {
  console.log("Bigger");
} else {
  console.log("Smaller or equel");
}
