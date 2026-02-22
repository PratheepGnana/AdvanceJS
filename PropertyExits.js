const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer'
};

const isageofemployee = 'age' in employee;

console.log(isageofemployee);

//Same concept will not workin for the arrays 
const empArr = [10,20,30];
const is10inempArr = '10' in empArr;
console.log(is10inempArr);