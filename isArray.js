const myArray = [1, 2, 3, 4, 5];
console.log(Array.isArray(myArray));
const notAnArray = "Hello, World!";
console.log(Array.isArray(notAnArray));
const anotherArray = { 0: 'a', 1: 'b', length: 2 };
console.log(Array.isArray(anotherArray));

// The Array.isArray() method determines if the given argument is an 
// Array or not. 
// • Returns true if the value is Array. 
// • Returns false if the value is not Array.