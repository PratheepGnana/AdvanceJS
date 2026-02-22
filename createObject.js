const createEmpl = (name, age, salary) => ({
name: name,
age: age,
salary: salary
});


console.log(createEmpl(true,true,false));

// Parameters are part of a function definition. A 
// JavaScript function can have any number of 
// parameters. When we invoke a function and pass some 
// values to that function, these values are called function 
// arguments.  
// If a function has more than 1 parameter, it is hard to 
// figure out what these arguments mean when the 
// function is called. When you pass the arguments, the 
// order is important. 
// A better way is to create a function with object (with 
// properties) parameters like in the example. When we 
// pass the argument contained in an object it is pretty much clear from the names of the properties. Also, the 
// order of properties doesn’t matter anymore. 