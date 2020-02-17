// for loops

// for (let i = 0; i < 5; i++) {
//   console.log("in loop:", i);
// }

// console.log("loop finished");

// // no semi-colon at end of curly braces when using loops
// // job of a loop is to loop over a certain portion of code over and over again
// // 1. i is an initialisation variable i.e. a counter that tracks how many times you loop
// // 2. condition - evaluates to true or false, if true, then execute, if false, then don't
// // 3. final expression - executes every time at the end of the code block

// const names = ["shaun", "mario", "luigi"];

// for (let i = 0; i < names.length; i++) {
//   //   console.log(i);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// while loops

const names = ["shaun", "mario", "luigi"];

// let i = 0; // declare this outside the loop
// while (i < 5) {
//   console.log("in loop:", i);
//   i++; // prevents infinite loop
// }

// while loop only has condition statement
// don't get an infinite loop

let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

// do while loops

let i = 5; // allows you to run it once

do {
  console.log("val of i is:", i);
  i++;
} while (i < 5);
