// Write a function that takes a list and an integer and returns a list with up to the n-th element in the list.
// In case of the integer being bigger than the size of the list, return the original list.
// take(["apple", "pear", "lemon", "orange"], 2)
// ["apple", "pear"]

// Question 1 - Take (Easy)

const take = function(fruits, num) {
  // 1. return fruits.splice(0, n);

  // 2. n = Math.min(fruits.length, num);

  let newList = [];
  if (num > fruits.length) {
    num = fruits.length;
  }
  for (let i = 0; i < num; i++) {
    newList.push(fruits[i]);
  }
  return newList;
};

console.log(take(["apple", "pear", "lemon", "orange"], 2));

// Question 2 - InsertAt

// Write a function that takes a list, an integer and an element and returns a list with that element inserted into the n-th position.
// For example:
// insertAt(["ford", "honda", "citroen"], 2, "vauxhall")
// # ["ford", "vauxhall", "honda", "citroen"]

const insertAt = function(carList, n, newCar) {
  carList.splice(n - 1, 0, newCar);
  return carList;
};

console.log(insertAt(["ford", "honda", "citroen"], 2, "vauxhall"));

// Question 3 - Reverse (Easy)
// Easy
// Write a function to reverse a String: "OVO is the Best!" -> "!tseB eht si OVO"
function reverse(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

console.log(reverse("OVO is the Best!"));

// Question 4 - Matrix manipulation
