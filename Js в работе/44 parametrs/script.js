// offsetWidth

"use strict"

let data = document.querySelector("[data-text]"),
    btn = document.querySelector("button");

let dataW = data.scrollWidth,
    dataH = data.scrollHeight;

console.log(dataH);
console.log(dataW);

btn.addEventListener("click", () => {
    // data.style.height = data.scrollHeight + "px";
    console.log(data.scrollTop);
})

let style = window.getComputedStyle(data);

console.log(style);