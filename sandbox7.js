// booleans & comparisons
// console.log(true, false, "true", "false");

// // methods can return booleans
// let email = "luigi@thenetninja.co.uk";
// let names = ["mario", "luigi", "toad"];
// let result = email.includes("@"); // look for @ symbol in string and return true/false
// let result = names.includes("luigi");
// console.log(result);

// comparison operators
// let age = 25;

// console.log(age == 25); // is age equal to 25? [true]
// console.log(age == 30); // is age equal to 30? [false]
// console.log(age != 30); // is age not equal to 30? [true]
// console.log(age > 20); // is age more than 20? [true]
// console.log(age < 20); // is age less than 20? [false]
// console.log(age <= 20); // is age less than or equal to 20 [false]
// console.log(age >= 25); //  is age more than or equal to 25 [true]

let name = "Shaun";

console.log(name == "shaun"); // abstract equality or loose equality (type not taken into account) [false] because capitalisation is different
console.log(name == "Shaun"); // [true] because they're equal
console.log(name > "crystal"); // [false] because lowercase letters are greater than uppercase letters
console.log(name > "Shaun"); // [false] because they're the same
console.log(name > "Crystal"); // [true] because S is greater than C
