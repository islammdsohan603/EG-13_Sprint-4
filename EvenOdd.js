// max and min number

const numbers = [10, 5, 30, 2, 50];

let maxNumber = numbers[0];
let minNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }

  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

console.log(maxNumber);
console.log(minNumber);
