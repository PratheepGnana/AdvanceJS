const names = ["John", "Jane", "Bob", "Alice", "Charlie"];

console.log(JSON.stringify(names));
// The JSON.stringify() method converts a JavaScript value
// to a JSON string. It can be used to convert arrays,
// objects, and other data types into a string format that can
// be easily transmitted or stored. In this example, we are
// converting the 'names' array into a JSON string and logging
// it to the console.

console.log(JSON.stringify(names, null, 2));
// The second argument of JSON.stringify() is a replacer function
// or an array of strings that can be used to filter the properties
// included in the JSON string. The third argument is a space
// value that can be used to add indentation and improve readability.
// In this example, we are passing 'null' as the replacer and '2' as the space value,
// which will format the JSON string with an indentation of 2 spaces for better readability.


const namesObject = { first: "John", second: "Jane", third: "Bob" };
console.log(JSON.stringify(namesObject));
// In this example, we are converting an object 'namesObject' into a JSON string using JSON.stringify() and logging it to the console. The resulting JSON string will represent the object in a format that can be easily transmitted or stored.

console.log(JSON.stringify(namesObject, null, 2));
// Similar to the previous example, we are using JSON.stringify() to convert the 'namesObject' into a JSON string. By passing 'null' as the replacer and '2' as the space value, we are formatting the JSON string with an indentation of 2 spaces for improved readability when logged to the console.