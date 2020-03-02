// run node ovotech-interview.js

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
// Write a function to reverse a String: "OVO is the Best!" -> "!tseB eht si OVO"
const reverse = function(string) {
  return string
    .split("")
    .reverse()
    .join("");
};

console.log(reverse("OVO is the Best!"));

// Question 4 - Matrix manipulation (Easy)
// Write a function that takes a matrix and outputs the transpose of the matrix.
// The person will need to think about how to represent a matrix in their choice of language.
// A square matrix N x N is straightforward.

// TODO: "Array of arrays javascript"

// ### Question 5 - Middle elements (Easy)

// Write a function `middle` which takes a string and returns the middle
// character(s) of the string. For strings of odd length, it will be 1 character,
// for strings of even length, it will be 2 characters.

// ```python
// middle("abcde") == "c"
// middle("abcd")  == "bc"
// middle("")      == ""
// middle("a")     == "a"
// ```

const middle = function(string) {
  num = Math.floor(string.length / 2);
  // statement ? if_true : if_false
  return string.length % 2 === 0
    ? string.substring(num - 1, num + 1)
    : string[num]; //.substring(num - 1, num);
};

console.log(middle("abcde"));
console.log(middle("abcd"));
console.log(middle(""));
console.log(middle("a"));

// #### Medium

// Write a function `middle` that takes a string s and an integer n which returns
// the middle n elements of the string. Assume n will be odd for strings of odd
// length and even for strings of even length.

// ```python
// middle("abcde", 1) == "c"
// middle("abcde", 3) == "bcd"
// middle("abcd", 4)  == "abcd"
// ```

console.log(" - - - N E W  F U N C T I O N - - - ");

const middleMed = function(s, n) {
  if (s.length % 2 == 0) {
    num = s.length / 2;
    if (n === 2) {
      return s.substring(num - 1, num + 1);
    } else {
      let eitherSide = (n - 2) / 2;
      return s.substring((num - 2, num + 2));
    }
  } else {
    num = (s.length + 1) / 2;
    if (n === 1) {
      return s.substring(num - 1, num);
    } else {
      let eitherSide = (n - 1) / 2;
      return s.substring(num - (1 + eitherSide), num + eitherSide);
    }
  }
};

console.log(middleMed("1234", 2));
console.log(middleMed("1234", 4));
console.log(middleMed("123456", 6));
console.log(middleMed("12345678", 6));
console.log(middleMed("123456789", 3));

console.log(" - - - N E W  F U N C T I O N - - - ");

const middleMed2 = function(s, n) {
  let midPoint = s.length / 2 - 0.5;
  let offset = n / 2;
  let startPos = Math.ceil(midPoint - offset);
  let endPos = Math.floor(midPoint + offset);
  return s.substring(startPos, endPos + 1);
};

console.log(middleMed2("12345", 3));
console.log(middleMed2("1234567", 1));
console.log(middleMed2("123456789", 5));

console.log(" - - - N E W  F U N C T I O N - - - ");

function solution(number) {
  let numberOfMultiplesOfThree = Math.floor(number / 3);
  let multiplesOfThree = [];
  for (let i = 1; i <= numberOfMultiplesOfThree; i++) {
    if (i * 3 < number) {
      multiplesOfThree.push(i * 3);
    }
  }

  let numberOfMultiplesOfFive = Math.floor(number / 5);
  let multiplesOfFive = [];
  for (let i = 1; i <= numberOfMultiplesOfFive; i++) {
    if (i * 5 < number) {
      multiplesOfFive.push(i * 5);
    }
  }

  multiplesOfThree = multiplesOfThree.filter(
    val => !multiplesOfFive.includes(val)
  );

  const arrSum3 = multiplesOfThree =>
    multiplesOfThree.reduce((a, b) => a + b, 0);

  const arrSum5 = multiplesOfFive => multiplesOfFive.reduce((a, b) => a + b, 0);
  return arrSum3(multiplesOfThree) + arrSum5(multiplesOfFive);
}

console.log(solution(23));

console.log(" - - - N E W  F U N C T I O N - - - ");

function solution(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(23));

console.log(" - - - N E W  F U N C T I O N - - - ");

function iqTest(numbers) {
  let numbersArray = numbers.split(" ");
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 !== 0) {
      evenArray.push(numbersArray[i]);
    } else {
      oddArray.push(numbersArray[i]);
    }
  }
  if (Number(evenArray.length) > 1) {
    return Number(oddArray.join(""));
  } else {
    return Number(evenArray.join(""));
  }
}
console.log(iqTest("2 4 7 8 10"));

console.log(" - - - N E W  F U N C T I O N - - - ");

function persistence(num) {
  let i = 0;
  let numArray = num.toString().split("");
  if (numArray.length < 2) {
    return i;
  } else {
    do {
      i += 1;
      let num = numArray.reduce((a, b) => a * b);
      numArray = num.toString().split("");
    } while (numArray.length >= 2);
  }
  return i;
}

console.log(persistence(999));

console.log(" - - - N E W  F U N C T I O N - - - ");

function alphabetPosition(text) {
  let letterArray = text.split(""),
    numberArray = [];
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] >= "A" && letterArray[i] <= "Z") {
      numberArray.push(letterArray[i].charCodeAt(0) - 64);
    } else if (letterArray[i] >= "a" && letterArray[i] <= "z") {
      numberArray.push(letterArray[i].charCodeAt(0) - 96);
    }
  }
  return numberArray.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

console.log(" - - - N E W  F U N C T I O N - - - ");

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[A-Z]/gi)
    .map(c => c.charCodeAt() - 64)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

console.log(" - - - N E W  F U N C T I O N - - - ");

// My version
function encrypt(text, n) {
  if (text === null) {
    return null;
  } else {
    let textArray = text.split("");
    while (n-- >= 1) {
      let firstArr = [],
        secondArr = [];
      for (let i = 0; i < textArray.length; i++) {
        if (i % 2 == 0) {
          firstArr.push(textArray[i]);
        } else {
          secondArr.push(textArray[i]);
        }
      }
      textArray = secondArr.concat(firstArr);
    }
    return textArray.join("");
  }
}

console.log(encrypt("abcdefg", 1));
console.log(encrypt("abcdefg", 2));
console.log(encrypt("abcdefg", 3));

console.log(" - - - N E W  F U N C T I O N - - - ");

// Alex version
function encrypt(text, n) {
  let textArray = text.split("");
  while (n-- >= 1) {
    const [firstArr, secondArr] = textArray.reduce(
      ([firstArr, secondArr], currentValue, i) =>
        i % 2 === 0
          ? [[...firstArr, currentValue], secondArr]
          : [firstArr, [...secondArr, currentValue]],
      [[], []]
    );
    textArray = secondArr.concat(firstArr);
  }
  encryptedText = textArray.join("");
  return encryptedText;
}

console.log(encrypt("abcdefg", 1));
console.log(encrypt("abcdefgh", 1));
console.log(encrypt("abcdefg", 2));
console.log(encrypt("abcdefg", 3));

console.log(" - - - N E W  F U N C T I O N - - - ");

function decrypt(encryptedText, n) {
  if (encryptedText === null) {
    return null;
  } else {
    let encryptedArr = encryptedText.split("");
    while (n-- >= 1) {
      let secondArr = encryptedArr.splice(
        0,
        Math.floor(encryptedArr.length / 2)
      );
      let firstArr = encryptedArr.splice(0, encryptedArr.length);
      for (let i = 0; i < firstArr.length + secondArr.length; i++) {
        if (i % 2 === 0) {
          encryptedArr.push(firstArr[i / 2]);
        } else {
          encryptedArr.push(secondArr[(i - 1) / 2]);
        }
      }
    }
    return encryptedArr.join("");
  }
}

// console.log(decrypt("bdfaceg", 1));
// console.log(decrypt("bdfhaceg", 1));
// console.log(decrypt("", 1));
// console.log(decrypt("daebfcg", 2));
console.log(decrypt("abcdefg", 3));
