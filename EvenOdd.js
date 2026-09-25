// find() ব্যবহার করে নির্দিষ্ট id-এর user

const users = [
  { id: 1, name: "Sohan" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" },
];

const user = users.find((user) => user.id === 3);
console.log(user);
