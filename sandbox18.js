greet(); // does work - hoisting

// speak(); // doesn't work - function expression

// function declaration - hoisting (doesn't matter where it is in the file - it's hoisted to the top)
function greet() {
  console.log("hello there");
} // no semi colon at the end (not an expression)

// function expression - javascript does not hoist function expressions
const speak = function() {
  console.log("good day!");
}; // semi colon at the end (it's an expression)

greet();

speak();
