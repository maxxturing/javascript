// // regular function
// const calcArea = function(radius) {
//   return 3.14 * radius ** 2;
// };

// arrow function
const calcArea = (radius, something) => {
  return 3.14 * radius ** 2;
};

// arrow function
const calcArea = (radius, something) => 3.14 * radius ** 2;

// 1. arrow function is set equal to paranthesis with parameters (unless exactly 1 parameter, then you don't need paranthesis)
// 2. return something simple on one line - remove return and bring up to one line

const area = calcArea(5);
console.log("area is:", area);

// converting into arrow functions

const greet = function() {
  return "hello, world";
};

const greet = () => "hello, world";

const bill = function(products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
