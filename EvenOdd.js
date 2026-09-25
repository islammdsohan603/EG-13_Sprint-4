// reduce() ব্যবহার করে shopping cart-এর total price বের

const cart = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 50 },
];

const totalPrice = cart.reduce((total, indx) => total + indx.price, 0);
console.log(totalPrice);
