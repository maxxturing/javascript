// const para = document.querySelector("div.error"); // grabs first p tag and ignores the rest

// console.log(para);

// const paras = document.querySelectorAll("p"); // grabs first p tag and ignores the rest

// paras.forEach(para => {
//   console.log(para);
// });

// console.log(paras[2]);

// const title = document.getElementById("page-title");
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName("error");
// console.log(errors); // cannot use forEach on an HTML collection

// get elements by their tag name
// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);

const para = document.querySelector("p");

console.log(para.innerText); //innerText is a property not a method

para.innerText = "ninjas are awesome!";

const paras = document.querySelectorAll("p");

paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += " new text";
});

const content = document.querySelector(".content");

console.log(content.innerHTML);

content.innerHTML += "<h2>This is a new h2</h2>";

const people = ["mario", "luigi", "yoshi"];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});
