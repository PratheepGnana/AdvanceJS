const fiedarray = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];

// array without the first element
const newfiledarray = fiedarray.slice(1); // ➜ [ "2", "3", … ]
// or with destructuring
const [,, ...rest] = fiedarray;
console.log(rest); // ➜ [ "2", "3", … ]

const employee = {
  name: "John Doe",
  age: 30,
  position: "Software Engineer",
};

// object without its first property
// (order is insertion order, so `name` here)
const { name, ...newemployee } = employee;
console.log(newemployee); // ➜ { age: 30, position: 'Software Engineer' }

// if you don’t know which key is “first” you can
// use Object.entries() / Object.fromEntries() + slice
const entries = Object.entries(employee).slice(1);
const newEmp2 = Object.fromEntries(entries);
console.log(newEmp2); // same result
