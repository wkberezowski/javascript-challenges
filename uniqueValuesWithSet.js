// THE LONG WAY

// function unique(str) {
//   let tempStr = new Set();
//   for (let letter of str) {
//     if (tempStr.has(letter)) {
//       return false;
//     }
//     tempStr.add(letter);
//   }
//   return true;
// }

// THE ONE LINER WAY

function unique(str) {
  return new Set(str).size === str.length;
}

console.log(unique('abcd'));
console.log(unique('abcdade'));
