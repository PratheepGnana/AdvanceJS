
console.time('myTimer');
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

console.timeEnd('myTimer');

// The console object has time() and timeEnd() methods. 
// These two methods help us to analyze the 
// performance of our code. 
// The console.time() method starts a timer to track how 
// long an operation takes. You can give each timer a 
// unique name. When you call console.timeEnd() with 
// the same name, the browser will output the time in 
// milliseconds.