let box = document.querySelector(".box"),
    btn = document.querySelector(".btn");

let wid = box.clientWidth,
    height = box.clientHeight,
    scrolH = box.scrollHeight;



btn.addEventListener("click", function() {
    console.log(box.scrollTop);
});

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);
console.log(box.getBoundingClientRect().left);