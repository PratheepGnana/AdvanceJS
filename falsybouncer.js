const falsyValues = [false, 0, "", null, undefined, NaN];
const truthyValues = [true, 1, "hello", [], {}, 42];

const filteredFalsyValues = falsyValues.filter(value => Boolean(value));
const filteredTruthyValues = truthyValues.filter(value => Boolean(value));

console.log("Falsy values after filtering:", filteredFalsyValues);
console.log("Truthy values after filtering:", filteredTruthyValues);


// In JavaScript, falsy values are values that are considered false when evaluated in a boolean context. 
// The falsy values in JavaScript are: false, 0, "", null, undefined, and NaN. 
// All other values are considered truthy. 
// When you filter an array using Boolean as the callback function, it will remove all falsy values and keep only the truthy values.