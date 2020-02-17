let score = "100";
console.log(score + 1); // returns 1001

// type conversion
score = Number(score); // converts string to number
console.log(score + 1); // returns 101
console.log(typeof score); // returns number

let result = Number("hello"); //  returns NaN
console.log(result);

let result = String(50); // returns "50" string
console.log(result, typeof result); // returns result and type of result so you know it's a string

let result = Boolean(100); // true, type is boolean (truthy value)
let result = Boolean(0); // false, 0 is a falsy value
let result = Boolean("0"); // true, strings of any length are true (truthy)
let result = Boolean(""); // flase, strings of no length are false (falsey)
