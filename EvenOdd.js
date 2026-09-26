// value counts
const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];

const conut = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;

  return acc;
}, {});

console.log(conut);
