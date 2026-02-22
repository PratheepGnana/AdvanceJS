const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer'
};

delete employee.position;
console.log(employee);

const newemployee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer'
};

const {position, ...nnewemployee} = newemployee;
console.log(nnewemployee);

// Avoid a delete keyword to remove a property from an 
// object. This way mutates the original object and hence 
// leads to unpredictable behavior and makes debugging 
// difficult.  
// A better way to delete a property without mutating the 
// original object is by using the rest operator (...). Use 
// the rest operator (...) to create a new copy without the 
// given property name. 