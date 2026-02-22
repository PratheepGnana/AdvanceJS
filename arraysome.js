const arrsome = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
];

const haspersonOver30 = arrsome.filter(val => val.age > 30);
console.log(haspersonOver30);

// If we want to check only occurrence means value exist 
// or not then use Array.some instead of Array.find. 
// The some() method checks if any array items pass a 
// test implemented by the provided function. If the 
// function returns true, some() returns true and stops. 
// The some() method does not change the original array. 