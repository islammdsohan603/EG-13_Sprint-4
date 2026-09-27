const users = [
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 25 },
  { name: "Hasan", age: 19 },
  { name: "Sakib", age: 15 },
];

const agesUsers = users.filter((ages) => ages.age >= 18);
console.log(agesUsers);
