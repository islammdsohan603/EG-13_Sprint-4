// duplicate values remove in array

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
