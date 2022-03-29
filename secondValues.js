function secondValue(arr) {
  let values = [...new Set(arr)].sort((a, b) => a - b);
  if (values.length < 2) {
    return `${values[0]}`;
  } else if (values.length === 2) {
    return `${values[0]} ${values[1]}`;
  } else {
    return `${values[1]} ${values[values.length - 2]}`;
  }
}

console.log(secondValue([1]));
console.log(secondValue([4, 2]));
console.log(secondValue([11, 44, 22]));
console.log(secondValue([3, 2, 88, 3, -11, 67, 7]));
