const products = [
  { id: 1, price: 5215, name: "Laptop" },
  { id: 2, price: 515, name: "computer" },
  { id: 3, price: 215, name: "microphone" },
  { id: 4, price: 521, name: "ther" },
];

const totalPrice = products
  .filter((prod) => prod.name === "Laptop")
  .map((pricews) => pricews.price);
console.log(totalPrice);
