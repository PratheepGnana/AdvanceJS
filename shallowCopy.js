const fiedarray = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];

const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer'
};

const newfiledarray = [...fiedarray];
const newemployee = {...employee};

console.log(newfiledarray);
console.log(newemployee);

// Use the spread operator (...) to create a shallow copy 
// of the object and array. 
// The spread operator (...) allows us to make copies of 
// the original data (whether it is an array or object) and 
// create a new copy of it.