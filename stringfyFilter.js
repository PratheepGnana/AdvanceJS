

const namesObject = { first: "John", second: "Jane", third: "Bob", age: 30, city: "New York" , hobbies: ["reading", "traveling", "cooking"] };
console.log(JSON.stringify(namesObject, ["first", "second", "hobbies"]));
// In this example, we are converting an object 'namesObject' into a JSON string using JSON.stringify() and logging it to the console. The resulting JSON string will represent the object in a format that can be easily transmitted or stored.
const namesObjectFiltered = JSON.stringify(namesObject, ["first", "second", "hobbies"], 2)
// Similar to the previous example, we are using JSON.stringify() to convert the 'namesObject' into a JSON string. By passing 'null' as the replacer and '2' as the space value, we are formatting the JSON string with an indentation of 2 spaces for improved readability when logged to the console.