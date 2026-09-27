const students = [
  { name: "Rahim", marks: 80 },
  { name: "Karim", marks: 45 },
  { name: "Hasan", marks: 70 },
  { name: "Sakib", marks: 30 },
];

const marks = students.filter((mark) => mark.marks > 50).map((stu) => stu.name);
console.log(marks);
