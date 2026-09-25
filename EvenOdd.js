// filter() ব্যবহার করে 18 বছরের বেশি বয়সী users বের

const users = [
  { name: "Sohan", age: 22 },
  { name: "Rahim", age: 16 },
  { name: "Karim", age: 25 },
  { name: "Hasan", age: 17 },
];

const adults = users.filter((ages) => ages.age >= 18);
console.log(adults);
