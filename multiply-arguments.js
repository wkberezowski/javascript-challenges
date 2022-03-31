// function multiply() {
//   const args = [...arguments];
//   const result = args.reduce((total, item) => {
//     return item ? item * total : item + total;
//   }, 1);
//   return result;
// }

const multiply = (...args) => {
  const result = args.reduce((total, item) => {
    return item ? item * total : item + total;
  }, 1);
  return result;
};

multiply(2, 3);

console.log(multiply(4, 5));
console.log(multiply(1, 2, 3, 5));
console.log(multiply(2, 0, 4, 2));
