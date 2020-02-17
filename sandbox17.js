//variables & block scope
let age = 100;

if (true) {
  let age = 200; // local variable inside code block overrides global variable inside code block
  let name = "shaun";
  console.log("inside first code block", age, name);

  if (true) {
    let age = 300;
    console.log("inside second code block", age);
  }
}

console.log("outside code block", age, name); // won't log the name

// same rules of scope apply to let and const
// var ignores block scope
