const cart = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 100 },
  { name: "Keyboard", price: 1100 },
];

const totalPrice = cart.reduce((total, indx) => {
  return total + indx.price;
}, 0);

console.log(totalPrice);
