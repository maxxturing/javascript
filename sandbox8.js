let age = 25;

// loose comparison (different types can still be equal)

console.log(age == 25); // true
console.log(age == "25"); // true (string converted into a number)
console.log(age != "25"); // false (string converted into a number)
console.log(age != 25); // false

// strict comparison (different types cannot be equal)

console.log(age === 25); // true
console.log(age === "25"); // false (string can't be equal to a number)
console.log(age !== 25); // false (it is equal)
console.log(age !== "25"); // true (string is not equal to number in strict comparison)
