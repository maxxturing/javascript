// template strings
const title = "Best Reads of 2019";
const author = "Mario";
const likes = 30;

// concentration way
// let result =
//   "The blog called " + title + " by " + author + " has " + likes + " likes";
// console.log(result);

// template string way or template literal way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
