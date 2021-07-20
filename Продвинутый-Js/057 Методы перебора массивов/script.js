const names = ["Kstnia", "Martin", "Carl", "Johnatan-Maria-theElder"];

const shorNames = names.map((name, index) => {
    return name.length > 5;
});

console.log(shorNames);

const formalNames = names.map(item => {
    return item.toUpperCase();
});

console.log(names);

const someMassive = [4, 2, 3, 1, "Rock-n-Rick"];

console.log(someMassive.every(item => typeof(item) == "string"));

let arr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 3, 5];

let result = arr.reduce((sum, current) =>
    sum + current, 3
);

console.log(result);

// let arr = ["apple", "peam", "strawberry"];

// let result = arr.reduce((sum, current) => {
//     return `${sum} , ${current}`;
// });

// console.log(result);

let obj = {
    ivan: "persone",
    vita: "persone",
    cat: "notPersone",
    dog: "notPersone"
};

let newArr = Object.entries(obj).
filter(item => item[1] === "persone").
map(item => item[0]);

console.log(newArr);

//возможно фильтр может работать только с изначальным массивом,а мап и с исходным