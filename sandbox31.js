// const content = document.querySelector("p");

// console.log(content.classList);

// content.classList.add("error"); // add class
// content.classList.remove("error"); // remove class

const paras = document.querySelectorAll("p");

paras.forEach(para => {
  if (para.innerText.includes("success")) {
    para.classList.add("success");
  } else if (para.innerText.includes("error")) {
    para.classList.add("error");
  }
});

const title = document.querySelector(".title");
title.classList.toggle("test"); // adds it
title.classList.toggle("test"); // toggles, so now it's gone again
