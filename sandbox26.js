// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.5;

console.log(Math.round(area)); // rounds up and down normally
console.log(Math.floor(area)); // rounds down
console.log(Math.ceil(area)); // rounds up
console.log(Math.trunc(area)); // removes decimal

// random numbers

const random = Math.random(); // always decimal between 0 and 1
console.log(random);

console.log(Math.round(random * 100)); // 1 - 100
