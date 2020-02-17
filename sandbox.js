// alert("hello world");

var score = 75;
console.log(score);

let age = 27;
let year = 2020;
console.log(age, year);

age = 30; // let can be overriden
console.log(age);

const points = 100; // const can't be overriden
console.log(points);

// Single line comment

/* multi-
line
comment */

//strings
console.log("Hello, world!");

let email = "john@johnsmith.com";
console.log(email);

//string concatenation
let firstName = "John";
let lastName = "Smith";

let fullName = firstName + " " + lastName;

console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

console.log(result, fullName);

let index = email.indexOf("@"); // finds the position of the @ character in a string
console.log(index);
