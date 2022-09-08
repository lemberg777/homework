const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9];
console.log(getSpecialNumbers(num));
