const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 100 },
  { name: "Keyboard", price: 1100 },
  { name: "Monitor", price: 300 },
  { name: "Phone", price: 700 },
];

const totalPrice = products
  .filter((total) => total.price > 500)
  .reduce((totalPric, item) => {
    return totalPric + item.price;
  }, 0);

console.log(totalPrice);
