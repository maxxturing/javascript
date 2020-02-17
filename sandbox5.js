let ninjas = ["shaun", "ryu", "chun-li"]; //array
// console.log(ninjas[1]; //gets the second element in array

ninjas[1] = "ken"; // overrides position 1
// console.log(ages[1]):

// let ages = [20,25,30,35];  // array of numbers
// console.log(ages[2]):  // third element in array

// let random = ['shaun', 'crystal', 30, 20]; // you can combine different data types in an array
// console.log(random);

// console.log(ninjas.length); // length of an array - how many elements are inside of it

// array methods

// let result = ninjas.join(","); // joins the array elements into a single string with a comma
// let result = ninjas.indexOf("chun-li"); // gets the index of this value in the array
// let result = ninjas.concat(["ken", "crystal"]); // adds this array to the end of the first array
// let result = ninjas.push("ken"); // returns the length of the new array and alters the original value - destructive method (changes the original value)
let result = ninjas.pop(); // return value it pops off the array (takes off last item)

console.log(result);
