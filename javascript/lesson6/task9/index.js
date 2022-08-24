function getSimpleNum(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function getPrimes(num) {
  for (let i = 2; i <= num; i++)
    if (getSimpleNum(i)) {
      console.log(i);
    }
}
getPrimes(15);
