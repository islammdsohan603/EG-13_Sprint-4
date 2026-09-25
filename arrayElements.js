const products = [
  { name: "T-Shart", price: 2548 },
  { name: "Pants", price: 1548 },
  { name: "Cap", price: 890 },
];

const total = products.reduce((total, ind) => total + ind.price, 0);

console.log(total);
