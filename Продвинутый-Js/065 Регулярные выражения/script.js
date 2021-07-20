// let ans = prompt("What is your name?");

// let req = /\d/ig;

// console.log(ans.match(req));

// console.log(ans.search(reg));

// console.log(ans.match(reg));

// console.log(ans.replace(/./g, "*"));

// console.log(ans.replace(/\./g, "*"));

// console.log("12-21-23".replace(/-/g, "*"));

//\d - diggits(цифры)
//\w - words(слова,буквы)
//\s - spaces

//Если нужно искать НЕ что-либо тогда пишеться большая буква,прим ниже
//\D - искать НЕ числа, //\W - искать НЕ буквы

// i - независимо от регистра
//g - искать несколько сразу
//m - multiplay искать в нескольких строках\

// let str = "My name is R2d2";

// console.log(str.replace(/\D/ig, "*"));
let name = 1;
let match1 = (/\d/g);

console.log(match1.test(name));