function arraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = tempArr.pop();

  let number = 0;
  tempArr.forEach((item) => (number += item));
  return largest === number;
}

console.log(arraySum([1, 2, 4, 6, 13]));
console.log(arraySum([1, 2, 4, 34, 22]));
