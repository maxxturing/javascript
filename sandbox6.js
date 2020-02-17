// let age; // undefined is not intentional

// console.log(age); // undefined
// console.log(age + 3); // NaN
// console.log("the age is ${age}"); // "the age is undefined" string

let age = null; // null is intentional

console.log(age); // null
console.log(age + 3); // null takes on value of 0 in formula
console.log("the age is ${age}"); // "the age is null" string
