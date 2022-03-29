// THE LONG WAY

function checkPalindrome(str) {
  str = str.toLowerCase();
  let first = str.split(' ').join('');
  let second = first.split('').reverse().join('');
  console.log(first);
  console.log(second);

  return first === second;
}

// THE SHORT WAY

function checkPalindrome(str) {
  let tempStr = str
    .match(/[a-z0-9]+/gi)
    .join('')
    .toLowerCase();
  let second = tempStr.split('').reverse().join('');
  return tempStr === second;
}

console.log(checkPalindrome('Was it a car or a cat I saw'));
console.log(checkPalindrome('Red -rum-, sir,-is-murder'));
console.log(checkPalindrome('I got up early this morning'));
