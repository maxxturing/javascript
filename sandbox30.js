const title = document.querySelector("h1");

// title.setAttribute("style", "margin: 50px;"); //overrides current style

console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px"; // adds margin
title.style.color = "crimson"; // adjusts colour
title.style.fontSize = "60px"; // adjusts font size
title.style.margin = ""; // removes margin
