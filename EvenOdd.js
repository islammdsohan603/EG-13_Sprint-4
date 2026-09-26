const products = [
  { name: "iPhone", category: "phone" },
  { name: "Samsung", category: "phone" },
  { name: "MacBook", category: "laptop" },
  { name: "Dell", category: "laptop" },
];

const grouped = products.reduce((acc, product) => {
  const category = product.category;

  if (!acc[category]) {
    acc[category] = [];
  }

  acc[category].push(product);
  return acc;
}, {});

console.log(grouped);
