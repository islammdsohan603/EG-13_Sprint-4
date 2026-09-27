const employees = [
  { name: "Rahim", salary: 30000 },
  { name: "Karim", salary: 70000 },
  { name: "Hasan", salary: 50000 },
  { name: "Sakib", salary: 90000 },
];

const highestSalary = employees.reduce((highest, emp) => {
  if (emp.salary > highest.salary) {
    return emp;
  }

  return highest;
}, employees[0]);

console.log(highestSalary);
