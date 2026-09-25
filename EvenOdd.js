// Even and Odd Number of Array Method

const numbers = [10, 2, 5, 9, 8, 7, 4, 6];

const evenandodd = numbers
  .filter((even) => even % 2 === 0)
  .map((num) => num * 2);

console.log(evenandodd);
