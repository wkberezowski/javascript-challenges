let products = [
  {
    title: 'iphone 8',
    company: 'apple',
  },
  {
    title: 'galaxy',
    company: 'samsung',
  },
  {
    title: 'iphone 7',
    company: 'apple',
  },
  {
    title: 'iphone xs',
    company: 'apple',
  },
  {
    title: 'htc phone',
    company: 'htc',
  },
];

// THE LONG WAY

// function getUnique(arr) {
//   let tempArr = arr.map((item) => item.company);
//   return [...new Set(tempArr)];
// }

// THE ONE LINER

function getUnique(arr) {
  return [
    ...arr.reduce((acc, curr) => {
      acc.add(curr.company);
      return acc;
    }, new Set()),
  ];
}

console.log(getUnique(products));
