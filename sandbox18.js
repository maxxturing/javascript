// function declaration - hoisting (doesn't matter where it is in the file)
function greet() {
  console.log("hello there");
}

// function expression - javascript does not hoist function expressions
const speak = function() {
  console.log("good day!");
};

greet();

speak();
