// fillters

const users = [
  { name: "sohan", age: 21 },
  { name: "Alom", age: 10 },
  { name: "Json", age: 25 },
];

const agesUsers = users.filter((ages) => ages.age >= 18);

console.log(agesUsers);
