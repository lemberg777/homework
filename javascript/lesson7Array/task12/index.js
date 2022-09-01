function sortAsc(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        let sortUp = array[i];
        array[i] = array[j];
        array[j] = sortUp;
      }
    }
  }
  return array;
}

console.log(sortAsc([2, 9, 4, 10, 1]));

function sortDesc(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        let sortUp = array[i];
        array[i] = array[j];
        array[j] = sortUp;
      }
    }
  }
  return array;
}
console.log(sortDesc([2, 9, 4, 10, 1]));
